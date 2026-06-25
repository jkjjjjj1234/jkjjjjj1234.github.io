interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
}

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold tracking-wide text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-slate">{description}</p>}
    </div>
  )
}

export default SectionTitle
