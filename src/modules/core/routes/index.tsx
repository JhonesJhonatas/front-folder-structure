import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '@/modules/core/layouts/default-layout'

import {
  Home,
  ExplanationLayout,
  Discussion,
  ModularArchitecture,
  Services,
  Hooks,
  Pages,
  Overview,
} from '@/pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explanation" element={<ExplanationLayout />}>
          <Route path="/explanation/overview" element={<Overview />} />
          <Route
            path="/explanation/modular-architecture"
            element={<ModularArchitecture />}
          />
          <Route path="/explanation/services" element={<Services />} />
          <Route path="/explanation/hooks" element={<Hooks />} />
          <Route path="/explanation/pages" element={<Pages />} />
        </Route>
        <Route path="/discussion" element={<Discussion />} />
      </Route>
    </Routes>
  )
}
