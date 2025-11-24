export type QueuedRequest = {
	id: string
	execute: () => Promise<any>
	resolve: (value: any) => void
	reject: (error: any) => void
	status: 'pending' | 'processing' | 'completed' | 'failed'
	result?: any
	error?: any
	createdAt: number
}

export type QueueStats = {
	totalRequests: number
	pending: number
	processing: number
	completed: number
	failed: number
}

class ApiQueueManager {
	private queue: QueuedRequest[] = []
	private processing = false
	private maxRequestsPerMinute: number
	private requestInterval: number
	private subscribers: Set<() => void> = new Set()

	constructor(maxRequestsPerMinute = 10) {
		this.maxRequestsPerMinute = maxRequestsPerMinute
		this.requestInterval = Math.ceil(60000 / maxRequestsPerMinute)
	}

	async enqueue<T>(execute: () => Promise<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			const request: QueuedRequest = {
				id: `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
				execute,
				resolve,
				reject,
				status: 'pending',
				createdAt: Date.now(),
			}

			this.queue.push(request)

			if (!this.processing) {
				this.processQueue()
			}
		})
	}

	private async processQueue() {
		if (this.processing || this.queue.length === 0) return

		this.processing = true

		while (this.queue.length > 0) {
			const request = this.queue.find((r) => r.status === 'pending')
			if (!request) break

			request.status = 'processing'

			try {
				const result = await request.execute()
				request.result = result
				request.status = 'completed'
				request.resolve(result)
			} catch (error) {
				request.error = error
				request.status = 'failed'
				request.reject(error)
			}

			if (this.queue.some((r) => r.status === 'pending')) {
				await new Promise((resolve) => setTimeout(resolve, this.requestInterval))
			}
		}

		this.processing = false
	}

	getStats(): QueueStats {
		const stats = {
			totalRequests: this.queue.length,
			pending: 0,
			processing: 0,
			completed: 0,
			failed: 0,
		}

		this.queue.forEach((req) => {
			switch (req.status) {
				case 'pending':
					stats.pending++
					break
				case 'processing':
					stats.processing++
					break
				case 'completed':
					stats.completed++
					break
				case 'failed':
					stats.failed++
					break
			}
		})

		return stats
	}

	getQueue(): readonly QueuedRequest[] {
		return this.queue
	}

	clearCompleted() {
		const completedCount = this.queue.filter(
			(r) => r.status === 'completed' || r.status === 'failed',
		).length
		this.queue = this.queue.filter((r) => r.status === 'pending' || r.status === 'processing')
		return completedCount
	}

	subscribe(callback: () => void) {
		this.subscribers.add(callback)
		return () => this.subscribers.delete(callback)
	}

	setRateLimit(requestsPerMinute: number) {
		this.maxRequestsPerMinute = requestsPerMinute
		this.requestInterval = Math.ceil(60000 / requestsPerMinute)
	}
}

export const apiQueue = new ApiQueueManager(10)
