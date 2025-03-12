import React from 'react'
import Link from 'next/link'

const Navbar = () => {
return (
    <div className='max-w-screen font-serif bg-gray-800 text-white p-4'>
        <div className='flex justify-between px-4 text-lg'>
            <div>
                Algorithm visualizer
            </div>
            <div>
                <Link href={'https://github.com/NaveenV-27'}>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className='h-8 w-8 invert cursor-pointer ' />
                </Link>
            </div>
        </div>
    </div>
)
}

export default Navbar
