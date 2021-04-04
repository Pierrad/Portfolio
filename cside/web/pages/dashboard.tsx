import { useSession } from 'next-auth/client'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { server } from '../server/config'

function Dashboard(): JSX.Element {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return <p>Loading...</p>

  if (!session) {
    return (
      <>
        <div>Pas identifié</div>
        <Link href={`${server}/`}>
          <a>Home</a>
        </Link>
      </>
    )
  }

  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => signOut({ callbackUrl: `${server}/` })}>Sign out</button>
    </>
  )
}

export default Dashboard
