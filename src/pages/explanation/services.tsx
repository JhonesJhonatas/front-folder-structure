import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import servicesMD from './docs/services.md'
import { PageFooter } from './components/page-footer'
import { Divider } from '@/components'

export function Services() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>{servicesMD}</Markdown>
      <div className="flex flex-col gap-4">
        <Divider />
        <PageFooter
          backLabel="Arquitetura Modular"
          backPath="/explanation/modular-architecture"
          nextLabel="Hooks"
          nextPath="/explanation/hooks"
        />
      </div>
    </div>
  )
}
