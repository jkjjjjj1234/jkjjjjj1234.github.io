import type { SkillCategory } from '../data/skills'

export type SkillLevel = 'primary' | 'secondary' | 'tertiary'

interface SkillGroupProps {
  category: SkillCategory
  level: SkillLevel
}

const LEVEL_STYLES: Record<SkillLevel, { chip: string; label: string }> = {
  primary: { chip: 'bg-navy text-white', label: '실무 운영' },
  secondary: { chip: 'border border-accent text-accent', label: '구축·도입' },
  tertiary: { chip: 'border border-dashed border-slate-light text-slate', label: '확장 중' },
}

function SkillGroup({ category, level }: SkillGroupProps) {
  const styles = LEVEL_STYLES[level]

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-navy">{category.title}</h3>
        <span className="rounded-full bg-light-gray px-2 py-0.5 text-xs font-medium text-slate">
          {styles.label}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate">{category.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span key={item} className={`rounded-full px-3 py-1 text-xs font-medium ${styles.chip}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
