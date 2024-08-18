import Image from 'next/image'
import React from 'react'

export default function GalleryPage() {
    return (
        <div className='min-h-screen px-12 py-24'>
            <h6 className='text-3xl mb-12 font-semibold'> Gallery Page</h6>
            <div className='grid grid-cols-3'>
                {
                    [1, 2, 3, 4, 5]?.map((img) =>
                    (<Image key={img} src={`/images/${img}.jpeg`} width="1920" height="1000" alt='side screen' />
                    ))
                }
            </div>
        </div >
    )
}
