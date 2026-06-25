export interface CareerEntry {
  id: string
  company: string
  role: string
  period: string
  highlight: boolean
  details: string[]
}

export const careerData: CareerEntry[] = [
  {
    id: 'viewpartners',
    company: '뷰파트너스',
    role: 'IT팀 과장(팀장)',
    period: '2019.02 – 2025.09',
    highlight: true,
    details: [
      '19층 규모 병원 빌딩 사내 전산 총괄. 의료 서버·NAS·네트워크·CCTV·보안 솔루션·홈페이지 운영',
      'EMR·PACS·X-Ray 서버 및 워크스테이션, NAS 노후 장비 교체·마이그레이션',
      '하이웍스 그룹웨어 도입(소통 채널 일원화·계정 권한 관리)',
      'DLP·안티바이러스 도입(엔드포인트 보안 강화)',
      '전사 S/W 라이선스·유지보수 계약 총괄',
      'UTM·L2/L3 스위치·라우터 운영, 케이블 포설 공사 기획/감독',
      '수술실 20대 + 일반 100대 = 총 120대 규모 CCTV/DVR/워크스테이션 신규 도입·설치',
    ],
  },
  {
    id: 'icommerce',
    company: '아이커머',
    role: '서버 H/W 엔지니어',
    period: '2015.10 – 2016.05',
    highlight: true,
    details: [
      'HP 국내 총판 플래티넘 계열사. 총 4,000대 이상 데이터센터 서버 H/W 구축',
      '삼성 소재단지 약 2,000대 / 삼성SDI 약 1,000대 / 현대자동차 파주 약 1,000대',
    ],
  },
  {
    id: 'departkorea',
    company: '디파트코리아',
    role: '경영지원팀 대리(전산+총무 겸직)',
    period: '2017.11 – 2018.07',
    highlight: true,
    details: [
      'Google Workspace + 다우오피스 그룹웨어 신규 도입·연동',
      '사내 NAS 신규 도입 + 부서 간 접근 권한(ACL) 설계',
    ],
  },
  {
    id: 'kiri',
    company: '한국지역산업연구원',
    role: '대리',
    period: '2016.05 – 2017.06',
    highlight: false,
    details: ['사내 NAS 신규 도입·운영망 세팅, IoT(비콘·스캐너) 인프라 세팅·유지보수'],
  },
  {
    id: 'payday',
    company: '월급날',
    role: '연구소 사원',
    period: '2015.04 – 2015.09',
    highlight: false,
    details: [
      '웹개발(연말정산 미리보기·급여 아웃소싱 프로그램 백엔드 유지보수), JAVA/JS/HTML/PHP',
    ],
  },
]
