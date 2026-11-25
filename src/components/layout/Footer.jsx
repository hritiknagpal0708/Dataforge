import { Wordmark } from './Header'

const cols = [
  ['Services', ['Data mesh architecture', 'Streaming analytics', 'LLM orchestration', 'Pipeline engineering', 'Infrastructure audit'], '#services'],
  ['Technologies', ['Apache Iceberg and Delta', 'Snowflake and Databricks', 'Apache Kafka and Flink', 'Vector database integration', 'dbt'], '#technologies'],
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/80">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-2">
          <Wordmark />
          <p className="mt-4 text-muted max-w-xs">Data engineering, analytics and AI for enterprises.</p>
          <p className="mt-6">hello@dataforge.com<br />India, with remote delivery worldwide</p>
        </div>
        {cols.map(([t, links, href]) => (
          <div key={t}>
            <h3 className="font-display font-semibold mb-3">{t}</h3>
            <ul className="space-y-2 text-muted">{links.map((l) => <li key={l}><a href={href} className="hover:text-ink">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-6 border-t border-line text-xs text-muted">© 2026 DataForge. All rights reserved.</div>
    </footer>
  )
}
