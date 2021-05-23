import Link  from 'next/link'


const { CONTENT_API_KEY, BLOG_URL } = process.env


const Post: React.FC = props => {
    return(
        <div>
            <Link href="/">
                <a>Go Back</a>
            </Link>
        </div>
    )
}


export default Post