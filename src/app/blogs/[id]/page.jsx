import React from 'react'

export default function page({ params }) {
    console.log(params.id);

    const { title, completed } = blogs.find((blog) => blog.id == params.id)

    return (
        <div className='h-screen'>
            <div className='my-10 p-10'>
                <h2 className='text-3xl my-9'>{title} </h2>
                <p>{completed}</p>
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