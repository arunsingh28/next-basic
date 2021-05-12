import Head from 'next/head'
import Artical from '../components/Artical'

export default function Home({artical}) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1>All Posts</h1>
      <Artical artical={artical} />
      <style jsx>
        {`
          h1{
            text-align : center;
            padding : 20px 0px;
            color : #444;
          }
        `}
      </style>
    </>
  )
}

// fetch data
export const getStaticProps = async () => {
  const res = await fetch(`https://work-spacee.herokuapp.com/all`)
  const artical = await res.json()

  return {
    props: {
      artical
    }
  }

}


