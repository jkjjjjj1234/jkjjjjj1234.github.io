import Layout from '../components/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import CareerCard from '../components/CareerCard'
import SkillGroup, { type SkillLevel } from '../components/SkillGroup'
import ProjectCard from '../components/ProjectCard'
import DocumentCard from '../components/DocumentCard'
import CertificationTimeline from '../components/CertificationTimeline'
import { careerData } from '../data/career'
import { skillCategories } from '../data/skills'
import { projects } from '../data/projects'

const CONTACT_EMAIL = 'jkjjjjj1234@naver.com'
const GITHUB_URL = 'https://github.com/jkjjjjj1234'

const ABOUT_KEYWORDS = [
  {
    title: '온프레미스 인프라 전체 운영',
    description: '서버·네트워크·보안·백업·모니터링 전 영역을 처음부터 끝까지 직접 책임지고 운영합니다.',
  },
  {
    title: '장애 대응·원인 분석',
    description: '장애 발생 시 신속히 복구하고 원인을 끝까지 분석합니다.',
  },
  {
    title: '재발 방지 개선',
    description: '분석한 원인을 바탕으로 같은 장애가 반복되지 않도록 구조를 개선합니다.',
  },
  {
    title: '서버·NAS·네트워크·보안·백업·CCTV',
    description: '인프라 전 영역을 폭넓게 다루며 운영 기준을 일관되게 적용합니다.',
  },
  {
    title: '사용자 지원·현장 해결',
    description: '현장에서 직접 사용자를 지원하고 문제를 해결합니다.',
  },
]

const OPERATION_PRINCIPLES = [
  {
    title: '빠른 복구 우선',
    description: '장애 발생 시 서비스 영향을 최소화하기 위해 무엇보다 빠른 복구를 우선합니다.',
  },
  {
    title: '원인 기록·재발 가능성 축소',
    description: '복구 이후에는 원인을 기록하고 재발 가능성을 줄이는 개선까지 이어갑니다.',
  },
  {
    title: '백업·접근권한·보안정책·모니터링을 운영 기준으로 관리',
    description: '백업, 접근권한, 보안정책, 모니터링을 일관된 운영 기준으로 관리합니다.',
  },
  {
    title: '현장 대응과 구조 개선 병행',
    description: '현장에서의 즉각적인 대응과 구조적인 개선을 함께 추진합니다.',
  },
]

const SKILL_LEVELS: SkillLevel[] = ['primary', 'secondary', 'tertiary', 'quaternary']

function Home() {
  useScrollReveal()

  return (
    <Layout>
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
        <SectionTitle
          eyebrow="About"
          title="인프라 전반을 직접 운영하고 개선하는 시스템 엔지니어"
          description="서버·NAS·네트워크·보안·백업·CCTV 등 온프레미스 인프라 전 영역을 직접 운영하며, 장애 원인을 분석하고 재발을 방지하는 구조로 꾸준히 개선해왔습니다. 병원·데이터센터 등 다양한 현장을 거치며 사용자 지원과 인프라 안정화를 함께 추진했습니다."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_KEYWORDS.map((keyword) => (
            <div
              key={keyword.title}
              className="rounded-lg border border-light-gray p-5 text-left"
            >
              <h3 className="font-semibold text-navy">{keyword.title}</h3>
              <p className="mt-2 text-sm text-slate">{keyword.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
          <SectionTitle
            eyebrow="Operation Philosophy"
            title={<>운영은 복구에서 끝나지 않고,<br />재발 방지로 완성된다고 생각합니다.</>}
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {OPERATION_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.title}
                className="rounded-lg bg-white p-5 text-left shadow-sm"
              >
                <span className="text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 font-semibold text-navy">{principle.title}</h3>
                <p className="mt-2 text-sm text-slate">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
        <SectionTitle
          eyebrow="Career"
          title="Career Summary"
          description="병원 IT 인프라 운영을 중심으로, 서버 H/W 구축과 그룹웨어·NAS 도입 경험을 쌓아왔습니다."
        />
        <div className="mt-10 space-y-6">
          {careerData
            .filter((entry) => entry.highlight)
            .map((entry) => (
              <CareerCard key={entry.id} entry={entry} />
            ))}
        </div>
        <div className="mt-10">
          <h3 className="text-sm font-semibold tracking-wide text-slate-light uppercase">
            Other Experience
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {careerData
              .filter((entry) => !entry.highlight)
              .map((entry) => (
                <CareerCard key={entry.id} entry={entry} />
              ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
          <SectionTitle
            eyebrow="Skills"
            title="Core Skills"
            description="실무에서 운영한 경험부터 직접 구축·도입한 경험, 개인 프로젝트로 확장 중인 영역까지 수준별로 구분했습니다."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category, index) => (
              <SkillGroup key={category.id} category={category} level={SKILL_LEVELS[index]} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Projects"
          description="실무에서 수행한 인프라 구축·운영 프로젝트와 개인적으로 확장 중인 모니터링 프로젝트입니다."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="certifications" className="bg-light-gray">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
          <SectionTitle eyebrow="Certifications" title="자격증" />
          <CertificationTimeline />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 reveal">
        <SectionTitle eyebrow="Documents" title="문서" />
        <div className="mt-10">
          <DocumentCard
            title="Uptime Kuma 프로젝트 포트폴리오"
            description="개인 인프라 모니터링 프로젝트의 구축 배경, 아키텍처, 보안 설계, 운영 결과를 정리한 문서입니다."
            href="/documents/uptime-kuma-portfolio.pdf"
          />
        </div>
      </section>

      <section id="contact" className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:py-24 reveal">
          <SectionTitle eyebrow="Contact" title="연락하기" tone="light" />
          <p className="mx-auto mt-3 max-w-xl text-slate-light">
            프로젝트나 채용 관련 문의는 이메일로 연락해 주세요.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-light-gray px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              GitHub 보기
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
