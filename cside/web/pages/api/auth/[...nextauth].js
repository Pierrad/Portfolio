import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { server } from '../../../server/config'
const db = require('../../../server/db/connectToDB').default.instance

const options = {
  site: server,
  providers: [
    Providers.Credentials({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Pseudo" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials) {
          try {
            const login = await db.one("SELECT * FROM users WHERE id='1'")
            const isAuthorize = credentials.username == login.pseudo && credentials.password == login.password
            console.log(isAuthorize)
            if (isAuthorize) {
              const user = { id: 1, pseudo: credentials.username, password: credentials.password }
              return user
            } else {
              // If you return null or false then the credentials will be rejected
              return null
              // You can also Reject this callback with an Error or with a URL:
              // throw new Error('error message') // Redirect to error page
              // throw '/path/to/redirect'        // Redirect to a URL
            }
          } catch(err) {
            console.log(err)
          }					
        }
    })
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
}

export default (req, res) => NextAuth(req, res, options)