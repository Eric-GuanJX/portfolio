import React from 'react'
import { TbWorld } from "react-icons/tb";
import { RiStackFill } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

export const serviceData = [
    { icon: <TbWorld className="text-4xl text-gray-700 dark:text-white" />, title: 'Frontend Development', description: 'Building responsive and interactive web applications using Vue.js, React, Next.js to ensure seamless user experience.', link: '' },
    { icon: <RiStackFill className="text-4xl text-gray-700 dark:text-white" />, title: 'Backend Development', description: 'Engineered backend logic using Spring Boot, MySQL,Hibernate and MyBatis, ensuring smooth handing of data management.', link: '' },
    { icon: <AiOutlineApi className="text-4xl text-gray-700 dark:text-white" />, title: 'API Development & Integration', description: 'Creating and integrating RESTful APIs to enable smooth data communication between systems, ensuring high performance and security.', link: '' },
    { icon: <MdSecurity className="text-4xl text-gray-700 dark:text-white" />, title: 'Authentication & Security', description: 'Implementing secure authentication using Spring Security, JWT, and Firebase Auth, ensuring data protection and user privacy.', link: '' },
];

const Services = ({ }) => {
    return (
        <div id='services' className=' w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
            <p className=' text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I design and develop high-performance web applications with a focus on efficiency, scalability, and seamless user experience. Whether it’s UI/UX, full-stack solutions, or API integrations, I build robust and maintainable systems tailored to business needs.</p>
            <div className='text-center grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index}
                        className='border border-gray-400 rounded-lg px-8 py-10 flex flex-col items-center
                    hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                        {icon}
                        <h3 className=' text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className=' text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
