import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import DocumentCard from '../../components/DocumentCard'

const TECH_STACK = ['Oracle Cloud', 'Oracle Linux 9', 'Docker', 'Uptime Kuma', 'Tailscale', 'Telegram Bot']

const BUILD_STEPS = [
  'Oracle Cloud Free Tier',
  'Oracle Linux 9',
  'SSH',
  'Swap 보강',
  'Tailscale',
  'Docker',
  'Uptime Kuma 컨테이너',
  '관리자 페이지는 Tailscale 내부망 전용',
  'NAS/Oracle 서버/Cafe24 웹서버/Self 모니터링 등록',
  'Telegram Bot 알림 연동',
]

const GOALS = [
  '개인 NAS·웹서버·클라우드 서버 상태를 한 화면에서 확인하는 통합 모니터링 환경 구성',
  '장애 발생 시 Telegram 알림으로 빠르게 인지하고 복구 여부 확인하는 체계 마련',
  '관리자 페이지를 공인 인터넷에 직접 노출하지 않고 Tailscale 내부망으로 접근 범위 제한',
  '포트폴리오 메인 및 공개 Status Page와 연계 가능한 기반 구축',
]

const TECH_TABLE = [
  ['Oracle Cloud Free Tier', '모니터링 서버가 동작하는 클라우드 인프라'],
  ['Oracle Linux 9', '서버 운영체제'],
  ['Docker', 'Uptime Kuma 컨테이너 실행 및 재시작 정책 적용'],
  ['Uptime Kuma', '서버/서비스 가용성 모니터링, 알림, Status Page 구성'],
  ['Tailscale', '관리자 페이지 접근 제한 및 사설망 기반 장비 연결'],
  ['Telegram Bot', '장애 발생 및 복구 알림 수신'],
  ['NAS / Web(Cafe24) / Cloud 서버', '모니터링 대상 시스템'],
]

const SECURITY_TABLE = [
  ['관리자 접근 제한', '관리자 페이지는 공인 IP가 아닌 Tailscale 내부 IP로만 접근'],
  ['민감정보 비노출', '공개 페이지·문서에 실제 IP·토큰·계정명·세부 장비명 미기재'],
  ['SSH 접속', '비밀번호 로그인 대신 SSH Key 기반 접속'],
  ['포트 노출 최소화', '관리용 포트는 공인 인터넷에 직접 공개하지 않음. 향후 공개 Status Page만 HTTPS 분리 예정'],
  ['알림 보안', 'Telegram Bot Token 외부 공개 금지, 필요 시 재발급 가능하도록 관리'],
]

const OPERATION_ITEMS = [
  'Docker Volume로 설정·모니터링 데이터 보존',
  '컨테이너 재시작 정책 always → 서버 재부팅 후 자동 복구',
  '기본 포트 직접 노출 대신 Tailscale IP에 포트 바인딩(내부망 전용 접근)',
  'NAS / Cloud Server / Web Server / Monitoring Server 등 공개 가능한 명칭으로 대상 정리',
]

const MONITOR_TABLE = [
  ['Cloud Server', 'Ping / TCP / Self Check', 'Cloud Server'],
  ['Monitoring Server', 'HTTP(s) Check', 'Monitoring Server'],
  ['NAS Server', 'Ping 또는 Tailscale 기반 체크', 'NAS Server'],
  ['Web Server (Cafe24 WordPress)', 'HTTP(s), TCP 443', 'Web Server'],
  ['Internal Device', 'Ping 또는 내부 장비 체크', 'Internal Device (선택적 노출)'],
]

const ALERT_ITEMS = [
  'Telegram Bot 생성 후 Uptime Kuma Notification에 Bot Token·Chat ID 등록',
  '장애 발생·복구 시 알림 수신 확인',
  '외부 유료 SMS 없이 무료 알림 채널로 장애 대응 흐름 구성',
]

const RESULT_ITEMS = [
  '가동률·응답시간·장애 이력을 대시보드에서 확인',
  '공개 상태페이지로 핵심 서비스 상태 노출',
  '관리자 페이지를 Tailscale 내부망 전용으로 제한하여 외부 노출 위험 감소',
]

const IMPROVEMENT_TABLE = [
  ['도메인/HTTPS', 'Tailscale 내부 접속 중심', '도메인 적용 후 공개 Status Page만 HTTPS 외부 공개'],
  ['리소스 모니터링', '가용성 중심', 'Beszel·Netdata·Node Exporter 등으로 CPU/RAM/Disk/Network 확장'],
  ['서버 스펙', '무료 저사양 인스턴스', '필요 시 Oracle A1 Flex 등으로 분리 운영'],
  ['백업', 'Docker Volume 기반 보존', '설정 데이터 정기 백업 스크립트 구성'],
  ['문서화', '구축 결과 중심', '포트폴리오 프로젝트 상세 서브페이지로 전환(=본 페이지)'],
]

interface DetailSectionProps {
  eyebrow: string
  title: string
  children: ReactNode
}

function DetailSection({ eyebrow, title, children }: DetailSectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-1 text-xl font-bold text-navy sm:text-2xl">{title}</h2>
      <div className="mt-5 text-left">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-slate sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InfoTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-light-gray">
      <table className="w-full text-left text-sm">
        <thead className="bg-light-gray text-slate">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-light-gray">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 align-top text-slate ${cellIndex === 0 ? 'font-medium text-navy' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ImageBlock({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="rounded-lg border border-light-gray p-2">
      <img src={src} alt={alt} className="w-full rounded-md" loading="lazy" />
      <figcaption className="mt-2 px-2 pb-1 text-sm text-slate-light">{caption}</figcaption>
    </figure>
  )
}

function UptimeKuma() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <Link to="/" className="text-sm font-medium text-accent hover:text-accent-light">
          ← 메인으로
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-wide text-accent uppercase">Project</p>
        <h1 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
          개인 인프라 통합 모니터링 시스템
        </h1>
        <p className="mt-3 text-slate">
          Oracle Cloud·Docker·Uptime Kuma·Tailscale·Telegram으로 구축한 개인 인프라 모니터링
          환경입니다.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {TECH_STACK.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent px-3 py-1 text-xs font-medium text-accent"
            >
              {item}
            </span>
          ))}
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-medium text-white">
            Contribution 100%
          </span>
        </div>

        <div className="mt-8 rounded-lg border border-light-gray bg-light-gray/40 p-5 text-left">
          <p className="text-sm font-semibold text-navy">Live Demo: 비공개</p>
          <p className="mt-2 text-sm text-slate">
            <span className="font-medium text-navy">Reason</span> 관리자 페이지 및 내부 모니터링
            정보 보호를 위해 Tailscale 내부망에서만 접근 가능하도록 구성
          </p>
          <p className="mt-1 text-sm text-slate">
            <span className="font-medium text-navy">Public Evidence</span> 구성도, 결과 화면,
            Telegram 알림 캡처, PDF 문서 제공
          </p>
        </div>
      </div>

      <DetailSection eyebrow="Overview" title="개요">
        <p className="text-sm text-slate sm:text-base">
          개인 인프라 환경의 가용성을 체계적으로 확인하기 위해 구축한 모니터링 시스템. Oracle
          Cloud의 Linux 서버에 Docker 환경을 구성하고, Uptime Kuma로 NAS·웹서버·클라우드 서버·
          모니터링 서버 자체의 상태를 확인하도록 설계. 장애 발생·복구 시 Telegram Bot으로 알림을
          수신하여 단순 대시보드가 아닌 실제 운영 대응 흐름을 갖춘 형태로 구성.
        </p>
      </DetailSection>

      <DetailSection eyebrow="Background" title="구축 배경·문제">
        <p className="text-sm text-slate sm:text-base">
          개인 NAS·웹서버·클라우드 서버를 여러 곳에서 운용하면서도, 장애가 발생했을 때 이를 즉시
          인지할 방법이 없어 대응이 늦어질 수 있다는 문제가 있었습니다. 또한 관리자 페이지를
          공인 인터넷에 직접 노출하면 보안 위험이 커진다는 점도 함께 해결이 필요했습니다.
        </p>
      </DetailSection>

      <DetailSection eyebrow="Goal" title="목표">
        <BulletList items={GOALS} />
      </DetailSection>

      <DetailSection eyebrow="Environment" title="구축 환경">
        <p className="text-sm text-slate sm:text-base">
          Oracle Cloud Free Tier 인스턴스에 Oracle Linux 9를 설치하고, 아래 순서로 환경을
          구축했습니다.
        </p>
        <ol className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate sm:text-sm">
          {BUILD_STEPS.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-light-gray px-3 py-1.5">{step}</span>
              {index < BUILD_STEPS.length - 1 && <span className="text-slate-light">→</span>}
            </li>
          ))}
        </ol>
      </DetailSection>

      <DetailSection eyebrow="Tech Stack" title="기술 스택 및 역할">
        <InfoTable head={['기술/서비스', '역할']} rows={TECH_TABLE} />
      </DetailSection>

      <DetailSection eyebrow="Role" title="담당 범위·참여율">
        <p className="text-sm text-slate sm:text-base">
          기획부터 설계, 구축, 운영까지 전 과정을 단독으로 수행했습니다. (Contribution 100%)
        </p>
      </DetailSection>

      <DetailSection eyebrow="Architecture" title="아키텍처·망 구성도">
        <ImageBlock
          src="/images/uptime-architecture.png"
          alt="개인 인프라 모니터링 시스템 구성도"
          caption="공개 가능한 수준으로 추상화한 설계도. 실제 공인 IP·Tailscale IP·Telegram Bot Token·장비 고유명 등 민감정보는 문서·공개 페이지에서 제외했습니다."
        />
      </DetailSection>

      <DetailSection eyebrow="Security" title="보안 설계">
        <InfoTable head={['보안 항목', '설계 내용']} rows={SECURITY_TABLE} />
      </DetailSection>

      <DetailSection eyebrow="Operation" title="운영 방식">
        <BulletList items={OPERATION_ITEMS} />
        <div className="mt-6">
          <p className="text-sm font-semibold text-navy">모니터링 항목</p>
          <div className="mt-3">
            <InfoTable head={['대상', '체크 방식', '공개 표기']} rows={MONITOR_TABLE} />
          </div>
        </div>
      </DetailSection>

      <DetailSection eyebrow="Alerting" title="장애 알림 구조">
        <BulletList items={ALERT_ITEMS} />
        <div className="mt-6">
          <ImageBlock
            src="/images/telegram-alert.png"
            alt="Telegram을 통한 장애 발생 및 복구 알림 캡처"
            caption="장애 발생(Down) 및 복구(Up) 시 Telegram Bot으로 즉시 알림을 수신합니다."
          />
        </div>
      </DetailSection>

      <DetailSection eyebrow="Result" title="결과 화면">
        <BulletList items={RESULT_ITEMS} />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ImageBlock
            src="/images/uptime-dashboard.jpeg"
            alt="Uptime Kuma 대시보드 화면"
            caption="모니터링 대상 전체의 온라인 상태와 응답 이력을 확인하는 대시보드입니다."
          />
          <ImageBlock
            src="/images/uptime-monitor-detail.jpeg"
            alt="Uptime Kuma 모니터 상세 화면"
            caption="개별 모니터의 응답 시간, 업타임, 인증서 만료일 등 상세 지표입니다."
          />
        </div>
        <div className="mt-4">
          <ImageBlock
            src="/images/uptime-status-page.jpeg"
            alt="Uptime Kuma 공개 상태 페이지"
            caption="외부에 공개 가능한 형태로 구성한 Status Page입니다."
          />
        </div>
      </DetailSection>

      <DetailSection eyebrow="Next Steps" title="개선 예정">
        <InfoTable head={['구분', '현재 상태', '개선 방향']} rows={IMPROVEMENT_TABLE} />
      </DetailSection>

      <DetailSection eyebrow="Document" title="PDF 다운로드">
        <DocumentCard
          title="Uptime Kuma 프로젝트 포트폴리오"
          description="개인 인프라 모니터링 프로젝트의 구축 배경, 아키텍처, 보안 설계, 운영 결과를 정리한 문서입니다."
          href="/documents/uptime-kuma-portfolio.pdf"
        />
      </DetailSection>

      <DetailSection eyebrow="Links" title="관련 링크">
        <a
          href="https://github.com/jkjjjjj1234"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-md border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-light-gray"
        >
          GitHub 보기
        </a>
      </DetailSection>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <Link
          to="/"
          className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </Layout>
  )
}

export default UptimeKuma
