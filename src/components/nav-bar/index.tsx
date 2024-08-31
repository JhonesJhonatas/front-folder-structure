import { GoComment, GoFileDirectory, GoHome, GoInfo } from 'react-icons/go'

import { NavItem, NavItems } from './nav-items';
import { LanguageSwitch } from './language-switch';

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: GoHome },
  { label: 'Explanation', href: '/explanation', icon: GoInfo },
  { label: 'Discussion', href: '/discussion', icon: GoComment },
]

export function NavBar() {
  return (
    <header className="p-4 bg-zinc-800 flex items-center justify-center">
      <div className="flex items-center justify-between w-8/12">
        <div className="flex items-center gap-2">
          <GoFileDirectory size={24} />
          <span className="font-bold" >FrontEnd Folder Architeture</span>
        </div>
        <div className='flex items-center gap-2'>
          <NavItems items={navItems} />
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}