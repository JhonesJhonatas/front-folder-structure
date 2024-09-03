import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import typesMD from './docs/types.md'
import { PageFooter } from './components/page-footer'
import { Divider } from '@/components'

export function Types() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>{typesMD}</Markdown>
      <div className="flex flex-col gap-4">
        <Divider />
        <PageFooter
          backLabel="Arquitetura Modular"
          backPath="/explanation/modular-architecture"
          nextLabel="Services"
          nextPath="/explanation/services"
        />
      </div>
    </div>
  )
}
