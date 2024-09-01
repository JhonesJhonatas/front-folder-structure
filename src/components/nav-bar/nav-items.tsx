import { NavLink, useLocation } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const navItemVariants = tv({
  base: 'flex items-center gap-2 py-1 px-2 rounded-md transition-all',
  variants: {
    isActive: {
      true: 'bg-blue-600',
      false: 'bg-zinc-700 hover:bg-zinc-600',
    },
  },
})

export type NavItem = {
  label: string
  href: string
  icon: React.ElementType
}

interface NavItemsProps {
  items: NavItem[]
}

export function NavItems({ items }: NavItemsProps) {
  const { pathname } = useLocation()

  return (
    <div className="flex items-center gap-2">
      {items.map(({ label, href, icon: Icon }, index) => {
        return (
          <NavLink
            key={index}
            to={href}
            className={navItemVariants({ isActive: pathname === href })}
          >
            <Icon size={16} />
            <span className="text-sm">{label}</span>
          </NavLink>
        )
      })}
    </div>
  )
}
