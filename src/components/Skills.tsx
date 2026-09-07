const groups = [
  {
    title: 'Frontend',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Bases de datos',
    items: ['Java', 'Spring Boot', 'APIs REST', 'SQL'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Jira', 'Trello', 'VS Code', 'IntelliJ IDEA', 'Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="stack" className="bg-ink py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
          Stack técnico
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm uppercase tracking-wide text-butter">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-paper/20 px-3 py-1 font-body text-sm text-paper/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
