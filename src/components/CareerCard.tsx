import type { CareerEntry } from '../data/career'

interface CareerCardProps {
  entry: CareerEntry
}

function CareerCard({ entry }: CareerCardProps) {
  if (entry.highlight) {
    return (
      <div className="rounded-lg border border-light-gray p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-navy">{entry.company}</h3>
          <span className="text-sm text-slate-light">{entry.period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {entry.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-light-gray p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-sm font-semibold text-navy">
          {entry.company} · {entry.role}
        </h4>
        <span className="text-xs text-slate-light">{entry.period}</span>
      </div>
      <ul className="mt-2 space-y-1 text-xs text-slate">
        {entry.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  )
}

export default CareerCard
