const stages = [
  ['Sources', 'Postgres, Kafka, S3'],
  ['Lakehouse', 'Spark, Delta, dbt'],
  ['Models and dashboards', 'Python, Power BI, LLM agents'],
  ['Decisions', 'Your teams, working from numbers they trust'],
]

export default function Hero() {
  return (
    <section id="home">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 pt-10 pb-20 md:pt-16 md:pb-28 grid lg:grid-cols-12 gap-14 items-end">
        <div className="lg:col-span-7">
          <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(2.75rem,7vw,5.75rem)]">
            We build the data systems your decisions run on.
          </h1>
          <p className="mt-8 text-lg max-w-xl text-muted">
            DataForge designs and operates data pipelines, analytics and AI for enterprises. Senior engineers stay with you from architecture to 24/7 support.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#contact" className="bg-ink text-paper px-6 py-3.5 rounded-sm font-medium hover:bg-brand transition-colors">Book a data review</a>
            <a href="#services" className="font-medium underline underline-offset-4 decoration-2 hover:text-brand">See what we build</a>
          </div>
        </div>

        <figure className="lg:col-span-5">
          <figcaption className="text-sm text-muted mb-4">What a typical build looks like, end to end</figcaption>
          <ol>
            {stages.map(([name, tools], i) => {
              const last = i === stages.length - 1
              return (
                <li key={name}>
                  {i > 0 && <div className="h-6 w-px bg-ink ml-6" aria-hidden="true" />}
                  <div className={`border border-ink p-5 ${last ? 'bg-ink text-paper' : 'bg-paper'}`}>
                    <div className="flex items-center gap-3 font-display font-semibold text-lg">
                      {last && <span className="w-2.5 h-2.5 bg-mark" aria-hidden="true" />}{name}
                    </div>
                    <div className={`mt-1 font-mono text-sm ${last ? 'text-paper/75' : 'text-muted'}`}>{tools}</div>
                  </div>
                </li>
              )
            })}
          </ol>
        </figure>
      </div>
    </section>
  )
}
