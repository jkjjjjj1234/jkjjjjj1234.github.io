import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-light-gray p-6">
      <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
      <p className="mt-2 text-sm text-slate">{project.summary}</p>

      <p className="mt-4 text-xs font-semibold tracking-wide text-slate-light uppercase">
        주요 역할
      </p>
      <p className="mt-1 text-sm text-slate">{project.role}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-light-gray px-3 py-1 text-xs font-medium text-slate"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1.5 text-sm text-slate">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm">
        <span className="text-slate-light">Contribution {project.contribution}</span>
        {project.hasDetailPage ? (
          <Link
            to={project.path}
            className="shrink-0 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            상세 보기
          </Link>
        ) : (
          <span className="shrink-0 rounded-md bg-light-gray px-4 py-2 text-sm font-medium text-slate-light">
            상세 페이지 준비 중
          </span>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
