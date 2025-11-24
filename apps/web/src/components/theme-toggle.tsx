'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const [isRotating, setIsRotating] = useState(false)

	// Avoid hydration mismatch
	useEffect(() => {
		setMounted(true)
	}, [])

	const handleToggle = () => {
		setIsRotating(true)
		setTheme(theme === 'dark' ? 'light' : 'dark')
		setTimeout(() => setIsRotating(false), 300)
	}

	if (!mounted) {
		return <Button variant="ghost" size="icon" className="size-10 rounded-[10px]" />
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handleToggle}
			className="hover-scale active-press size-10 rounded-[10px] bg-card transition-smooth hover:bg-accent"
		>
			<div className={`transition-smooth ${isRotating ? 'rotate-180' : ''}`}>
				{theme === 'dark' ? (
					<IconSun className="size-5 text-foreground" />
				) : (
					<IconMoon className="size-5 text-foreground" />
				)}
			</div>
		</Button>
	)
}
