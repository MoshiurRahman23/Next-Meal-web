import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: " Blogs",
    description: "Blogs Pages",
};


export default function BlogPage() {
    return (
        <div>
            <h2 className='text-5xl text-center py-5'>All Blogs Here</h2>

            <div className='grid grid-cols-2 gap-5'>

                {
                    blogs?.map((blog) =>
                        <div className='border p-8 my-9 ' key={blog.id}>
                            <p> Title- {blog.title}</p>
                            <p> Title- {blog.completed}</p>
                            <button className='bg-red-400 p-2 mt-2'> <Link href={`/blogs/${blog.id}`}> View Details </Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const blogs = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    },
    {
        "userId": 1,
        "id": 3,
        "title": "quis ut nam facilis et officia qui",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    },
    {
        "userId": 1,
        "id": 4,
        "title": "fugiat veniam minus",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    },
    {
        "userId": 1,
        "id": 5,
        "title": "et porro tempora",
        "completed": 'Dhaka Metropolitan Police (DMP) recovered a huge amount of money, including local and foreign currencies worth around Tk 3.11 crore, from the house of a former senior secretary on Babar Road in the capital Mohammadpur area today.'
    },
    {
        "userId": 1,
        "id": 6,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    },
    {
        "userId": 1,
        "id": 7,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    },
    {
        "userId": 1,
        "id": 8,
        "title": "illo expedita consequatur quia in",
        "completed": 'Home Adviser to the interim government Brig Gen (retd) Sakhawat Hussain has been replaced by Lt Gen (retd) Jahangir Alam Choudhury as the interim government today brought some changes to its advisory council.'
    }
]