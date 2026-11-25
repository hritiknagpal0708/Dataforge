import Section from '../ui/Section'
import { phases } from '../../data/approach'

export default function Approach() {
  return (
    <Section id="approach" title="How an engagement runs" intro="Five phases. Each one ends with something you can review and keep.">
      <ol className="border-l border-ink">
        {phases.map((p, i) => (
          <li key={p.n} className="relative pl-8 pb-10 last:pb-0 grid sm:grid-cols-5 gap-2 sm:gap-8">
            <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 bg-ground border border-ink" aria-hidden="true" />
            <div className="sm:col-span-3">
              <h3 className="font-display font-semibold text-2xl"><span className="text-muted mr-3">{i + 1}.</span>{p.title}</h3>
              <p className="mt-2 text-muted">{p.desc}</p>
            </div>
            <p className="sm:col-span-2 text-sm"><span className="text-muted">You get: </span>{p.out.replace('→ ', '')}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
