import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="bg-mist py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          ¿Hablamos?
        </h2>
        <p className="mt-4 font-body text-ink/70">
          Estoy buscando mi primera oportunidad como desarrolladora frontend.
          Si tenés una posición abierta o simplemente querés charlar sobre
          algún proyecto, escribime.
        </p>

        <a
          href="mailto:m.emiliamaldo@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3 font-body text-sm font-semibold text-paper transition hover:bg-butter hover:text-ink"
        >
          <Mail size={18} />
          m.emiliamaldo@gmail.com
        </a>

        <div className="mt-8 flex justify-center gap-6 text-ink/70">
          <a href="tel:+542236349903" className="flex items-center gap-2 transition hover:text-coral">
            <Phone size={18} /> +54 223 634 9903
          </a>
          <a href="https://github.com/emiliamaldo11" target="_blank" rel="noreferrer" className="transition hover:text-coral">
            <Github size={20} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-coral">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
