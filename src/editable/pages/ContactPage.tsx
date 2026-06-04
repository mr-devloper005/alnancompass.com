'use client'

import { Building2, MapPin, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Business onboarding', body: 'Add a new listing, update service details, or prepare a business profile for directory publishing.' },
    { icon: Phone, title: 'Listing support', body: 'Correct phone numbers, websites, categories, service areas, and other details visitors rely on.' },
    { icon: MapPin, title: 'Coverage requests', body: 'Suggest new locations, neighborhoods, and business categories for stronger local discovery.' },
  ]

  return (
    <EditableSiteShell className="bg-[#05001c] text-white">
      <main className="mx-auto max-w-[1080px] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#18d8d8]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/68">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#4b1ee6_0%,#8b5a8a_54%,#e59b32_100%)] p-5 sm:p-7">
            <h2 className="mb-5 text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
