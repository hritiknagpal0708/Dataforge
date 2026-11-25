import Section from '../ui/Section'
import { services } from '../../data/services'

export default function Services() {
  return (
    <Section id="services" title="What we do" intro="Engineering, analytics and AI work, delivered by one team so nothing gets lost between them.">
      <div className="divide-y divide-line border-y border-line">
        {services.map((s) => (
          <article key={s.title} className="py-8 grid sm:grid-cols-5 gap-4 sm:gap-8">
            <h3 className="sm:col-span-2 font-display font-semibold text-2xl leading-tight">{s.title}</h3>
            <div className="sm:col-span-3">
              <p>{s.desc}</p>
              <p className="mt-3 text-sm text-muted">{s.items.join(', ')}.</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
