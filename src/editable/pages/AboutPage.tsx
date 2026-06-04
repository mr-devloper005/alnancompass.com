import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#05001c] px-4 py-14 text-white sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-white/10 bg-[#100b3d] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#18d8d8]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">About {SITE_CONFIG.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 text-white/70">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-sm">
                <h2 className="text-xl font-black tracking-[-0.04em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/68">{value.description}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[#5b19ff]/50 bg-[linear-gradient(135deg,#4b1ee6,#100b3d)] p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#18d8d8]">Directory promise</p>
              <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em]">Clear listing pages, useful filters, and contact paths that work.</p>
            </div>
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
