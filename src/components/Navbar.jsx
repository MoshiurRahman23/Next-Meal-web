"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {

    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Gallery",
            path: "/gallery"
        },

    ];

    const handler = () => {
        router.push('/gallery')
    }

    return (
        <nav className="bg-blue-500 px-12 py-6 flex justify-between items-center">
            <h2 className='text-2xl font-semibold'><Link href={'/'}>Next <span className=' text-red-600'>Hero</span></Link> </h2>
            <ul className='flex justify-between items-center gap-3'>
                {
                    links?.map((link) => <Link className={`${pathName === link.path && "text-red-500 underline"}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handler} className='bg-white text-red-500 px-4 py-2'>Log In</button>
        </nav >
    )
}
