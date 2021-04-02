// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../server/db/connectToDB').default.instance

async function call() {
  const post = await db.one(
    "INSERT INTO persons (id, firstname, lastname) VALUES (1, 'Isa', 'Lindta')"
  )
  return post
}

async function handler(req, res) {
  const result = await call()
  res.status(200).json(result)
}
export default handler
