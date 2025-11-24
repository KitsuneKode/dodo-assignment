'use client'

import { IconArrowsLeftRight, IconChevronDown, IconRefresh } from '@tabler/icons-react'
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
import { WidgetHeader } from './widget-header'

type CurrencyOption = {
	code: string
	name: string
	symbol: string
	rateToUSD: number
}

const currencyOptions = [
	{
		code: 'USD',
		name: 'US Dollar',
		symbol: '$',
		rateToUSD: 1,
	},
	{
		code: 'EUR',
		name: 'Euro',
		symbol: '€',
		rateToUSD: 1.07,
	},
	{
		code: 'GBP',
		name: 'British Pound',
		symbol: '£',
		rateToUSD: 1.24,
	},
	{
		code: 'JPY',
		name: 'Japanese Yen',
		symbol: '¥',
		rateToUSD: 0.0065,
	},
	{
		code: 'CAD',
		name: 'Canadian Dollar',
		symbol: 'CA$',
		rateToUSD: 0.74,
	},
] as const satisfies ReadonlyArray<CurrencyOption>

type CurrencyCode = (typeof currencyOptions)[number]['code']
type CurrencyDictionary = Record<CurrencyCode, (typeof currencyOptions)[number]>

const currencyDictionary = currencyOptions.reduce<CurrencyDictionary>((acc, currency) => {
	acc[currency.code] = currency
	return acc
}, {} as CurrencyDictionary)

const availableBalances: Record<CurrencyCode, number> = {
	USD: 16058.94,
	EUR: 14220.12,
	GBP: 12670.44,
	JPY: 1720500,
	CAD: 19220.3,
}

const taxRate = 0.02
const feeRate = 0.01

function formatCurrency(value: number, currencyCode: string) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currencyCode,
		maximumFractionDigits: 2,
	}).format(value)
}

function formatRate(value: number) {
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: value < 1 ? 4 : 2,
		maximumFractionDigits: value < 1 ? 6 : 3,
	}).format(value)
}

function convertAmount(value: number, from: CurrencyOption, to: CurrencyOption) {
	if (!from || !to || value <= 0) return 0
	const valueInUsd = value * from.rateToUSD
	return valueInUsd / to.rateToUSD
}

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

function UnitedKingdomFlag({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect width="16" height="16" fill="#00247D" />
				<path d="M0 6.4H16V9.6H0V6.4Z" fill="white" />
				<path d="M6.4 0H9.6V16H6.4V0Z" fill="white" />
				<path d="M0 7.2H16V8.8H0V7.2Z" fill="#CF142B" />
				<path d="M7.2 0H8.8V16H7.2V0Z" fill="#CF142B" />
				<path d="M0 0L16 16" stroke="white" strokeWidth="2" />
				<path d="M16 0L0 16" stroke="white" strokeWidth="2" />
			</svg>
		</div>
	)
}

function JapanFlag({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect width="16" height="16" fill="white" />
				<circle cx="8" cy="8" r="4" fill="#BC002D" />
			</svg>
		</div>
	)
}

function CanadaFlag({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<rect x="0" width="4" height="16" fill="#D80621" />
				<rect x="12" width="4" height="16" fill="#D80621" />
				<rect x="4" width="8" height="16" fill="white" />
				<path
					d="M8 4L7.3 6.2H5.5L7 7.5L6.5 9.8L8 8.6L9.5 9.8L9 7.5L10.5 6.2H8.7L8 4Z"
					fill="#D80621"
				/>
			</svg>
		</div>
	)
}

const flagComponents: Record<
	CurrencyCode,
	({ className }: { className?: string }) => React.JSX.Element
> = {
	USD: UnitedStatesFlag,
	EUR: EuropeanUnionFlag,
	GBP: UnitedKingdomFlag,
	JPY: JapanFlag,
	CAD: CanadaFlag,
}

function CurrencyFlag({ code, className }: { code: CurrencyCode; className?: string }) {
	const FlagComponent = flagComponents[code] ?? UnitedStatesFlag
	return <FlagComponent className={className} />
}

export function ExchangeWidget() {
	const [fromCurrencyCode, setFromCurrencyCode] = useState<CurrencyCode>('USD')
	const [toCurrencyCode, setToCurrencyCode] = useState<CurrencyCode>('EUR')
	const [amount, setAmount] = useState(100)

	const fromCurrency = currencyDictionary[fromCurrencyCode]
	const toCurrency = currencyDictionary[toCurrencyCode]
	const conversionRate = convertAmount(1, fromCurrency, toCurrency)
	const netAmount = amount * (1 - taxRate - feeRate)
	const totalAfterFees = convertAmount(netAmount, fromCurrency, toCurrency)
	const taxAmount = amount * taxRate
	const feeAmount = amount * feeRate

	const handleCurrencySelect = (type: 'from' | 'to', code: CurrencyCode) => {
		if (type === 'from') {
			setFromCurrencyCode(code)
			return
		}

		setToCurrencyCode(code)
	}

	const handleSwapCurrencies = () => {
		const convertedBaseAmount = convertAmount(amount, fromCurrency, toCurrency)
		setFromCurrencyCode(toCurrencyCode)
		setToCurrencyCode(fromCurrencyCode)
		setAmount(Number(convertedBaseAmount.toFixed(2)))
		toast.success('Currencies swapped!')
	}

	const handleExchange = () => {
		toast.success('Exchange successful!', {
			description: `${formatCurrency(amount, fromCurrency.code)} → ${formatCurrency(
				totalAfterFees,
				toCurrency.code,
			)} (after fees)`,
		})
	}

	const renderCurrencyMenu = (type: 'from' | 'to') => {
		const currentCode = type === 'from' ? fromCurrency.code : toCurrency.code

		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button
						type="button"
						aria-label={`Select ${type} currency`}
						className="ml-auto rounded-full border border-border p-0.5 transition-colors hover:bg-accent"
					>
						<IconChevronDown className="size-[18px] text-foreground" />
					</button>
				</DropdownMenuTrigger>

				<DropdownMenuContent align="end" className="w-60 p-1">
					{currencyOptions.map((currencyOption) => (
						<DropdownMenuItem
							key={`${type}-${currencyOption.code}`}
							onSelect={() => handleCurrencySelect(type, currencyOption.code)}
							className="flex items-center gap-3"
						>
							<CurrencyFlag code={currencyOption.code} className="size-4" />
							<div className="flex flex-col">
								<span className="font-medium text-foreground text-sm">{currencyOption.code}</span>
								<span className="text-muted-foreground text-xs">{currencyOption.name}</span>
							</div>
							<span className="ml-auto text-muted-foreground text-xs">{currencyOption.symbol}</span>
							{currencyOption.code === currentCode ? (
								<span className="text-foreground text-xs font-medium">●</span>
							) : null}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}

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
							<CurrencyFlag code={fromCurrency.code} className="size-4 shrink-0" />
							<span className="font-medium text-foreground text-sm">{fromCurrency.code}</span>
							{renderCurrencyMenu('from')}
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
							<CurrencyFlag code={toCurrency.code} className="size-4 shrink-0" />
							<span className="font-medium text-foreground text-sm">{toCurrency.code}</span>
							{renderCurrencyMenu('to')}
						</div>
					</div>

					<div className="flex flex-col items-center gap-1 p-4 text-center">
						<p className="font-['Inter'] font-medium text-[32px] text-foreground leading-10 tracking-[-0.16px]">
							{formatCurrency(amount, fromCurrency.code)}
						</p>
						<p className="text-muted-foreground text-sm">
							Available :{' '}
							<span className="font-medium text-foreground">
								{formatCurrency(
									availableBalances[fromCurrency.code] ?? 16058.94,
									fromCurrency.code,
								)}
							</span>
						</p>
					</div>

					<div className="border-border border-t bg-[var(--bg-weak-50,#f5f7fa)] px-4 py-1.5 text-center">
						<p className="text-muted-foreground text-xs">
							1 {fromCurrency.code} ={' '}
							<span className="font-medium text-foreground">
								{formatRate(conversionRate)} {toCurrency.code}
							</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2.5 text-xs">
					<div className="flex items-start justify-between gap-4">
						<span className="text-muted-foreground">Tax (2%)</span>
						<span className="text-center font-medium text-foreground">
							{formatCurrency(taxAmount, fromCurrency.code)}
						</span>
					</div>
					<div className="flex items-start justify-between gap-4">
						<span className="text-muted-foreground">Exchange fee (1%)</span>
						<span className="text-center font-medium text-foreground">
							{formatCurrency(feeAmount, fromCurrency.code)}
						</span>
					</div>
					<div className="flex items-start justify-between gap-4">
						<span className="text-muted-foreground">Total amount</span>
						<span className="text-center font-medium text-foreground">
							{formatCurrency(totalAfterFees, toCurrency.code)}
						</span>
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
