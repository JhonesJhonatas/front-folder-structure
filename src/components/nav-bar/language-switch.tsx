import brazilFlag from '@/assets/flags/brazil.svg'
import unitedStatesFlag from '@/assets/flags/united-states.svg'

import { useTranslation } from 'react-i18next'

export function LanguageSwitch() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-2 rounded bg-zinc-700 p-1">
      <div
        className="cursor-pointer"
        onClick={() => i18n.changeLanguage('pt-BR')}
      >
        <img src={brazilFlag} className="max-w-5" alt="" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => i18n.changeLanguage('en-US')}
      >
        <img src={unitedStatesFlag} className="max-w-5" alt="" />
      </div>
    </div>
  )
}
