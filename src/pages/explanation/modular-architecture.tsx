import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import modularArchitectureMD from './docs/modular-architecture.md'
import { PageFooter } from './components/page-footer'
import { Divider } from '@/components'

export function ModularArchitecture() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>
        {modularArchitectureMD}
      </Markdown>
      <div className="flex flex-col gap-4">
        <Divider />
        <PageFooter
          backLabel="Visão Geral"
          backPath="/explanation/overview"
          nextLabel="Tipagens"
          nextPath="/explanation/types"
        />
      </div>
    </div>
  )
}
