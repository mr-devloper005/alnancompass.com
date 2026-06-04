'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#05001c', '--editable-footer-text': '#ffffff' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-white/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr_1fr] lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white">
              <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-9 w-9 object-contain" />
            </span>
            <span className="text-lg font-black tracking-[-0.04em]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/68">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          <form action="/contact" className="mt-6 grid gap-3">
            <label className="flex items-center gap-2 rounded-xl border border-white/20 bg-[#100b3d] px-4 py-3">
              <Mail className="h-4 w-4 text-[#18d8d8]" />
              <input name="email" type="email" placeholder="Enter email address" className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-white/45" />
            </label>
            <button className="w-fit rounded-lg bg-[#cdb6ff] px-5 py-2.5 text-sm font-black text-[#05001c]">Submit</button>
          </form>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold text-white/68 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/68 hover:text-white">{label}</Link>
            ))}
            {session ? <p className="pt-2 text-xs font-black uppercase tracking-[0.18em] text-[#18d8d8]">{session.name}</p> : null}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/68 hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/50">
        (c) {year} {SITE_CONFIG.name}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
