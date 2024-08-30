import { Sidebar } from "./components/sidebar"

const sidebarItems = [
  {
    label: 'Motivação',
    id: 'motivation'
  },
  {
    label: 'Arquitetura Modular',
    id: 'modular-architecture'
  },
  {
    label: 'Services',
    id: 'services'
  },
  {
    label: 'Hooks',
    id: 'hooks'
  },
  {
    label: 'Páginas',
    id: 'pages'
  }
]

export function Explanation() {

  return (
    <div className="flex gap-8">
      <Sidebar items={sidebarItems} />
      <h1>Explanation</h1>
    </div>
  )
}