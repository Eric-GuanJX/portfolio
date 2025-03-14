import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPhoneAlt,FaMailBulk } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {

    const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d95d8097-5227-42eb-842d-919756b3cd2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat
    bg-center bg-[length:90%_auto] dark:bg-none dark:bg-none'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
            <p className=' text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or feedback, 
            please use the form below!</p>

            <form onSubmit={onSubmit} className=' max-w-2xl mx-auto'>
                <div className=' grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required
                    className=' flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>
                    <input type="email" placeholder='Enter your email' required
                    className=' flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>
                </div>
                <textarea rows='6' placeholder='Enter your message' required
                className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90' name='message'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full
            mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now <Image src={assets.right_arrow_white} alt='' className=' w-4'/></button>
            <p className=' mt-4'>{result}</p>
            <div className='mt-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center my-10">
  {/* email */}
  {/* <Link href="mailto:ericguanjx@gmail.com"> */}
    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
      <FaMailBulk className="text-xl text-gray-700 dark:text-white" />
      <span className="text-gray-700 dark:text-white">ericguanjx@gmail.com</span>
    </div>
  {/* </Link> */}

  {/* LinkedIn */}
  <Link href="https://www.linkedin.com/in/jianxiguan/" target="_blank" rel="noopener noreferrer">
    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
      <AiFillLinkedin className="text-blue-700 dark:text-blue-400 text-xl" />
      <span className="text-gray-700 dark:text-white">LinkedIn Profile</span>
    </div>
  </Link>

  {/* phone */}
  <div className="flex items-center gap-2">
    <FaWhatsapp className="text-green-600 text-lg" />
    <span className="text-gray-700 dark:text-white">+852 6093 5386</span>
  </div>
</div>

      </div>
            </form>
            
    </div>
  )
}

export default Contact
