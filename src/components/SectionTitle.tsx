import type { ReactNode } from 'react'

interface SectionTitleProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  tone?: 'dark' | 'light'
}

function SectionTitle({ eyebrow, title, description, tone = 'dark' }: SectionTitleProps) {
  const isLight = tone === 'light'

  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold tracking-wide uppercase ${
            isLight ? 'text-accent-light' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`[word-break:keep-all] [text-wrap:balance] text-2xl font-bold sm:text-3xl ${isLight ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 [word-break:keep-all] [text-wrap:pretty] ${isLight ? 'text-slate-light' : 'text-slate'}`}>{description}</p>
      )}
    </div>
  )
}

export default SectionTitle
