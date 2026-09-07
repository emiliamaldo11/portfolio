import { ArrowDown, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pb-24 pt-16 md:pt-24">
    
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-mono text-[9rem] leading-none text-paper/5 md:text-[14rem]"
      >
        {'</>'}
      </span>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="mb-4 font-mono text-sm text-butter">Mar del Plata, Argentina</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-paper sm:text-5xl md:text-6xl">
            María Emilia
            <br />
            Maldonado
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-paper/80">
            Desarrolladora Frontend Junior. Construyo interfaces funcionales y
            responsivas con React, Angular y TypeScript.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-coral px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-butter hover:text-ink"
            >
              Ver proyectos
            </a>
            <a
              href="/CV_Maria_Emilia_Maldonado_.pdf"
              download
              className="rounded-full border border-paper/30 px-6 py-3 font-body text-sm font-semibold text-paper transition hover:border-paper hover:bg-paper hover:text-ink"
            >
              Descargar CV
            </a>
            <div className="ml-1 flex gap-3">
              <a
                href="https://github.com/emiliamaldo11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-paper/70 transition hover:text-butter"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-paper/70 transition hover:text-butter"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

      
        <div className="rounded-3xl bg-[#FFEDFC] p-6 text-ink sm:p-8 border-2 border-[#FE6225]">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/60">
            perfil.txt
          </p>
          <p className="mt-3 font-body text-base leading-relaxed">
            Técnica en Programación (UTN), cursando Ciencia de Datos (UNMDP).
            Base en Java y Spring Boot, integración de APIs REST y
            maquetación con Tailwind CSS.
          </p>
          <p className="mt-4 font-body text-sm text-ink/70">
            Español nativo · Inglés B1
          </p>
        </div>
      </div>

      <a
        href="#como-trabajo"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/50 transition hover:text-butter"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
