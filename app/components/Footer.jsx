import React from 'react'

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; {currentYear} Eric Guan. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
