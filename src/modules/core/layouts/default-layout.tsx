import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { NavBar } from '@/components'
import { useEffect } from 'react'

export function DefaultLayout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/explanation') navigate('explanation/overview')
  }, [navigate, pathname])

  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <main className="w-8/12 mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
