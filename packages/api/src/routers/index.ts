import { z } from 'zod'
import { publicProcedure, router } from '../index'

export const appRouter = router({
	healthCheck: publicProcedure.query(() => {
		return { status: 'ok' }
	}),
	message: publicProcedure.input(z.object({ measage: z.string() })).mutation(async ({ input }) => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		return { status: 'ok', echo: input.measage }
	}),
})

export type AppRouter = typeof appRouter
