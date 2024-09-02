import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import pagesMD from './docs/pages.md'
import { PageFooter } from './components/page-footer'
import { Divider } from '@/components'

export function Pages() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>{pagesMD}</Markdown>
      <div className="flex flex-col gap-4">
        <Divider />
        <PageFooter backLabel="Hooks" backPath="/explanation/hooks" />
      </div>
    </div>
  )
}
