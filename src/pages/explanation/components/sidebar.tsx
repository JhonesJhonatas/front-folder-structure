import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const itemVariants = tv({
  base: 'p-2 cursor-pointer hover:bg-slate-700 transition-all rounded [active]:bg-blue-600 font-bold',
  variants: {
    isActive: {
      true: 'text-blue-500',
      false: '',
    },
  },
})

type Item = {
  label: string
  path: string
}

export function Sidebar() {
  const { t } = useTranslation()

  const sidebarItems: Item[] = useMemo(() => {
    return [
      {
        label: t('explanation.sidebar.overview'),
        path: '/explanation/overview',
      },
      {
        label: t('explanation.sidebar.modularArchitecture'),
        path: '/explanation/modular-architecture',
      },
      {
        label: t('explanation.sidebar.services'),
        path: '/explanation/services',
      },
      {
        label: t('explanation.sidebar.hooks'),
        path: '/explanation/hooks',
      },
      {
        label: t('explanation.sidebar.pages'),
        path: '/explanation/pages',
      },
    ]
  }, [t])

  return (
    <aside className="flex flex-col gap-2 bg-zinc-800 p-4 rounded">
      {sidebarItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => itemVariants({ isActive })}
          >
            {item.label}
          </NavLink>
        )
      })}
    </aside>
  )
}
