import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'

const ABOUT_KEYWORDS = [
  {
    title: '사내 IT 인프라 전체 운영',
    description: '19층 규모 병원 빌딩의 IT 인프라를 처음부터 끝까지 책임지고 운영합니다.',
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

const PLACEHOLDER_SECTIONS = [
  { id: 'career', title: 'Career' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

function Home() {
  return (
    <Layout>
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle
          eyebrow="About"
          title="병원 IT 인프라를 책임지는 시스템 엔지니어"
          description="병원 빌딩의 사내 IT 인프라를 전체적으로 운영하며, 장애가 발생하면 원인을 분석하고 재발을 방지하는 구조로 개선해왔습니다. 서버·NAS·네트워크·보안·백업·CCTV 등 다양한 영역을 다루면서도, 현장에서 사용자를 직접 지원하고 문제를 해결하는 것을 우선으로 삼았습니다."
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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionTitle
            eyebrow="Operation Philosophy"
            title="운영은 복구에서 끝나지 않고, 재발 방지로 완성된다고 생각합니다."
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

      {PLACEHOLDER_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionTitle title={section.title} />
        </section>
      ))}
    </Layout>
  )
}

export default Home
