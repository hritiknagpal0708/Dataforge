import Section from '../ui/Section'
import { techCategories } from '../../data/technologies'

export default function Technologies() {
  return (
    <Section id="technologies" title="Tools we work with" intro="Mature, widely supported platforms, chosen to fit your stack rather than ours.">
      <dl className="divide-y divide-line border-y border-line">
        {techCategories.map((c) => (
          <div key={c.id} className="py-6 grid sm:grid-cols-4 gap-2 sm:gap-8">
            <dt className="font-display font-semibold">{c.label}</dt>
            <dd className="sm:col-span-3 font-mono text-[15px] leading-8">{c.items.map((i) => i[1]).join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
