import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from "../public/assets/contact.jpg"
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Contact = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const enviarEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_7qz263p', 'template_z5dtj1b', e.target, 'n4vr8zbaLRt8BKK1q').then((res) => {
      console.log(res);
      setOpen(!open)
    }, (error) => {
      console.log(error)
    })
  }

  return (
    <div className='dark:bg-[#121212]'>
      <div id='contact' className='w-full lg:h-screen '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full dark:shadow-lg'>
          <p className='text-xl tracking-widest uppercase text-cyan-400  dark:text-[#BB86FC] font-extrabold '>
            Contact
          </p>
          <h2 className='py-4'>Get In Touch</h2>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md dark:shadow-md shadow-gray-400  dark:shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <div>
                  <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg}
                    alt='/'
                  />
                </div>
                <div>
                  <h2 className='py-2 mt-2'>Gonzalo Ratti</h2>
                  <p>Front-End Developer</p>
                  <p className='py-4'>
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Connect With Me</p>
                  <div className='flex items-center justify-between py-4'>
                    <a
                      href='https://www.linkedin.com/in/gonzalo-ratti-70b820254/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href='https://github.com/gonzaloratti1'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>

                    <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                    <Link href='/resume' legacyBehavior>
                      <a>
                        <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <BsFillPersonLinesFill />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-md dark:shadow-md dark:shadow-gray-400 shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form onSubmit={enviarEmail}
                >
                  <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                    <div className='flex flex-col py-2'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='nombre'
                        id='nombre'
                        required
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                      id='email'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='asunto'
                      id='asunto'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows='10'
                      name='mensaje'
                      id='mensaje'
                      required
                    ></textarea>
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-4 bg-cyan-600 hover:bg-cyan-400' type='submit' >
                    Send Message
                  </button>
                  <div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      {/* falta estilar la box */}
                      <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Mensaje enviado!
                        </Typography>
                        {/* Boton para cerrar */}
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Recibira su respuesta a la brevedad.
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link href='/' legacyBehavior>
              <a>
                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <HiOutlineChevronDoubleUp
                    size={30}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;