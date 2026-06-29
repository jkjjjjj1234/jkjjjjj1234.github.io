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
      className={`w-fit max-w-[14rem] rounded-lg border border-light-gray bg-white px-3 py-2 shadow-sm ${
        align === 'right' ? 'text-right' : ''
      }`}
    >
      <p className="text-sm font-semibold leading-snug text-navy">{name}</p>
      <p className="text-xs text-slate">{issuer}</p>
      <time className="block text-xs font-medium text-slate-light">{date}</time>
    </div>
  )
}

function CertificationTimeline() {
  const leftCerts = sorted.filter((_, i) => i % 2 === 0)
  const rightCerts = sorted.filter((_, i) => i % 2 !== 0)

  return (
    <div className="mt-10">
      {/* Desktop: two-column staggered (md+) */}
      <div className="relative hidden md:block">
        {/* Center vertical line */}
        <div className="absolute left-1/2 inset-y-0 w-px -translate-x-1/2 bg-slate-light/40" />

        <div className="grid grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-2">
            {leftCerts.map((cert) => (
              <div key={cert.id} className="flex items-center">
                <div className="ml-auto">
                  <CertCard name={cert.name} issuer={cert.issuer} date={cert.date} align="right" />
                </div>
                <div className="h-px w-6 shrink-0 bg-slate-light/40" />
                <div className="z-10 -mr-[5.5px] h-[11px] w-[11px] shrink-0 rounded-full border-2 border-accent bg-white" />
              </div>
            ))}
          </div>

          {/* Right column — staggered down by half a slot */}
          <div className="mt-9 flex flex-col gap-2">
            {rightCerts.map((cert) => (
              <div key={cert.id} className="flex items-center">
                <div className="z-10 -ml-[5.5px] h-[11px] w-[11px] shrink-0 rounded-full border-2 border-accent bg-white" />
                <div className="h-px w-6 shrink-0 bg-slate-light/40" />
                <div>
                  <CertCard name={cert.name} issuer={cert.issuer} date={cert.date} align="left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: single column (<md) */}
      <div className="relative md:hidden">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-light/40" />
        <ol className="space-y-5">
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
