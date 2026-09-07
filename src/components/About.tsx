const education = [
  {
    period: '2026 — en curso',
    title: 'Tecnicatura en Ciencia de Datos',
    place: 'Universidad Nacional de Mar del Plata (UNMDP)',
  },
  {
    period: '2023 — 2025',
    title: 'Tecnicatura Universitaria en Programación',
    place: 'Universidad Tecnológica Nacional (UTN)',
  }
]

export default function About() {
  return (
    <section id="sobre-mi" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Sobre mí
            </h2>
            <p className="mt-5 font-body leading-relaxed text-ink/70">
              Soy desarrolladora frontend recibida de la Tecnicatura
              Universitaria en Programación (UTN) y actualmente curso
              Ciencia de Datos en la UNMDP. Antes de dedicarme al desarrollo
              trabajé en atención al cliente y en tareas administrativas, algo
              que me dejó buena costumbre para organizar tareas y comunicarme
              con claridad, algo que también aplico cuando trabajo en equipo
              con Jira y Scrum.
            </p>
          </div>

          <ol className="relative space-y-8 border-l-2 border-ink/15 pl-6">
            {education.map((item) => (
              <li key={item.title}>
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-paper bg-coral" />
                <p className="font-mono text-xs text-coral">{item.period}</p>
                <p className="mt-1 font-display text-lg font-bold text-ink">
                  {item.title}
                </p>
                <p className="font-body text-sm text-ink/60">{item.place}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
