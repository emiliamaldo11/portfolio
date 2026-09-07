import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'TicketPass',
    description:
      'Compra de entradas a eventos musicales con autenticación y panel administrativo para gestión de recintos y asientos.',
    tags: ['Angular', 'TypeScript', 'APIs REST'],
    url: 'https://github.com/emiliamaldo11/TicketPass',
    accent: 'bg-coral',
  },
  {
    name: 'E-commerce Responsive',
    description:
      'Tienda online con catálogo de productos y flujo de carrito de compras, con componentes reutilizables en React.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    url: 'https://github.com/emiliamaldo11/e-commerce',
    accent: 'bg-butter',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Proyectos
        </h2>
        <p className="mt-3 max-w-lg font-body text-ink/70">
          Cada proyecto está pensado para practicar un flujo completo: desde
          la interfaz hasta la integración con datos reales.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-3xl bg-paper p-7 transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FE6225]"
            >
              <span className={`h-2 w-12 rounded-full ${project.accent}`} />
              <h3 className="mt-5 flex items-center gap-2 font-display text-xl font-bold text-ink">
                {project.name}
                <ExternalLink
                  size={16}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
