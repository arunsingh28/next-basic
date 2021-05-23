// import React from 'react'

import { useRouter } from 'next/router'


const subBlog = () => {
    const router = useRouter()
    const id = router.query.id

    // send a request to backend API
    // to fetch the real blog with that id

    return (
        <div>
            {id}
        </div>
    )
}

export default subBlog
