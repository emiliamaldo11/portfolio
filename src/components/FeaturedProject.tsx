import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'

const tags = ['Angular', 'TypeScript', 'APIs REST', 'Formularios Reactivas']

const images = [
  '/ticketpass1.png',
  '/ticketpass2.png',
  '/ticketpass3.png',
  '/ticketpass4.png',
  '/ticketpass5.png',
  '/ticketpass6.png',
  '/ticketpass7.png',
  '/ticketpass8.png',
  '/ticketpass9.png',
  '/ticketpass10.png',
  '/ticketpass11.png',

]

export default function FeaturedProject() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-coral">proyecto destacado</p>

        <div className="mt-4 grid gap-10 md:grid-cols-2 md:items-center">
          <button
            type="button"
            onClick={() => openAt(0)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
          >
            <img
              src={images[0]}
              alt="Captura de TicketPass"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover:bg-ink/60 group-hover:opacity-100">
              <span className="rounded-full bg-paper px-5 py-2 font-body text-sm font-semibold text-ink">
                Ver proyecto
              </span>
            </div>
          </button>

          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              TicketPass
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
              Plataforma web para la compra de entradas a eventos musicales,
              con autenticación de usuarios y un panel administrativo para
              gestionar recintos, disponibilidad de asientos y operaciones
              CRUD completas. Integra la API de Spotify para mostrar
              información y previsualizaciones dinámicas de artistas.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-mist px-3 py-1 font-mono text-xs text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a 
              href="https://github.com/emiliamaldo11/TicketPass"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-butter hover:text-ink"
            >
              Ver repositorio <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-6 top-6 text-paper transition hover:text-butter"
          >
            <X size={28} />
          </button>

          <img
            src={images[index]}
            alt={`Captura ${index + 1} de TicketPass`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Imagen anterior"
                className="absolute left-4 text-paper transition hover:text-butter sm:left-8"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Imagen siguiente"
                className="absolute right-4 text-paper transition hover:text-butter sm:right-8"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  )
}