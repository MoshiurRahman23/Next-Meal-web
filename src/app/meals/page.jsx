import Meals from '@/components/Meals';
import React from 'react'

export const metadata = {
    title: " Meals",
    description: "Meals Pages",
};


export default function MealsPage() {
    return (
        <div>
            <div className='p-12'>
                <h1 className='text-2xl font-semibold text-red-400'>Choose Your Meals</h1>
                <p className='text-xl'>Choice Meals of your by Searching...... </p>
                <Meals></Meals>
            </div>
        </div>
    )
}
