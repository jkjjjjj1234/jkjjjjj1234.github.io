export interface Project {
  id: string
  title: string
  summary: string
  role: string
  stack: string[]
  highlights: string[]
  contribution: string
  path: string
  hasDetailPage: boolean
}

export const projects: Project[] = [
  {
    id: 'uptime-kuma',
    title: '개인 인프라 통합 모니터링 시스템',
    summary:
      'Oracle Cloud·Docker·Uptime Kuma·Tailscale·Telegram으로 개인 인프라 모니터링 환경 구축',
    role: '설계·구축·운영 전담',
    stack: ['Oracle Cloud', 'Oracle Linux 9', 'Docker', 'Uptime Kuma', 'Tailscale', 'Telegram Bot'],
    highlights: [
      '관리자 페이지 외부 비공개(Tailscale 내부망 전용)',
      'NAS·Cloud·Web·Self 모니터링 등록',
      'Telegram 즉시 알림, Live Demo 비공개·문서로 증명',
    ],
    contribution: '100%',
    path: '/projects/uptime-kuma',
    hasDetailPage: true,
  },
  {
    id: 'hospital-backup',
    title: '병원 의료 서버 및 NAS 백업 체계 구축',
    summary: 'EMR·PACS·X-Ray 서버 및 워크스테이션, NAS 노후 장비 교체·마이그레이션',
    role: '서버 이전/교체, NAS·백업 운영',
    stack: ['Windows Server', 'NAS', 'EMR', 'PACS', 'X-Ray', 'Medical Workstation', 'Backup Policy'],
    highlights: ['서버 이전/교체 60%', 'NAS·백업 운영 100%'],
    contribution: '서버 이전/교체 60%, NAS·백업 운영 100%',
    path: '/projects/hospital-backup',
    hasDetailPage: false,
  },
  {
    id: 'cctv-private-network',
    title: '수술실 CCTV 폐쇄망 구축 및 운영',
    summary: '수술실 20대 + 일반 100대, 총 120대 규모 CCTV/DVR/워크스테이션 신규 도입·설치',
    role: '설계·구축·운영 전담',
    stack: ['CCTV', 'DVR', 'Workstation', 'Private Network', 'Access Control'],
    highlights: ['총 120대 규모', '폐쇄망 구성', '민감 영상 보호'],
    contribution: '100%',
    path: '/projects/cctv-private-network',
    hasDetailPage: false,
  },
  {
    id: 'security-license',
    title: '전사 보안 솔루션 및 라이선스 관리',
    summary: 'DLP·안티바이러스 도입과 전사 S/W 라이선스·유지보수 계약 총괄',
    role: '보안 솔루션 도입·운영',
    stack: ['DLP', 'Endpoint Security', 'UTM', 'Firewall', 'License Management'],
    highlights: ['엔드포인트 보안 강화', '전사 라이선스·유지보수 계약 총괄'],
    contribution: '운영 담당',
    path: '/projects/security-license',
    hasDetailPage: false,
  },
  {
    id: 'wordpress-privacy',
    title: '홈페이지 유지보수 및 개인정보 DB 정리',
    summary: 'CMS 기반 홈페이지 유지보수 및 개인정보 DB 정리',
    role: '운영·유지보수 전담',
    stack: ['WordPress', 'Web Hosting', 'DB Cleanup', 'Privacy Protection', 'Troubleshooting'],
    highlights: ['개인정보 DB 정리', '장애 대응 및 트러블슈팅'],
    contribution: '100%',
    path: '/projects/wordpress-privacy',
    hasDetailPage: false,
  },
  {
    id: 'portfolio-site',
    title: '개인 포트폴리오 사이트 구축 및 배포 자동화',
    summary: 'AI 기반 바이브 코딩으로 정적 포트폴리오 사이트를 제작하고 GitHub Pages·Actions로 배포·운영',
    role: '설계·제작·배포 전담',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub Actions', 'GitHub Pages'],
    highlights: [
      'AI 도구 활용 제작',
      'Git·GitHub 버전관리 및 자동 배포',
      '검색 비노출·민감정보 제거 등 운영 관점 반영',
    ],
    contribution: '100%',
    path: '',
    hasDetailPage: false,
  },
]
