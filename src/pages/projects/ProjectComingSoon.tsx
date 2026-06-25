import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import { projects } from '../../data/projects'

function ProjectComingSoon() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Project</p>
        <h1 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
          {project?.title ?? '프로젝트'}
        </h1>
        <p className="mt-4 text-slate">상세 페이지는 준비 중입니다.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </Layout>
  )
}

export default ProjectComingSoon
