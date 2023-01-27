import React from 'react'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='resume ' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>

                    <h1 className='py-4 text-gray-700 dark:text-white'>Hi, i'm <span className='text-cyan-400 dark:text-[#BB86FC] font-extrabold'>Gonzalo</span></h1>
                    <h1 className='py-4 text-gray-700  dark:text-white'>
                        A front-end developer.
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto  dark:text-white'>
                        I'm a front-end developer specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsive front-end web aplications while learning back-end technologies
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] mx-auto py-4'>
                        <div className='rounded-full shadow-md shadow-gray-700 dark:shadow-gray-50 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href="https://www.linkedin.com/in/gonzalo-ratti-70b820254/">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-700 dark:shadow-gray-50 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href="https://github.com/gonzaloratti1">
                                <FaGithub />
                            </Link>

                        </div>
                        <div className='rounded-full shadow-md shadow-gray-700 dark:shadow-gray-50 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-700 dark:shadow-gray-50 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main