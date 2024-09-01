import { Outlet } from 'react-router-dom'

import { NavBar } from '@/components'

export function DefaultLayout() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <main className="w-8/12 mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
