'use client'

import { useState } from 'react'
import { CreditScoreWidget } from '@/components/dashboard/credit-score-widget'
import { ExchangeWidget } from '@/components/dashboard/exchange-widget'
import { DashboardHeader } from '@/components/dashboard/header'
import { MyCardsWidget } from '@/components/dashboard/my-cards-widget'
import { RecentTransactionsWidget } from '@/components/dashboard/recent-transactions-widget'
import { Sidebar } from '@/components/dashboard/sidebar'
import { SpendingSummaryWidget } from '@/components/dashboard/spending-summary-widget'
import { SubscriptionsWidget } from '@/components/dashboard/subscriptions-widget'
import { TotalExpensesWidget } from '@/components/dashboard/total-expenses-widget'

export default function Home() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

			<div className="flex min-w-0 flex-1 flex-col">
				<DashboardHeader onMenuClick={toggleMobileMenu} />

				<main className="flex-1 overflow-y-auto bg-[var(--bg-page)] p-5">
					<div className="grid gap-5 lg:grid-cols-3">
						<div className="flex flex-col gap-5">
							<MyCardsWidget />
							<RecentTransactionsWidget />
						</div>

						<div className="flex flex-col gap-5">
							<SpendingSummaryWidget />
							<SubscriptionsWidget />
						</div>

						<div className="flex flex-col gap-5">
							<TotalExpensesWidget />
							<ExchangeWidget />
							<CreditScoreWidget />
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
