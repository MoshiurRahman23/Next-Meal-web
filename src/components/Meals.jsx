"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export const metadata = {
    title: " Meals",
    description: "Meals Pages",
};



export default function Meals() {
    const [search, setSearch] = useState('b');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            console.log(data);
            setMeals(data.meals);
            setError('')
        } catch (error) {
            setError('No Data Found ...')
        }
    };

    const handler = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        loadData();
    }, [])

    // if (meals?.length === 0) {
    //     return <h3>No Data Found.....</h3>
    // }

    return (
        <div className='mt-5'>
            <input
                onChange={handler}
                className='p-4 outline-none border-transparent text-black'
                type="text"
                placeholder='search meals....' />
            <button
                onClick={() => loadData()}
                className='text-red-400 bg-blue-500 font-semibold p-4 outline-none border-transparent'>Search</button>
            <div className='mt-12 grid grid-cols-3 gap-3'>
                {
                    meals.length > 0 && !error && meals?.map((meal) => <div className='border-2 p-4' key={meal.idMeal}>
                        <Image src={meal?.strMealThumb} alt={meal.strMeal} width={500} height={600} />
                        <h1 className='text-2xl font-semibold'>Name-{meal?.strMeal}</h1>
                        <p>Category- {meal?.strCategory}</p>
                        <p>Description- {meal?.strInstructions}</p>
                    </div>)
                }
                <div className='h-screen'>
                    {
                        error && <h2>No Data Found....</h2>
                    }
                </div>
            </div>
        </div>
    )
}

