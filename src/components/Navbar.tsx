const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FE6225] backdrop-blur">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display text-lg font-bold text-paper">
          emilia<span className="text-butter">.</span>dev
        </a>

        <h2 className="text-paper text-4xl uppercase font-chunky font-bold">Portfolio</h2>

        <a
          href="#contacto"
          className="rounded-full bg-[#F7CFBE] px-4 py-2 font-body text-sm font-semibold text-[#FE6225] transition hover:bg-butter hover:text-ink"
        >
          Hablemos
        </a>
      </div>

    <nav className="bg-[#FFB7DD]">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-3 justify-center">
          <ul className="hidden gap-8 font-body text-sm text-ink md:flex justify-center">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
