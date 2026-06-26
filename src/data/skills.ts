export interface SkillCategory {
  id: string
  title: string
  description: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'operations',
    title: '실무 운영 경험',
    description: '실제 사내 IT 환경에서 직접 운영·관리한 영역',
    items: [
      'Windows Server',
      'Linux',
      'Synology NAS',
      'QNAP NAS',
      'FortiGate',
      'L2/L3 Switch',
      'Router',
      'AP',
      'VLAN',
      'VPN',
      'DLP',
      'Endpoint Security',
      'UTM',
      'Firewall',
      'CCTV',
      'DVR',
      'WordPress',
      'Google Workspace',
      'Hiworks',
      'DaouOffice',
    ],
  },
  {
    id: 'implementation',
    title: '구축·도입 경험',
    description: '신규 도입·구축 프로젝트로 직접 수행한 영역',
    items: [
      'HP Server',
      'Dell Server',
      'Workstation',
      'Medical Workstation',
      'NAS Backup',
      'File Permission',
      'Software License Management',
      'Access Control',
      'Backup Policy',
    ],
  },
  {
    id: 'personal',
    title: '개인 프로젝트·확장 중',
    description: '온프레미스 경험을 기반으로 개인 인프라 환경에서 확장 중인 영역',
    items: [
      'Oracle Cloud',
      'Docker',
      'Uptime Kuma',
      'Tailscale',
      'Telegram Alert',
      'GitHub',
      'GitHub Pages',
    ],
  },
  {
    id: 'ai',
    title: 'AI 활용 / 개발 보조',
    description: 'AI 도구를 활용한 개발 보조 및 업무 자동화 경험',
    items: [
      'Vibe Coding',
      'ChatGPT',
      'Codex',
      'Claude',
      'Claude Code',
      'Gemini',
    ],
  },
]
