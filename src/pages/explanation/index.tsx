import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <div className="flex gap-8">
      <Sidebar items={sidebarItems} />
      <h1>{t('hello')}</h1>
    </div>
  )
}