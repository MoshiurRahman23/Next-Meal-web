import AboutContents from '@/components/AboutContents';
import { getUser } from '@/services/api';
import React from 'react'
import { Headland_One } from 'next/font/google';


const Headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: " About",
    description: "About Pages",
};


export default async function AboutPage() {

    const UserData = await getUser();
    // console.log(UserData);

    return (
        <div className={`${Headland.className}`}>
            <h2 className='text-5xl text-center py-5'>All User Details Here</h2>
            <div className='grid grid-cols-4 gap-6'>
                {
                    UserData?.map((user) => <div className='border-2 p-2 mt-10' key={user.id}>
                        <h2>Name- {user.name}</h2>
                        <h2>UserName- {user.username}</h2>
                        <h2>Email- {user.email}</h2>
                        <p>Address- {user.address.street}</p>
                    </div>)
                }
            </div>

            <AboutContents />
        </div>
    )
}
