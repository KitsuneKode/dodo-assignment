'use client'

import { IconArrowUpRight, IconBell, IconMenu2, IconSearch } from '@tabler/icons-react'
import { toast } from 'sonner'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface DashboardHeaderProps {
	onMenuClick?: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
	return (
		<header className="flex items-center gap-3 border-border border-b bg-card px-4 py-5 lg:px-8">
			<Button
				variant="ghost"
				size="icon"
				onClick={onMenuClick}
				className="size-10 rounded-[10px] bg-card transition-colors hover:bg-accent lg:hidden"
				aria-label="Open menu"
			>
				<IconMenu2 className="size-5 text-foreground" />
			</Button>

			<div className="flex flex-1 items-start gap-3.5">
				<Avatar className="size-12">
					<AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur" />
					<AvatarFallback>AT</AvatarFallback>
				</Avatar>
				<div className="flex flex-1 flex-col gap-1">
					<h1 className="font-medium text-[var(--text-strong-950)] text-lg leading-6 tracking-[-0.27px]">
						Arthur Taylor
					</h1>
					<p className="text-[var(--text-sub-600)] text-sm leading-5 tracking-[-0.084px]">
						Welcome back to Apex 👋🏻
					</p>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<ThemeToggle />

				<Button
					variant="ghost"
					size="icon"
					onClick={() => toast.info('Search feature coming soon!')}
					className="hidden size-10 rounded-[10px] bg-card transition-colors hover:bg-accent sm:flex"
				>
					<IconSearch className="size-5 text-foreground" />
				</Button>

				<Button
					variant="ghost"
					size="icon"
					onClick={() => toast.info('You have 3 new notifications')}
					className="relative hidden size-10 rounded-[10px] bg-card transition-colors hover:bg-accent sm:flex"
				>
					<IconBell className="size-5 text-foreground" />
					<div className="pulse-ring absolute top-3 right-3 size-1 rounded-full bg-[var(--red-500)] ring-2 ring-card" />
				</Button>

				<Button
					onClick={() => toast.success('Transfer funds')}
					className="gap-1 rounded-[10px] bg-primary px-3.5 py-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
				>
					<span className="hidden font-medium text-sm leading-5 tracking-[-0.084px] sm:inline">
						Move Money
					</span>
					<IconArrowUpRight className="size-5" />
				</Button>
			</div>
		</header>
	)
}
