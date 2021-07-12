import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="h-28 shadow-lg flex px-24 items-center justify-between">
            <h2 className=" text-2xl">TakeMeto</h2>
            <div className="flex gap-4 justify-center items-center">
                <Link href="/about">
                    <h2 className=" cursor-pointer text-2xl">About</h2>
                </Link>
                <a href="/api/auth/logout">
                    <h2 className=" cursor-pointer text-lg  bg-blue-400 text-white p-2 rounded-lg">Logout</h2>
                </a>
            </div>
        </div>
    )
}

export default Navbar
