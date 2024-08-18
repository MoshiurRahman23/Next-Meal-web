import { NextResponse } from 'next/server';
import React from 'react'

const user = true;
const coo = 'next-superhero'

export default function middleware() {

    // const cookies = request.cookies.get('token')
    // if (!cookies) {
    //     return NextResponse.redirect(new URL('/login', request.URL))
    // }
    // return NextResponse.next()



    const cookies = request.cookies.get('token')
    if (!cookies || cookies.value !== coo) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/contact', '/about']
}