import codePrint from '@/assets/code-print.png'

export function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section className='flex justify-between'>
        <div className='flex flex-col gap-8 justify-center'>
          <h1 className='text-8xl font-bold'>FrontEnd Folder Architeture</h1>
          <p className='text-4xl font-thin'>
            This project is a example of a scalable FrontEnd Folder Architeture.
          </p>
        </div>
        <img src={codePrint} className='w-6/12 rounded shadow-xl' />
      </section>
    </div>
  )
}