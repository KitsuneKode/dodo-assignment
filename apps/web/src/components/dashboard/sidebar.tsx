'use client'

import {
	IconArrowsLeftRight,
	IconChevronRight,
	IconChevronsUp,
	IconCreditCard,
	IconFileText,
	IconHeadphones,
	IconHistory,
	IconLayoutGrid,
	IconRefresh,
	IconSettings,
	IconX,
} from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigationItems = [
	{ icon: IconLayoutGrid, label: 'Dashboard', active: true },
	{ icon: IconCreditCard, label: 'My Cards', active: false },
	{ icon: IconArrowsLeftRight, label: 'Transfer', active: false },
	{ icon: IconHistory, label: 'Transactions', active: false },
	{ icon: IconFileText, label: 'Payments', active: false },
	{ icon: IconRefresh, label: 'Exchange', active: false },
]

const otherItems = [
	{ icon: IconSettings, label: 'Settings' },
	{ icon: IconHeadphones, label: 'Support' },
]

interface SidebarProps {
	isOpen?: boolean
	onClose?: () => void
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
	const [activeItem, setActiveItem] = useState('Dashboard')

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	const handleNavClick = (label: string) => {
		if (label !== 'Dashboard') {
			setActiveItem(label)
			toast.info(`Navigating to ${label}`, {
				description: 'This feature is coming soon!',
			})
		}
		if (onClose) {
			onClose()
		}
	}

	const handleOtherClick = (label: string) => {
		toast.info(label, {
			description: `Opening ${label.toLowerCase()} panel...`,
		})
		if (onClose) {
			onClose()
		}
	}

	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/50 lg:hidden"
					onClick={onClose}
					aria-hidden="true"
				/>
			)}

			<aside
				className={cn(
					'fixed top-0 left-0 z-50 flex h-screen w-[272px] flex-col border-border border-r bg-card transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0',
					isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
				)}
			>
				<div className="flex items-center gap-3 border-[var(--stroke-soft-200)] border-b p-3">
					<div className="flex flex-1 items-center gap-3 rounded-[10px] bg-white p-3">
						<div className="flex size-10 items-center justify-center rounded-full bg-[var(--blue-500)] text-white">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
						<div className="flex-1">
							<p className="font-medium text-foreground text-sm">Apex</p>
							<p className="text-muted-foreground text-xs">Finance & Banking</p>
						</div>
						<Button
							variant="ghost"
							size="icon"
							onClick={onClose}
							className="size-6 shrink-0 transition-colors lg:hidden"
							aria-label="Close menu"
						>
							<IconX className="size-5" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => toast.info('Switch workspace')}
							className="hidden size-6 shrink-0 transition-colors lg:flex"
						>
							<IconChevronsUp className="size-5" />
						</Button>
					</div>
				</div>

				<div className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 pt-5 pb-4">
					<div className="flex flex-col gap-2">
						<p className="px-1 py-1 font-medium text-[var(--text-soft-400)] text-xs uppercase tracking-wider">
							Main
						</p>
						<nav className="flex flex-col gap-1">
							{navigationItems.map((item) => (
								<button
									key={item.label}
									type="button"
									onClick={() => handleNavClick(item.label)}
									className={cn(
										'relative flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-sm transition-colors',
										item.active
											? 'bg-[var(--bg-weak-50)] text-[var(--text-strong-950)]'
											: 'text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)]',
									)}
								>
									{item.active && (
										<div className="-left-5 absolute top-2 h-5 w-1 rounded-tr rounded-br bg-[var(--primary-base)]" />
									)}
									<item.icon className="size-5" />
									<span className="flex-1 text-left">{item.label}</span>
									{item.active && <IconChevronRight className="size-5" />}
								</button>
							))}
						</nav>
					</div>

					<div className="flex flex-1 flex-col gap-1.5">
						<p className="px-1 py-1 font-medium text-[var(--text-soft-400)] text-xs uppercase tracking-wider">
							Others
						</p>
						<nav className="flex flex-col gap-1">
							{otherItems.map((item) => (
								<button
									key={item.label}
									type="button"
									onClick={() => handleOtherClick(item.label)}
									className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:bg-accent hover:text-foreground"
								>
									<item.icon className="size-5" />
									<span className="flex-1 text-left">{item.label}</span>
								</button>
							))}
						</nav>
					</div>
				</div>

				<div className="border-border border-t p-3">
					<button
						type="button"
						onClick={() => toast.info('User Profile', { description: 'arthur@alignui.com' })}
						className="flex w-full items-center gap-3 rounded-[10px] bg-card p-3 transition-colors hover:bg-accent"
					>
						<Avatar className="size-10">
							<AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur" />
							<AvatarFallback>AT</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<div className="flex items-center gap-0.5">
								<p className="font-medium text-foreground text-sm">Arthur Taylor</p>
								<svg className="size-5" viewBox="0 0 20 20" fill="none">
									<path
										d="M10 0L12.2451 6.90983L19.5106 6.90983L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983L7.75486 6.90983L10 0Z"
										fill="currentColor"
										className="text-foreground"
									/>
								</svg>
							</div>
							<p className="text-left text-muted-foreground text-xs">arthur@alignui.com</p>
						</div>
						<IconChevronRight className="size-5 text-muted-foreground" />
					</button>
				</div>
			</aside>
		</>
	)
}
