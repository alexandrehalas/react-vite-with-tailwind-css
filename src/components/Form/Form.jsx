import React from 'react';
import Input from '../Input/Input';

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
            <Input type={'text'} placeholder={'Insira seu nome'} required={true} />
            <Input type={'email'} placeholder={'Insira seu e-mail'} required={true} />
            <button type='submit' className='bg-blueSystem-100 dark:bg-graySystem-200 rounded-full text-gray-200 py-1 px-5 uppercase outline-none w-full max-w-sm hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black'>Seguir</button>
        </form>
    )
}

export default Form