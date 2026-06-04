import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'Business Listings', href: '/listing' },
      { label: 'Classifieds', href: '/classified' },
      { label: 'Insights', href: '/article' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Verified listings, sharper discovery',
    description: 'A business listing platform for finding credible companies, comparing services, and turning local visibility into real inquiries.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business Listings', href: '/listing' },
          { label: 'Classifieds', href: '/classified' },
          { label: 'Business Insights', href: '/article' },
          { label: 'Profiles', href: '/profile' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for business discovery, comparison, and direct connection.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
