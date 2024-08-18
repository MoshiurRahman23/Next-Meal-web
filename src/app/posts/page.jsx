import { getPosts } from '@/services/api';
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: " Posts",
    description: "Posts Pages",
};

export default async function page() {

    const postsData = await getPosts();
    // console.log(postsData);
    return (
        <div>
            <h2 className='text-5xl text-center py-5'>All Post Here</h2>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postsData?.slice(0, 20).map((post) => (<div className='border-2 p-2 my-10' key={post.id} >
                        <h2 className='text-2xl'>Title- {post.title}</h2>
                        <p>Description- {post.body}</p>
                        <button className='bg-red-500 mt-2 p-2'><Link href={`/posts/${post.id}`} >Ses Details</Link></button>
                    </div>))
                }
            </div>
        </div>
    )
}
