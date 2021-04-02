const db = require('../../server/db/connectToDB').default.instance

async function call() {
    const post = await db.one("SELECT * FROM students WHERE id='1'")
    return post
}

async function handler(req, res) {
    const result = await call()
    res.status(200).json(result)
}
export default handler
