import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#05001c] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1080px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-slate-600">Already have an account? <Link href="/login" className="font-black text-[#5b19ff] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#18d8d8]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/70">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-2xl border border-[#5b19ff]/50 bg-[#100b3d] p-5">
              <p className="text-sm font-black text-white">What your account unlocks</p>
              <div className="mt-4 grid gap-3 text-sm font-semibold text-white/70">
                <span>Business listing submissions</span>
                <span>Saved contact and profile details</span>
                <span>Access to the create workspace</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
