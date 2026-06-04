import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#05001c] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1080px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#18d8d8]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/70">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
              {['Submit business listings', 'Manage directory drafts'].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.08] p-4 text-sm font-bold text-white/76">{item}</div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-slate-600">New here? <Link href="/signup" className="font-black text-[#5b19ff] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
