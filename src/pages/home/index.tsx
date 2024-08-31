import codePrint from '@/assets/code-print.png'

import { useTranslation } from 'react-i18next'

export function Home() {
  const {t} = useTranslation()
  return (
    <div className="flex flex-col gap-4">
      <section className='flex justify-between'>
        <div className='flex flex-col gap-8 justify-center'>
          <h1 className='text-8xl font-bold'>{t('home.title')}</h1>
          <p className='text-4xl font-thin'>
            {t('home.description')}
          </p>
        </div>
        <img src={codePrint} className='w-6/12 rounded shadow-xl' />
      </section>
    </div>
  )
}