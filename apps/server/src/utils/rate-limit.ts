import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis/cloudflare'
import type { Context, Env } from 'hono'
import { env } from 'hono/adapter'
import type { BlankInput } from 'hono/types'

const cache = new Map()

export class RedisRateLimiter {
	static instance: Ratelimit

	static getInstance(c: Context<Env, '/*', BlankInput>) {
		if (!this.instance) {
			const { REDIS_URL, REDIS_TOKEN } = env<{
				REDIS_URL: string
				REDIS_TOKEN: string
			}>(c)

			const redisClient = new Redis({
				token: REDIS_TOKEN,
				url: REDIS_URL,
			})

			const ratelimit = new Ratelimit({
				redis: redisClient,
				limiter: Ratelimit.fixedWindow(100, '60 s'),
				ephemeralCache: cache,
				prefix: '@dodo-assignment/rate-limit',
			})

			this.instance = ratelimit
		}
		return this.instance
	}
}
