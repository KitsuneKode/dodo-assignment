'use client'

import {
	IconChartPie,
	IconChevronDown,
	IconCurrencyDollar,
	IconFileText,
	IconInfoCircle,
	IconShoppingBag,
} from '@tabler/icons-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type TimePeriod = 'Last Week' | 'This Month' | 'This Year'

const periodData = {
	'Last Week': {
		total: 1800,
		shopping: 900,
		utilities: 600,
		others: 200,
		limit: 2000,
	},
	'This Month': {
		total: 5400,
		shopping: 2700,
		utilities: 1800,
		others: 600,
		limit: 8000,
	},
	'This Year': {
		total: 64800,
		shopping: 32400,
		utilities: 21600,
		others: 7200,
		limit: 96000,
	},
}

export function SpendingSummaryWidget() {
	const [period, setPeriod] = useState<TimePeriod>('Last Week')
	const data = periodData[period]

	const handlePeriodChange = (newPeriod: TimePeriod) => {
		setPeriod(newPeriod)
		toast.success(`Viewing ${newPeriod} spending`)
	}

	const handleCategoryClick = (category: string, amount: number) => {
		toast.info(`${category} Spending`, {
			description: `You've spent $${amount.toFixed(2)} on ${category.toLowerCase()} this period`,
		})
	}

	const getArcPath = (startAngle: number, endAngle: number) => {
		const radius = 100
		const centerX = 124
		const centerY = 124

		const startRad = (startAngle * Math.PI) / 180
		const endRad = (endAngle * Math.PI) / 180

		const x1 = centerX + radius * Math.cos(startRad)
		const y1 = centerY + radius * Math.sin(startRad)
		const x2 = centerX + radius * Math.cos(endRad)
		const y2 = centerY + radius * Math.sin(endRad)

		const largeArc = endAngle - startAngle > 180 ? 1 : 0

		return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`
	}

	return (
		<Card className="border-border p-4">
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<IconChartPie className="size-6" />
					<h2 className="flex-1 font-medium text-base text-foreground tracking-[-0.176px]">
						Spending Summary
					</h2>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="gap-0.5 rounded-lg border-border px-2.5 py-1.5"
							>
								<span className="text-foreground text-sm leading-5 tracking-[-0.084px]">
									{period}
								</span>
								<IconChevronDown className="size-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => handlePeriodChange('Last Week')}>
								Last Week
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => handlePeriodChange('This Month')}>
								This Month
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => handlePeriodChange('This Year')}>
								This Year
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="h-px bg-border" />

				<div className="relative flex h-[124px] items-center justify-center">
					<svg className="size-[220px] absolute translate-y-10" viewBox="0 0 248 248">
						<path
							d="M 24 124 A 100 100 0 0 1 224 124"
							fill="none"
							stroke="var(--stroke-soft-200)"
							strokeWidth="16"
							strokeLinecap="round"
						/>
						<path
							d={getArcPath(180, 180 + (data.shopping / data.limit) * 180)}
							fill="none"
							stroke="var(--blue-500)"
							strokeWidth="16"
							strokeLinecap="round"
							style={{ transition: 'd 0.3s ease-out' }}
						/>
						<path
							d={getArcPath(
								180 + (data.shopping / data.limit) * 180,
								180 + ((data.shopping + data.utilities) / data.limit) * 180,
							)}
							fill="none"
							stroke="var(--cyan-500)"
							strokeWidth="16"
							strokeLinecap="round"
							style={{ transition: 'd 0.3s ease-out' }}
						/>
					</svg>
					<div className="-translate-x-1/2 absolute  translate-y-6 left-1/2 flex flex-col items-center">
						<p className="font-medium text-muted-foreground text-xs uppercase tracking-[0.48px]">
							SPEND
						</p>
						<p className="mt-0.5 font-['Inter'] font-medium text-2xl text-foreground leading-8">
							${data.total.toLocaleString()}.00
						</p>
					</div>
				</div>

				<div className="h-px bg-border" />

				<div className="flex gap-2">
					<button
						onClick={() => handleCategoryClick('Shopping', data.shopping)}
						className="flex flex-1 flex-col items-center gap-2 rounded-lg transition-colors hover:bg-accent"
					>
						<div className="flex size-8 items-center justify-center rounded-full bg-[#ebf1ff]">
							<IconShoppingBag className="size-5 text-foreground" />
						</div>
						<div className="flex flex-col items-center gap-0.5 text-center">
							<p className="text-muted-foreground text-xs leading-4">Shopping</p>
							<p className="font-medium text-foreground text-sm leading-5 tracking-[-0.084px]">
								${data.shopping.toLocaleString()}.00
							</p>
						</div>
					</button>

					<div className="w-px self-stretch bg-border" />

					<button
						onClick={() => handleCategoryClick('Utilities', data.utilities)}
						className="flex flex-1 flex-col items-center gap-2 rounded-lg  transition-colors hover:bg-accent"
					>
						<div className="flex size-8 items-center justify-center rounded-full bg-[#ebf8ff]">
							<IconFileText className="size-5 text-foreground" />
						</div>
						<div className="flex flex-col items-center gap-0.5 text-center">
							<p className="text-muted-foreground text-xs leading-4">Utilities</p>
							<p className="font-medium text-foreground text-sm leading-5 tracking-[-0.084px]">
								${data.utilities.toLocaleString()}.00
							</p>
						</div>
					</button>

					<div className="w-px self-stretch bg-border" />

					<button
						onClick={() => handleCategoryClick('Others', data.others)}
						className="flex flex-1 flex-col items-center gap-2 rounded-lg  transition-colors hover:bg-accent"
					>
						<div className="flex size-8 items-center justify-center rounded-full bg-[#f2f5f8]">
							<IconCurrencyDollar className="size-5 text-foreground" />
						</div>
						<div className="flex flex-col items-center gap-0.5 text-center">
							<p className="text-muted-foreground text-xs leading-4">Others</p>
							<p className="font-medium text-foreground text-sm leading-5 tracking-[-0.084px]">
								${data.others.toLocaleString()}.00
							</p>
						</div>
					</button>
				</div>

				<div className="flex items-center gap-1 rounded-md border border-border bg-card px-2.5 py-1.5">
					<p className="flex-1 text-muted-foreground text-xs leading-4">
						Your {period.toLowerCase()} spending limit is{' '}
						<span className="font-medium">${data.limit.toLocaleString()}.</span>
					</p>
					<IconInfoCircle className="size-4 text-muted-foreground" />
				</div>
			</div>
		</Card>
	)
}
