import React from 'react';

const Form = ({ onSubmit }) => {

    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email })
    }

    return (
        <form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center -mt-20 mx-5 gap-10'>
            <input type='text' className='dark:bg-graySystem-200 text-graySystem-200 dark:text-gray-200 rounded-full py-1 pl-5 w-full max-w-lg outline-none' placeholder='Insira seu nome' />
            <input type='email' placeholder='Insira seu e-mail' className='dark:bg-graySystem-200 text-graySystem-200 dark:text-gray-200 rounded-full py-1 pl-5 w-full max-w-lg outline-none' />
            <button type='submit' className='bg-blueSystem-100 dark:bg-graySystem-200 rounded-full text-gray-200 py-1 px-5 uppercase outline-none w-full max-w-sm'>Seguir</button>
        </form>
    )
}

export default Form