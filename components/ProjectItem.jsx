import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
    return (
        <div className='relative flex items-center justify-center rounded-sm h-auto w-full shadow-xl bg-cyan-100 dark:bg-[#CF9FFF] shadow-gray-600  p-4 group dark:hover:bg-gradient-to-r from-[#5651e5] to-[#BB86FC] dark:shadow-md dark:shadow-gray-600'>
            <Image className='rounded group-hover:opacity-10' src={backgroundImg} alt="/" />
            <div className='hidden group-hover:block absolute bg-gray-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg px-4 py-4 dark:bg-gray-400'>
                <h3 className='text-2xl text-dark tracking-wider text-center dark:bg-gray-400'>{title}</h3>
                <p className='pb-4 pt-2 text-dark text-center dark:bg-gray-400'>React JS</p>
                <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer underline hover:text-cyan-400 dark:hover:text-[#BB86FC]'>More info</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem