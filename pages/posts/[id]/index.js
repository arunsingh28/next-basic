import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Posts = ({ artical }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <div>
            <Head>
                <title>{artical.title}</title>
            </Head>

            <br />
            <b>{artical.id} - {artical.title}</b>
            <br />
            <br />
            <i>{artical.body}</i>
            <br />
            <br />
            <Link href="/">Back</Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const artical = await res.json()
    return {
        props: {
            artical
        }
    }
}

// it is more fast
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articals = await res.json()
    const id = articals.map((ar) => ar.id)
    const paths = id.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Posts
