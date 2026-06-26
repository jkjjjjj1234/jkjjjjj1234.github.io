import type { ReactNode } from 'react'
import {
  Monitor,
  HardDrive,
  Wifi,
  Network,
  Lock,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Camera,
  Mail,
  Building2,
  Cloud,
  KeyRound,
  FileKey,
  FileText,
  RefreshCw,
  Terminal,
  MessageSquare,
  Sparkles,
  Router,
} from 'lucide-react'
import {
  siLinux,
  siSynology,
  siQnap,
  siFortinet,
  siWordpress,
  siGoogle,
  siDocker,
  siTailscale,
  siTelegram,
  siGithub,
  siGithubpages,
  siClaude,
  siClaudecode,
  siGooglegemini,
  siHp,
  siDell,
  siUptimekuma,
} from 'simple-icons'

function Si({ path, title }: { path: string; title: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="currentColor"
      aria-label={title}
      className="shrink-0"
    >
      <path d={path} />
    </svg>
  )
}

function L({ icon: Icon }: { icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return <Icon size={13} className="shrink-0" />
}

const si = (icon: { path: string }, title: string): ReactNode => (
  <Si path={icon.path} title={title} />
)
const l = (Icon: React.ComponentType<{ size?: number; className?: string }>): ReactNode => (
  <L icon={Icon} />
)

export const skillIcons: Record<string, ReactNode> = {
  // 실무 운영 경험
  'Windows Server': l(Monitor),
  'Linux': si(siLinux, 'Linux'),
  'Synology NAS': si(siSynology, 'Synology'),
  'QNAP NAS': si(siQnap, 'QNAP'),
  'FortiGate': si(siFortinet, 'Fortinet'),
  'L2/L3 Switch': l(Network),
  'Router': l(Router),
  'AP': l(Wifi),
  'VLAN': l(Network),
  'VPN': l(Lock),
  'DLP': l(Shield),
  'Endpoint Security': l(ShieldCheck),
  'UTM': l(ShieldAlert),
  'Firewall': l(ShieldAlert),
  'CCTV': l(Camera),
  'DVR': l(HardDrive),
  'WordPress': si(siWordpress, 'WordPress'),
  'Google Workspace': si(siGoogle, 'Google'),
  'Hiworks': l(Mail),
  'DaouOffice': l(Building2),

  // 구축·도입 경험
  'HP Server': si(siHp, 'HP'),
  'Dell Server': si(siDell, 'Dell'),
  'Workstation': l(Monitor),
  'Medical Workstation': l(Monitor),
  'NAS Backup': l(HardDrive),
  'File Permission': l(FileKey),
  'Software License Management': l(FileText),
  'Access Control': l(KeyRound),
  'Backup Policy': l(RefreshCw),

  // 개인 프로젝트·확장 중
  'Oracle Cloud': l(Cloud),
  'Docker': si(siDocker, 'Docker'),
  'Uptime Kuma': si(siUptimekuma, 'Uptime Kuma'),
  'Tailscale': si(siTailscale, 'Tailscale'),
  'Telegram Alert': si(siTelegram, 'Telegram'),
  'GitHub': si(siGithub, 'GitHub'),
  'GitHub Pages': si(siGithubpages, 'GitHub Pages'),

  // AI 활용 / 개발 보조
  'Vibe Coding': l(Sparkles),
  'ChatGPT': l(MessageSquare),
  'Codex': l(Terminal),
  'Claude': si(siClaude, 'Claude'),
  'Claude Code': si(siClaudecode, 'Claude Code'),
  'Gemini': si(siGooglegemini, 'Google Gemini'),
}
