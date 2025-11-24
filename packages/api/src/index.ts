import { initTRPC, TRPCError } from '@trpc/server'
import type { Context } from './context'

export const t = initTRPC.context<Context>().create()

export const router = t.router

const rateLimitMiddleware = t.middleware(async ({ next, ctx }) => {
	const { success } = await ctx.rateLimiter.limit(ctx.ip || 'anonymous')
	if (success) {
		return next()
	}

	throw new TRPCError({
		code: 'TOO_MANY_REQUESTS',
		message: 'Too many requests. Please try again later',
		cause: 'Rate limit exceeded',
	})
})

export const publicProcedure = t.procedure.use(rateLimitMiddleware)

export const protectedProcedure = t.procedure.use(rateLimitMiddleware).use(({ ctx, next }) => {
	if (!ctx.session) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'Authentication required',
			cause: 'No session',
		})
	}
	return next({
		ctx: {
			...ctx,
			session: ctx.session,
		},
	})
})
