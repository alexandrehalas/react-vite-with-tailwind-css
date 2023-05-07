import React from 'react'

const Input = ({ type, placeholder, required }) => {
    return (
        <input type={type} placeholder={placeholder} required={required} className='dark:bg-graySystem-200 text-graySystem-200 dark:text-gray-200 rounded-full py-1 pl-5 w-full max-w-lg outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-blueSystem-200 focus:dark:border-blueSystem-100 focus:invalid:border-2 focus:invalid:border-red-400 focus:invalid:dark:border-2 focus:invalid:dark:border-red-400' />
    )
}

export default Input