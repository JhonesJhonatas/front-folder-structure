import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import overviewMD from './docs/overview.md'
import { PageFooter } from './components/page-footer'
import { Divider } from '@/components'

export function Overview() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>{overviewMD}</Markdown>
      <div className="flex flex-col gap-4">
        <Divider />
        <PageFooter
          nextLabel="Arquitetura Modular"
          nextPath="/explanation/modular-architecture"
        />
      </div>
    </div>
  )
}
