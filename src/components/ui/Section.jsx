// Heading sits in a narrow left column, content in the wide right column.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="border-t border-ink/80">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-[1.1] tracking-tight">{title}</h2>
          {intro && <p className="mt-4 text-muted max-w-sm">{intro}</p>}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}
