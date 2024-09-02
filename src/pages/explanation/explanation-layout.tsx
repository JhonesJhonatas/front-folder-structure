import { Sidebar } from './components/sidebar'
import { Outlet } from 'react-router-dom'

export function ExplanationLayout() {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-6rem)] overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}
