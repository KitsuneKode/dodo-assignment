'use client'

import { Suspense, useState } from 'react'
import SignInForm from '@/components/sign-in-form'
import SignUpForm from '@/components/sign-up-form'

export default function LoginPage() {
	const [showSignIn, setShowSignIn] = useState(false)

	return (
		<Suspense>
			{showSignIn ? (
				<SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
			) : (
				<SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
			)}
		</Suspense>
	)
}
