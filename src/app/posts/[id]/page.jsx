
import { getDetailsPosts } from '@/services/api'
import React from 'react'


export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();

    return {
        title: `${postData.title}`,
        description: postData.body
    }
}


export default async function page({ params }) {
    const { title, body } = await getDetailsPosts(params.id);
    return (
        <div className='h-screen'>
            <div className='p-7'>
                <h1 className='text-3xl my-9'>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}
