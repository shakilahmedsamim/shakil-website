import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Linkedin,
  Mail,
  MessageCircle,
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
const profileImage = './images/Shakil.jpg';
const pinImage = 'https://framerusercontent.com/images/wUciDkb7amyTwaAe0wqiFkjra0M.png?width=362&height=354';

const avatars = [
  'https://i.pravatar.cc/96?img=12',
  'https://i.pravatar.cc/96?img=32',
  'https://i.pravatar.cc/96?img=15',
  'https://i.pravatar.cc/96?img=47',
  'https://i.pravatar.cc/96?img=59',
];

const partnerTools = [
  { name: 'SCALIXAI', text: 'SCALIXAI' },
  { name: 'Shopify', src: './images/Shopify.png' },
  { name: 'Stape', src: './images/stape.png' },
  { name: 'Meta', src: './images/Meta.png' },
  { name: 'Google Tag Manager', src: './images/Google Tag Manager.png' },
  { name: 'Google Ads', src: './images/Google Ads.webp' },
  { name: 'GA4', src: './images/GA4.png' },
  { name: 'Microsoft Ads', src: './images/Microsoft ads.png' },
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
    avatar: 'https://i.pravatar.cc/120?img=36',
    title: 'TikTok Ads Manager Pixel Setup & First Ad Launch',
    quote: 'Shakil has helped me to setup my TikTok Pixel and configured it with GTM. He is someone who I can rely on for my future projects regarding GTM and GA4 Tracking Setup.',
  },
  {
    platform: 'Upwork',
    name: 'Meta Ads Client',
    role: 'Tracking analytics and data',
    avatar: 'https://i.pravatar.cc/120?img=23',
    title: 'Tracking analytics and data',
    quote: 'Great skills, helped a lot with Facebook and Meta ads tracking. Highly recommend.',
  },
  {
    platform: 'Upwork',
    name: 'CRM Client',
    role: 'Facebook CAPI configuration',
    avatar: 'https://i.pravatar.cc/120?img=11',
    title: 'Facebook CRM and Conversion API Configuration',
    quote: 'Great work! Thank you.',
  },
  {
    platform: 'Upwork',
    name: 'Catalog Setup Client',
    role: 'Conversions API specialist',
    avatar: 'https://i.pravatar.cc/120?img=49',
    title: 'Conversions API & Catalog Setup',
    quote: 'Good work done. Appreciate it.',
  },
  {
    platform: 'Fiverr',
    name: 'umedrahman96',
    role: 'United Kingdom',
    avatar: 'https://i.pravatar.cc/120?img=15',
    title: 'GTM, Analytics & Pinterest Conversion Tracking',
    quote: 'Shakil was absolutely fantastic. He is very technical and good at his job. He knows everything about Google Tag Manager, Google Analytics and conversions linking this to Pinterest.',
  },
  {
    platform: 'Fiverr',
    name: 'itsharry27',
    role: 'Pakistan',
    avatar: 'https://i.pravatar.cc/120?img=18',
    title: 'API Setup Collaboration',
    quote: 'He has very deep knowledge to set up the API. I am impressed by his technical skillset and his collaboration. I will get back to you soon.',
  },
  {
    platform: 'LinkedIn',
    name: 'Yarne de Win',
    role: 'Google Ads, CRO & Copywriting Specialist',
    avatar: 'https://i.pravatar.cc/120?img=52',
    title: 'LinkedIn Recommendation',
    quote: 'His expertise in conversion tracking, data accuracy, and platform integrations is outstanding. He quickly identifies issues others miss and implements clean, reliable tracking that gives real clarity on performance.',
  },
];

const faqs = [
  ['Can you work on my existing GTM container?', 'Yes. I audit first, keep what is useful, remove unsafe logic, and rebuild the broken parts.'],
  ['Do I always need server-side tracking?', 'No. It depends on ad spend, signal loss, Meta/Google diagnostics, browser loss, and your attribution goals.'],
  ['Will this work on Vercel and cPanel?', 'Yes. The frontend is static-build friendly and can be deployed on Vercel or uploaded to cPanel after build.'],
  ['Do you document the setup?', 'Yes. You get an event map, QA checklist, launch notes, and the conversion definitions.'],
];

const pageCss = `
:root { --brand: #FEEC1E; --ink: #070a0f; --soft: #F3F4F8; --watch-green: #0e6f3c; }
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
.avatar-stack img { width: 31px; height: 31px; border-radius: 999px; object-fit: cover; border: 2px solid #dbe4ee; margin-left: -8px; }
.rating-stars { color: #f2a900; font-size: 13px; line-height: 1; }
.rating-pill strong { display: block; margin-top: 3px; font-size: 14px; line-height: 1; text-decoration: underline; text-decoration-color: rgba(0,0,0,.35); }
.video-stage { position: relative; width: min(720px, 86vw); margin: 48px auto 0; isolation: isolate; }
.video-stage::before { content: ''; position: absolute; inset: -72px -130px; z-index: -2; border-radius: 50%; background: radial-gradient(circle at 50% 50%, rgba(64, 213, 255, .42), transparent 28%), radial-gradient(circle at 24% 52%, rgba(255,255,255,.95), transparent 22%), radial-gradient(circle at 76% 52%, rgba(255,255,255,.95), transparent 22%); filter: blur(22px); animation: videoGlow 5.8s ease-in-out infinite alternate; }
.video-box { position: relative; border-radius: 30px; padding: 9px; background: linear-gradient(145deg, #fff, rgba(230,245,255,.94)); box-shadow: 0 28px 78px rgba(48, 71, 96, .25), inset 0 0 0 1px rgba(255,255,255,.98), 0 0 0 1px rgba(206,229,248,.96); }
.video-mask { overflow: hidden; border-radius: 22px; background: #000; }
.vidalytics-shell { width: 100%; background: #000; }
.hero-cta { margin-top: 30px; text-align: center; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 54px; padding: 0 30px; border-radius: 999px; border: 1px solid var(--brand); background: var(--brand); color: #050507; font-weight: 900; box-shadow: 0 18px 44px rgba(254, 236, 30, .34); transition: transform .22s ease, box-shadow .22s ease; }
.btn:hover { transform: translateY(-2px); box-shadow: 0 24px 58px rgba(254, 236, 30, .42); }
.btn .circle { display: grid; place-items: center; width: 31px; height: 31px; border-radius: 999px; background: #070a0f; color: var(--brand); }
.split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr); gap: 68px; align-items: center; max-width: 1030px; margin: 98px auto 0; }
.split h2 { margin: 0; font-size: clamp(38px, 4vw, 58px); line-height: 1.02; font-weight: 950; }
.creator-row { display: flex; align-items: center; gap: 30px; margin-top: 26px; }
.creator-row img { width: 42px; height: 42px; border-radius: 999px; object-fit: cover; border: 2px solid #fff; box-shadow: 0 12px 28px rgba(0,0,0,.12); }
.creator-row strong { display: block; font-size: 15px; }
.creator-row small { color: #64748b; }
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
.reviews { background: #f6f8fb; }
.review-card { position: relative; overflow: hidden; min-height: 335px; padding: 28px; border-radius: 24px; background: linear-gradient(180deg,#fff,#fbfdff); border: 1px solid rgba(15,23,42,.08); box-shadow: 0 24px 80px rgba(28,45,72,.09); transition: transform .25s ease, box-shadow .25s ease; }
.review-card:hover { transform: translateY(-6px); box-shadow: 0 34px 100px rgba(28,45,72,.14); }
.review-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.platform { border-radius: 999px; background: #050507; color: #fff; padding: 6px 11px; font-size: 12px; font-weight: 950; text-transform: uppercase; }
.stars { color: #f2a900; font-size: 14px; font-weight: 950; white-space: nowrap; }
.review-card h3 { margin: 26px 0 0; font-size: 23px; line-height: 1.08; font-weight: 950; }
.review-card p { color: #475569; line-height: 1.72; }
.client { display: flex; align-items: center; gap: 13px; margin-top: 24px; padding-top: 18px; border-top: 1px solid #eef2f7; }
.client img { width: 48px; height: 48px; border-radius: 999px; object-fit: cover; border: 2px solid #fff; box-shadow: 0 12px 28px rgba(15,23,42,.14); }
.client strong { display: block; }
.client small { color: #64748b; }
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
.form button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; border: 0; border-radius: 999px; background: var(--brand); color: #050507; font-weight: 950; cursor: pointer; }
.result { margin: 0; color: #334155; font-size: 13px; font-weight: 850; }
.faq-list { max-width: 860px; margin: 0 auto; display: grid; gap: 12px; }
details { border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.06); border-radius: 18px; padding: 20px; }
summary { cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; font-weight: 900; }
details p { color: rgba(255,255,255,.62); line-height: 1.7; }
.footer { position: relative; overflow: hidden; background: #050507; color: white; padding: 82px 20px 38px; border-top: 1px solid rgba(255,255,255,.1); }
.footer::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 29% 45%, rgba(14,111,60,.20), transparent 29%), radial-gradient(circle at 32% 45%, rgba(254,236,30,.10), transparent 17%), linear-gradient(90deg, transparent 0 25%, rgba(255,255,255,.04) 25.05% 25.15%, transparent 25.25%), linear-gradient(180deg, rgba(255,255,255,.035) 0 1px, transparent 1px 55%); }
.footer-grid { position: relative; z-index: 1; display: grid; grid-template-columns: .95fr 1fr; gap: 56px; align-items: center; }
.luxury-watch-scene { position: relative; min-height: 520px; display: grid; place-items: center; perspective: 1200px; isolation: isolate; }
.luxury-watch-scene::before { content: ''; position: absolute; width: min(680px, 92vw); height: 270px; left: -21%; top: 44%; transform: translateY(-50%); background: linear-gradient(90deg, transparent, rgba(254,236,30,.08), rgba(14,111,60,.32)); clip-path: polygon(0 34%, 100% 48%, 100% 60%, 0 44%); filter: blur(12px); opacity: .7; }
.luxury-watch-scene::after { content: ''; position: absolute; width: min(690px, 92vw); height: 245px; right: -36%; top: 54%; transform: translateY(-50%); background: linear-gradient(90deg, rgba(120,145,155,.44), rgba(44,64,74,.18), transparent); clip-path: polygon(0 52%, 100% 76%, 100% 91%, 0 66%); filter: blur(12px); opacity: .66; }
.watch-light { position: absolute; inset: 8% 5%; z-index: -2; border-radius: 50%; background: radial-gradient(circle at 48% 48%, rgba(254,236,30,.20), transparent 16%), radial-gradient(circle at 50% 50%, rgba(14,111,60,.25), transparent 35%), radial-gradient(circle at 50% 50%, rgba(255,255,255,.10), transparent 52%); filter: blur(18px); animation: watchPulse 4.8s ease-in-out infinite alternate; }
.watch-bracelet { position: absolute; left: 50%; width: min(210px, 36vw); height: 128px; transform: translateX(-50%) rotateX(8deg); display: grid; grid-template-columns: 1fr 1.24fr 1fr; gap: 4px; padding: 0 9px; opacity: .96; filter: drop-shadow(0 16px 28px rgba(0,0,0,.5)); }
.watch-bracelet.top { top: 10px; }
.watch-bracelet.bottom { bottom: 10px; transform: translateX(-50%) rotateX(-8deg); }
.bracelet-link { border-radius: 18px; background: linear-gradient(90deg, #6d7378 0%, #f8faf9 23%, #8f969a 46%, #fefefe 63%, #444b50 100%); box-shadow: inset 0 0 0 1px rgba(255,255,255,.28), inset 9px 0 18px rgba(255,255,255,.22), inset -11px 0 18px rgba(0,0,0,.38); }
.bracelet-link.center { background: linear-gradient(90deg, #a8adb0 0%, #ffffff 28%, #9aa0a4 52%, #f8faf9 74%, #575f65 100%); }
.watch-case { position: relative; z-index: 2; width: min(390px, 74vw); aspect-ratio: 1; border-radius: 50%; transform: rotateX(9deg) rotateZ(-1deg); background: radial-gradient(circle at 35% 24%, rgba(255,255,255,.9), transparent 11%), radial-gradient(circle at 68% 76%, rgba(255,255,255,.34), transparent 14%), conic-gradient(from 0deg, #40474c, #f6f7f6 18deg, #777f84 48deg, #fdfdfb 72deg, #4a5358 118deg, #d4d8d7 150deg, #2c3236 216deg, #f5f6f3 270deg, #515b61 322deg, #111418 360deg); box-shadow: inset 0 0 0 1px rgba(255,255,255,.42), inset 0 0 0 14px rgba(0,0,0,.28), inset 0 -34px 78px rgba(0,0,0,.55), 0 40px 110px rgba(0,0,0,.82), 0 0 70px rgba(254,236,30,.10); }
.watch-case::before, .watch-case::after { content: ''; position: absolute; left: 50%; width: 156px; height: 70px; transform: translateX(-50%); background: linear-gradient(90deg, #5e666b, #f8faf9 36%, #6c7479 64%, #171b1f); filter: drop-shadow(0 10px 18px rgba(0,0,0,.4)); z-index: -1; }
.watch-case::before { top: -24px; clip-path: polygon(16% 100%, 84% 100%, 100% 0, 0 0); }
.watch-case::after { bottom: -24px; clip-path: polygon(0 100%, 100% 100%, 84% 0, 16% 0); }
.watch-crown { position: absolute; right: -18px; top: 46%; width: 28px; height: 48px; border-radius: 9px; background: repeating-linear-gradient(0deg, #31383d 0 4px, #e3e7e6 4px 7px, #5f686d 7px 11px); box-shadow: inset 0 0 0 1px rgba(255,255,255,.3), 8px 0 18px rgba(0,0,0,.45); }
.green-bezel { position: absolute; inset: 28px; border-radius: 50%; overflow: hidden; background: conic-gradient(from 0deg, #e7ede8 0 8deg, var(--watch-green) 8deg 72deg, #155e38 72deg 142deg, #f4f8f5 142deg 150deg, #0c4f30 150deg 285deg, #f8fbf8 285deg 294deg, #0f6b3d 294deg 360deg); box-shadow: inset 0 0 0 1px rgba(255,255,255,.55), inset 0 0 0 12px rgba(0,0,0,.3), 0 0 32px rgba(14,111,60,.34); }
.green-bezel::before { content: ''; position: absolute; inset: 0; border-radius: 50%; background: repeating-conic-gradient(from -90deg, rgba(255,255,255,.82) 0deg .55deg, transparent .65deg 4.95deg), linear-gradient(130deg, rgba(255,255,255,.44), transparent 22%, transparent 70%, rgba(255,255,255,.18)); -webkit-mask-image: radial-gradient(circle, transparent 0 78%, #000 79% 87%, transparent 88%); mask-image: radial-gradient(circle, transparent 0 78%, #000 79% 87%, transparent 88%); animation: bezelShine 6s ease-in-out infinite alternate; }
.bezel-number { position: absolute; z-index: 3; color: rgba(255,255,255,.92); font-size: 15px; font-weight: 950; text-shadow: 0 1px 4px rgba(0,0,0,.45); }
.bezel-number.n10 { top: 55px; right: 86px; transform: rotate(34deg); }
.bezel-number.n20 { right: 48px; bottom: 100px; transform: rotate(88deg); }
.bezel-number.n30 { bottom: 51px; left: 50%; transform: translateX(-50%); }
.bezel-number.n40 { left: 48px; bottom: 100px; transform: rotate(-88deg); }
.bezel-number.n50 { top: 56px; left: 85px; transform: rotate(-34deg); }
.watch-dial { position: absolute; inset: 68px; border-radius: 50%; overflow: hidden; background: radial-gradient(circle at 50% 47%, rgba(254,236,30,.08), transparent 7%), radial-gradient(circle at 50% 44%, rgba(14,111,60,.22), transparent 28%), linear-gradient(132deg, rgba(255,255,255,.10), transparent 25%, transparent 66%, rgba(255,255,255,.08)), radial-gradient(circle, #111318 0 48%, #040507 100%); box-shadow: inset 0 0 0 2px rgba(0,0,0,.65), inset 0 0 0 7px rgba(255,255,255,.04), inset 0 -42px 70px rgba(0,0,0,.58); }
.watch-dial::before { content: ''; position: absolute; inset: -20%; background: linear-gradient(115deg, rgba(255,255,255,.26), transparent 17%, transparent 64%, rgba(255,255,255,.08)); transform: rotate(-12deg); animation: glassSweep 7s ease-in-out infinite; }
.dial-logo { position: absolute; left: 50%; top: 30%; transform: translate(-50%, -50%); color: rgba(254,236,30,.82); font-size: 76px; font-weight: 950; line-height: 1; text-shadow: 0 0 24px rgba(254,236,30,.24); }
.dial-copy { position: absolute; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,.78); font-size: 9px; font-weight: 850; letter-spacing: 1.8px; white-space: nowrap; }
.dial-copy.top { top: 45%; }
.dial-copy.bottom { bottom: 28%; color: rgba(255,255,255,.48); }
.date-window { position: absolute; right: 25px; top: 49%; transform: translateY(-50%); min-width: 36px; height: 29px; display: grid; place-items: center; border-radius: 7px; background: linear-gradient(#fff,#dfe4e4); color: #111; font-size: 15px; font-weight: 950; box-shadow: inset 0 0 0 2px #111, 0 0 0 2px rgba(255,255,255,.22); }
.marker { position: absolute; z-index: 4; background: linear-gradient(#fff, #dbe9d6); box-shadow: 0 0 10px rgba(230,255,219,.55); }
.marker.round { width: 18px; height: 18px; border-radius: 50%; }
.marker.bar { width: 12px; height: 33px; border-radius: 8px; }
.marker.m12 { left: 50%; top: 15px; transform: translateX(-50%); clip-path: polygon(50% 0, 100% 100%, 0 100%); width: 26px; height: 28px; background: #f6fff2; }
.marker.m6 { left: 50%; bottom: 17px; transform: translateX(-50%); }
.marker.m9 { left: 17px; top: 50%; transform: translateY(-50%) rotate(90deg); }
.marker.m1 { right: 49px; top: 34px; } .marker.m2 { right: 26px; top: 87px; } .marker.m4 { right: 37px; bottom: 61px; } .marker.m5 { right: 83px; bottom: 27px; } .marker.m7 { left: 83px; bottom: 27px; } .marker.m8 { left: 37px; bottom: 61px; } .marker.m10 { left: 26px; top: 87px; } .marker.m11 { left: 49px; top: 34px; }
.watch-hand { position: absolute; left: 50%; top: 50%; transform-origin: 50% 100%; z-index: 8; border-radius: 999px; transform: translate(-50%, -100%) rotate(var(--angle)); transition: transform .45s cubic-bezier(.2,.8,.2,1); }
.watch-hand.hour { width: 9px; height: 75px; background: linear-gradient(#f5fff2, #84918e); box-shadow: 0 0 12px rgba(255,255,255,.28); }
.watch-hand.minute { width: 7px; height: 105px; background: linear-gradient(#f8fff6, #c6d1cf 72%, rgba(255,255,255,.24)); box-shadow: 0 0 14px rgba(255,255,255,.28); }
.watch-hand.second { width: 2px; height: 118px; background: linear-gradient(#fffe8a, var(--brand), rgba(254,236,30,.25)); box-shadow: 0 0 14px rgba(254,236,30,.58); }
.watch-center { position: absolute; z-index: 9; left: 50%; top: 50%; width: 25px; height: 25px; border-radius: 50%; transform: translate(-50%, -50%); background: radial-gradient(circle, #0a0d10 0 30%, var(--brand) 31% 44%, #dfe6e2 45% 63%, #111 64%); box-shadow: 0 0 0 4px rgba(255,255,255,.16), 0 0 20px rgba(254,236,30,.35); }
.footer-copy { position: relative; z-index: 2; max-width: 650px; }
.footer-copy .eyebrow { color: var(--brand); font-size: 14px; text-transform: uppercase; font-weight: 950; }
.footer-copy h2 { margin: 18px 0 0; color: white; font-size: clamp(52px, 5.8vw, 86px); line-height: .94; font-weight: 950; }
.footer-copy p { color: rgba(255,255,255,.66); line-height: 1.72; }
.footer-bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; margin-top: 58px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.46); }
.footer-links { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.icon-link { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05); }
.calendly-badge-widget { z-index: 9997 !important; }
@keyframes videoGlow { from { opacity: .72; transform: scale(.98); } to { opacity: 1; transform: scale(1.02); } }
@keyframes watchPulse { from { opacity: .66; transform: scale(.97); } to { opacity: 1; transform: scale(1.03); } }
@keyframes bezelShine { from { opacity: .66; transform: rotate(-5deg); } to { opacity: 1; transform: rotate(5deg); } }
@keyframes glassSweep { 0%,100% { opacity: .4; transform: translateX(-10%) rotate(-12deg); } 50% { opacity: .8; transform: translateX(8%) rotate(-12deg); } }
@media (max-width: 980px) { .split, .contact-layout, .footer-grid { grid-template-columns: 1fr; } .service-grid, .review-grid { grid-template-columns: 1fr 1fr; } .footer-copy { text-align: center; margin: 0 auto; } .footer .btn { margin: 0 auto; } }
@media (max-width: 680px) { .hero h1 { font-size: 38px; } .section { padding: 72px 16px; } .service-grid, .review-grid, .stats { grid-template-columns: 1fr; } .check-card { transform: none; } .luxury-watch-scene { min-height: 400px; } .watch-case { width: min(310px, 78vw); } .watch-bracelet { width: 160px; height: 92px; } .watch-bracelet.top { top: 18px; } .watch-bracelet.bottom { bottom: 18px; } .dial-logo { font-size: 48px; } .date-window { right: 16px; min-width: 28px; height: 23px; font-size: 12px; } }
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
  }, []);

  return null;
}

function VidalyticsEmbed() {
  useEffect(() => {
    const flag = '__vidalytics_SmDRjS4JjsHLVuwd_loaded';
    if (window[flag]) return;
    window[flag] = true;

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
  const [angles, setAngles] = useState(() => getClockAngles());
  useEffect(() => {
    const timer = window.setInterval(() => setAngles(getClockAngles()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const roundMarkers = ['m1', 'm2', 'm4', 'm5', 'm7', 'm8', 'm10', 'm11'];

  return (
    <div className="luxury-watch-scene" aria-hidden="true">
      <span className="watch-light" />
      <div className="watch-bracelet top"><span className="bracelet-link" /><span className="bracelet-link center" /><span className="bracelet-link" /></div>
      <div className="watch-case">
        <span className="watch-crown" />
        <div className="green-bezel">
          <span className="bezel-number n10">10</span><span className="bezel-number n20">20</span><span className="bezel-number n30">30</span><span className="bezel-number n40">40</span><span className="bezel-number n50">50</span>
          <div className="watch-dial">
            <span className="dial-logo">$</span>
            <span className="dial-copy top">TRACKING</span>
            <span className="dial-copy bottom">SIGNAL CERTIFIED</span>
            <span className="date-window">28</span>
            <span className="marker m12" />
            <span className="marker bar m6" />
            <span className="marker bar m9" />
            {roundMarkers.map((marker) => <span className={`marker round ${marker}`} key={marker} />)}
            <span className="watch-hand hour" style={{ '--angle': angles.hour }} />
            <span className="watch-hand minute" style={{ '--angle': angles.minute }} />
            <span className="watch-hand second" style={{ '--angle': angles.second }} />
            <span className="watch-center" />
          </div>
        </div>
      </div>
      <div className="watch-bracelet bottom"><span className="bracelet-link" /><span className="bracelet-link center" /><span className="bracelet-link" /></div>
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
          <div className="avatar-stack">{avatars.map((avatar) => <img alt="client" key={avatar} src={avatar} />)}</div>
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
  return (
    <section className="section reviews">
      <div className="container">
        <SectionTitle eyebrow="Client proof" title={<span>What Clients <span style={{ color: '#9aa3b2' }}>Say About Me</span></span>} copy="Proof from tracking, analytics, pixel, API, and conversion setup projects across Upwork, Fiverr, and LinkedIn." />
        <div className="review-grid">
          {reviews.map((review) => <article className="review-card" key={review.title}>
            <div className="review-top"><span className="platform">{review.platform}</span><span className="stars">★★★★★ 5.0</span></div>
            <h3>{review.title}</h3><p>“{review.quote}”</p>
            <div className="client"><img src={review.avatar} alt={review.name} /><div><strong>{review.name}</strong><small>{review.role}</small></div></div>
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
  return <main className="page"><CalendlyBadge /><style>{pageCss}</style><Hero /><section className="section dark"><div className="container"><SectionTitle eyebrow="Full-stack tracking" title="Built like infrastructure, presented like a premium product." copy="Clear tracking systems for serious campaigns: audit, rebuild, QA, and clean handoff." /><div className="service-grid">{services.map(([title, body]) => <article className="service-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><Reviews /><Contact /><section className="section dark"><div className="container"><SectionTitle eyebrow="Decision clarity" title="Questions serious buyers ask before fixing tracking." /><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></div></section><Footer /></main>;
}
