/**
 * A short unique token for test fixtures.
 *
 * `crypto.randomUUID` is a global in Node, so this needs no import. It also
 * always yields a full-length token, unlike the previous
 * `Math.random().toString(36).substring(7)`, which returned an empty string
 * whenever the random number happened to serialise to fewer than eight
 * characters and produced colliding fixture names when it did.
 */
const token = () => crypto.randomUUID().replaceAll('-', '').slice(0, 12)

export const randomEmail = () => `test_${token()}@example.com`

export const randomTeamName = () => `Team ${token()}`

export const randomPassword = () => crypto.randomUUID()

export const slugify = (text: string) =>
	text
		.toLowerCase()
		.replaceAll(/\s+/g, '-')
		.replaceAll(/[^\w-]+/g, '')
