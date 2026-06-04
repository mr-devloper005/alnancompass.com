import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Business listings, location insight, and trusted discovery',
      description: 'Find, compare, and publish business listings with a clean directory experience built for local discovery.',
      openGraphTitle: 'Business listing platform for trusted discovery',
      openGraphDescription: 'Explore verified business listings, service details, contact paths, and location-led discovery.',
      keywords: ['business listing', 'business directory', 'local discovery', 'service listings'],
    },
    hero: {
      badge: 'Business listing intelligence',
      title: ['Connect real businesses', 'to ready-to-act customers.'],
      description: 'Discover local companies, compare services, verify contact details, and help every listing become easier to find, trust, and contact.',
      primaryCta: { label: 'Explore listings', href: '/listing' },
      secondaryCta: { label: 'Add a business', href: '/create' },
      searchPlaceholder: 'Search business name, service, category, or location',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Every listing becomes a clean profile with location, contact, and service context.',
      featureCardDescription: 'Directory pages are designed for fast comparison, direct actions, and useful business discovery.',
    },
    intro: {
      badge: 'Directory platform',
      title: 'Built for businesses that need to be found and customers who need clarity.',
      paragraphs: [
        'This site turns business profiles into structured listing pages with service summaries, locations, contact routes, and related discovery paths.',
        'Visitors can search by business type, browse categories, compare listing cards, and open detail pages without feeling lost in a stretched layout.',
        'For business owners, the experience keeps publishing simple while making each listing feel credible, useful, and ready for follow-up.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Listing-first homepage with service, category, and location cues.',
        'Business archive cards built for comparison and direct action.',
        'Readable detail pages with contact, map, gallery, and related listings.',
        'Focused forms for account creation, contact, and business submissions.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Contact support', href: '/contact' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Give every business a listing people can actually use.',
      description: 'Publish clear profiles, guide visitors to the right services, and keep discovery focused on real business outcomes.',
      primaryCta: { label: 'Browse Listings', href: '/listing' },
      secondaryCta: { label: 'Contact Team', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our directory mission',
    title: 'A clearer way to discover, compare, and contact businesses.',
    description: `${slot4BrandConfig.siteName} is built for business listing discovery: practical profiles, reliable details, and layouts that help visitors decide faster.`,
    paragraphs: [
      'A listing should do more than show a name. It should explain what the business does, where it operates, how to reach it, and why it is worth a closer look.',
      'Our pages are shaped around that job: clean browsing, strong category signals, useful summaries, and direct paths from discovery to contact.',
      'The platform also supports business insights, classifieds, profiles, and resources so a local ecosystem can grow around the directory.',
    ],
    values: [
      {
        title: 'Verified-feeling profiles',
        description: 'Listing pages emphasize service details, location cues, contact actions, and trust signals before decoration.',
      },
      {
        title: 'Comparison-friendly browsing',
        description: 'Cards, filters, and archive pages are designed so visitors can scan multiple businesses without the page feeling stretched.',
      },
      {
        title: 'Simple publishing flow',
        description: 'Business owners can create an account, submit listing details, and keep the directory focused on useful information.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to us about listings, categories, or business visibility.',
    description: 'Need help adding a business, improving listing details, correcting contact information, or planning a local directory rollout? Send the details and we will route it properly.',
    formTitle: 'Send a listing request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find businesses, services, categories, and local opportunities faster.',
      description: 'Search across listing names, service summaries, categories, locations, profiles, classifieds, and business insight pages.',
      placeholder: 'Search by business, service, category, city, or keyword',
    },
    resultsTitle: 'Latest searchable listings and resources',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create or manage business listings.',
      description: 'Use your account to access the publishing workspace and submit listing details for the directory.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a listing that is easy to scan and easy to contact.',
      description: 'Add business details, service summaries, images, links, and contact information for the active directory sections.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing draft submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to manage business listings and submissions.',
      badge: 'Directory access',
      title: 'Welcome back to your business listing workspace.',
      description: 'Login to submit new listings, manage directory drafts, and keep business discovery moving.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create an account to submit business listings.',
      badge: 'Create account',
      title: 'Create an account for business listing submissions.',
      description: 'Sign up to add business profiles, save listing details, and submit directory-ready information.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
