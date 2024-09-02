import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import hooksMD from './docs/hooks.md'
import { PageFooter } from './components/page-footer'
import { Divider } from '@/components'

export function Hooks() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>{hooksMD}</Markdown>
      <div className="flex flex-col gap-4">
        <Divider />
        <PageFooter
          backLabel="Services"
          backPath="/explanation/services"
          nextLabel="Páginas"
          nextPath="/explanation/pages"
        />
      </div>
    </div>
  )
}
