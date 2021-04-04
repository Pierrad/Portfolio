/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../server/db/connectToDB').default.instance
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

async function call() {
  const post = await db.one(
    "INSERT INTO persons (id, firstname, lastname) VALUES (1, 'Isa', 'Lindta')"
  )
  return post
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  if (session) {
    const result = await call()
    res.status(200).json(result)
  } else {
    res.status(403).json({
      message: 'You must be sign in to view the protected content on this page.',
    })
  }
}
export default handler
