import { useMemo } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const containerVariants = tv({
  base: 'w-full flex items-center gap-4',
  variants: {
    items: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
    },
  },
})

const buttonVariants = tv({
  base: 'px-2 py-8 rounded bg-zinc-800 bg-opacity-50 w-2/4 flex flex-col gap-1 items-center border-2 border-zinc-800 cursor-pointer hover:bg-opacity-100 transition-all',
  variants: {},
})

interface PageFooterProps {
  backLabel?: string
  backPath?: string
  nextLabel?: string
  nextPath?: string
}

export function PageFooter({
  backLabel,
  backPath,
  nextLabel,
  nextPath,
}: PageFooterProps) {
  const containerAlign = useMemo(() => {
    if (backLabel && nextLabel && backPath && nextPath) return 'center'

    if (backLabel && backPath && !nextLabel && !nextPath) return 'start'

    if (nextLabel && nextPath && !backLabel && !backPath) return 'end'

    return 'center'
  }, [backLabel, backPath, nextLabel, nextPath])

  return (
    <div className={containerVariants({ items: containerAlign })}>
      {backLabel && backPath ? (
        <NavLink to={backPath} className={buttonVariants()}>
          <div className="flex items-center gap-2 text-zinc-400">
            <FiChevronLeft />
            <span>Voltar para</span>
          </div>
          <span className="font-bold">{backLabel}</span>
        </NavLink>
      ) : null}
      {nextLabel && nextPath ? (
        <NavLink to={nextPath} className={buttonVariants()}>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Avançar para</span>
            <FiChevronRight />
          </div>
          <span className="font-bold">{nextLabel}</span>
        </NavLink>
      ) : null}
    </div>
  )
}
