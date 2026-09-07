const steps = [
  {
    number: '01',
    title: 'Entiendo el problema',
    body: 'Reviso los requerimientos, pienso en quién va a usar la interfaz y qué necesita resolver antes de escribir una línea de código.',
  },
  {
    number: '02',
    title: 'Construyo por partes',
    body: 'Armo componentes reutilizables, conecto la lógica con APIs REST y voy probando cada pieza a medida que avanzo.',
  },
  {
    number: '03',
    title: 'Reviso y ajusto',
    body: 'Pruebo en distintos tamaños de pantalla, reviso el código con Git y ajusto según feedback antes de dar por cerrada una tarea.',
  },
]

export default function HowIWork() {
  return (
    <section id="como-trabajo" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Cómo trabajo
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border-2 border-ink bg-paper p-6"
            >
              <span className="font-mono text-sm text-coral">{step.number}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
