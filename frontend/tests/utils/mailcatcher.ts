import type { APIRequestContext } from '@playwright/test'
import { setTimeout as sleep } from 'node:timers/promises'

type Email = {
	id: number
	recipients: string[]
	subject: string
}

async function findEmail({
	request,
	filter,
}: {
	request: APIRequestContext
	filter?: (email: Email) => boolean
}) {
	const response = await request.get(`${process.env.MAILCATCHER_HOST}/messages`)

	let emails = await response.json()

	if (filter) {
		emails = emails.filter(filter)
	}

	const email = emails[emails.length - 1]

	if (email) {
		return email as Email
	}

	return null
}

/**
 * Poll MailCatcher until a matching message arrives, or give up after
 * `timeout` milliseconds.
 *
 * The deadline is an `AbortSignal.timeout`, which both bounds the loop and
 * cancels the pending sleep. The previous `Promise.race` against a bare
 * `setTimeout` left that timer running after a message was found, which kept
 * the Node process alive for the rest of the timeout.
 */
export async function findLastEmail({
	request,
	filter,
	timeout = 5000,
}: {
	request: APIRequestContext
	filter?: (email: Email) => boolean
	timeout?: number
}): Promise<Email> {
	const deadline = AbortSignal.timeout(timeout)

	while (!deadline.aborted) {
		const emailData = await findEmail({ request, filter })

		if (emailData) {
			return emailData
		}

		try {
			await sleep(100, undefined, { signal: deadline })
		} catch {
			break
		}
	}

	throw new Error('Timeout while trying to get latest email')
}
