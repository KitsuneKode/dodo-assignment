'use client'

import { IconArrowDownLeft } from '@tabler/icons-react'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'

export function TotalExpensesWidget() {
	const handleClick = () => {
		toast.info('Expense Breakdown', {
			description: 'Shopping: $2,800 | Utilities: $1,600 | Others: $1,840.28',
		})
	}

	return (
		<Card className="relative border-border p-5">
			<div className="flex flex-col gap-[34px]">
				<div className="flex size-10 items-center justify-center rounded-full border border-border bg-card">
					<IconArrowDownLeft className="size-5 text-foreground" />
				</div>

				<div className="flex flex-col gap-1">
					<p className="text-muted-foreground text-sm tracking-[-0.084px]">Total Expenses</p>
					<div className="flex items-center gap-2">
						<p className="font-['Inter'] font-medium text-[32px] text-foreground leading-10 tracking-[-0.16px]">
							$6,240.28
						</p>
						<div className="rounded-full bg-[var(--state-error-light,#ffc0c5)] px-2 py-0.5">
							<span className="font-medium text-[var(--state-error-dark,#681219)] text-xs">
								-2%
							</span>
						</div>
					</div>
				</div>

				<div className="absolute top-8 right-6 h-10 w-[120px]">
					<svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="size-full">
						<path
							d="M 0 30 Q 15 25 30 28 T 60 20 T 90 25 T 120 18"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-[var(--blue-500)]"
						/>
					</svg>
				</div>
			</div>
		</Card>
	)
}
