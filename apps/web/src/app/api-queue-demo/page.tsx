'use client'

import { IconPlayerPlay, IconRefresh, IconTrash } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { apiQueue, type QueuedRequest, type QueueStats } from '@/lib/api-queue'
import { trpc } from '@/utils/trpc'

export default function ApiQueueDemoPage() {
	const [stats, setStats] = useState<QueueStats>({
		totalRequests: 0,
		pending: 0,
		processing: 0,
		completed: 0,
		failed: 0,
	})
	const [queue, setQueue] = useState<readonly QueuedRequest[]>([])
	const [autoMode, setAutoMode] = useState(false)
	const [autoModeInterval, setAutoModeInterval] = useState<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const updateQueue = () => {
			setStats(apiQueue.getStats())
			setQueue(apiQueue.getQueue())
		}

		const unsubscribe = apiQueue.subscribe(updateQueue)
		updateQueue() // Initial update

		return () => {
			unsubscribe()
			if (autoModeInterval) {
				clearInterval(autoModeInterval)
			}
		}
	}, [autoModeInterval])

	const { mutate: callApi } = useMutation(
		trpc.message.mutationOptions({
			onSuccess: (data) => {
				console.log('API call successful:', data)
			},
			onError: (error) => {
				console.error('API call failed:', error)
			},
		}),
	)

	const addRequest = () => {
		apiQueue.enqueue(async () => {
			return new Promise((resolve, reject) => {
				callApi(
					{ measage: `Request at ${new Date().toLocaleTimeString()}` },
					{
						onSuccess: (data) => resolve(data),
						onError: (error) => reject(error),
					},
				)
			})
		})
	}

	const addMultipleRequests = (count: number) => {
		for (let i = 0; i < count; i++) {
			addRequest()
		}
	}

	const toggleAutoMode = () => {
		if (autoMode) {
			if (autoModeInterval) {
				clearInterval(autoModeInterval)
				setAutoModeInterval(null)
			}
			setAutoMode(false)
		} else {
			const interval = setInterval(() => {
				addRequest()
			}, 70)
			setAutoModeInterval(interval)
			setAutoMode(true)
		}
	}

	const clearCompleted = () => {
		apiQueue.clearCompleted()
	}

	const getStatusColor = (status: QueuedRequest['status']) => {
		switch (status) {
			case 'pending':
				return 'bg-gray-100 text-gray-700'
			case 'processing':
				return 'bg-blue-100 text-blue-700'
			case 'completed':
				return 'bg-green-100 text-green-700'
			case 'failed':
				return 'bg-red-100 text-red-700'
		}
	}

	return (
		<div className="min-h-screen bg-[var(--bg-weak-50)] p-8">
			<div className="mx-auto max-w-6xl space-y-6">
				<div>
					<h1 className="font-bold text-3xl text-[var(--text-strong-950)]">
						API Queue System Demo
					</h1>
					<p className="mt-2 text-[var(--text-sub-600)]">
						This demo shows how the queue system handles rate-limited API requests (100
						requests/minute)
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-5">
					<Card className="p-4">
						<p className="text-[var(--text-sub-600)] text-sm">Total</p>
						<p className="mt-1 font-bold text-2xl text-[var(--text-strong-950)]">
							{stats.totalRequests}
						</p>
					</Card>
					<Card className="p-4">
						<p className="text-[var(--text-sub-600)] text-sm">Pending</p>
						<p className="mt-1 font-bold text-2xl text-gray-700">{stats.pending}</p>
					</Card>
					<Card className="p-4">
						<p className="text-[var(--text-sub-600)] text-sm">Processing</p>
						<p className="mt-1 font-bold text-2xl text-blue-600">{stats.processing}</p>
					</Card>
					<Card className="p-4">
						<p className="text-[var(--text-sub-600)] text-sm">Completed</p>
						<p className="mt-1 font-bold text-2xl text-green-600">{stats.completed}</p>
					</Card>
					<Card className="p-4">
						<p className="text-[var(--text-sub-600)] text-sm">Failed</p>
						<p className="mt-1 font-bold text-2xl text-red-600">{stats.failed}</p>
					</Card>
				</div>

				<Card className="p-6">
					<h2 className="mb-4 font-semibold text-[var(--text-strong-950)] text-lg">Controls</h2>
					<div className="flex flex-wrap gap-3">
						<Button onClick={addRequest} className="gap-2">
							<IconPlayerPlay className="size-4" />
							Add 1 Request
						</Button>
						<Button onClick={() => addMultipleRequests(5)} variant="secondary">
							Add 5 Requests
						</Button>
						<Button onClick={() => addMultipleRequests(20)} variant="secondary">
							Add 20 Requests
						</Button>
						<Button
							onClick={toggleAutoMode}
							variant={autoMode ? 'destructive' : 'outline'}
							className="gap-2"
						>
							<IconRefresh className={`size-4 ${autoMode ? 'animate-spin' : ''}`} />
							{autoMode ? 'Stop Auto Mode' : 'Start Auto Mode'}
						</Button>
						<Button onClick={clearCompleted} variant="outline" className="ml-auto gap-2">
							<IconTrash className="size-4" />
							Clear Completed
						</Button>
					</div>
					{autoMode && (
						<p className="mt-3 text-[var(--text-sub-600)] text-sm">
							Auto mode: Adding a new request every 500ms
						</p>
					)}
				</Card>

				<Card className="p-6">
					<h2 className="mb-4 font-semibold text-[var(--text-strong-950)] text-lg">
						Queue ({queue.length})
					</h2>
					{queue.length === 0 ? (
						<p className="py-8 text-center text-[var(--text-soft-400)]">
							No requests in queue. Click "Add Request" to get started.
						</p>
					) : (
						<div className="max-h-[500px] space-y-2 overflow-y-auto">
							{queue.map((request) => (
								<div
									key={request.id}
									className="flex items-center gap-3 rounded-lg border border-[var(--stroke-soft-200)] bg-white p-3"
								>
									<Badge className={`${getStatusColor(request.status)} capitalize`}>
										{request.status}
									</Badge>
									<div className="flex-1">
										<p className="font-medium text-[var(--text-strong-950)] text-sm">
											{request.id}
										</p>
										<p className="text-[var(--text-sub-600)] text-xs">
											Created: {new Date(request.createdAt).toLocaleTimeString()}
										</p>
									</div>
									{request.status === 'completed' && request.result && (
										<div className="text-green-600 text-xs">
											✓ Success: {JSON.stringify(request.result).substring(0, 50)}
										</div>
									)}
									{request.status === 'failed' && request.error && (
										<div className="text-red-600 text-xs">
											✗ Error: {request.error.message || 'Unknown error'}
										</div>
									)}
								</div>
							))}
						</div>
					)}
				</Card>

				<Card className="bg-blue-50 p-6">
					<h3 className="font-semibold text-[var(--text-strong-950)]">How it works:</h3>
					<ul className="mt-2 space-y-2 text-[var(--text-sub-600)] text-sm">
						<li>• The backend enforces a rate limit (e.g., 10 requests per minute)</li>
						<li>• When you add requests, they're queued and processed at a controlled rate</li>
						<li>• The queue automatically spaces out requests to stay within the rate limit</li>
						<li>• You can see the real-time status of each request in the queue</li>
						<li>• Failed requests (429 errors) will be shown in red</li>
						<li>• Try "Auto Mode" to simulate rapid API calls and see the queue in action</li>
					</ul>
				</Card>
			</div>
		</div>
	)
}
