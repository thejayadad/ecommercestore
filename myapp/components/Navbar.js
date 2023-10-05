'use client'

import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className='bg-gray-200 w-full'>
    <div className='flex justify-between maz-w-screen-xl mx-auto'>
        <Link href={'/'}>Store</Link>
        <div>
            <UserButton afterSignOutUrl='/sign-in' />
        </div>
    </div>
    </nav>
  )
}

export default Navbar
