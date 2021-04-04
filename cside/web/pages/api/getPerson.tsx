/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../server/db/connectToDB').default.instance
import { NextApiRequest, NextApiResponse } from 'next'

async function call() {
  const post = await db.one("SELECT * FROM students WHERE id='1'")
  return post
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await call()
  res.status(200).json(result)
}

export default handler
