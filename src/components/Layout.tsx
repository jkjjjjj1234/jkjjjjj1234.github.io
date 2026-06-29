import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// HashRouter가 location.hash로 라우팅을 처리하므로, 같은 페이지 내 섹션 이동은
// href="#id" 대신 scrollIntoView로 처리해 라우터 해시와 충돌을 피한다.
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate">
      <header className="sticky top-0 z-50 border-b border-light-gray bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="text-lg font-semibold text-navy">
            조대훈
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="cursor-pointer text-sm font-medium text-slate transition-colors hover:text-accent"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="cursor-pointer flex flex-col gap-1.5 md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="h-0.5 w-6 bg-navy" />
            <span className="h-0.5 w-6 bg-navy" />
            <span className="h-0.5 w-6 bg-navy" />
          </button>
        </nav>

        {menuOpen && (
          <ul className="flex flex-col gap-1 border-t border-light-gray px-4 pb-4 md:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="cursor-pointer w-full rounded px-2 py-2 text-left text-sm font-medium text-slate hover:bg-light-gray hover:text-accent"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-light-gray bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:px-6">
          <p>&copy; {new Date().getFullYear()} 조대훈. All rights reserved.</p>
          <a
            href="https://github.com/jkjjjjj1234"
            target="_blank"
            rel="noreferrer"
            className="text-slate-light transition-colors hover:text-accent-light"
          >
            github.com/jkjjjjj1234
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
