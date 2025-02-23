import { workData } from '@/assets/assets'
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Work = () => {
  return (
    <div id='work' className=' w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
            <p className=' text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>

            <div>
                {workData.map((project, index)=>(
                    <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div>
                            <h2></h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
        {workData.map((work, index) => (
          <div
            className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group cursor-pointer"
            key={index}
          >
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 mb-4"
              style={{ backgroundImage: `url(${work.bgImage})` }}
            ></div>

            <div className="p-5 w-full flex flex-col flex-grow transition-all duration-500 group-hover:-translate-y-2">
              <h2 className="font-semibold text-lg dark:text-white text-center">
                {work.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-justify flex-grow">
                {work.description}
              </p>

              <div className="mt-10 flex justify-between items-center">
                {/* <Link href={work.website} target="_blank" passHref> */}
                  <span className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                    <CgWebsite className="text-xl" /> 
                    Live Demo
                  </span>
                {/* </Link> */}

                {/* <Link href={work.github} target="_blank" passHref> */}
                  <span className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-gray-600 transition-colors cursor-pointer">
                    <BsGithub className="text-xl" /> 
                    GitHub
                  </span>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
