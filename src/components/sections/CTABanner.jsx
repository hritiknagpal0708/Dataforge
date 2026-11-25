export default function CTABanner() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-end">
        <h2 className="lg:col-span-8 font-display font-extrabold tracking-tight leading-[1.02] text-[clamp(2.25rem,5vw,4rem)]">
          Got a data problem? Bring it to us and we’ll tell you what it takes to fix.
        </h2>
        <div className="lg:col-span-4">
          <p className="text-paper/75 mb-6">Modernizing infrastructure, building real-time analytics, or putting AI into production, our senior team will review it with you.</p>
          <a href="#contact" className="inline-block bg-mark text-ink px-6 py-3.5 rounded-sm font-semibold hover:bg-paper transition-colors">Book a data review</a>
        </div>
      </div>
    </section>
  )
}
