type Item = {
  label: string
  id: string
}

interface SidebarProps {
  items: Item[]
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-2 bg-zinc-800 p-4 rounded">
      {items.map((item, index) => {
        return (
          <span key={index} className="p-2 cursor-pointer hover:bg-slate-700 transition-all rounded">
            {item.label}
          </span>
        )
      })}
    </aside>
  )
}