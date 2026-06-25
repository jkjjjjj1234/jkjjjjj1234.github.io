interface DocumentCardProps {
  title: string
  description: string
  href: string
}

function DocumentCard({ title, description, href }: DocumentCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg border border-light-gray p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-navy">{title}</h3>
        <p className="mt-1 text-sm text-slate">{description}</p>
      </div>
      <a
        href={href}
        download
        className="shrink-0 rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-light-gray"
      >
        PDF 다운로드
      </a>
    </div>
  )
}

export default DocumentCard
