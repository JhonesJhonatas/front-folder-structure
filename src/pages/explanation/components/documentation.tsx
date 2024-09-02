import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

interface SubTitleProps {
  children: ReactNode
}

interface DocumentationProps {
  children: ReactNode
}

interface TextProps {
  children: ReactNode
}

function Title({ children }: TitleProps) {
  return <h1 className="text-4xl font-bold">{children}</h1>
}

function SubTitle({ children }: SubTitleProps) {
  return <h1 className="text-2xl font-bold">{children}</h1>
}

export function Text({ children }: TextProps) {
  return <span className="text-lg text-zinc-300">{children}</span>
}

export function Documentation({ children }: DocumentationProps) {
  return <div className="flex flex-col gap-4 flex-1">{children}</div>
}

Documentation.Title = Title
Documentation.SubTitle = SubTitle
Documentation.Text = Text
