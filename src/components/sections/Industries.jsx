import Section from '../ui/Section'
import { industries } from '../../data/industries'

export default function Industries() {
  return (
    <Section id="industries" title="Industries we serve" intro="Each sector has its own compliance limits and its own pace of data. We design around both.">
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {industries.map((i) => (
          <div key={i.title}>
            <h3 className="font-display font-semibold text-xl">{i.title}</h3>
            <p className="mt-2 text-muted">{i.desc}</p>
            <p className="mt-2 text-sm">{i.points.join(', ')}.</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
