import { IconChevronRight } from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { toast } from 'sonner'

interface TransactionItemProps {
	icon: ReactNode
	iconBg: string
	title: string
	description: string
	amount: string
	date: string
	onClick?: () => void
}

export function TransactionItem({
	icon,
	iconBg,
	title,
	description,
	amount,
	date,
	onClick,
}: TransactionItemProps) {
	const handleClick = () => {
		if (onClick) {
			onClick()
		} else {
			toast.info(`${title} - ${amount} on ${date}`, {
				description: description,
			})
		}
	}

	return (
		<button
			onClick={handleClick}
			className="hover:-translate-y-0.5 active-press flex items-center gap-3 rounded-lg p-2 transition-smooth hover:bg-accent hover:shadow-md"
		>
			<div
				className="flex size-10 items-center justify-center rounded-lg transition-smooth"
				style={{ backgroundColor: iconBg }}
			>
				{icon}
			</div>
			<div className="flex flex-1 flex-col items-start gap-0.5">
				<p className="font-medium text-foreground text-sm leading-5">{title}</p>
				<p className="text-muted-foreground text-xs leading-4">{description}</p>
			</div>
			<div className="flex flex-col items-end gap-0.5">
				<p className="font-medium text-foreground text-sm leading-5">{amount}</p>
				<p className="text-muted-foreground text-xs leading-4">{date}</p>
			</div>
			<IconChevronRight className="size-5 text-muted-foreground transition-smooth" />
		</button>
	)
}
