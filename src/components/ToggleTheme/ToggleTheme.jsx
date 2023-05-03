import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

const ToggleTheme = () => {

  const pageClasses = document.documentElement.classList;

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    systemPreference && pageClasses.add('dark')
  })

  const toogle = () => {
    pageClasses.toggle('dark')
  }

  return (
    <div className='hidden sm:block'>
      <MoonIcon className='h-8 text-gray-100 block dark:hidden cursor-pointer' onClick={toogle} />
      <SunIcon className='h-8 text-gray-100 hidden dark:block cursor-pointer' onClick={toogle} />
    </div>
  )
}

export default ToggleTheme