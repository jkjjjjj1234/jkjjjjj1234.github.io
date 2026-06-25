export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  featured: boolean
}

export const certifications: Certification[] = [
  {
    id: 'network-admin-2',
    name: '네트워크관리사 2급',
    issuer: '한국정보통신자격협회',
    date: '2025.12',
    featured: true,
  },
  {
    id: 'info-processing-technician',
    name: '정보처리기능사',
    issuer: '한국산업인력공단',
    date: '2009.07',
    featured: true,
  },
  {
    id: 'info-device-operating-technician',
    name: '정보기기운용기능사',
    issuer: '한국산업인력공단',
    date: '2008.10',
    featured: true,
  },
  {
    id: 'six-sigma-gb',
    name: '6시그마 GB(GreenBelt) 1급',
    issuer: '국민평생학습센터',
    date: '2014.06',
    featured: false,
  },
  {
    id: 'mos-master',
    name: 'MOS Master',
    issuer: 'Microsoft',
    date: '2010.01',
    featured: false,
  },
  {
    id: 'itq-master',
    name: 'ITQ 마스터',
    issuer: '한국생산성본부',
    date: '2009.09',
    featured: false,
  },
  {
    id: 'internet-info-search-2',
    name: '인터넷정보검색사 2급',
    issuer: '한국정보통신진흥협회',
    date: '2009.03',
    featured: false,
  },
  {
    id: 'computerized-accounting-3',
    name: '전산회계운용사 3급',
    issuer: '대한상공회의소',
    date: '2008.12',
    featured: false,
  },
  {
    id: 'word-processor-1',
    name: '워드프로세서 1급',
    issuer: '대한상공회의소',
    date: '2008.07',
    featured: false,
  },
  {
    id: 'computer-proficiency-2',
    name: '컴퓨터활용능력 2급',
    issuer: '대한상공회의소',
    date: '2008.04',
    featured: false,
  },
  {
    id: 'drivers-license-1',
    name: '1종보통운전면허',
    issuer: '경찰청',
    date: '2012.07',
    featured: false,
  },
]
