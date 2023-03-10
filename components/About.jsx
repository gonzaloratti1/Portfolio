import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grcv from "../public/assets/grcv.jpg"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-cyan-400 font-bold dark:text-[#BB86FC]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600  dark:text-white'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600  dark:text-white' >
            I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce.
          </p>
          <Link href='/#projects' legacyBehavior>
            <a className='py-2 dark:text-gray-200 underline cursor-pointer hover:text-cyan-400'>
              Check out some of my latest projects.
            </a>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-lg dark:shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={grcv} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;