import { GoComment, GoFileDirectory, GoHome, GoInfo } from 'react-icons/go'

import { NavItem, NavItems } from './nav-items'
import { LanguageSwitch } from './language-switch'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export function NavBar() {
  const { t } = useTranslation()

  const navItems: NavItem[] = useMemo(() => {
    return [
      { label: t('navBar.items.home'), href: '/', icon: GoHome },
      {
        label: t('navBar.items.explanation'),
        href: '/explanation',
        icon: GoInfo,
      },
      {
        label: t('navBar.items.discution'),
        href: '/discussion',
        icon: GoComment,
      },
    ]
  }, [t])

  return (
    <header className="p-4 bg-zinc-800 flex items-center justify-center">
      <div className="flex items-center justify-between w-8/12">
        <div className="flex items-center gap-2">
          <GoFileDirectory size={24} />
          <span className="font-bold">{t('navBar.title')}</span>
        </div>
        <div className="flex items-center gap-2">
          <NavItems items={navItems} />
          <LanguageSwitch />
        </div>
      </div>
    </header>
  )
}
