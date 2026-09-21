import { existsSync } from 'node:fs'
import path from 'node:path'

// Node's built-in `.env` reader, in place of `dotenv`. The file is optional
// because CI sets these values in the environment directly, and
// `process.loadEnvFile` throws when the path does not exist.
const envFile = path.join(import.meta.dirname, '../../.env')
if (existsSync(envFile)) {
	process.loadEnvFile(envFile)
}

const { FIRST_SUPERUSER, FIRST_SUPERUSER_PASSWORD } = process.env

if (typeof FIRST_SUPERUSER !== 'string') {
	throw new Error('Environment variable FIRST_SUPERUSER is undefined')
}

if (typeof FIRST_SUPERUSER_PASSWORD !== 'string') {
	throw new Error('Environment variable FIRST_SUPERUSER_PASSWORD is undefined')
}

export const firstSuperuser = FIRST_SUPERUSER
export const firstSuperuserPassword = FIRST_SUPERUSER_PASSWORD
