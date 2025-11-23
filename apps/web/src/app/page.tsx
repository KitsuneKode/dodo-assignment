'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { trpc } from '@/utils/trpc'

const TITLE_TEXT = `
 ██████╗ ███████╗████████╗████████╗███████╗██████╗
 ██╔══██╗██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
 ██████╔╝█████╗     ██║      ██║   █████╗  ██████╔╝
 ██╔══██╗██╔══╝     ██║      ██║   ██╔══╝  ██╔══██╗
 ██████╔╝███████╗   ██║      ██║   ███████╗██║  ██║
 ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝

 ████████╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗
 ╚══██╔══╝    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
    ██║       ███████╗   ██║   ███████║██║     █████╔╝
    ██║       ╚════██║   ██║   ██╔══██║██║     ██╔═██╗
    ██║       ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
    ╚═╝       ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 `

export default function Home() {
	const healthCheck = useQuery(trpc.healthCheck.queryOptions())

	const {
		mutate: messageMuation,
		data,
		isPending,
		isError,
		error,
	} = useMutation(trpc.message.mutationOptions())

	return (
		<div className="container mx-auto max-w-3xl px-4 py-2">
			<pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
			<div className="grid gap-6">
				<section className="rounded-lg border p-4">
					<h2 className="mb-2 font-medium">API Status</h2>
					<div className="flex items-center gap-2">
						<div
							className={`h-2 w-2 rounded-full ${healthCheck.data ? 'bg-green-500' : 'bg-red-500'}`}
						/>
						<span className="text-muted-foreground text-sm">
							{healthCheck.isLoading
								? 'Checking...'
								: healthCheck.data
									? 'Connected'
									: 'Disconnected'}
						</span>
						<Button
							variant="secondary"
							onClick={() => {
								if (isPending) return
								messageMuation({ measage: 'Hello from the client!' })
							}}
						>
							Click Me
						</Button>
						<div
							className={`h-2 w-2 rounded-full ${
								isPending
									? 'animate-pulse bg-gray-400'
									: isError
										? 'bg-red-500'
										: data
											? 'bg-green-500'
											: 'bg-gray-400'
							}`}
						/>

						{data && (
							<span className="text-muted-foreground text-sm">
								Response from server: {JSON.stringify(data)}
							</span>
						)}
						{isError && <span>{error.message}</span>}
					</div>
				</section>
			</div>
		</div>
	)
}
