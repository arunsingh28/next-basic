import Link from 'next/link'
import { useRouter } from 'next/router'


const { CONTENT_API_KEY , BLOG_URL } = process.env


// then 2nd this run 
const getPost = async (slug: String) => {
    const res = await fetch(`
    ${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,html`
    ).then((res) => res.json())

    // console.log("from getPost funciton: " + JSON.stringify(res))

    const posts = res.posts

    return posts[0]
}


// first run this funciton
// this funciton send data to component function....
// Ghost cms request
// after hitting a API then it will store data to fs 
export const getStaticProps = async ({ params }) => {
    // console.log("from getStaticProps function: " + JSON.stringify(params))
    const post = await getPost(params.slug)

    return {
        props: { post },
        revalidate: 10
    }
}


// first request to API = call ghost server
// seconf request to fs and it can be 1Million no isssue it will be fast

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    slug: string,
    html: string,
    title: string,
}


const Post: React.FC<{ post: Post }> = (props) => {

    const { post } = props

    const router = useRouter()
    // run only for one time in 4-5 hours 
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    // regular static page content
    return (
        <div>
            <Link href="/">
                <a>Go Back</a>
            </Link>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            <style jsx global>
                {`
                img{
                    height:auto;
                    width:100%;
                }
                `}
            </style>
        </div>
    )
}

export default Post