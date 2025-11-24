'use client'

import { IconBuilding, IconHome, IconReceipt, IconTrendingUp } from '@tabler/icons-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TransactionItem } from './transaction-item'
import { WidgetHeader } from './widget-header'

const transactionsData = {
	incoming: [
		{
			id: 1,
			icon: <IconBuilding className="size-5 text-[var(--text-strong-950)]" />,
			iconBg: '#f0f0f0',
			title: 'Salary Deposit',
			description: 'Monthly salary from Apex...',
			amount: '$3,500.00',
			date: 'Sep 18',
		},
		{
			id: 2,
			icon: <IconTrendingUp className="size-5 text-[var(--text-strong-950)]" />,
			iconBg: '#f0f0f0',
			title: 'Stock Dividend',
			description: 'Payment from stock investm...',
			amount: '$846.14',
			date: 'Sep 18',
		},
		{
			id: 3,
			icon: <IconHome className="size-5 text-green-600" />,
			iconBg: '#d4f4dd',
			title: 'Rental Income',
			description: 'Rental payment from Mr. Du...',
			amount: '$100.00',
			date: 'Sep 17',
		},
		{
			id: 4,
			icon: (
				<div className="flex size-5 items-center justify-center rounded bg-orange-100 font-bold text-orange-600 text-xs">
					a
				</div>
			),
			iconBg: '#fff5e6',
			title: 'Refund from Amazon',
			description: 'Refund of Order No #124235',
			amount: '$36.24',
			date: 'Sep 15',
		},
	],
	outgoing: [
		{
			id: 5,
			icon: <IconBuilding className="size-5 text-red-600" />,
			iconBg: '#ffe5e5',
			title: 'Rent Payment',
			description: 'Monthly rent payment...',
			amount: '-$1,200.00',
			date: 'Sep 16',
		},
	],
	pending: [
		{
			id: 6,
			icon: <IconTrendingUp className="size-5 text-orange-600" />,
			iconBg: '#fff5e6',
			title: 'Pending Transfer',
			description: 'Awaiting confirmation...',
			amount: '$250.00',
			date: 'Sep 19',
		},
	],
}

export function RecentTransactionsWidget() {
	const [activeTab, setActiveTab] = useState<'incoming' | 'outgoing' | 'pending'>('incoming')

	return (
		<Card className="border-border p-4">
			<div className="flex flex-col gap-4">
				<WidgetHeader
					icon={<IconReceipt className="size-6" />}
					title="Recent Transactions"
					action={{
						label: 'See All',
						onClick: () => toast.info('Viewing all transactions'),
					}}
				/>

				<Tabs
					value={activeTab}
					onValueChange={(val) => setActiveTab(val as any)}
					className="w-full"
				>
					<TabsList className="grid h-auto w-full grid-cols-3 gap-0 rounded-lg border border-border bg-background p-0.5">
						<TabsTrigger
							value="incoming"
							className="rounded-lg py-2 font-medium text-muted-foreground/60 text-sm transition-all data-[state=active]:bg-card data-[state=inactive]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-sm"
						>
							Incoming
						</TabsTrigger>
						<TabsTrigger
							value="outgoing"
							className="rounded-lg py-2 font-medium text-muted-foreground/60 text-sm transition-all data-[state=active]:bg-card data-[state=inactive]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-sm"
						>
							Outgoing
						</TabsTrigger>
						<TabsTrigger
							value="pending"
							className="rounded-lg py-2 font-medium text-muted-foreground/60 text-sm transition-all data-[state=active]:bg-card data-[state=inactive]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-sm"
						>
							Pending
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<div className="flex flex-col gap-1">
					{transactionsData[activeTab].map((transaction) => (
						<TransactionItem key={transaction.id} {...transaction} />
					))}
				</div>
			</div>
		</Card>
	)
}
