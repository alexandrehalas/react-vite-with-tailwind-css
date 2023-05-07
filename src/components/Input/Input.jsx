import React from 'react'

const Input = ({ type, placeholder, required }) => {
    return (
        <input type={type} placeholder={placeholder} required={required} className='dark:bg-graySystem-200 text-graySystem-200 dark:text-gray-200 rounded-full py-1 pl-5 w-full max-w-lg outline-none' />
    )
}

export default Input