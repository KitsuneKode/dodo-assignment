import 'dotenv/config'
import { createContext } from '@dodo-assignment/api/context'
import { appRouter } from '@dodo-assignment/api/routers/index'
import { auth } from '@dodo-assignment/auth'
import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { RedisRateLimiter } from './utils/rate-limit'

const app = new Hono()

app.use(logger())

app.use(
	'/*',
	cors({
		origin: process.env.CORS_ORIGIN || '',
		allowHeaders: ['Content-Type', 'Authorization', 'User-Agent'],
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	}),
)

app.use(async (c, next) => {
	const rateLimiter = RedisRateLimiter.getInstance(c)
	c.set('ratelimit', rateLimiter)
	const ip = c.req.raw.headers.get('CF-Connecting-IP')

	const { success } = await rateLimiter.limit(ip || 'anonymous')
	if (success) {
		await next()
	} else {
		return c.json({ message: 'Too Many Requests' }, 429)
	}
})

app.on(['POST', 'GET'], '/api/auth/*', (c) => auth.handler(c.req.raw))

app.use(
	'/trpc/*',
	trpcServer({
		router: appRouter,
		createContext: (_opts, context) => {
			return createContext({ context })
		},
	}),
)

app.get('/', (c) => {
	return c.text('OK')
})

export default app
