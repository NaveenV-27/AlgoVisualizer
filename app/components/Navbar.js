import React from 'react'

const Navbar = () => {
return (
    <div className='max-w-screen font-serif bg-gray-800 text-white p-4'>
        <div className='flex justify-between px-4 text-lg'>
            <div>
                Algorithm visualizer
            </div>
            <div>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className='h-8 w-8 invert cursor-pointer' />
            </div>
        </div>
    </div>
)
}

export default Navbar
