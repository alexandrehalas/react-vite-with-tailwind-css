import ToggleTheme from '../ToggleTheme/ToggleTheme';

export const Header = ({ user }) => {
  return (
    <div className="flex h-20 bg-blueSystem-200 dark:bg-graySystem-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá, {user?.name || 'Usuário'}</span>
      <h1 className="text-gray-100 text-xl sm:cursor-pointer sm:hover:text-2xl">Halas Newsletter</h1>
      <ToggleTheme />
    </div>
  )
}

export default Header;
