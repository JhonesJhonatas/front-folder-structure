import { NavLink } from 'react-router-dom'

type Item = {
  label: string
  path: string
}

interface SidebarProps {
  items: Item[]
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-2 bg-zinc-800 p-4 rounded">
      {items.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            className="p-2 cursor-pointer hover:bg-slate-700 transition-all rounded"
          >
            {item.label}
          </NavLink>
        )
      })}
    </aside>
  )
}
