import { useMemo } from 'react'
import { ActionButton } from '../src/components/ActionButton'
import { Card, CardProps } from '../src/components/Card'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { server } from '../server/config'
import Link from 'next/link'
import { signIn } from 'next-auth/client'

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const renderCard = useMemo(() => {
    return <Card {...data} />
  }, [data])

  return (
    <>
      <div>About</div>
      <ActionButton>test</ActionButton>
      <Link href={`${server}/api/auth/signin`}>
        <a>Login</a>
      </Link>
      <button onClick={() => signIn('Credentials', { callbackUrl: `${server}/dashboard` })}>
        Sign in
      </button>
      {renderCard}
    </>
  )
}

async function callAPI(): Promise<CardProps> {
  const result = await fetch(`${server}/api/getPerson`)
  return await result.json()
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await callAPI()
  return {
    props: {
      data,
    },
  }
}

export default Home
