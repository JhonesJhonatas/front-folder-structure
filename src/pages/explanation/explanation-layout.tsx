import { Sidebar } from "./components/sidebar"
import { Outlet } from 'react-router-dom'

const sidebarItems = [
  {
    label: 'Motivação',
    path: '/explanation/'
  },
  {
    label: 'Arquitetura Modular',
    path: '/explanation/modular-architecture'
  },
  {
    label: 'Services',
    path: '/explanation/services'
  },
  {
    label: 'Hooks',
    path: '/explanation/hooks'
  },
  {
    label: 'Páginas',
    path: '/explanation/pages'
  }
]

export function ExplanationLayout() {

  return (
    <div className="flex gap-8">
      <Sidebar items={sidebarItems} />
      <Outlet />
    </div>
  )
}