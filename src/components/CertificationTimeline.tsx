import { certifications } from '../data/certifications'

const sorted = [...certifications].sort((a, b) => b.date.localeCompare(a.date))

function CertCard({
  name,
  issuer,
  date,
  align,
}: {
  name: string
  issuer: string
  date: string
  align: 'left' | 'right'
}) {
  return (
    <div
      className={`rounded-lg border border-light-gray bg-white px-4 py-3 shadow-sm ${
        align === 'right' ? 'text-right' : ''
      }`}
    >
      <p className="text-sm font-semibold leading-snug text-navy">{name}</p>
      <p className="mt-0.5 text-xs text-slate">{issuer}</p>
      <time className="mt-1 block text-xs font-medium text-slate-light">{date}</time>
    </div>
  )
}

function CertificationTimeline() {
  return (
    <div className="mt-10">
      {/* Desktop: zigzag (md+) */}
      <div className="relative hidden md:block">
        <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-slate-light/40" />
        <ol className="space-y-5">
          {sorted.map((cert, i) => {
            const isLeft = i % 2 === 0
            return (
              <li key={cert.id} className="relative flex items-center">
                {/* Left slot */}
                <div className="flex flex-1 items-center justify-end gap-3">
                  {isLeft && (
                    <>
                      <CertCard
                        name={cert.name}
                        issuer={cert.issuer}
                        date={cert.date}
                        align="right"
                      />
                      <div className="h-px w-6 shrink-0 bg-slate-light/40" />
                    </>
                  )}
                </div>

                {/* Center dot */}
                <div className="relative z-10 h-[11px] w-[11px] shrink-0 rounded-full border-2 border-accent bg-white" />

                {/* Right slot */}
                <div className="flex flex-1 items-center justify-start gap-3">
                  {!isLeft && (
                    <>
                      <div className="h-px w-6 shrink-0 bg-slate-light/40" />
                      <CertCard
                        name={cert.name}
                        issuer={cert.issuer}
                        date={cert.date}
                        align="left"
                      />
                    </>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Mobile: single column (<md) */}
      <div className="relative md:hidden">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-light/40" />
        <ol className="space-y-7">
          {sorted.map((cert) => (
            <li key={cert.id} className="relative pl-8">
              <span className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-accent bg-white" />
              <time className="block text-xs font-medium tracking-wide text-slate-light">
                {cert.date}
              </time>
              <p className="mt-0.5 text-sm font-semibold text-navy">{cert.name}</p>
              <p className="text-xs text-slate">{cert.issuer}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default CertificationTimeline
