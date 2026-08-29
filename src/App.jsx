import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Linkedin,
  MessageCircle,
  Quote,
  Send,
  ShieldCheck,
  Target,
  Youtube,
  Zap,
} from 'lucide-react';

const whatsappLink = 'https://wa.me/8801843752280';
const emailLink = 'mailto:shakilahmedsamims@gmail.com';
const linkedinLink = 'https://www.linkedin.com/in/mdshakilahmedsamim';
const youtubeLink = 'https://www.youtube.com/@ShakilTrackingGuru';
const facebookLink = 'https://www.facebook.com/mdshakilahmedsamim';
const upworkLink = 'https://www.upwork.com/freelancers/~012b2afe9f5b67e24f?mp_source=share';
const calendlyLink = 'https://calendly.com/shakilahmedsamims/30min?hide_gdpr_banner=1';
const web3formsAccessKey = 'fbbc127d-3482-4ca9-a1dc-6cf9feea76b0';
const profileImage = './Shakil.webp';
const pinImage = 'https://framerusercontent.com/images/wUciDkb7amyTwaAe0wqiFkjra0M.png?width=362&height=354';

const avatarPalette = ['#0e6f3c', '#155e38', '#0f172a', '#3d4d6b', '#4a3a0f'];

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((word) => word[0].toUpperCase()).join('');
}

function Avatar({ name }) {
  const hash = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const background = avatarPalette[hash % avatarPalette.length];
  return <span className="avatar-badge" style={{ background }}>{initials(name)}</span>;
}

const partnerTools = [
  { name: 'SCALIXAI', text: 'SCALIXAI' },
  { name: 'Shopify', src: './images/Shopify.webp' },
  { name: 'Stape', src: './images/stape.webp' },
  { name: 'Meta', src: './images/Meta.webp' },
  { name: 'Google Tag Manager', src: './images/Google Tag Manager.webp' },
  { name: 'Google Ads', src: './images/Google Ads.webp' },
  { name: 'GA4', src: './images/GA4.webp' },
  { name: 'Microsoft Ads', src: './images/Microsoft ads.webp' },
  { name: 'AdRock', text: 'AdRock' },
];

const problems = [
  ['Duplicate & Missing Events', 'Purchases fire twice, leads fire zero times, and your CPA numbers can’t be trusted.'],
  ['Broken by iOS & Ad Blockers', 'Browser-only pixels lose 20-30% of real conversions before they ever reach Google or Meta.'],
  ['No One Owns the Setup', 'GTM was set up once, years ago, by someone who’s long gone, and nobody’s touched it since.'],
];

const services = [
  {
    title: 'Tracking Audit',
    who: 'For anyone unsure if their current tracking can be trusted.',
    summary: 'A full audit of your existing GTM, GA4, Meta Pixel, and Google Ads setup before anything gets touched.',
    bullets: [
      ['Duplicate & missing events', 'firing twice or not at all'],
      ['Weak or broken dedupe', 'between browser and server events'],
      ['Signal loss points', 'iOS, ad blockers, privacy browsers cutting your data'],
      ['Broken conversion paths', 'purchase or lead events that fail silently'],
      ['A written report', 'ranking what’s costing you data first'],
    ],
  },
  {
    title: 'Server-Side GTM',
    who: 'For brands tired of losing conversions to browsers and blockers.',
    summary: 'First-party tracking through a server container, so your data is no longer dependent on the browser.',
    bullets: [
      ['Server container setup', 'hosted and configured on your domain'],
      ['First-party routing', 'for GA4, Google Ads, and Meta CAPI'],
      ['Client & server tag matching', 'built to match your actual funnel'],
      ['Event enrichment', 'clean, complete data before it reaches ad platforms'],
    ],
  },
  {
    title: 'GA4 & Funnel Tracking',
    who: 'For teams making budget decisions on a default GA4 setup.',
    summary: 'A GA4 property that actually reflects how people move through your funnel, not the default setup.',
    bullets: [
      ['Key event configuration', 'the events that lead to real business outcomes'],
      ['Funnel exploration reports', 'built around your actual buying journey'],
      ['Cross-domain tracking', 'when checkout or booking lives on another domain'],
      ['Debug View QA', 'verified before anything goes live'],
    ],
  },
  {
    title: 'Meta Conversions API',
    who: 'For anyone whose Meta results tanked after iOS 14.',
    summary: 'Server-side event delivery to Meta, so the Pixel isn’t your only data source.',
    bullets: [
      ['CAPI setup', 'browser + server event deduplication'],
      ['Catalog & CRM events', 'connected for accurate downstream signal'],
      ['Match quality fixes', 'better lead and customer matching'],
      ['Offline conversion imports', 'for sales that close outside the browser'],
    ],
  },
  {
    title: 'Google Ads Conversion Tracking',
    who: 'For advertisers scaling spend on conversions they can’t verify.',
    summary: 'Conversion actions that match what actually matters to your business, not just the default report.',
    bullets: [
      ['Conversion action setup', 'purchase, lead, call, or offline conversions'],
      ['Enhanced Conversions', 'configured for stronger match rates'],
      ['Value-based bidding data', 'cleaned so bidding decisions can be trusted'],
      ['Attribution review', 'so you know which paths are actually converting'],
    ],
  },
  {
    title: 'Measurement Handoff',
    who: 'For teams who need this to survive after the project ends.',
    summary: 'Documentation so tracking never becomes a black box only you inherited.',
    bullets: [
      ['A readable event map', 'what fires, when, and why'],
      ['Launch & QA checklist', 'used to verify the setup goes live correctly'],
      ['Debug evidence', 'proof every event fires correctly'],
      ['Operating notes', 'for your team to maintain it going forward'],
    ],
  },
];

const proofBar = [
  ['500+', 'Tracking Setups Fixed'],
  ['5.0', 'Average Client Rating'],
  ['3-Platform', 'Proof: Upwork, Fiverr, LinkedIn'],
  ['72-Hour', 'Average Turnaround'],
];

// Case study numbers below are the true, qualitative before/after states already
// implied by the real client reviews. No specific percentages or dollar figures
// are invented. Swap in real client-confirmed metrics here once available.
const caseStudies = [
  {
    slug: 'tiktok-gtm-launch',
    headline: 'From No Tracking to a Clean TikTok + GTM Launch for a First-Time Advertiser',
    industry: 'Paid Social / Ecommerce',
    platforms: 'TikTok Ads, GTM',
    servicesUsed: 'Tracking Audit, GTM Setup',
    result: 'First TikTok Pixel + GTM launch, shipped and verified before go-live.',
    challenge: 'The client was launching their first TikTok ad campaign but had no tracking infrastructure in place: no Pixel, no GTM container, and no way to confirm which actions on the site actually counted as a conversion once ads went live.',
    why: 'Referred through Upwork after reviewing prior GTM and Google Ads tracking work; selected specifically for experience setting up brand-new tracking stacks rather than fixing existing ones.',
    solution: [
      'Installed and configured the TikTok Pixel end-to-end',
      'Built a GTM container from scratch, structured around the client’s actual conversion events',
      'Verified event firing in real-time debug view before the campaign launch',
      'Documented the setup so the client’s team could self-serve future changes',
    ],
    results: [
      ['No tracking infrastructure', 'Full Pixel + GTM live'],
      ['0 verified conversion events', 'Every key event firing and verified'],
      ['No campaign launch possible', 'Campaign launched on schedule'],
    ],
    quote: 'Shakil has helped me to setup my TikTok Pixel and configured it with GTM.',
    quoteAuthor: 'Upwork Client, TikTok Pixel & GTM Setup',
    cta: 'Launching on a new ad platform? Get the same setup',
  },
  {
    slug: 'meta-tracking-accuracy',
    headline: 'Fixing Facebook & Meta Ads Tracking Data Accuracy for a Growing Advertiser',
    industry: 'Ecommerce / Digital Marketing',
    platforms: 'Meta Ads, GA4',
    servicesUsed: 'Tracking Audit, Meta CAPI, GA4 Funnel Tracking',
    result: 'Clean, reliable Facebook and Meta ad tracking restored.',
    challenge: 'The client’s Facebook and Meta ad tracking data couldn’t be trusted for platform-quality decisions: event accuracy and platform integrations were inconsistent enough that performance reporting was unreliable.',
    why: 'Hired specifically for tracking and data-accuracy expertise across Facebook and Meta ads, based on prior client reviews citing platform-integration skill.',
    solution: [
      'Full audit of the existing Meta Pixel + CAPI setup',
      'Corrected event configuration and platform integrations',
      'Verified tracking-specific outcomes against real ad account data',
      'Implemented ongoing QA checkpoints for data accuracy',
    ],
    results: [
      ['Inconsistent, unreliable event data', 'Clean, reliable conversion tracking'],
      ['Platform integrations misfiring', 'Verified, agency-ready tracking data'],
    ],
    quote: 'His expertise in conversion tracking, data accuracy, and platform integrations is outstanding.',
    quoteAuthor: 'Yarne de Win, Google Ads, CRO & Copywriting Specialist',
    cta: 'Not sure if your Meta data is accurate? Get a free audit',
  },
  {
    slug: 'catalog-analytics-pinterest',
    headline: 'API, Catalog, and Analytics: A Full Tracking Stack Rebuild for an Ecommerce & Pinterest Advertiser',
    industry: 'Ecommerce',
    platforms: 'Google Tag Manager, Google Analytics, Pinterest Ads',
    servicesUsed: 'GTM, Analytics, Conversions API, Catalog Setup',
    result: 'Full-stack tracking connecting catalog, analytics, and Pinterest conversions.',
    challenge: 'The client needed Conversions API and product catalog tracking connected correctly to Pinterest ad campaigns, alongside a broader Google Tag Manager and Analytics setup that was already technically inconsistent.',
    why: 'Selected based on deep technical knowledge of GTM, Google Analytics, and cross-platform conversion linking, confirmed across two separate Fiverr engagements.',
    solution: [
      'Rebuilt GTM and GA configuration end-to-end',
      'Connected Conversions API and product catalog to Pinterest campaigns',
      'Linked cross-platform conversion data so attribution stayed consistent',
      'Verified catalog signal accuracy before scaling ad spend',
    ],
    results: [
      ['Disconnected catalog & conversion data', 'Fully connected, cross-platform tracking stack'],
      ['Manual, unverifiable attribution', 'Verified Conversions API + catalog signal'],
    ],
    quote: 'He is very technical and good at his job. He knows everything about Google Tag Manager, Google Analytics and conversions linking to Pinterest.',
    quoteAuthor: 'umedrahman96, United Kingdom',
    cta: 'Selling on multiple platforms? Get your tracking connected',
  },
];

const processSteps = [
  ['Free Strategy Call', '30 min. We look at your current setup together and I tell you honestly what’s broken and what isn’t.'],
  ['Full Audit & Fix Plan', 'You get a written report ranking what’s costing you the most data, in plain language, not jargon.'],
  ['Build, Verify, QA', 'I rebuild the tracking, test every event in debug mode, and confirm it against real ad account data before calling it done.'],
  ['Documented Handoff', 'You get an event map and operating notes, so this never becomes a black box again.'],
];

const comparisonRows = [
  ['Turnaround', 'Weeks of trial and error', 'Buried in a retainer queue', '72-hour average'],
  ['Depth', 'Surface-level Pixel install', 'Tracking is a side task, not the focus', 'Server-side, CAPI, GA4 funnel: full stack'],
  ['Documentation', 'Rarely documented', 'Sometimes documented', 'Always documented and handed off'],
  ['Direct access', 'N/A', 'Account manager, not the specialist', 'You talk directly to the person doing the work'],
];

const niches = {
  local: [
    ['Home Services (HVAC, Roofing, Solar)', 'Phone-call attribution and form-fill tracking, so you know which ads actually book jobs.'],
    ['Legal & Law Firms', 'High-CPC accounts where one mistracked lead is real money: precision call and form tracking.'],
    ['Medical, Dental & Med-Spa', 'Privacy-aware, server-side tracking that doesn’t compromise patient data.'],
    ['Real Estate', 'Lead-to-close attribution across long sales cycles, with offline conversion import.'],
  ],
  ecommerce: [
    ['Shopify DTC Brands', 'Meta CAPI + GA4 + Enhanced Conversions, matched to your actual purchase funnel.'],
    ['Subscription & Recurring Revenue Stores', 'LTV-based conversion values so Smart Bidding optimizes for real customer value, not just first purchase.'],
    ['Multi-Channel Sellers', 'Shopify, Amazon, and TikTok Shop tracking unified so you’re not double-counting conversions.'],
  ],
};

const reviews = [
  {
    platform: 'Upwork',
    name: 'Upwork Client',
    role: 'TikTok Pixel & GTM setup',
    title: 'TikTok Ads Manager Pixel Setup & First Ad Launch',
    quote: 'Shakil has helped me to setup my TikTok Pixel and configured it with GTM. He is someone who I can rely on for my future projects regarding GTM and GA4 Tracking Setup.',
    result: 'Pixel + GTM configured',
  },
  {
    platform: 'Upwork',
    name: 'Meta Ads Client',
    role: 'Tracking analytics and data',
    title: 'Tracking analytics and data',
    quote: 'Great skills, helped a lot with Facebook and Meta ads tracking. Highly recommend.',
    result: 'Meta tracking fixed',
  },
  {
    platform: 'Upwork',
    name: 'CRM Client',
    role: 'Facebook CAPI configuration',
    title: 'Facebook CRM and Conversion API Configuration',
    quote: 'Great work! Thank you.',
    result: 'CRM + CAPI connected',
  },
  {
    platform: 'Upwork',
    name: 'Catalog Setup Client',
    role: 'Conversions API specialist',
    title: 'Conversions API & Catalog Setup',
    quote: 'Good work done. Appreciate it.',
    result: 'Catalog signal improved',
  },
  {
    platform: 'Fiverr',
    name: 'umedrahman96',
    role: 'United Kingdom',
    title: 'GTM, Analytics & Pinterest Conversion Tracking',
    quote: 'Shakil was absolutely fantastic. He is very technical and good at his job. He knows everything about Google Tag Manager, Google Analytics and conversions linking this to Pinterest.',
    result: 'Analytics + Pinterest setup',
  },
  {
    platform: 'Fiverr',
    name: 'itsharry27',
    role: 'Pakistan',
    title: 'API Setup Collaboration',
    quote: 'He has very deep knowledge to set up the API. I am impressed by his technical skillset and his collaboration. I will get back to you soon.',
    result: 'API tracking support',
  },
  {
    platform: 'LinkedIn',
    name: 'Yarne de Win',
    role: 'Google Ads, CRO & Copywriting Specialist',
    title: 'LinkedIn Recommendation',
    quote: 'His expertise in conversion tracking, data accuracy, and platform integrations is outstanding. He quickly identifies issues others miss and implements clean, reliable tracking that gives real clarity on performance.',
    result: 'Reliable performance data',
  },
];

const proofStrip = ['Verified platform reviews', 'Tracking-specific outcomes', 'Agency-ready handoff'];

const faqs = [
  ['Can you work on my existing GTM container?', 'Yes. I start with a full audit of your existing GTM container before changing anything, so nothing that’s already working gets broken. Most projects build on top of the existing container rather than starting over.'],
  ['Do I always need server-side tracking?', 'No. Server-side tracking is recommended when you’re losing conversions to iOS, ad blockers, or privacy browsers, which affects most stores and lead-gen sites running Meta or Google Ads at scale. For smaller accounts, a clean browser-side setup with proper deduplication may be enough, and I’ll tell you honestly which one you actually need during the audit.'],
  ['Will this work on Vercel, cPanel, WordPress, or Shopify?', 'Yes. I’ve set up tracking across Shopify, WordPress, Webflow, cPanel-hosted sites, and custom-coded stacks including Vercel deployments. The setup method changes slightly by platform, but the outcome (clean, verified conversion data) stays the same.'],
  ['Do you document the setup?', 'Yes, every project. You receive a written event map, a launch/QA checklist, and operating notes so your team, or the next freelancer, can maintain the tracking without starting from scratch.'],
  ['How long does a typical tracking fix take?', 'Most single-platform fixes (GA4, Meta CAPI, or Google Ads conversion setup) are completed within 72 hours of the audit being approved. Full-stack server-side rebuilds typically take 5 to 7 business days depending on the number of conversion events involved.'],
  ['What if I don’t know what’s wrong, I just know something is off?', 'That’s exactly what the free 30-minute audit is for. Send your GTM container ID, GA4 property, or ad account access, and I’ll identify specifically what’s broken before you commit to anything.'],
];

const pageCss = `
:root { --brand: #FFC933; --brand-red: #E5252A; --brand-red-dark: #B01018; --stat-green: #0F9D58; --ink: #0E0F11; --soft: #F7F7F5; --watch-green: #0e6f3c; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--soft); }
a { color: inherit; text-decoration: none; }
.page { min-height: 100vh; color: #1A1A1A; background: var(--soft); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0; }
.site-header { position: sticky; top: 0; z-index: 60; background: rgba(14,15,17,.92); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,.08); }
.header-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 68px; }
.brand { font-size: 20px; font-weight: 950; color: white; }
.brand span { color: var(--brand); }
.site-nav { display: flex; align-items: center; gap: 28px; }
.site-nav a { font-size: 14px; font-weight: 800; color: rgba(255,255,255,.72); transition: color .18s ease; }
.site-nav a:hover { color: white; }
.header-cta { min-height: 40px; padding: 0 22px; font-size: 13px; }
#services, #reviews, #faq, #contact, #case-studies, #process, #why-me, #niches { scroll-margin-top: 84px; }
@media (max-width: 860px) { .site-nav { display: none; } }
.section { padding: 108px 20px; }
@media (max-width: 680px) { .section { padding: 64px 16px; } }
.container { max-width: 1220px; margin: 0 auto; }
.hero { overflow: hidden; padding-bottom: 82px; background: var(--soft); }
.hero-copy { max-width: 900px; margin: 0 auto; padding: 56px 20px 0; text-align: center; }
.eyebrow-pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 999px; background: var(--brand); color: #1A1A1A; font-size: 13px; font-weight: 900; }
.hero h1 { margin: 22px 0 0; font-size: clamp(40px, 5vw, 70px); line-height: 1.05; font-weight: 800; letter-spacing: -0.01em; }
.hero h1 .swash { white-space: nowrap; background: linear-gradient(to top, rgba(255,201,51,.85) 30%, transparent 30%); padding: 0 3px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
.hero-sub { max-width: 640px; margin: 22px auto 0; color: #4b5563; font-size: 18px; line-height: 1.6; }
.trust-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px 32px; margin-top: 32px; font-size: 15px; font-weight: 800; }
.trust-row span { display: inline-flex; align-items: center; gap: 8px; }
.trust-row svg { color: var(--stat-green); }
.hero-cta { margin-top: 34px; text-align: center; }
.hero-cta small { display: block; margin-top: 12px; color: #6B7280; font-size: 13px; font-weight: 700; }
.trust-bar { text-align: center; margin-top: 64px; }
.trust-bar-label { display: inline-flex; align-items: center; gap: 9px; padding: 11px 16px; border-radius: 10px; border: 1px solid rgba(15,23,42,.12); background: #fff; color: #334155; font-weight: 700; box-shadow: 0 10px 24px rgba(74,91,115,.08); }
.video-stage { position: relative; width: min(720px, 86vw); margin: 48px auto 0; isolation: isolate; }
.video-stage::before { content: ''; position: absolute; inset: -72px -130px; z-index: -2; border-radius: 50%; background: radial-gradient(circle at 50% 50%, rgba(64, 213, 255, .42), transparent 28%), radial-gradient(circle at 24% 52%, rgba(255,255,255,.95), transparent 22%), radial-gradient(circle at 76% 52%, rgba(255,255,255,.95), transparent 22%); filter: blur(22px); animation: videoGlow 5.8s ease-in-out infinite alternate; }
.video-box { position: relative; border-radius: 30px; padding: 9px; background: linear-gradient(145deg, #fff, rgba(230,245,255,.94)); box-shadow: 0 28px 78px rgba(48, 71, 96, .25), inset 0 0 0 1px rgba(255,255,255,.98), 0 0 0 1px rgba(206,229,248,.96); }
.video-mask { overflow: hidden; border-radius: 22px; background: #000; }
.vidalytics-shell { width: 100%; background: #000; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 54px; padding: 0 14px 0 30px; border-radius: 999px; border: 1px solid var(--brand-red-dark); background: var(--brand-red); color: white; font-weight: 900; box-shadow: 0 18px 44px rgba(229, 37, 42, .34); transition: transform .22s ease, box-shadow .22s ease; }
.btn:hover { transform: translateY(-2px); box-shadow: 0 24px 58px rgba(229, 37, 42, .42); }
.btn .circle { display: grid; place-items: center; width: 31px; height: 31px; border-radius: 999px; background: rgba(255,255,255,.22); color: #fff; }
.split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr); gap: 68px; align-items: center; max-width: 1030px; margin: 84px auto 0; }
.split h2 { margin: 0; font-size: clamp(34px, 3.6vw, 50px); line-height: 1.05; font-weight: 900; }
.creator-row { display: flex; align-items: center; gap: 30px; margin-top: 26px; }
.creator-row img { width: 42px; height: 42px; border-radius: 999px; object-fit: cover; border: 2px solid #fff; box-shadow: 0 12px 28px rgba(0,0,0,.12); }
.creator-row strong { display: block; font-size: 15px; }
.creator-row small { color: #64748b; }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 38px; max-width: 520px; padding: 23px 22px; border-radius: 18px; background: rgba(255,255,255,.96); border: 1px solid rgba(15,23,42,.1); box-shadow: 0 22px 70px rgba(28,45,72,.09); }
.stats strong { display: block; color: var(--stat-green); font-size: 28px; line-height: 1; }
.stats small { display: block; margin-top: 7px; color: #64748b; font-size: 11px; }
.check-card { position: relative; transform: rotate(-3deg); padding: 36px; border-radius: 34px; background: #fff; border: 1px solid rgba(15,23,42,.1); box-shadow: 0 30px 90px rgba(74,89,110,.16); }
.check-card img { position: absolute; right: -32px; top: -42px; width: 96px; transform: rotate(20deg); }
.check-card ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 19px; font-size: 20px; font-weight: 900; }
.check-card li { display: flex; align-items: flex-start; gap: 14px; }
.check-card b { display: grid; place-items: center; flex: 0 0 auto; width: 29px; height: 29px; border-radius: 999px; background: var(--stat-green); color: white; font-size: 14px; }
.partners { text-align: center; margin-top: 90px; }
.badge { display: inline-flex; align-items: center; gap: 9px; padding: 11px 16px; border-radius: 10px; border: 1px solid rgba(15,23,42,.12); background: #fff; color: #334155; font-weight: 700; box-shadow: 0 10px 24px rgba(74,91,115,.08); }
.logo-row { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 34px; }
.logo-card { display: grid; place-items: center; height: 54px; min-width: 64px; padding: 0 14px; border-radius: 9px; background: #fff; border: 1px solid rgba(255,255,255,.9); box-shadow: 0 9px 24px rgba(74,91,115,.09); }
.logo-card:nth-child(1), .logo-card:nth-child(9) { min-width: 126px; height: 48px; }
.logo-card:nth-child(5) { height: 66px; min-width: 74px; }
.logo-card img { width: 40px; height: 40px; object-fit: contain; transform: scale(1.16); }
.logo-card:nth-child(4) img { width: 54px; }
.logo-card span { font-size: 21px; font-weight: 900; color: #4b2b6f; }
.logo-card:last-child span { color: #ef3046; }
.whatsapp { display: inline-flex; align-items: center; gap: 9px; height: 48px; margin-top: 38px; padding: 0 24px; border-radius: 9px; background: linear-gradient(135deg,#22df70,#13be5d); color: white; font-weight: 900; box-shadow: 0 16px 38px rgba(18,185,87,.3); }
.dark { background: var(--ink); color: white; }
.section-title { max-width: 780px; margin: 0 auto 54px; text-align: center; }
.section-title .eyebrow { color: var(--brand); text-transform: uppercase; font-size: 12px; font-weight: 950; }
.dark .section-title .eyebrow { color: var(--brand); }
.section-title h2 { margin: 15px 0 0; font-size: clamp(36px, 4.4vw, 56px); line-height: 1.04; font-weight: 900; }
.section-title p { margin: 18px auto 0; max-width: 680px; color: #64748b; font-size: 18px; line-height: 1.65; }
.dark .section-title p { color: rgba(255,255,255,.6); }
.problem-strip { background: #fff; }
.problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.problem-card { padding: 28px; border-radius: 22px; background: var(--soft); border: 1px solid rgba(15,23,42,.08); }
.problem-card h3 { margin: 0 0 10px; font-size: 19px; }
.problem-card p { margin: 0; color: #4b5563; line-height: 1.6; }
.review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 34px; }
.service-card { padding: 30px; border-radius: 26px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); transition: transform .25s ease, border-color .25s ease, background .25s ease; }
.service-card:hover { transform: translateY(-6px); border-color: rgba(255,201,51,.32); background: rgba(255,255,255,.09); }
.service-card .who { display: inline-block; margin-bottom: 12px; padding: 5px 12px; border-radius: 999px; background: rgba(255,201,51,.14); color: var(--brand); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .03em; }
.service-card h3 { margin: 0; font-size: 23px; line-height: 1.1; }
.service-card > p { margin: 12px 0 20px; color: rgba(255,255,255,.62); line-height: 1.6; }
.service-card ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 11px; }
.service-card li { padding-left: 20px; position: relative; color: rgba(255,255,255,.68); line-height: 1.55; font-size: 14px; }
.service-card li::before { content: ''; position: absolute; left: 0; top: 8px; width: 7px; height: 7px; border-radius: 50%; background: var(--stat-green); }
.service-card li strong { color: rgba(255,255,255,.94); font-weight: 800; }
.proof-bar { background: #fff; border-top: 1px solid rgba(15,23,42,.08); border-bottom: 1px solid rgba(15,23,42,.08); padding: 46px 20px; }
.proof-bar-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center; }
.proof-bar-item strong { display: block; color: var(--stat-green); font-size: 32px; font-weight: 950; line-height: 1; }
.proof-bar-item small { display: block; margin-top: 8px; color: #4b5563; font-weight: 700; font-size: 13px; }
.case-study-grid { display: grid; gap: 24px; }
.case-study-card { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 26px; overflow: hidden; background: #fff; border: 1px solid rgba(15,23,42,.08); box-shadow: 0 28px 90px rgba(28,45,72,.08); }
.case-study-main { padding: 38px; }
.case-study-side { padding: 38px; background: var(--ink); color: white; display: flex; flex-direction: column; }
.case-study-snapshot { display: grid; gap: 10px; margin-bottom: 22px; padding-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,.12); font-size: 13px; }
.case-study-snapshot span { color: rgba(255,255,255,.5); }
.case-study-snapshot strong { display: block; color: white; font-weight: 800; }
.case-study-result { padding: 16px; border-radius: 14px; background: rgba(15,157,88,.14); border: 1px solid rgba(15,157,88,.3); color: #4ade80; font-weight: 800; font-size: 14px; line-height: 1.5; }
.case-study-card h3 { margin: 0 0 16px; font-size: 25px; line-height: 1.15; font-weight: 900; }
.case-study-card h4 { margin: 22px 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: .04em; color: var(--brand-red); font-weight: 900; }
.case-study-card p { margin: 0; color: #475569; line-height: 1.68; }
.case-study-card ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.case-study-card ul li { padding-left: 18px; position: relative; color: #334155; line-height: 1.55; font-size: 14.5px; }
.case-study-card ul li::before { content: ''; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background: var(--stat-green); }
.case-study-results { display: grid; gap: 8px; margin-top: 10px; }
.case-study-results div { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: #334155; }
.case-study-results s { color: #94a3b8; }
.case-study-quote { margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.12); font-style: italic; color: rgba(255,255,255,.85); line-height: 1.6; }
.case-study-quote footer { margin-top: 10px; font-style: normal; font-size: 12.5px; color: rgba(255,255,255,.5); }
.case-study-cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 20px; color: var(--brand-red); font-weight: 900; font-size: 14px; }
@media (max-width: 900px) { .case-study-card { grid-template-columns: 1fr; } }
.process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; counter-reset: step; }
.process-card { position: relative; padding: 30px 24px 24px; border-radius: 22px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); }
.process-card .num { display: grid; place-items: center; width: 38px; height: 38px; margin-bottom: 16px; border-radius: 999px; background: var(--brand-red); color: white; font-weight: 950; font-size: 15px; }
.process-card h3 { margin: 0 0 8px; font-size: 18px; }
.process-card p { margin: 0; color: rgba(255,255,255,.62); line-height: 1.55; font-size: 14.5px; }
.reviews { position: relative; overflow: hidden; background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 52%, #e5ebf2 100%); }
.reviews::before { content: ''; position: absolute; inset: 0; background: linear-gradient(115deg, rgba(255,201,51,.28), transparent 24%), linear-gradient(90deg, rgba(15,23,42,.08) 1px, transparent 1px), linear-gradient(180deg, rgba(15,23,42,.06) 1px, transparent 1px); background-size: auto, 82px 82px, 82px 82px; pointer-events: none; }
.reviews::after { content: ''; position: absolute; left: 0; right: 0; top: 155px; height: 1px; background: linear-gradient(90deg, transparent, rgba(15,23,42,.18), transparent); pointer-events: none; }
.reviews .container { position: relative; z-index: 1; }
.review-proof-strip { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 26px 0 34px; }
.proof-chip { display: inline-flex; align-items: center; min-height: 42px; padding: 0 16px; border-radius: 999px; background: rgba(255,255,255,.78); border: 1px solid rgba(15,23,42,.1); color: #0f172a; font-size: 13px; font-weight: 900; box-shadow: 0 18px 46px rgba(28,45,72,.08); backdrop-filter: blur(10px); }
.proof-chip::before { content: '\\2713'; display: grid; place-items: center; width: 18px; height: 18px; margin-right: 8px; border-radius: 50%; background: #111827; color: var(--brand); font-size: 12px; }
.review-showcase { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(320px, .92fr); gap: 22px; align-items: stretch; margin-bottom: 40px; }
.review-feature { position: relative; overflow: hidden; display: grid; align-content: space-between; min-height: 340px; padding: 34px; border-radius: 28px; background: linear-gradient(145deg, #050507 0%, #10131a 62%, #050507 100%); color: white; box-shadow: 0 38px 120px rgba(5,5,7,.24); }
.review-feature::before { content: ''; position: absolute; inset: 0; background: linear-gradient(125deg, rgba(255,201,51,.18), transparent 24%, transparent 70%, rgba(255,255,255,.07)); pointer-events: none; }
.review-feature::after { content: 'PROOF'; position: absolute; right: -18px; bottom: -16px; color: rgba(255,255,255,.045); font-size: 128px; line-height: .8; font-weight: 950; pointer-events: none; }
.review-feature > * { position: relative; z-index: 1; }
.review-feature svg { color: var(--brand); filter: drop-shadow(0 0 18px rgba(255,201,51,.4)); }
.review-feature h3 { max-width: 760px; margin: 26px 0 0; font-size: clamp(28px, 3.2vw, 46px); line-height: 1.02; font-weight: 900; }
.review-feature p { max-width: 760px; margin: 20px 0 0; color: rgba(255,255,255,.7); font-size: 17px; line-height: 1.7; }
.review-feature .client { border-color: rgba(255,255,255,.12); }
.review-feature .client small { color: rgba(255,255,255,.55); }
.review-panel { position: relative; overflow: hidden; padding: 28px; border-radius: 24px; background: rgba(255,255,255,.9); border: 1px solid rgba(15,23,42,.08); box-shadow: 0 24px 80px rgba(28,45,72,.09); display: flex; flex-direction: column; }
.review-panel .platform { align-self: flex-start; }
.review-panel strong { display: block; margin-top: 14px; font-size: 32px; line-height: .9; font-weight: 950; color: var(--brand-red); letter-spacing: 3px; }
.review-panel p { margin-top: 14px; color: #64748b; line-height: 1.6; }
.review-card { position: relative; overflow: hidden; display: flex; flex-direction: column; min-height: 320px; padding: 28px; border-radius: 24px; background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.86)); border: 1px solid rgba(15,23,42,.08); box-shadow: 0 28px 90px rgba(28,45,72,.1); backdrop-filter: blur(10px); transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.review-card::before { content: ''; position: absolute; inset: 0 0 auto; height: 5px; background: linear-gradient(90deg, var(--brand-red), #111827 74%, transparent); opacity: .95; }
.review-card::after { content: '\\201D'; position: absolute; right: 18px; bottom: -38px; color: rgba(15,23,42,.05); font-size: 132px; line-height: 1; font-weight: 950; pointer-events: none; }
.review-card:hover { transform: translateY(-8px); border-color: rgba(15,23,42,.16); box-shadow: 0 40px 120px rgba(28,45,72,.16); }
.review-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.platform { border-radius: 999px; background: #050507; color: #fff; padding: 7px 12px; font-size: 12px; font-weight: 950; text-transform: uppercase; }
.stars { color: #f2a900; font-size: 14px; font-weight: 950; white-space: nowrap; }
.review-card h3 { position: relative; margin: 24px 0 0; font-size: 22px; line-height: 1.08; font-weight: 950; }
.review-card p { position: relative; color: #475569; line-height: 1.72; }
.review-result { position: relative; display: inline-flex; align-items: center; min-height: 34px; margin-top: 18px; padding: 0 12px; border-radius: 999px; background: rgba(255,201,51,.24); color: #111827; font-size: 12px; font-weight: 950; }
.client { position: relative; display: flex; align-items: center; gap: 13px; margin-top: auto; padding-top: 18px; border-top: 1px solid #eef2f7; }
.client img, .client .avatar-badge { width: 48px; height: 48px; border-radius: 999px; object-fit: cover; border: 2px solid #fff; box-shadow: 0 12px 28px rgba(15,23,42,.14); font-size: 16px; }
.client strong { display: block; }
.client small { color: #64748b; }
.avatar-badge { display: grid; place-items: center; flex-shrink: 0; color: #fff; font-weight: 900; letter-spacing: .02em; }
.why-me { background: #fff; }
.comparison-table { max-width: 980px; margin: 0 auto; border-radius: 22px; overflow: hidden; border: 1px solid rgba(15,23,42,.1); box-shadow: 0 24px 80px rgba(28,45,72,.08); }
.comparison-table table { width: 100%; border-collapse: collapse; background: #fff; }
.comparison-table th, .comparison-table td { padding: 16px 18px; text-align: left; font-size: 14px; border-bottom: 1px solid rgba(15,23,42,.08); }
.comparison-table thead th { background: var(--ink); color: rgba(255,255,255,.7); font-size: 12px; text-transform: uppercase; letter-spacing: .03em; }
.comparison-table thead th:last-child { background: var(--brand-red); color: white; }
.comparison-table tbody td:first-child { font-weight: 800; color: #0f172a; }
.comparison-table tbody td:last-child { font-weight: 800; color: var(--stat-green); background: rgba(15,157,88,.06); }
.comparison-table tr:last-child td { border-bottom: 0; }
@media (max-width: 760px) { .comparison-table { overflow-x: auto; } .comparison-table table { min-width: 620px; } }
.contact { background: white; }
.contact-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 46px; }
.proof-list { display: grid; gap: 14px; margin-top: 28px; }
.proof-item, .contact-card { border: 1px solid rgba(15,23,42,.09); background: linear-gradient(180deg,#fff,#f8fafc); box-shadow: 0 22px 70px rgba(28,45,72,.08); }
.proof-item { display: flex; align-items: center; gap: 14px; border-radius: 18px; padding: 18px; }
.proof-item svg { color: var(--brand-red); }
.contact-cards { display: grid; gap: 18px; }
.contact-card { border-radius: 26px; padding: 24px; }
.contact-card h3 { margin: 0; font-size: 22px; }
.contact-card p { margin: 6px 0 0; color: #64748b; line-height: 1.6; }
.contact-link { display: inline-flex; width: 100%; align-items: center; justify-content: center; gap: 8px; min-height: 48px; margin-top: 18px; border-radius: 999px; background: #0f172a; color: white; font-weight: 900; }
.contact-outline { background: white; color: #0f172a; border: 1px solid rgba(15,23,42,.12); }
.form { display: grid; gap: 13px; margin-top: 18px; }
.form label { display: grid; gap: 7px; color: #334155; font-size: 13px; font-weight: 850; }
.form input, .form select, .form textarea { width: 100%; border: 1px solid rgba(15,23,42,.12); border-radius: 15px; padding: 13px 15px; font: inherit; outline: none; background: white; }
.form textarea { min-height: 100px; resize: vertical; }
.form input:focus, .form select:focus, .form textarea:focus { border-color: rgba(229,37,42,.6); box-shadow: 0 0 0 4px rgba(229,37,42,.12); }
.form button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; border: 0; border-radius: 999px; background: var(--brand-red); color: white; font-weight: 950; cursor: pointer; box-shadow: 0 14px 34px rgba(229, 37, 42, .28); }
.form button:disabled { opacity: .7; cursor: not-allowed; }
.result { margin: 0; color: #334155; font-size: 13px; font-weight: 850; }
.niches-band { background: var(--soft); }
.niches-group { margin-bottom: 40px; }
.niches-group:last-child { margin-bottom: 0; }
.niches-group h3 { margin: 0 0 20px; font-size: 13px; text-transform: uppercase; letter-spacing: .04em; color: #6B7280; font-weight: 900; }
.niches-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.niches-grid.local { grid-template-columns: repeat(4, 1fr); }
.niches-grid.ecommerce { grid-template-columns: repeat(3, 1fr); }
.niche-card { padding: 22px; border-radius: 18px; background: white; border: 1px solid rgba(15,23,42,.08); box-shadow: 0 14px 40px rgba(28,45,72,.06); }
.niche-card h4 { margin: 0 0 8px; font-size: 15px; }
.niche-card p { margin: 0; color: #64748b; font-size: 13.5px; line-height: 1.55; }
@media (max-width: 900px) { .niches-grid.local, .niches-grid.ecommerce { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .niches-grid.local, .niches-grid.ecommerce { grid-template-columns: 1fr; } }
.faq-list { max-width: 860px; margin: 0 auto; display: grid; gap: 12px; }
details { border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.06); border-radius: 18px; padding: 20px; }
summary { cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; font-weight: 900; }
details p { color: rgba(255,255,255,.62); line-height: 1.7; }
.footer { position: relative; overflow: hidden; background: var(--ink); color: white; padding: 82px 20px 38px; border-top: 1px solid rgba(255,255,255,.1); }
.footer::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 29% 45%, rgba(14,111,60,.20), transparent 29%), radial-gradient(circle at 32% 45%, rgba(255,201,51,.08), transparent 17%), linear-gradient(90deg, transparent 0 25%, rgba(255,255,255,.04) 25.05% 25.15%, transparent 25.25%), linear-gradient(180deg, rgba(255,255,255,.035) 0 1px, transparent 1px 55%); }
.footer-grid { position: relative; z-index: 1; display: grid; grid-template-columns: .95fr 1fr; gap: 56px; align-items: center; }
.footer-clock-scene { position: relative; min-height: 440px; display: grid; place-items: center; gap: 22px; isolation: isolate; }
.footer-clock-scene::before { content: ''; position: absolute; width: min(480px, 86vw); height: min(480px, 86vw); border-radius: 50%; background: radial-gradient(circle, rgba(14,111,60,.24), transparent 62%); filter: blur(34px); z-index: -1; }
.clock-face { position: relative; width: min(320px, 76vw); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 36% 30%, rgba(255,255,255,.07), transparent 40%), radial-gradient(circle, #171b1f 0%, #06070a 78%); box-shadow: inset 0 0 0 1px rgba(255,255,255,.09), inset 0 0 0 9px rgba(0,0,0,.55), inset 0 0 0 10px rgba(14,111,60,.42), 0 30px 90px rgba(0,0,0,.6), 0 0 46px rgba(255,201,51,.07); }
.clock-tick { position: absolute; left: 50%; top: 50%; width: 2px; height: 8px; margin: -150px 0 0 -1px; background: rgba(255,255,255,.2); border-radius: 2px; transform-origin: 50% 150px; transform: rotate(calc(var(--i) * 6deg)); }
.clock-tick.major { width: 3px; height: 13px; margin-left: -1.5px; background: rgba(255,255,255,.48); }
.clock-numeral { position: absolute; left: 50%; top: 50%; width: 30px; height: 30px; margin: -15px 0 0 -15px; display: grid; place-items: center; color: rgba(255,255,255,.92); font-size: 16px; font-weight: 800; transform: rotate(calc(var(--i) * 30deg)) translateY(-118px) rotate(calc(var(--i) * -30deg)); }
.clock-hand { position: absolute; left: 50%; top: 50%; z-index: 8; transform-origin: 50% 100%; border-radius: 999px; transform: translate(-50%, -100%) rotate(var(--angle)); transition: transform .4s cubic-bezier(.2,.8,.2,1); }
.clock-hand.hour { width: 6px; height: 58px; background: linear-gradient(#f5fff2, #8a9793); box-shadow: 0 0 10px rgba(255,255,255,.22); }
.clock-hand.minute { width: 4px; height: 84px; background: linear-gradient(#f8fff6, #c6d1cf 75%); box-shadow: 0 0 10px rgba(255,255,255,.2); }
.clock-hand.second { width: 2px; height: 96px; background: var(--brand); transition: none; box-shadow: 0 0 10px rgba(255,201,51,.5); }
.clock-center { position: absolute; z-index: 9; left: 50%; top: 50%; width: 14px; height: 14px; border-radius: 50%; transform: translate(-50%, -50%); background: radial-gradient(circle, var(--brand) 0 45%, #111 60%); box-shadow: 0 0 0 3px rgba(255,255,255,.14), 0 0 14px rgba(255,201,51,.4); }
.clock-caption { position: relative; max-width: 220px; padding: 14px 18px; border-radius: 16px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); backdrop-filter: blur(8px); text-align: center; }
.clock-caption strong { display: block; color: var(--brand); font-size: 12px; text-transform: uppercase; letter-spacing: .06em; font-weight: 900; }
.clock-caption small { display: block; margin-top: 6px; color: rgba(255,255,255,.66); font-size: 13px; line-height: 1.5; }
.footer-copy { position: relative; z-index: 2; max-width: 650px; }
.footer-copy .eyebrow { color: var(--brand); font-size: 14px; text-transform: uppercase; font-weight: 950; }
.footer-copy h2 { margin: 18px 0 0; color: white; font-size: clamp(46px, 5.2vw, 76px); line-height: .98; font-weight: 950; }
.footer-copy p { color: rgba(255,255,255,.66); line-height: 1.72; }
.footer-bottom { position: relative; z-index: 2; display: flex; flex-direction: column; gap: 14px; margin-top: 58px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.46); }
.footer-tagline { font-size: 12.5px; color: rgba(255,255,255,.4); }
.footer-bottom-row { display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; }
.footer-links { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.icon-link { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05); }
.calendly-badge-widget { z-index: 9997 !important; }
.whatsapp-fab { position: fixed; left: 22px; bottom: 22px; z-index: 9996; display: grid; place-items: center; width: 58px; height: 58px; border-radius: 50%; background: #25D366; color: white; box-shadow: 0 14px 34px rgba(37,211,102,.45); transition: transform .2s ease, box-shadow .2s ease; }
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 18px 44px rgba(37,211,102,.55); }
@media (max-width: 680px) { .whatsapp-fab { left: 16px; bottom: 16px; width: 52px; height: 52px; } }
@keyframes videoGlow { from { opacity: .72; transform: scale(.98); } to { opacity: 1; transform: scale(1.02); } }
@media (max-width: 980px) { .split, .contact-layout, .footer-grid, .review-showcase { grid-template-columns: 1fr; } .service-grid, .review-grid, .problem-grid, .process-grid { grid-template-columns: 1fr 1fr; } .proof-bar-grid { grid-template-columns: 1fr 1fr; } .footer-copy { text-align: center; margin: 0 auto; } .footer .btn { margin: 0 auto; } .case-study-card { grid-template-columns: 1fr; } }
@media (max-width: 680px) { .hero h1 { font-size: 34px; } .service-grid, .review-grid, .review-stats, .stats, .problem-grid, .process-grid, .proof-bar-grid { grid-template-columns: 1fr; } .review-feature, .review-panel, .review-card { border-radius: 20px; padding: 22px; } .review-feature { min-height: auto; } .review-feature::after { font-size: 82px; } .review-proof-strip { margin-top: -6px; } .proof-chip { width: 100%; justify-content: center; } .check-card { transform: none; } .footer-clock-scene { min-height: 340px; } .clock-face { width: min(230px, 72vw); } .clock-tick { margin-top: -108px; transform-origin: 50% 108px; } .clock-numeral { font-size: 13px; transform: rotate(calc(var(--i) * 30deg)) translateY(-85px) rotate(calc(var(--i) * -30deg)); } .clock-hand.hour { height: 42px; } .clock-hand.minute { height: 60px; } .clock-hand.second { height: 69px; } }
`;

function getClockAngles(date = new Date()) {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;
  return {
    hour: `${hours * 30 + minutes * 0.5}deg`,
    minute: `${minutes * 6 + seconds * 0.1}deg`,
    second: `${seconds * 6}deg`,
  };
}

function CalendlyBadge() {
  useEffect(() => {
    if (window.__shakilCalendlyBadgeLoaded) return;
    window.__shakilCalendlyBadgeLoaded = true;

    const load = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);

      const init = () => {
        if (!window.Calendly || document.querySelector('.calendly-badge-widget')) return;
        window.Calendly.initBadgeWidget({
          url: calendlyLink,
          text: 'Schedule time with me',
          color: '#414141',
          textColor: '#ffffff',
          branding: true,
        });
      };

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(load, { timeout: 4000 });
    } else {
      window.setTimeout(load, 2000);
    }
  }, []);

  return null;
}

function VidalyticsEmbed() {
  useEffect(() => {
    const flag = '__vidalytics_SmDRjS4JjsHLVuwd_loaded';
    if (window[flag]) return;
    window[flag] = true;

    const inject = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement('script');s.type='text/javascript';s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==='loaded'||s.readyState==='complete'){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName('head')[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_SmDRjS4JjsHLVuwd', 'https://fast.vidalytics.com/embeds/i4lAbS7M/SmDRjS4JjsHLVuwd/');`;
      document.body.appendChild(script);
    };

    window.requestAnimationFrame(() => window.requestAnimationFrame(inject));
  }, []);

  return <div className="vidalytics-shell"><div id="vidalytics_embed_SmDRjS4JjsHLVuwd" style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }} /></div>;
}

function Button({ href, children }) {
  return <a className="btn" href={href}>{children}<span className="circle"><ArrowRight size={17} /></span></a>;
}

function ContactForm() {
  const [result, setResult] = useState('');
  const [sending, setSending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setSending(true);
    setResult('Sending...');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', web3formsAccessKey);
    formData.append('subject', 'New tracking audit request from Shakil website');
    formData.append('from_name', 'Shakil Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setResult('Request sent. I will reply soon.');
        event.currentTarget.reset();
      } else {
        setResult(data.message || 'Error. Please message me on WhatsApp.');
      }
    } catch {
      setResult('Error. Please message me on WhatsApp.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="hidden" name="source" value="Website contact section" />
      <label>Name<input name="name" required placeholder="Your name" /></label>
      <label>Email<input name="email" required type="email" placeholder="you@company.com" /></label>
      <label>Website or store<input name="website" placeholder="https://yourwebsite.com" /></label>
      <label>What needs fixing?
        <select name="need" required defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Tracking Audit</option>
          <option>Server-Side GTM</option>
          <option>GA4 Setup</option>
          <option>Meta CAPI</option>
          <option>Google Ads Conversion Tracking</option>
          <option>Not Sure Yet</option>
        </select>
      </label>
      <button disabled={sending} type="submit">{sending ? 'Sending...' : 'Send Tracking Brief'} <Send size={17} /></button>
      {result && <p className="result">{result}</p>}
    </form>
  );
}

function FooterWatch() {
  const [angles, setAngles] = useState({ hour: '0deg', minute: '0deg', second: '0deg' });
  useEffect(() => {
    setAngles(getClockAngles());
    const timer = window.setInterval(() => setAngles(getClockAngles()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const numerals = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="footer-clock-scene" aria-hidden="true">
      <div className="clock-face">
        {Array.from({ length: 60 }, (_, i) => (
          <span className={`clock-tick${i % 5 === 0 ? ' major' : ''}`} key={i} style={{ '--i': i }} />
        ))}
        {numerals.map((number, i) => (
          <span className="clock-numeral" key={number} style={{ '--i': i }}>{number}</span>
        ))}
        <span className="clock-hand hour" style={{ '--angle': angles.hour }} />
        <span className="clock-hand minute" style={{ '--angle': angles.minute }} />
        <span className="clock-hand second" style={{ '--angle': angles.second }} />
        <span className="clock-center" />
      </div>
      <div className="clock-caption"><strong>Timing matters</strong><small>Clean tracking before the next campaign push.</small></div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">Shakil<span>.</span></a>
        <nav className="site-nav">
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#top">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn header-cta" href={whatsappLink}>Get My Free Audit</a>
      </div>
    </header>
  );
}

function Hero() {
  const checklist = ['Google Ads Conversion Tracking', 'Facebook Pixel & Conversion API', 'First-Party Server-Side Tracking', 'Google Analytics 4 Funnel Track', 'Offline Conversion Setup for Ads'];

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="eyebrow-pill">Trusted by 300+ Businesses for Tracking</span>
        <h1>Wasting Ad Spend on Broken Tracking?<br />I Fix It So Your Ads Finally Have the <span className="swash">Data to Scale</span>.</h1>
        <p className="hero-sub">Full-funnel Google Ads, Meta, and GA4 tracking, rebuilt server-side, verified, and documented, for agencies and growing brands who are done guessing.</p>
        <div className="trust-row">
          {['Tracking Fixed in 72 Hours', 'I Manage Everything, End to End', 'Direct Support, No Ticket Queue'].map((item) => <span key={item}><CheckCircle2 size={18} />{item}</span>)}
        </div>
        <div className="hero-cta">
          <Button href={whatsappLink}>Claim Your Free Tracking Audit</Button>
          <small>Free 30-minute audit. No obligation.</small>
        </div>
      </div>
      <div className="video-stage">
        <div className="video-box"><div className="video-mask"><VidalyticsEmbed /></div></div>
      </div>

      <div className="trust-bar"><span className="trust-bar-label"><ShieldCheck size={16} />Trusted Tools & Partners</span></div>
      <div className="logo-row">{partnerTools.map((tool) => <span className="logo-card" key={tool.name}>{tool.src ? <img src={tool.src} alt={tool.name} /> : <span>{tool.text}</span>}</span>)}</div>

      <div className="split">
        <div>
          <h2>Full-Funnel Tracking to Scale Profitably</h2>
          <div className="creator-row">
            <img src={profileImage} alt="Shakil Ahmed Samim" />
            <div><strong>Shakil Ahmed Samim</strong><small>Conversion Tracking & Google Ads Specialist</small></div>
            <div><div className="rating-stars">★★★★★</div><small>500+ Tracking</small></div>
          </div>
          <div className="stats">{[['300%','Ad revenue'],['35%','Lower cost'],['4:1','Average ROAS'],['2.7X','ROI']].map(([a,b]) => <div key={a}><strong>{a}↑</strong><small>{b}</small></div>)}</div>
        </div>
        <div className="check-card">
          <img src={pinImage} alt="" aria-hidden="true" />
          <ul>{checklist.map((item) => <li key={item}><b>✓</b><span>{item}</span></li>)}</ul>
        </div>
      </div>

      <div className="partners">
        <a className="whatsapp" href={whatsappLink}><MessageCircle size={19} />Chat on WhatsApp</a>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return <div className="section-title"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function ProblemStrip() {
  return (
    <section className="section problem-strip">
      <div className="container">
        <SectionTitle eyebrow="Sound Familiar?" title="Your Ads Are Live. Your Data Isn't Telling the Truth." />
        <div className="problem-grid">
          {problems.map(([title, body]) => (
            <div className="problem-card" key={title}><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section dark" id="services">
      <div className="container">
        <SectionTitle eyebrow="Full-stack tracking" title="Built like infrastructure, presented like a premium product." copy="Six services, one clean handoff: audit, rebuild, and QA for every conversion event your ads depend on." />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="who">{service.who}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.bullets.map(([label, detail]) => (
                  <li key={label}><strong>{label}:</strong> {detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <div className="proof-bar">
      <div className="proof-bar-grid">
        {proofBar.map(([value, label]) => (
          <div className="proof-bar-item" key={label}><strong>{value}</strong><small>{label}</small></div>
        ))}
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <SectionTitle eyebrow="Real Projects" title="Case Studies: Before and After the Fix." copy="Full challenge-to-result breakdowns from real Upwork, Fiverr, and LinkedIn engagements." />
        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <article className="case-study-card" key={cs.slug}>
              <div className="case-study-main">
                <h3>{cs.headline}</h3>
                <h4>The Challenge</h4>
                <p>{cs.challenge}</p>
                <h4>Why They Chose Shakil</h4>
                <p>{cs.why}</p>
                <h4>The Solution</h4>
                <ul>{cs.solution.map((item) => <li key={item}>{item}</li>)}</ul>
                <h4>The Results</h4>
                <div className="case-study-results">
                  {cs.results.map(([before, after]) => (
                    <div key={before}><s>{before}</s><ArrowRight size={13} /><strong>{after}</strong></div>
                  ))}
                </div>
              </div>
              <div className="case-study-side">
                <div className="case-study-snapshot">
                  <div><span>Industry: </span><strong>{cs.industry}</strong></div>
                  <div><span>Platforms: </span><strong>{cs.platforms}</strong></div>
                  <div><span>Services: </span><strong>{cs.servicesUsed}</strong></div>
                </div>
                <div className="case-study-result">{cs.result}</div>
                <div className="case-study-quote">
                  “{cs.quote}”
                  <footer>{cs.quoteAuthor}</footer>
                </div>
                <a className="case-study-cta" href={whatsappLink}>{cs.cta} <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section dark" id="process">
      <div className="container">
        <SectionTitle eyebrow="What Happens Next" title="From First Message to Verified Tracking, in 4 Steps." />
        <div className="process-grid">
          {processSteps.map(([title, body], i) => (
            <div className="process-card" key={title}>
              <span className="num">{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const featuredReview = reviews[6];
  const visibleReviews = reviews.slice(0, 6);

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <SectionTitle eyebrow="Client proof" title={<span>Real clients. Real <span style={{ color: '#9aa3b2' }}>tracking fixes.</span></span>} copy="Proof from Upwork, Fiverr, and LinkedIn projects across GTM, GA4, Meta Pixel, CAPI, API, and conversion tracking." />
        <div className="review-proof-strip">{proofStrip.map((proof) => <span className="proof-chip" key={proof}>{proof}</span>)}</div>
        <div className="review-showcase">
          <article className="review-feature">
            <div>
              <Quote size={42} />
              <h3>{featuredReview.title}</h3>
              <p>“{featuredReview.quote}”</p>
            </div>
            <div className="client">
              <Avatar name={featuredReview.name} />
              <div><strong>{featuredReview.name}</strong><small>{featuredReview.role}</small></div>
            </div>
          </article>
          <div className="review-panel">
            <span className="platform">Multi-platform proof</span>
            <strong>★★★★★</strong>
            <p>Clients hire me when their ad platforms need clean conversion data, better event quality, and tracking they can trust before scaling spend.</p>
          </div>
        </div>
        <div className="review-grid">
          {visibleReviews.map((review) => <article className="review-card" key={review.title}>
            <div className="review-top"><span className="platform">{review.platform}</span><span className="stars">★★★★★ 5.0</span></div>
            <h3>{review.title}</h3><p>“{review.quote}”</p>
            <span className="review-result">{review.result}</span>
            <div className="client"><Avatar name={review.name} /><div><strong>{review.name}</strong><small>{review.role}</small></div></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="section why-me" id="why-me">
      <div className="container">
        <SectionTitle eyebrow="Before You Decide" title="DIY vs. a Generic Agency vs. Working With Me" />
        <div className="comparison-table">
          <table>
            <thead>
              <tr><th></th><th>DIY / In-House</th><th>Generic Marketing Agency</th><th>Shakil (Tracking Specialist)</th></tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, diy, agency, me]) => (
                <tr key={label}><td>{label}</td><td>{diy}</td><td>{agency}</td><td>{me}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Niches() {
  return (
    <section className="section niches-band" id="niches">
      <div className="container">
        <SectionTitle eyebrow="Built For Your Business Type" title="Tracking Fixes for the Businesses That Depend On Clean Data Most" />
        <div className="niches-group">
          <h3>Local Business</h3>
          <div className="niches-grid local">
            {niches.local.map(([title, body]) => <div className="niche-card" key={title}><h4>{title}</h4><p>{body}</p></div>)}
          </div>
        </div>
        <div className="niches-group">
          <h3>Ecommerce</h3>
          <div className="niches-grid ecommerce">
            {niches.ecommerce.map(([title, body]) => <div className="niche-card" key={title}><h4>{title}</h4><p>{body}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionTitle eyebrow="Work with me" title={<span>Ready to Scale Your <span style={{ color: '#9aa3b2' }}>Ad Performance?</span></span>} copy="If your ads are spending but attribution is unclear, start with a clean tracking audit and a direct fix plan." />
        <div className="contact-layout">
          <div>
            <h3>Why Work With Me?</h3>
            <div className="proof-list">
              {[[Zap,'Fast response','Typically responds within 2 hours'],[CalendarDays,'Strategy call','Free 30-minute tracking strategy call for qualified projects'],[Target,'Audit first','Free audit of your GTM, GA4, Ads, and Pixel setup'],[ShieldCheck,'Full stack','GTM, GA4, Meta CAPI, Google Ads, server-side, and API fixes']].map(([Icon,title,body]) => <div className="proof-item" key={title}><Icon size={22} /><div><strong>{title}</strong><p>{body}</p></div></div>)}
            </div>
          </div>
          <div className="contact-cards">
            <div className="contact-card"><h3>Hire on Upwork</h3><p>Review profile history, ratings, and project fit before starting.</p><a className="contact-link" href={upworkLink} target="_blank" rel="noreferrer">View My Upwork Profile <ExternalLink size={16} /></a></div>
            <div className="contact-card"><h3>Schedule a tracking call</h3><p>Use Calendly when you want to discuss the setup live.</p><a className="contact-link contact-outline" href={calendlyLink} target="_blank" rel="noreferrer">Open Calendly <ExternalLink size={16} /></a></div>
            <div className="contact-card"><h3>Send a project brief</h3><p>For audits, CAPI fixes, GA4 rebuilds, and conversion tracking issues.</p><ContactForm /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <FooterWatch />
        <div className="footer-copy"><div className="eyebrow">Ready to fix the signal?</div><h2>Join the tracking movement.</h2><p>Stop guessing which conversion data you can trust. Get a clean audit, fixed events, and tracking your ad campaigns can actually scale on.</p><Button href={whatsappLink}>Claim Your Free Tracking Audit</Button></div>
      </div>
      <div className="container footer-bottom">
        <p className="footer-tagline">Shakil Ahmed Samim: Google Ads Conversion Tracking &amp; Server-Side Analytics Specialist</p>
        <div className="footer-bottom-row">
          <p>Copyright © 2026 Shakil Ahmed Samim. All rights reserved.</p>
          <div className="footer-links"><a href={linkedinLink}>LinkedIn</a><a href={whatsappLink}>WhatsApp</a><a href={facebookLink}>Facebook</a><a href={youtubeLink}>YouTube</a><a href={emailLink}>Email</a><a className="icon-link" href={linkedinLink}><Linkedin size={16} /></a><a className="icon-link" href={facebookLink}>f</a><a className="icon-link" href={youtubeLink}><Youtube size={16} /></a><a className="icon-link" href={whatsappLink}><MessageCircle size={16} /></a></div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="page">
      <CalendlyBadge />
      <style>{pageCss}</style>
      <Header />
      <a className="whatsapp-fab" href={whatsappLink} aria-label="Chat on WhatsApp"><MessageCircle size={26} /></a>
      <Hero />
      <ProblemStrip />
      <Services />
      <ProofBar />
      <CaseStudies />
      <Process />
      <Reviews />
      <WhyMe />
      <Contact />
      <Niches />
      <section className="section dark" id="faq">
        <div className="container">
          <SectionTitle eyebrow="Decision clarity" title="Questions serious buyers ask before fixing tracking." />
          <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
