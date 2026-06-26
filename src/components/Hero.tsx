function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            서버·네트워크·보안·백업·모니터링을 직접 운영하고 개선하는 시스템 엔지니어 조대훈입니다.
          </h1>
          <div className="mt-6 space-y-4 text-base text-slate sm:text-lg">
            <p>
              서버·NAS·네트워크·CCTV·보안 솔루션까지 온프레미스 IT 인프라 전반을 직접 운영하며
              장애 발생 시 신속한 복구와 재발 방지에 집중해왔습니다. 병원 빌딩·데이터센터 등
              다양한 환경에서 실무 경험을 쌓았습니다.
            </p>
            <p>
              노후 서버·NAS 장비 교체와 마이그레이션, 백업 체계 구축, DLP·UTM 등 보안
              솔루션 도입을 통해 인프라 전반의 안정성을 꾸준히 개선해왔습니다.
            </p>
            <p>
              온프레미스 환경에서 쌓은 경험을 바탕으로 Oracle Cloud·Docker·Uptime
              Kuma로 개인 인프라 모니터링 환경을 구축하며 자동화와 가시성 역량을
              확장하고 있습니다.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              주요 프로젝트 보기
            </button>
            <a
              href="https://github.com/jkjjjjj1234"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-navy px-6 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-light-gray"
            >
              GitHub 보기
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <img
            src="/images/profile-character.png"
            alt="조대훈 프로필 캐릭터"
            className="h-48 w-48 rounded-full border-4 border-light-gray object-cover shadow-lg sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
