'use client'

import { IconArrowsLeftRight, IconChevronDown, IconRefresh } from '@tabler/icons-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { WidgetHeader } from './widget-header'

function UnitedStatesFlag({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect width="16" height="16" fill="#B22234" />
				<rect x="0" y="0" width="6.4" height="8" fill="#3C3B6E" />
				<rect x="0" y="1.6" width="16" height="1.6" fill="white" />
				<rect x="0" y="4.8" width="16" height="1.6" fill="white" />
				<rect x="0" y="8" width="16" height="1.6" fill="white" />
				<rect x="0" y="11.2" width="16" height="1.6" fill="white" />
			</svg>
		</div>
	)
}

function EuropeanUnionFlag({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect width="16" height="16" fill="#003399" />
				<circle cx="8" cy="8" r="2.5" fill="#FFCC00" />
				<path
					d="M8 3L8.8 5.5L11.5 5.5L9.35 7.25L10.15 10L8 8.5L5.85 10L6.65 7.25L4.5 5.5L7.2 5.5L8 3Z"
					fill="#FFCC00"
				/>
			</svg>
		</div>
	)
}

export function ExchangeWidget() {
	const [fromCurrency, setFromCurrency] = useState({ code: 'USD', flag: 'us' })
	const [toCurrency, setToCurrency] = useState({ code: 'EUR', flag: 'eu' })
	const [amount, setAmount] = useState(100)
	const exchangeRate = 0.94

	const handleSwapCurrencies = () => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
		toast.success('Currencies swapped!')
	}

	const handleExchange = () => {
		const total = (amount * exchangeRate * 0.97).toFixed(2) // After 3% total fees
		toast.success('Exchange successful!', {
			description: `${fromCurrency.code} ${amount} → ${toCurrency.code} ${total}`,
		})
	}

	const calculateTax = () => (amount * 0.02).toFixed(2)
	const calculateFee = () => (amount * 0.01).toFixed(2)
	const calculateTotal = () => (amount * exchangeRate * 0.97).toFixed(2)

	return (
		<Card className="border-border p-4">
			<div className="flex flex-col gap-4">
				<WidgetHeader
					icon={<IconRefresh className="size-6" />}
					title="Exchange"
					action={{
						label: 'Currencies',
						onClick: () => toast.info('Currency selection coming soon'),
					}}
				/>

				<div className="rounded-xl border border-border bg-card">
					<div className="flex items-center gap-4 border-border border-b p-2">
						<div className="flex flex-1 items-center justify-center gap-2">
							{fromCurrency.flag === 'us' ? (
								<UnitedStatesFlag className="size-4 shrink-0" />
							) : (
								<EuropeanUnionFlag className="size-4 shrink-0" />
							)}
							<span className="font-medium text-foreground text-sm">{fromCurrency.code}</span>
							<button
								onClick={() => toast.info('Select currency')}
								className="ml-auto rounded-full border border-border p-0.5 transition-colors hover:bg-accent"
							>
								<IconChevronDown className="size-[18px] text-foreground" />
							</button>
						</div>

						<div className="h-6 w-px bg-border" />

						<button
							onClick={handleSwapCurrencies}
							className="flex items-center justify-center rounded-md p-0.5 transition-colors hover:bg-accent"
						>
							<IconArrowsLeftRight className="size-5 text-foreground" />
						</button>

						<div className="h-6 w-px bg-border" />

						<div className="flex flex-1 items-center justify-center gap-2">
							{toCurrency.flag === 'us' ? (
								<UnitedStatesFlag className="size-4 shrink-0" />
							) : (
								<EuropeanUnionFlag className="size-4 shrink-0" />
							)}
							<span className="font-medium text-foreground text-sm">{toCurrency.code}</span>
							<button
								onClick={() => toast.info('Select currency')}
								className="ml-auto rounded-full border border-border p-0.5 transition-colors hover:bg-accent"
							>
								<IconChevronDown className="size-[18px] text-foreground" />
							</button>
						</div>
					</div>

					<div className="flex flex-col items-center gap-1 p-4 text-center">
						<p className="font-['Inter'] font-medium text-[32px] text-foreground leading-10 tracking-[-0.16px]">
							$100.00
						</p>
						<p className="text-muted-foreground text-sm">
							Available : <span className="font-medium text-foreground">$16,058.94</span>
						</p>
					</div>

					<div className="border-border border-t bg-[var(--bg-weak-50,#f5f7fa)] px-4 py-1.5 text-center">
						<p className="text-muted-foreground text-xs">
							1 {fromCurrency.code} ={' '}
							<span className="font-medium text-foreground">0.94 {toCurrency.code}</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2.5 text-xs">
					<div className="flex items-start justify-between gap-4">
						<span className="text-muted-foreground">Tax (2%)</span>
						<span className="text-center font-medium text-foreground">$2.00</span>
					</div>
					<div className="flex items-start justify-between gap-4">
						<span className="text-muted-foreground">Exchange fee (1%)</span>
						<span className="text-center font-medium text-foreground">$1.00</span>
					</div>
					<div className="flex items-start justify-between gap-4">
						<span className="text-muted-foreground">Total amount</span>
						<span className="text-center font-medium text-foreground">€90.7</span>
					</div>
				</div>

				<Button
					onClick={handleExchange}
					className="w-full gap-1 rounded-lg border border-border bg-card px-2 py-2 font-medium text-muted-foreground text-sm transition-colors hover:bg-accent hover:text-foreground"
					variant="outline"
				>
					<IconRefresh className="size-5" />
					<span>Exchange</span>
				</Button>
			</div>
		</Card>
	)
}
