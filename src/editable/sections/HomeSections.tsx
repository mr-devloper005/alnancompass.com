import Link from 'next/link'
import { ArrowRight, BarChart3, Building2, CheckCircle2, Globe2, MapPin, Search, ShieldCheck, Sparkles, Target } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const shell = 'mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8'

function getContent(post?: SitePost | null) {
  return post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function getExcerpt(post?: SitePost | null, limit = 135) {
  const content = getContent(post)
  const raw = text(content.description) || text(content.summary) || text(content.excerpt) || post?.summary || ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function listingMeta(post: SitePost) {
  const content = getContent(post)
  return {
    category: text(content.category) || post.tags?.[0] || 'Business',
    location: text(content.location) || text(content.address) || text(content.city) || 'Local service area',
    phone: text(content.phone) || text(content.telephone) || text(content.mobile),
  }
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#5b19ff]/60 bg-[#08012b] px-6 py-5 text-center shadow-[0_18px_60px_rgba(91,25,255,0.16)]">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/58">{label}</p>
    </div>
  )
}

function BusinessCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const meta = listingMeta(post)
  return (
    <Link href={href} className="group block rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white transition hover:-translate-y-1 hover:border-[#18d8d8]/60 hover:bg-white/[0.09]">
      <div className="flex items-start gap-4">
        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#100b3d] ring-1 ring-white/10">
          <img src={getEditablePostImage(post)} alt="" className="h-full w-full object-cover opacity-90 transition group-hover:scale-105" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18d8d8]">Listing {String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight tracking-[-0.03em]">{post.title}</h3>
        </div>
      </div>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/68">{getExcerpt(post)}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-lg bg-[#5b19ff] px-3 py-1.5 text-xs font-bold">{meta.category}</span>
        <span className="inline-flex items-center gap-1 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-bold text-white/76"><MapPin className="h-3.5 w-3.5" /> {meta.location}</span>
      </div>
    </Link>
  )
}

function FeatureListing({ post, primaryTask, primaryRoute }: { post: SitePost; primaryTask: TaskKey; primaryRoute: string }) {
  const meta = listingMeta(post)
  return (
    <Link href={postHref(primaryTask, post, primaryRoute)} className="group grid overflow-hidden rounded-2xl border border-white/10 bg-[#100b3d] text-white shadow-[0_28px_80px_rgba(0,0,0,0.26)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[300px] bg-[#05001c]">
        <img src={getEditablePostImage(post)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,0,28,0.76))]" />
        <span className="absolute left-5 top-5 rounded-lg bg-[#18d8d8] px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#05001c]">Featured</span>
      </div>
      <div className="p-7 sm:p-9">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#cdb6ff]">{meta.category}</p>
        <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em]">{post.title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/68">{getExcerpt(post, 210)}</p>
        <div className="mt-6 grid gap-3 text-sm font-bold text-white/72">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#18d8d8]" /> {meta.location}</span>
          {meta.phone ? <span>Phone: {meta.phone}</span> : <span>Direct contact details available on the listing page.</span>}
        </div>
        <span className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#5b19ff] px-5 py-3 text-sm font-black text-white">Open business profile <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  return (
    <section className="relative overflow-hidden bg-[#05001c] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-[14%] h-[520px] w-[520px] rounded-full border border-[#5b19ff]/50 bg-[radial-gradient(circle,rgba(91,25,255,0.58)_0%,rgba(91,25,255,0.18)_42%,transparent_70%)] shadow-[0_0_90px_rgba(91,25,255,0.45)]" />
        <div className="absolute right-[14%] top-[24%] h-[320px] w-[320px] rounded-full border border-[#18d8d8]/20 opacity-50" />
      </div>
      <div className={`${shell} relative grid min-h-[650px] gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#18d8d8]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl">{heroTitle}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/74 sm:text-lg">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mt-8 flex max-w-xl rounded-xl border border-white/15 bg-white/[0.08] p-2">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-white outline-none placeholder:text-white/45" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#5b19ff] px-5 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href={pagesContent.home.hero.secondaryCta.href} className={dc.button.secondary}>{pagesContent.home.hero.secondaryCta.label}</Link>
          </div>
        </div>
        <div className="relative hidden min-h-[500px] lg:block">
          <div className="absolute left-[18%] top-[34%] z-10 rounded-xl border border-white/20 bg-[#11102a]/90 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
            <p className="text-xs font-black text-white">Verified local profile</p>
            <p className="mt-2 text-xs leading-5 text-white/70">Service area, category, contact routes, and customer-ready details in one listing.</p>
          </div>
          <div className="absolute right-[12%] top-[18%] rounded-full bg-white p-3 text-[#5b19ff] shadow-[0_0_50px_rgba(255,255,255,0.38)]"><MapPin className="h-10 w-10 fill-current" /></div>
          <div className="absolute bottom-[14%] right-[4%] rounded-xl border border-[#18d8d8]/40 bg-[#05001c]/90 px-5 py-4 text-sm font-black text-[#18d8d8]">48.73220, -73.99026</div>
        </div>
      </div>
      <div className={`${shell} relative -mt-10 grid gap-4 pb-14 sm:grid-cols-3`}>
        <StatCard value="#1" label="business discovery focus" />
        <StatCard value="500+" label="listing touchpoints" />
        <StatCard value="24/7" label="searchable directory access" />
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#05001c] py-16 text-white">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#18d8d8]">Trusted listing flow</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em]">Business discovery that feels precise, useful, and easy to compare.</h2>
            <p className="mt-5 text-sm leading-7 text-white/68">Every card highlights the practical details visitors need before they open a profile: category, location, summary, and direct next steps.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {railPosts.map((post, index) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts[0]
  if (!featured) return null
  return (
    <section className="bg-[#f7f7fb] py-16 text-[#09051d]">
      <div className={shell}>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Target, title: 'Quality at scale', body: 'Structured listing pages help services, branches, and local businesses stay easy to compare.' },
            { icon: ShieldCheck, title: 'Trust-forward', body: 'Clear summaries, contact details, and maps reduce friction before visitors make contact.' },
            { icon: Sparkles, title: 'Expertise signals', body: 'Categories, service notes, images, and profiles give each business room to stand out.' },
            { icon: Globe2, title: 'Flexible discovery', body: 'Search, archive pages, related listings, and profile links keep browsing connected.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <item.icon className="h-6 w-6 text-[#5b19ff]" />
              <h3 className="mt-4 text-xl font-black tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <FeatureListing post={featured} primaryTask={primaryTask} primaryRoute={primaryRoute} />
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(1)
  const picks = categoryPosts.slice(0, 6)
  if (!picks.length) return null
  return (
    <section className="bg-[#05001c] py-16 text-white">
      <div className={shell}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#18d8d8]">Harness business data</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Browse the latest {taskLabel(primaryTask).toLowerCase()} with a cleaner directory rhythm.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {picks.map((post, index) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#05001c] py-16 text-white">
      <div className={shell}>
        <div className="grid gap-8 rounded-2xl border border-[#5b19ff]/60 bg-[linear-gradient(135deg,#4b1ee6_0%,#8b5a8a_54%,#e59b32_100%)] p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/72">Ready to publish</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Give your business listing a stronger first impression.</h2>
            <p className="mt-4 text-sm leading-7 text-white/78">Send listing details, update contact information, or start a clean business profile from your account.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              [Building2, 'Add a business'],
              [BarChart3, 'Improve visibility'],
              [CheckCircle2, 'Verify details'],
            ].map(([Icon, label]) => {
              const TypedIcon = Icon as typeof Building2
              return (
                <div key={label as string} className="rounded-xl border border-white/20 bg-white/15 p-4">
                  <TypedIcon className="h-5 w-5" />
                  <p className="mt-4 text-sm font-black">{label as string}</p>
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <Link href="/create" className="rounded-lg bg-white px-6 py-3 text-sm font-black text-[#05001c]">Create listing</Link>
            <Link href="/contact" className="rounded-lg border border-white/35 px-6 py-3 text-sm font-black text-white">Contact team</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
