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

const services = [
  ['Tracking audit', 'Find duplicate events, missing values, weak dedupe, cookie loss, and broken conversion paths.'],
  ['Server-side GTM', 'First-party routing for GA4, Google Ads, Meta CAPI, and clean event match quality.'],
  ['Conversion API', 'Meta CAPI, catalog, CRM events, lead quality, offline conversion imports, and QA notes.'],
  ['Measurement handoff', 'Readable event map, launch checklist, debug evidence, and next-step operating notes.'],
];

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

const reviewStats = [
  ['500+', 'tracking setups'],
  ['5.0', 'average rating'],
  ['3', 'proof channels'],
];

const faqs = [
  ['Can you work on my existing GTM container?', 'Yes. I audit first, keep what is useful, remove unsafe logic, and rebuild the broken parts.'],
  ['Do I always need server-side tracking?', 'No. It depends on ad spend, signal loss, Meta/Google diagnostics, browser loss, and your attribution goals.'],
  ['Will this work on Vercel and cPanel?', 'Yes. The frontend is static-build friendly and can be deployed on Vercel or uploaded to cPanel after build.'],
  ['Do you document the setup?', 'Yes. You get an event map, QA checklist, launch notes, and the conversion definitions.'],
];

const pageCss = `
:root { --brand: #FEEC1E; --brand-red: #E11D2A; --brand-red-dark: #A5121D; --ink: #070a0f; --soft: #F3F4F8; --watch-green: #0e6f3c; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--soft); }
a { color: inherit; text-decoration: none; }
.page { min-height: 100vh; color: var(--ink); background: var(--soft); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0; }
.top-strip { background: #ffdf67; color: #050507; text-align: center; padding: 8px 16px; font-size: 14px; font-weight: 900; }
.section { padding: 96px 20px; }
.container { max-width: 1220px; margin: 0 auto; }
.hero { overflow: hidden; padding-bottom: 82px; }
.hero-copy { max-width: 980px; margin: 0 auto; padding: 46px 20px 0; text-align: center; }
.hero h1 { margin: 0; font-size: clamp(42px, 5.2vw, 78px); line-height: .98; font-weight: 650; letter-spacing: 0; }
.hero h1 span { display: block; margin-top: 18px; }
.proof-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px 32px; margin-top: 36px; font-size: 16px; font-weight: 800; }
.proof-row span { display: inline-flex; align-items: center; gap: 8px; }
.proof-row svg { color: #1689f9; }
.rating-pill { display: inline-flex; align-items: center; gap: 14px; margin-top: 50px; padding: 11px 20px; border-radius: 999px; background: #dbe4ee; box-shadow: 0 12px 26px rgba(42, 59, 82, .08); }
.avatar-stack { display: flex; margin-left: 3px; }
.avatar-stack img, .avatar-stack .avatar-badge { width: 31px; height: 31px; border-radius: 999px; object-fit: cover; border: 2px solid #dbe4ee; margin-left: -8px; font-size: 11px; }
.rating-stars { color: #f2a900; font-size: 13px; line-height: 1; }
.rating-pill strong { display: block; margin-top: 3px; font-size: 14px; line-height: 1; text-decoration: underline; text-decoration-color: rgba(0,0,0,.35); }
.video-stage { position: relative; width: min(720px, 86vw); margin: 48px auto 0; isolation: isolate; }
.video-stage::before { content: ''; position: absolute; inset: -72px -130px; z-index: -2; border-radius: 50%; background: radial-gradient(circle at 50% 50%, rgba(64, 213, 255, .42), transparent 28%), radial-gradient(circle at 24% 52%, rgba(255,255,255,.95), transparent 22%), radial-gradient(circle at 76% 52%, rgba(255,255,255,.95), transparent 22%); filter: blur(22px); animation: videoGlow 5.8s ease-in-out infinite alternate; }
.video-box { position: relative; border-radius: 30px; padding: 9px; background: linear-gradient(145deg, #fff, rgba(230,245,255,.94)); box-shadow: 0 28px 78px rgba(48, 71, 96, .25), inset 0 0 0 1px rgba(255,255,255,.98), 0 0 0 1px rgba(206,229,248,.96); }
.video-mask { overflow: hidden; border-radius: 22px; background: #000; }
.vidalytics-shell { width: 100%; background: #000; }
.hero-cta { margin-top: 30px; text-align: center; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 54px; padding: 0 12px 0 30px; border-radius: 999px; border: 1px solid var(--brand-red-dark); background: linear-gradient(135deg, #FF4B3E 0%, var(--brand-red) 58%, var(--brand-red-dark) 100%); color: white; font-weight: 900; box-shadow: 0 18px 44px rgba(225, 29, 42, .38); transition: transform .22s ease, box-shadow .22s ease; }
.btn:hover { transform: translateY(-2px); box-shadow: 0 24px 58px rgba(225, 29, 42, .46); }
.btn .circle { display: grid; place-items: center; width: 31px; height: 31px; border-radius: 999px; background: var(--brand); color: #1a0505; }
.split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr); gap: 68px; align-items: center; max-width: 1030px; margin: 98px auto 0; }
.split h2 { margin: 0; font-size: clamp(38px, 4vw, 58px); line-height: 1.02; font-weight: 950; }
.creator-row { display: flex; align-items: center; gap: 30px; margin-top: 26px; }
.creator-row img { width: 42px; height: 42px; border-radius: 999px; object-fit: cover; border: 2px solid #fff; box-shadow: 0 12px 28px rgba(0,0,0,.12); }
.creator-row strong { display: block; font-size: 15px; }
.creator-row small { color: #64748b; }
stats { display: grid; }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 38px; max-width: 520px; padding: 23px 22px; border-radius: 18px; background: rgba(255,255,255,.96); border: 1px solid rgba(15,23,42,.1); box-shadow: 0 22px 70px rgba(28,45,72,.09); }
.stats strong { display: block; color: #1689f9; font-size: 28px; line-height: 1; }
.stats small { display: block; margin-top: 7px; color: #64748b; font-size: 11px; }
.check-card { position: relative; transform: rotate(-3deg); padding: 36px; border-radius: 34px; background: #fff; border: 1px solid rgba(15,23,42,.1); box-shadow: 0 30px 90px rgba(74,89,110,.16); }
.check-card img { position: absolute; right: -32px; top: -42px; width: 96px; transform: rotate(20deg); }
.check-card ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 19px; font-size: 20px; font-weight: 900; }
.check-card li { display: flex; align-items: flex-start; gap: 14px; }
.check-card b { display: grid; place-items: center; flex: 0 0 auto; width: 29px; height: 29px; border-radius: 999px; background: #eea20d; color: white; font-size: 14px; }
.partners { text-align: center; margin-top: 98px; }
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
.dark { background: #050507; color: white; }
.section-title { max-width: 780px; margin: 0 auto 54px; text-align: center; }
.section-title .eyebrow { color: var(--brand); text-transform: uppercase; font-size: 12px; font-weight: 950; }
.section-title h2 { margin: 15px 0 0; font-size: clamp(40px, 5vw, 70px); line-height: .98; font-weight: 950; }
.section-title p { margin: 18px auto 0; max-width: 680px; color: #64748b; font-size: 18px; line-height: 1.65; }
.dark .section-title p { color: rgba(255,255,255,.6); }
.service-grid, .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.service-card { padding: 28px; border-radius: 26px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); min-height: 210px; }
.service-card h3 { margin: 0; font-size: 24px; line-height: 1.1; }
.service-card p { color: rgba(255,255,255,.62); line-height: 1.65; }
.reviews { position: relative; overflow: hidden; background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 52%, #e5ebf2 100%); }
.reviews::before { content: ''; position: absolute; inset: 0; background: linear-gradient(115deg, rgba(254,236,30,.34), transparent 24%), linear-gradient(90deg, rgba(15,23,42,.08) 1px, transparent 1px), linear-gradient(180deg, rgba(15,23,42,.06) 1px, transparent 1px); background-size: auto, 82px 82px, 82px 82px; pointer-events: none; }
.reviews::after { content: ''; position: absolute; left: 0; right: 0; top: 155px; height: 1px; background: linear-gradient(90deg, transparent, rgba(15,23,42,.18), transparent); pointer-events: none; }
.reviews .container { position: relative; z-index: 1; }
.review-proof-strip { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 26px 0 34px; }
.proof-chip { display: inline-flex; align-items: center; min-height: 42px; padding: 0 16px; border-radius: 999px; background: rgba(255,255,255,.78); border: 1px solid rgba(15,23,42,.1); color: #0f172a; font-size: 13px; font-weight: 900; box-shadow: 0 18px 46px rgba(28,45,72,.08); backdrop-filter: blur(10px); }
.proof-chip::before { content: '✓'; display: grid; place-items: center; width: 18px; height: 18px; margin-right: 8px; border-radius: 50%; background: #111827; color: var(--brand); font-size: 12px; }
.review-showcase { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(320px, .92fr); gap: 22px; align-items: stretch; margin-bottom: 22px; }
.review-feature { position: relative; overflow: hidden; display: grid; align-content: space-between; min-height: 410px; padding: 34px; border-radius: 28px; background: linear-gradient(145deg, #050507 0%, #10131a 62%, #050507 100%); color: white; box-shadow: 0 38px 120px rgba(5,5,7,.24); }
.review-feature::before { content: ''; position: absolute; inset: 0; background: linear-gradient(125deg, rgba(254,236,30,.22), transparent 24%, transparent 70%, rgba(255,255,255,.07)); pointer-events: none; }
.review-feature::after { content: 'PROOF'; position: absolute; right: -18px; bottom: -16px; color: rgba(255,255,255,.045); font-size: 128px; line-height: .8; font-weight: 950; pointer-events: none; }
.review-feature > * { position: relative; z-index: 1; }
.review-feature svg { color: var(--brand); filter: drop-shadow(0 0 18px rgba(254,236,30,.4)); }
.review-feature h3 { max-width: 760px; margin: 26px 0 0; font-size: clamp(30px, 3.6vw, 56px); line-height: .98; font-weight: 950; }
.review-feature p { max-width: 760px; margin: 20px 0 0; color: rgba(255,255,255,.7); font-size: 18px; line-height: 1.75; }
.review-feature .client { border-color: rgba(255,255,255,.12); }
.review-feature .client small { color: rgba(255,255,255,.55); }
.review-panel { display: grid; gap: 14px; }
.review-score { position: relative; overflow: hidden; padding: 28px; border-radius: 24px; background: rgba(255,255,255,.9); border: 1px solid rgba(15,23,42,.08); box-shadow: 0 24px 80px rgba(28,45,72,.09); }
.review-score::after { content: ''; position: absolute; right: 20px; top: 20px; width: 76px; height: 76px; border-radius: 18px; border: 1px solid rgba(15,23,42,.08); background: repeating-linear-gradient(135deg, rgba(15,23,42,.11) 0 2px, transparent 2px 8px); opacity: .38; transform: rotate(8deg); }
.review-score strong { display: block; font-size: 48px; line-height: .9; font-weight: 950; }
.review-score p { margin-top: 10px; color: #64748b; line-height: 1.55; }
.review-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.review-stat { min-height: 108px; padding: 16px; border-radius: 18px; background: rgba(255,255,255,.72); border: 1px solid rgba(15,23,42,.08); }
.review-stat strong { display: block; font-size: 29px; line-height: 1; font-weight: 950; }
.review-stat small { display: block; margin-top: 8px; color: #64748b; font-weight: 750; line-height: 1.25; }
.review-card { position: relative; overflow: hidden; min-height: 344px; padding: 28px; border-radius: 24px; background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.86)); border: 1px solid rgba(15,23,42,.08); box-shadow: 0 28px 90px rgba(28,45,72,.1); backdrop-filter: blur(10px); transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.review-card::before { content: ''; position: absolute; inset: 0 0 auto; height: 5px; background: linear-gradient(90deg, var(--brand), #111827 74%, transparent); opacity: .95; }
.review-card::after { content: '”'; position: absolute; right: 18px; bottom: -38px; color: rgba(15,23,42,.05); font-size: 132px; line-height: 1; font-weight: 950; pointer-events: none; }
.review-card:hover { transform: translateY(-8px); border-color: rgba(15,23,42,.16); box-shadow: 0 40px 120px rgba(28,45,72,.16); }
.review-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.platform { border-radius: 999px; background: #050507; color: #fff; padding: 7px 12px; font-size: 12px; font-weight: 950; text-transform: uppercase; }
.stars { color: #f2a900; font-size: 14px; font-weight: 950; white-space: nowrap; }
.review-card h3 { position: relative; margin: 24px 0 0; font-size: 22px; line-height: 1.08; font-weight: 950; }
.review-card p { position: relative; color: #475569; line-height: 1.72; }
.review-result { position: relative; display: inline-flex; align-items: center; min-height: 34px; margin-top: 18px; padding: 0 12px; border-radius: 999px; background: #fff9bf; color: #111827; font-size: 12px; font-weight: 950; }
.client { position: relative; display: flex; align-items: center; gap: 13px; margin-top: 24px; padding-top: 18px; border-top: 1px solid #eef2f7; }
.client img, .client .avatar-badge { width: 48px; height: 48px; border-radius: 999px; object-fit: cover; border: 2px solid #fff; box-shadow: 0 12px 28px rgba(15,23,42,.14); font-size: 16px; }
.client strong { display: block; }
.client small { color: #64748b; }
.avatar-badge { display: grid; place-items: center; flex-shrink: 0; color: #fff; font-weight: 900; letter-spacing: .02em; }
.contact { background: white; }
.contact-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 46px; }
.proof-list { display: grid; gap: 14px; margin-top: 28px; }
.proof-item, .contact-card { border: 1px solid rgba(15,23,42,.09); background: linear-gradient(180deg,#fff,#f8fafc); box-shadow: 0 22px 70px rgba(28,45,72,.08); }
.proof-item { display: flex; align-items: center; gap: 14px; border-radius: 18px; padding: 18px; }
.proof-item svg { color: var(--brand); filter: drop-shadow(0 0 8px rgba(254,236,30,.35)); }
.contact-cards { display: grid; gap: 18px; }
.contact-card { border-radius: 26px; padding: 24px; }
.contact-card h3 { margin: 0; font-size: 22px; }
.contact-card p { margin: 6px 0 0; color: #64748b; line-height: 1.6; }
.contact-link { display: inline-flex; width: 100%; align-items: center; justify-content: center; gap: 8px; min-height: 48px; margin-top: 18px; border-radius: 999px; background: #0f172a; color: white; font-weight: 900; }
.contact-outline { background: white; color: #0f172a; border: 1px solid rgba(15,23,42,.12); }
.form { display: grid; gap: 13px; margin-top: 18px; }
.form label { display: grid; gap: 7px; color: #334155; font-size: 13px; font-weight: 850; }
.form input, .form textarea { width: 100%; border: 1px solid rgba(15,23,42,.12); border-radius: 15px; padding: 13px 15px; font: inherit; outline: none; }
.form textarea { min-height: 124px; resize: vertical; }
.form input:focus, .form textarea:focus { border-color: rgba(254,236,30,.9); box-shadow: 0 0 0 4px rgba(254,236,30,.18); }
.form button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; border: 0; border-radius: 999px; background: linear-gradient(135deg, #FF4B3E 0%, var(--brand-red) 58%, var(--brand-red-dark) 100%); color: white; font-weight: 950; cursor: pointer; box-shadow: 0 14px 34px rgba(225, 29, 42, .3); }
.form button:disabled { opacity: .7; cursor: not-allowed; }
.form button svg { color: var(--brand); }
.result { margin: 0; color: #334155; font-size: 13px; font-weight: 850; }
.faq-list { max-width: 860px; margin: 0 auto; display: grid; gap: 12px; }
details { border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.06); border-radius: 18px; padding: 20px; }
summary { cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; font-weight: 900; }
details p { color: rgba(255,255,255,.62); line-height: 1.7; }
.footer { position: relative; overflow: hidden; background: #050507; color: white; padding: 82px 20px 38px; border-top: 1px solid rgba(255,255,255,.1); }
.footer::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 29% 45%, rgba(14,111,60,.20), transparent 29%), radial-gradient(circle at 32% 45%, rgba(254,236,30,.10), transparent 17%), linear-gradient(90deg, transparent 0 25%, rgba(255,255,255,.04) 25.05% 25.15%, transparent 25.25%), linear-gradient(180deg, rgba(255,255,255,.035) 0 1px, transparent 1px 55%); }
.footer-grid { position: relative; z-index: 1; display: grid; grid-template-columns: .95fr 1fr; gap: 56px; align-items: center; }
.footer-clock-scene { position: relative; min-height: 440px; display: grid; place-items: center; gap: 22px; isolation: isolate; }
.footer-clock-scene::before { content: ''; position: absolute; width: min(480px, 86vw); height: min(480px, 86vw); border-radius: 50%; background: radial-gradient(circle, rgba(14,111,60,.24), transparent 62%); filter: blur(34px); z-index: -1; }
.clock-face { position: relative; width: min(320px, 76vw); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 36% 30%, rgba(255,255,255,.07), transparent 40%), radial-gradient(circle, #171b1f 0%, #06070a 78%); box-shadow: inset 0 0 0 1px rgba(255,255,255,.09), inset 0 0 0 9px rgba(0,0,0,.55), inset 0 0 0 10px rgba(14,111,60,.42), 0 30px 90px rgba(0,0,0,.6), 0 0 46px rgba(254,236,30,.07); }
.clock-tick { position: absolute; left: 50%; top: 50%; width: 2px; height: 8px; margin: -150px 0 0 -1px; background: rgba(255,255,255,.2); border-radius: 2px; transform-origin: 50% 150px; transform: rotate(calc(var(--i) * 6deg)); }
.clock-tick.major { width: 3px; height: 13px; margin-left: -1.5px; background: rgba(255,255,255,.48); }
.clock-numeral { position: absolute; left: 50%; top: 50%; width: 30px; height: 30px; margin: -15px 0 0 -15px; display: grid; place-items: center; color: rgba(255,255,255,.92); font-size: 16px; font-weight: 800; transform: rotate(calc(var(--i) * 30deg)) translateY(-118px) rotate(calc(var(--i) * -30deg)); }
.clock-hand { position: absolute; left: 50%; top: 50%; z-index: 8; transform-origin: 50% 100%; border-radius: 999px; transform: translate(-50%, -100%) rotate(var(--angle)); transition: transform .4s cubic-bezier(.2,.8,.2,1); }
.clock-hand.hour { width: 6px; height: 58px; background: linear-gradient(#f5fff2, #8a9793); box-shadow: 0 0 10px rgba(255,255,255,.22); }
.clock-hand.minute { width: 4px; height: 84px; background: linear-gradient(#f8fff6, #c6d1cf 75%); box-shadow: 0 0 10px rgba(255,255,255,.2); }
.clock-hand.second { width: 2px; height: 96px; background: var(--brand); transition: none; box-shadow: 0 0 10px rgba(254,236,30,.5); }
.clock-center { position: absolute; z-index: 9; left: 50%; top: 50%; width: 14px; height: 14px; border-radius: 50%; transform: translate(-50%, -50%); background: radial-gradient(circle, var(--brand) 0 45%, #111 60%); box-shadow: 0 0 0 3px rgba(255,255,255,.14), 0 0 14px rgba(254,236,30,.4); }
.clock-caption { position: relative; max-width: 220px; padding: 14px 18px; border-radius: 16px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); backdrop-filter: blur(8px); text-align: center; }
.clock-caption strong { display: block; color: var(--brand); font-size: 12px; text-transform: uppercase; letter-spacing: .06em; font-weight: 900; }
.clock-caption small { display: block; margin-top: 6px; color: rgba(255,255,255,.66); font-size: 13px; line-height: 1.5; }
.footer-copy { position: relative; z-index: 2; max-width: 650px; }
.footer-copy .eyebrow { color: var(--brand); font-size: 14px; text-transform: uppercase; font-weight: 950; }
.footer-copy h2 { margin: 18px 0 0; color: white; font-size: clamp(52px, 5.8vw, 86px); line-height: .94; font-weight: 950; }
.footer-copy p { color: rgba(255,255,255,.66); line-height: 1.72; }
.footer-bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; margin-top: 58px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.46); }
.footer-links { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.icon-link { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05); }
.calendly-badge-widget { z-index: 9997 !important; }
.whatsapp-fab { position: fixed; left: 22px; bottom: 22px; z-index: 9996; display: grid; place-items: center; width: 58px; height: 58px; border-radius: 50%; background: #25D366; color: white; box-shadow: 0 14px 34px rgba(37,211,102,.45); transition: transform .2s ease, box-shadow .2s ease; }
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 18px 44px rgba(37,211,102,.55); }
@media (max-width: 680px) { .whatsapp-fab { left: 16px; bottom: 16px; width: 52px; height: 52px; } }
@keyframes videoGlow { from { opacity: .72; transform: scale(.98); } to { opacity: 1; transform: scale(1.02); } }
@media (max-width: 980px) { .split, .contact-layout, .footer-grid, .review-showcase { grid-template-columns: 1fr; } .service-grid, .review-grid { grid-template-columns: 1fr 1fr; } .footer-copy { text-align: center; margin: 0 auto; } .footer .btn { margin: 0 auto; } }
@media (max-width: 680px) { .hero h1 { font-size: 38px; } .section { padding: 72px 16px; } .service-grid, .review-grid, .review-stats, .stats { grid-template-columns: 1fr; } .review-feature, .review-score, .review-card { border-radius: 20px; padding: 22px; } .review-feature { min-height: auto; } .review-feature::after { font-size: 82px; } .review-proof-strip { margin-top: -6px; } .proof-chip { width: 100%; justify-content: center; } .check-card { transform: none; } .footer-clock-scene { min-height: 340px; } .clock-face { width: min(230px, 72vw); } .clock-tick { margin-top: -108px; transform-origin: 50% 108px; } .clock-numeral { font-size: 13px; transform: rotate(calc(var(--i) * 30deg)) translateY(-85px) rotate(calc(var(--i) * -30deg)); } .clock-hand.hour { height: 42px; } .clock-hand.minute { height: 60px; } .clock-hand.second { height: 69px; } }
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
      <label>What needs fixing?<textarea name="message" required placeholder="Example: GA4 purchase event missing, Meta CAPI dedupe problem, Google Ads conversion value mismatch..." /></label>
      <button disabled={sending} type="submit">{sending ? 'Sending...' : 'Send tracking brief'} <Send size={17} /></button>
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

function Hero() {
  const checklist = ['Google Ads Conversion Tracking', 'Facebook Pixel & Conversion API', 'First-Party Server-Side Tracking', 'Google Analytics 4 Funnel Track', 'Offline Conversion Setup for Ads'];

  return (
    <section className="hero">
      <div className="top-strip">I help marketers & agencies scale campaigns with accurate tracking...</div>
      <div className="hero-copy">
        <h1>Wasting ad spend on broken tracking?<span>I fix it so your ads finally have the data to scale.</span></h1>
        <div className="proof-row">
          {['Tracking in 3 Hours', 'I Manage Everything', '24/7 Expert Support'].map((item) => <span key={item}><CheckCircle2 size={18} />{item}</span>)}
        </div>
        <div className="rating-pill">
          <div className="avatar-stack">{reviews.slice(0, 5).map((review) => <Avatar key={review.name} name={review.name} />)}</div>
          <div><div className="rating-stars">★★★★★</div><strong>500+ Tracking</strong></div>
        </div>
      </div>
      <div className="video-stage">
        <div className="video-box"><div className="video-mask"><VidalyticsEmbed /></div></div>
      </div>
      <div className="hero-cta"><Button href={whatsappLink}>Claim Your Tracking Audit!</Button></div>

      <div className="split">
        <div>
          <h2>Full-Funnel Tracking to Scale Profitably</h2>
          <div className="creator-row">
            <img src={profileImage} alt="Shakil Ahmed Samim" />
            <div><strong>Shakil Ahmed Samim</strong><small>5,763 Followers</small></div>
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
        <div className="badge"><ShieldCheck size={16} />Trusted partners and tools</div>
        <div className="logo-row">{partnerTools.map((tool) => <span className="logo-card" key={tool.name}>{tool.src ? <img src={tool.src} alt={tool.name} /> : <span>{tool.text}</span>}</span>)}</div>
        <a className="whatsapp" href={whatsappLink}><MessageCircle size={19} />Chat on WhatsApp</a>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return <div className="section-title"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function Reviews() {
  const featuredReview = reviews[6];
  const visibleReviews = reviews.slice(0, 6);

  return (
    <section className="section reviews">
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
            <div className="review-score">
              <span className="platform">Multi-platform proof</span>
              <strong>★★★★★</strong>
              <p>Clients hire me when their ad platforms need clean conversion data, better event quality, and tracking they can trust before scaling spend.</p>
            </div>
            <div className="review-stats">
              {reviewStats.map(([value, label]) => <div className="review-stat" key={label}><strong>{value}</strong><small>{label}</small></div>)}
            </div>
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
        <div className="footer-copy"><div className="eyebrow">Ready to fix the signal?</div><h2>Join the tracking movement.</h2><p>Stop guessing which ads are working. Get a clean audit, fixed events, and conversion data your campaigns can scale with.</p><Button href={whatsappLink}>Claim Your Tracking Audit!</Button></div>
      </div>
      <div className="container footer-bottom"><p>Copyright © 2026 Shakil Ahmed Samim. All rights reserved.</p><div className="footer-links"><a href={linkedinLink}>LinkedIn</a><a href={whatsappLink}>WhatsApp</a><a href={facebookLink}>Facebook</a><a href={youtubeLink}>YouTube</a><a href={emailLink}>Email</a><a className="icon-link" href={linkedinLink}><Linkedin size={16} /></a><a className="icon-link" href={facebookLink}>f</a><a className="icon-link" href={youtubeLink}><Youtube size={16} /></a><a className="icon-link" href={whatsappLink}><MessageCircle size={16} /></a></div></div>
    </footer>
  );
}

export default function App() {
  return <main className="page"><CalendlyBadge /><style>{pageCss}</style><a className="whatsapp-fab" href={whatsappLink} aria-label="Chat on WhatsApp"><MessageCircle size={26} /></a><Hero /><section className="section dark"><div className="container"><SectionTitle eyebrow="Full-stack tracking" title="Built like infrastructure, presented like a premium product." copy="Clear tracking systems for serious campaigns: audit, rebuild, QA, and clean handoff." /><div className="service-grid">{services.map(([title, body]) => <article className="service-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><Reviews /><Contact /><section className="section dark"><div className="container"><SectionTitle eyebrow="Decision clarity" title="Questions serious buyers ask before fixing tracking." /><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></div></section><Footer /></main>;
}
