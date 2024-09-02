import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import mdText from './docs/overview.md'

export function Overview() {
  return (
    <div className="flex-1 prose-lg prose-slate">
      <Markdown rehypePlugins={[rehypeHighlight]}>{mdText}</Markdown>
    </div>
  )
}
