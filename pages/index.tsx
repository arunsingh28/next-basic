import Head from 'next/head'
import style from '../styles/Home.module.scss'
import Link from 'next/link'

require('dotenv').config()

// const CONTENT_API_KEY = "867749f709240b81f9ddce9d6e"
// const BLOG_URL = "https://next-ghost-v1.herokuapp.com"

const { CONTENT_API_KEY, BLOG_URL } = process.env

console.log(CONTENT_API_KEY)

type Post = {
  title: String,
  slug: String
}

async function getPosts() {

  // https://next-ghost-v1.herokuapp.com/ghost/api/v3/content/posts/?key=867749f709240b81f9ddce9d6e&fields=title,slug,custom_excerpt

  // ${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=title,slug,custom_excerpt

  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  ).then((res) => res.json())


  const posts = res.posts

  return posts
}



export const getStaticProps = async ({ param }) => {
  const posts = await getPosts()
  return {
    props: { posts }
  }
}




const Home: React.FC<{ posts: Post[] }> = (props) => {

  const { posts } = props

  return <div className={style.container}>
    <ul>
      {
        posts.map((posts, index) => {
          return (
            <li key={index}>
              <Link href="/post/[slug]" as={`/post/${posts.slug}`}>
                <a>{posts.title}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  </div>
}


export default Home