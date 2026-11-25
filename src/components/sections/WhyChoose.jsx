import Section from '../ui/Section'
import { differentiators } from '../../data/differentiators'

export default function WhyChoose() {
  return (
    <Section id="why" title="Built for production, measured by business results"
      intro="We don’t ship disconnected prototypes. We build data systems that earn their keep from the first quarter.">
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {differentiators.map((d) => (
          <div key={d.title} className="border-t-2 border-ink pt-4">
            <h3 className="font-display font-semibold text-xl">{d.title}</h3>
            <p className="mt-2 text-muted">{d.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
