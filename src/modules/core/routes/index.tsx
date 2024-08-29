import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/modules/core/layouts/default-layout";

import { Home, Explanation, Discussion } from '@/pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/discussion" element={<Discussion />} />
      </Route>
    </Routes>
  )
}