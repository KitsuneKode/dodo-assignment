import path from 'node:path'
import dotenv from 'dotenv'
import { defineConfig } from 'prisma/config'

if (!process.env.VERCEL) {
	dotenv.config({
		path: '../../apps/server/.env',
	})
} else {
	dotenv.config()
}

export default defineConfig({
	schema: path.join('prisma', 'schema'),
	migrations: {
		path: path.join('prisma', 'migrations'),
	},
	datasource: {
		url: process.env.DATABASE_URL!,
	},
})
