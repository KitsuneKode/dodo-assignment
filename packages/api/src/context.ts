import { auth } from '@dodo-assignment/auth'
import type { Context as HonoContext } from 'hono'

export type CreateContextOptions = {
	context: HonoContext
}

export async function createContext({ context }: CreateContextOptions) {
	const session = await auth.api.getSession({
		headers: context.req.raw.headers,
	})
	return {
		ip: context.req.raw.headers.get('CF-Connecting-IP'),
		rateLimiter: context.get('ratelimit'),
		session,
	}
}

export type Context = Awaited<ReturnType<typeof createContext>>
