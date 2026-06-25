# 조대훈 포트폴리오

사내 IT 인프라 운영자 / 시스템 엔지니어 조대훈의 실무 경험을 보여주는 정적 포트폴리오 웹사이트입니다.

## 프로젝트 개요

화려한 인터랙션 대신 가독성과 신뢰감을 우선한 "IT 인프라 운영 대시보드 + 이력서형 포트폴리오" 콘셉트의 1인 정적 웹사이트입니다. 백엔드 서버 없이 Vite + React + TypeScript + Tailwind CSS로 제작했고, GitHub Pages에 무료로 배포합니다.

## 제작 목적

- 병원 IT 인프라 운영, 서버·NAS·네트워크·보안·백업·CCTV 등 실무 경험을 한 곳에 정리
- 개인 인프라 모니터링 프로젝트(Oracle Cloud·Docker·Uptime Kuma·Tailscale·Telegram)를 포트폴리오로 증명
- 이력서 대신 운영 대시보드 톤의 웹페이지로 경력과 운영 철학을 전달

## 사용 기술

- Vite, React 19, TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first 설정)
- react-router-dom (`HashRouter`)
- GitHub Actions + GitHub Pages

## 페이지 구조

- `/` — 메인페이지: Hero / About / Operation Philosophy / Career / Skills / Projects / Certifications / Documents / Contact
- `/projects/uptime-kuma` — 개인 인프라 통합 모니터링 시스템 상세페이지
- `/projects/:id` — 나머지 프로젝트용 라우트(추후 상세페이지 확장 대비, 현재는 메인 카드에 링크 노출 안 함)

## 배포 방식

- `.github/workflows/deploy.yml`로 `main` 브랜치 push 시 GitHub Actions가 자동 빌드·배포
- 저장소 이름을 `<username>.github.io`로 사용해 루트 경로(`/`)에 배포, Pages 소스는 GitHub Actions
- `HashRouter` 사용으로 GitHub Pages 정적 호스팅 환경에서 발생하는 직접 경로 접속/새로고침 404 문제를 회피

## 주요 프로젝트 목록

1. 개인 인프라 통합 모니터링 시스템 (상세페이지 제공)
2. 병원 의료 서버 및 NAS 백업 체계 구축
3. 수술실 CCTV 폐쇄망 구축 및 운영
4. 전사 보안 솔루션 및 라이선스 관리
5. 홈페이지 유지보수 및 개인정보 DB 정리

## 보안상 비공개 처리 항목

- 이력서 PDF 미게시(다운로드 버튼·항목 없음)
- 전화번호·주소 비노출(연락처는 이메일만 공개)
- Uptime Kuma 관리자 페이지 Live Demo 비공개(Tailscale 내부망 전용 접근, 공개 페이지는 구성도·결과 화면·알림 캡처·PDF 문서로 증빙)
- 실제 공인 IP, 관리자 URL, Tailscale IP, Telegram Bot Token, SSH 키, NAS 실 장비명/계정명, 병원 내부망 상세 정보 등 미게시. 망 구성도는 추상화된 명칭만 사용
- 검색엔진 수집 거부(`<meta name="robots" content="noindex, nofollow">` + `robots.txt`)

## 향후 개선 예정

- 도메인 적용 후 공개 Status Page만 HTTPS로 외부 공개
- Beszel·Netdata·Node Exporter 등으로 리소스(CPU/RAM/Disk/Network) 모니터링 확장
- 나머지 4개 프로젝트 상세페이지 추가
- Uptime Kuma 설정 데이터 정기 백업 스크립트 구성
