import React from 'react'


const Header = ({title,message}) => {
  return (
    <div className='relative mt-5 bg-gray-600'>
        <h2 className='w-full text-4xl text-white font-bold text-center sm:text-4xl md:text-5xl'>{title}</h2>
        <p className='w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-300 intro sm:max-w-3xl'>{message}</p>
    </div>
  )
}

export default Header