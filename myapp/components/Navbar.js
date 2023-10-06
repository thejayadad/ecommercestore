'use client'

import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className='w-full py-8 px-4'>
    <div className='flex justify-between max-w-screen-xl mx-auto'>
        <Link href={'/'}>Store</Link>
        <div>
            <UserButton afterSignOutUrl='/sign-in' />
        </div>
    </div>
    </nav>
  )
}

export default Navbar
