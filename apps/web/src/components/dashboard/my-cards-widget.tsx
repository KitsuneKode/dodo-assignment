'use client'

import {
	IconChevronLeft,
	IconChevronRight,
	IconCreditCard,
	IconPlus,
	IconWifi,
} from '@tabler/icons-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { WidgetHeader } from './widget-header'

const cards = [
	{ type: 'Savings Card', balance: 16058.94, color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
	{
		type: 'Business Card',
		balance: 24150.32,
		color: 'bg-gradient-to-br from-purple-500 to-purple-600',
	},
	{
		type: 'Personal Card',
		balance: 8742.18,
		color: 'bg-gradient-to-br from-green-500 to-green-600',
	},
]

const periods = ['Daily', 'Weekly', 'Monthly'] as const

export function MyCardsWidget() {
	const [currentCardIndex, setCurrentCardIndex] = useState(0)
	const [selectedPeriod, setSelectedPeriod] = useState<(typeof periods)[number]>('Weekly')
	const [isFlipped, setIsFlipped] = useState(false)

	const currentCard = cards[currentCardIndex]

	const handlePrevCard = () => {
		setCurrentCardIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
		toast.success(
			`Switched to ${cards[currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1].type}`,
		)
	}

	const handleNextCard = () => {
		setCurrentCardIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
		toast.success(
			`Switched to ${cards[currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1].type}`,
		)
	}

	const handleAddCard = () => {
		toast.info('Add Card feature coming soon!')
	}

	return (
		<Card className="border-border p-4">
			<div className="flex flex-col gap-4">
				<WidgetHeader
					icon={<IconCreditCard className="size-6" />}
					title="My Cards"
					action={{
						label: (
							<div className="flex items-center gap-0.5">
								<IconPlus className="size-5" />
								<span>Add Card</span>
							</div>
						) as any,
						onClick: handleAddCard,
					}}
				/>

				<div className="relative h-[188px] overflow-hidden rounded-2xl border border-border bg-card">
					<div className="-right-56 -top-36 absolute size-[316px] rounded-full border border-border" />
					<div className="-right-[260px] -top-20 absolute size-[316px] rounded-full border border-border" />

					<div className="relative z-10 flex h-full flex-col p-5">
						<div className="flex items-center gap-2">
							<div className="flex size-8 items-center justify-center rounded-full bg-[var(--blue-500)]">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
									<path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
									<path
										d="M2 17L12 22L22 17"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path
										d="M2 12L12 17L22 12"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
							</div>
							<div className="rotate-90">
								<IconWifi className="size-6 text-muted-foreground" />
							</div>
							<Badge
								variant="outline"
								className="border-border bg-card font-medium text-muted-foreground text-xs"
							>
								Active
							</Badge>
							<div className="ml-auto flex size-8 items-center justify-center">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
									<circle cx="12" cy="16" r="8" fill="#EB001B" />
									<circle cx="20" cy="16" r="8" fill="#F79E1B" />
								</svg>
							</div>
						</div>

						<div className="mt-auto">
							<p className="text-muted-foreground text-sm leading-5 tracking-[-0.084px]">
								{currentCard.type}
							</p>
							<p className="mt-1 font-['Inter'] font-medium text-[32px] text-foreground leading-10 tracking-[-0.16px]">
								$
								{currentCard.balance.toLocaleString('en-US', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</p>
						</div>

						<div className="absolute right-4 bottom-4 flex gap-0 overflow-hidden rounded-md border border-border bg-card/80 backdrop-blur-sm">
							<Button
								variant="ghost"
								size="icon"
								onClick={handlePrevCard}
								className="size-6 rounded-none border-border border-r transition-colors hover:bg-primary/10"
							>
								<IconChevronLeft className="size-4" />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								onClick={handleNextCard}
								className="size-6 rounded-none transition-colors hover:bg-primary/10"
							>
								<IconChevronRight className="size-4" />
							</Button>
						</div>

						<div className="absolute bottom-4 left-4 flex gap-1">
							{cards.map((_, index) => (
								<div
									key={index}
									className={`h-1 rounded-full transition-all duration-300 ${
										index === currentCardIndex ? 'w-4 bg-primary' : 'w-1 bg-muted-foreground/30'
									}`}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="flex gap-0 overflow-hidden rounded-md border border-border">
						{periods.map((period, index) => (
							<button
								key={period}
								onClick={() => {
									setSelectedPeriod(period)
									toast.success(`Viewing ${period.toLowerCase()} spending limit`)
								}}
								className={`flex-1 px-3 py-1 font-medium text-xs transition-all duration-200 ${
									index < periods.length - 1 ? 'border-border border-r' : ''
								} ${
									selectedPeriod === period
										? 'bg-primary text-primary-foreground shadow-sm'
										: 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground'
								}`}
							>
								{period}
							</button>
						))}
					</div>

					<div className="flex items-center gap-4">
						<div className="relative flex size-12 items-center justify-center">
							<svg className="-rotate-90 size-12" viewBox="0 0 48 48">
								<circle
									cx="24"
									cy="24"
									r="20"
									fill="none"
									stroke="var(--stroke-soft-200)"
									strokeWidth="4"
								/>
								<circle
									cx="24"
									cy="24"
									r="20"
									fill="none"
									stroke="var(--blue-500)"
									strokeWidth="4"
									strokeDasharray="125.6"
									strokeDashoffset="31.4"
									strokeLinecap="round"
								/>
							</svg>
							<span className="absolute font-medium text-foreground text-xs">75%</span>
						</div>

						<div className="flex flex-1 flex-col gap-1">
							<p className="text-muted-foreground text-sm leading-5 tracking-[-0.084px]">
								Spending Limit
							</p>
							<div className="flex items-center gap-1.5">
								<span className="font-medium text-foreground text-lg leading-6 tracking-[-0.27px]">
									$1,500.00
								</span>
								<span className="text-muted-foreground text-xs leading-4">/ week</span>
							</div>
						</div>

						<Button
							variant="ghost"
							size="icon"
							onClick={() => toast.info('View spending details')}
							className="size-6 shrink-0 rounded-md border border-border transition-colors hover:bg-primary/10"
						>
							<IconChevronRight className="size-5" />
						</Button>
					</div>
				</div>
			</div>
		</Card>
	)
}
