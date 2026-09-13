const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FE6225] backdrop-blur">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between sm:gap-0 sm:px-6 sm:py-4">
        <a href="#inicio" className="hidden font-display text-lg font-bold text-paper sm:block"
        >
          emilia<span className="text-butter">.</span>dev
        </a>

        <h2 className="font-chunky text-2xl font-bold uppercase text-paper sm:text-3xl md:text-4xl">
          Portfolio</h2>


        <a
          href="#contacto"
          className="rounded-full bg-[#F7CFBE] px-3 py-1.5 font-body text-xs font-semibold text-[#FE6225] transition hover:bg-butter hover:text-ink sm:px-4 sm:py-2 sm:text-sm"
        >
          Hablemos
        </a>
      </div>

     <nav className="bg-[#FFB7DD]">
        <div className="mx-auto flex max-w-6xl justify-center px-4 py-2 sm:px-6 sm:py-3">
          <ul className="flex flex-wrap justify-center gap-3 font-body text-xs text-ink sm:gap-6 sm:text-sm md:gap-8">
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
