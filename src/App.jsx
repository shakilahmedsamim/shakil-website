import { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  DatabaseZap,
  Gauge,
  LineChart,
  Linkedin,
  MessageCircle,
  ShieldCheck,
  Target,
  Youtube,
} from 'lucide-react';

const whatsappLink = 'https://wa.me/8801843752280';
const emailLink = 'mailto:shakilahmedsamims@gmail.com';
const linkedinLink = 'https://www.linkedin.com/in/mdshakilahmedsamim';
const youtubeLink = 'https://www.youtube.com/@ShakilTrackingGuru';
const facebookLink = 'https://www.facebook.com/mdshakilahmedsamim';
const profileImage = './images/Shakil.jpg';
const pinImage = 'https://framerusercontent.com/images/wUciDkb7amyTwaAe0wqiFkjra0M.png?width=362&height=354';

const proofPoints = ['Tracking in 3 Hours', 'I Manage Everything', '24/7 Expert Support'];
const avatars = [
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=32',
  'https://i.pravatar.cc/80?img=15',
  'https://i.pravatar.cc/80?img=47',
  'https://i.pravatar.cc/80?img=59',
];
const partnerTools = [
  { name: 'SCALIXAI', text: 'SCALIXAI', size: 'brand', delay: '0s' },
  { name: 'Shopify', src: './images/Shopify.png', size: 'square', delay: '.06s' },
  { name: 'Stape', src: './images/stape.png', size: 'square', delay: '.12s' },
  { name: 'Meta', src: './images/Meta.png', size: 'wide', delay: '.18s' },
  { name: 'Google Tag Manager', src: './images/Google Tag Manager.png', size: 'square', delay: '.24s' },
  { name: 'Google Ads', src: './images/Google Ads.webp', size: 'square', delay: '.3s' },
  { name: 'GA4', src: './images/GA4.png', size: 'square', delay: '.36s' },
  { name: 'Microsoft Ads', src: './images/Microsoft ads.png', size: 'square', delay: '.42s' },
  { name: 'AdRock', text: 'AdRock', size: 'adrock', delay: '.48s' },
];

const leakChecks = [
  ['Ad blocker loss', 'Browser events blocked before platforms receive signal.'],
  ['iOS / Safari decay', 'Click IDs and cookies disappearing too early.'],
  ['Duplicate revenue', 'Purchase events firing twice and inflating ROAS.'],
  ['Missing value data', 'Lead and purchase value not reaching ad platforms.'],
  ['Weak CAPI dedupe', 'Meta browser and server events not matching cleanly.'],
  ['Consent gaps', 'Consent mode and privacy rules breaking attribution.'],
];

const services = [
  ['Tracking audit', 'Map every tag, trigger, event name, consent rule, and destination before anything is changed.', Gauge],
  ['Server-side GTM', 'First-party collection path using sGTM, Stape-ready routing, Meta CAPI, GA4, and Ads conversions.', DatabaseZap],
  ['Ad platform signal QA', 'Meta Event Match Quality, Google Ads diagnostics, GA4 DebugView, and revenue parity checks.', Target],
  ['Data layer rebuild', 'Clean ecommerce, lead, booking, and funnel events designed for reporting and optimization.', Cpu],
  ['Dashboard handoff', 'Looker-ready measurement map, QA notes, and a simple operating guide for future changes.', LineChart],
  ['Recovery sprint', 'Fast fix for broken purchase events, duplicate conversions, missing values, and bad attribution.', ShieldCheck],
];

const faqs = [
  ['Can you work on an existing GTM container?', 'Yes. The first step is an audit. I keep useful logic, remove unsafe pieces, and rebuild only what needs to be rebuilt.'],
  ['Is server-side tracking always needed?', 'No. It is recommended when ad spend is serious, browser-side signal is weak, or Meta/Google numbers are no longer trustworthy.'],
  ['Will this work on Vercel and cPanel?', 'Yes. The site builds to a static dist folder and uses relative asset paths for cPanel-friendly uploads.'],
  ['Can you document the setup?', 'Yes. You get a measurement map, QA list, launch notes, and exact conversion definitions.'],
];

function Button({ href, children, variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full text-sm font900 transition duration-300';
  const styles = {
    primary: 'border border-[#5235ef] bg-[linear-gradient(180deg,#5235ef_0%,#8771ff_100%)] px-7 py-3.5 text-[18px] font700 text-[#f0f2f6] shadow-[0_6px_20px_rgba(82,53,239,.6)] hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(82,53,239,.52)]',
    dark: 'bg-obsidian px-5 py-3 text-white shadow-[0_24px_70px_rgba(0,0,0,.28)] ring-1 ring-white/10 hover:-translate-y-0.5',
    ghost: 'border border-white/15 bg-white/8 px-5 py-3 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/14',
    whatsapp: 'bg-[linear-gradient(135deg,#21d86a,#12b957)] px-6 py-4 text-white shadow-[0_16px_42px_rgba(18,185,87,.3)] ring-1 ring-white/40 hover:-translate-y-0.5',
  };

  return <a className={`${base} ${styles[variant]}`} href={href}>{children}</a>;
}

function VidalyticsEmbed() {
  useEffect(() => {
    const flag = '__vidalytics_SmDRjS4JjsHLVuwd_loaded';

    if (window[flag]) {
      return;
    }

    window[flag] = true;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_SmDRjS4JjsHLVuwd', 'https://fast.vidalytics.com/embeds/i4lAbS7M/SmDRjS4JjsHLVuwd/');`;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="vidalytics-shell">
      <div id="vidalytics_embed_SmDRjS4JjsHLVuwd" style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }} />
    </div>
  );
}

function HeroVideoFrame() {
  return (
    <div className="video-frame-scene relative mx-auto mt-10 w-full max-w-[1260px]">
      <span className="video-aura video-aura-left" aria-hidden="true" />
      <span className="video-aura video-aura-right" aria-hidden="true" />
      <span className="water-ripple water-ripple-left" aria-hidden="true" />
      <span className="water-ripple water-ripple-right" aria-hidden="true" />
      <span className="water-shimmer water-shimmer-one" aria-hidden="true" />
      <span className="water-shimmer water-shimmer-two" aria-hidden="true" />
      <div className="video-embed-window">
        <div className="video-embed-mask">
          <VidalyticsEmbed />
        </div>
      </div>
    </div>
  );
}

function PartnerLogo({ name, src, size, text }) {
  if (text) {
    return (
      <span className={`partner-wordmark partner-wordmark-${size}`}>
        {size === 'adrock' && <span className="partner-adrock-mark">A</span>}
        {text}
      </span>
    );
  }

  const className = size === 'square'
    ? 'h-[31px] w-[31px] object-contain'
    : 'h-[31px] w-[48px] object-contain';

  return <img alt={`${name} logo`} className={className} loading="lazy" src={src} />;
}

function FooterClock() {
  return (
    <div className="footer-clock-wrap" aria-hidden="true">
      <div className="footer-light footer-light-orange" />
      <div className="footer-light footer-light-blue" />
      <div className="footer-clock">
        <div className="clock-ring clock-ring-outer" />
        <div className="clock-ring clock-ring-inner" />
        <div className="clock-brand">$</div>
        <span className="clock-tick clock-tick-12">12</span>
        <span className="clock-tick clock-tick-3">3</span>
        <span className="clock-tick clock-tick-6">6</span>
        <span className="clock-tick clock-tick-9">9</span>
        <span className="clock-hand clock-hand-hour" />
        <span className="clock-hand clock-hand-minute" />
        <span className="clock-hand clock-hand-second" />
        <span className="clock-center" />
        <span className="clock-glow clock-glow-orange" />
        <span className="clock-glow clock-glow-blue" />
      </div>
    </div>
  );
}

function ReferenceHero() {
  const checklist = [
    'Google Ads Conversion Tracking',
    'Facebook Pixel & Conversion API',
    'First-Party Server-Side Tracking',
    'Google Analytics 4 Funnel Track',
    'Offline Conversion Setup for Ads',
  ];

  return (
    <section id="top" className="overflow-hidden bg-[#F3F4F8] text-[#070a0f]">
      <div className="bg-[#ffdf67] px-4 py-2 text-center text-sm font800">I help marketers & agencies scale campaigns with accurate tracking...</div>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-[2.55rem] font500 leading-[1.14] sm:text-5xl lg:text-[3.55rem]">
            Wasting ad spend on broken tracking?
            <span className="mt-5 block">I fix it so your ads finally have the data to scale.</span>
          </h1>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-base font700">
            {proofPoints.map((point) => (
              <span className="inline-flex items-center gap-2" key={point}>
                <CheckCircle2 size={18} className="text-[#1689f9]" /> {point}
              </span>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center rounded-full bg-[#dbe4ee] px-5 py-3 shadow-sm">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  alt="client avatar"
                  className="h-8 w-8 rounded-full border-2 border-[#dbe4ee] object-cover"
                  key={avatar}
                  src={avatar}
                  style={{ zIndex: avatars.length - index }}
                />
              ))}
            </div>
            <div className="ml-3 text-left leading-tight">
              <p className="text-xs text-[#f2a900]">★★★★★</p>
              <p className="text-sm font800 underline decoration-black/30">500+ Tracking</p>
            </div>
          </div>
        </div>

        <HeroVideoFrame />

        <div className="mt-11 text-center">
          <Button href={whatsappLink}>Claim Your Tracking Audit! <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#f0f2f6] text-[#5235ef]"><ArrowRight size={16} strokeWidth={2.6} /></span></Button>
        </div>

        <div className="mx-auto mt-24 grid max-w-[1030px] items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <div>
            <h2 className="premium-heading max-w-xl text-4xl font800 leading-[1.08] sm:text-5xl">Full-Funnel Tracking to Scale Profitably</h2>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div className="flex items-center gap-3">
                <img alt="Shakil Ahmed Samim" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src={profileImage} />
                <div>
                  <p className="text-sm font800">Shakil Ahmed Samim</p>
                  <p className="text-xs text-slate-500">5,763 Followers</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-[#f2a900]">★★★★★</p>
                <p className="text-xs text-slate-500 underline">500+ Tracking</p>
              </div>
            </div>
            <div className="stat-card mt-10 grid w-full max-w-[448px] grid-cols-4 rounded-xl border border-slate-200 bg-white/95 px-5 py-4 shadow-sm sm:px-7">
              {[
                ['300%', 'Ad revenue'],
                ['35%', 'Lower cost'],
                ['4:1', 'Average ROAS'],
                ['2.7X', 'ROI'],
              ].map(([value, label], index) => (
                <div className="stat-item min-w-0 px-2 text-center" key={value} style={{ animationDelay: `${index * 120}ms` }}>
                  <p className="stat-value text-[20px] font800 leading-none text-[#1689f9] sm:text-[22px]">{value}<span className="text-base">↑</span></p>
                  <p className="mt-1 text-[9px] leading-tight text-slate-500 sm:text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="checklist-card relative rotate-[-3deg] rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(74,89,110,.18)] sm:p-9">
            <img alt="" aria-hidden="true" className="pin-float pointer-events-none absolute -right-8 -top-10 h-24 w-24 rotate-[22deg] object-contain" src={pinImage} />
            <ul className="space-y-5 text-lg font800 sm:text-xl">
              {checklist.map((item, index) => (
                <li className="checklist-row flex items-start gap-4" key={item} style={{ animationDelay: `${index * 110}ms` }}>
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eea20d] text-sm text-white">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font500 text-slate-700 shadow-sm">
            <ShieldCheck size={16} /> Trusted partners and tools
          </div>
          <div className="mx-auto mt-9 flex max-w-[720px] flex-wrap items-center justify-center gap-3">
            {partnerTools.map((tool) => (
              <span className={`partner-logo-card partner-logo-card-${tool.size} grid h-[42px] place-items-center rounded-lg border border-white/80 bg-white shadow-[0_8px_20px_rgba(74,91,115,.08)]`} key={tool.name} style={{ animationDelay: tool.delay }}>
                <PartnerLogo {...tool} />
              </span>
            ))}
          </div>
          <a className="mt-10 inline-flex h-11 items-center gap-2 rounded-lg bg-[linear-gradient(135deg,#22df70,#13be5d)] px-6 text-base font800 text-white shadow-[0_14px_34px_rgba(18,185,87,.28)] ring-1 ring-white/50 transition duration-300 hover:-translate-y-0.5" href={whatsappLink}>
            <MessageCircle size={19} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, dark = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`text-xs font900 uppercase ${dark ? 'text-mint' : 'text-cobalt'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font900 leading-tight sm:text-6xl ${dark ? 'text-white' : 'text-obsidian'}`}>{title}</h2>
      {copy && <p className={`mt-5 text-lg leading-8 ${dark ? 'text-white/55' : 'text-slate-600'}`}>{copy}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <ReferenceHero />

      <section id="audit" className="bg-linen text-obsidian">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <SectionIntro
            eyebrow="Diagnostic first"
            title="A million-dollar setup starts by finding the leak."
            copy="Top conversion-tracking platforms lead with signal recovery, first-party data, server-side routing, and monitoring. This site now sells that outcome, not generic tag setup."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leakChecks.map(([title, body]) => (
              <article className="rounded-[1.5rem] border border-black/[0.08] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,.07)]" key={title}>
                <CheckCircle2 className="text-cobalt" size={26} />
                <h3 className="mt-8 text-xl font900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Full-stack tracking"
            title="Built like infrastructure, presented like a premium product."
            copy="The service offer is split into clear, sellable systems so clients understand exactly what is being fixed."
            dark
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, body, Icon]) => (
              <article className="service-card rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-6" key={title}>
                <Icon className="text-mint" size={30} />
                <h3 className="mt-10 text-2xl font900">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-obsidian">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font900 uppercase text-cobalt">Execution model</p>
            <h2 className="mt-4 text-5xl font900 leading-tight sm:text-7xl">No messy handoff. No mystery tags.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">The output is a tested measurement system: audit notes, rebuild plan, QA evidence, and deployment steps that your team can understand later.</p>
          </div>
          <div className="grid gap-4">
            {['Audit the live data path', 'Rebuild event architecture', 'Launch with proof and documentation'].map((step, index) => (
              <div className="rounded-[1.7rem] border border-black/[0.08] bg-linen p-6" key={step}>
                <span className="font-mono text-sm font900 text-cobalt">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font900">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Every conversion destination is checked against the actual business event, not just whether a tag fires.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-28">
        <SectionIntro eyebrow="Decision clarity" title="Questions serious buyers ask before fixing tracking." dark />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map(([q, a]) => (
            <details className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5" key={q}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font900">
                {q}
                <ChevronDown className="transition group-open:rotate-180" size={18} />
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/55">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer-cta relative overflow-hidden border-t border-white/10 px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1fr]">
          <FooterClock />
          <div className="relative z-10 max-w-2xl text-left">
            <p className="text-sm font800 uppercase text-[#ff865c]">Ready to fix the signal?</p>
            <h2 className="mt-5 text-5xl font900 leading-[.96] text-white sm:text-7xl">Join the tracking movement.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
              Stop guessing which ads are working. Get a clean audit, fixed events, and conversion data your campaigns can scale with.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={whatsappLink}>Claim Your Tracking Audit! <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#f0f2f6] text-[#5235ef]"><ArrowRight size={16} strokeWidth={2.6} /></span></Button>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-7 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Shakil Ahmed Samim. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a className="transition hover:text-white" href={linkedinLink}>LinkedIn</a>
            <a className="transition hover:text-white" href={whatsappLink}>WhatsApp</a>
            <a className="transition hover:text-white" href={facebookLink}>Facebook</a>
            <a className="transition hover:text-white" href={youtubeLink}>YouTube</a>
            <a className="transition hover:text-white" href={emailLink}>Email</a>
            <a className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10" href={linkedinLink} aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font900 transition hover:bg-white/10" href={facebookLink} aria-label="Facebook">f</a>
            <a className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10" href={youtubeLink} aria-label="YouTube"><Youtube size={16} /></a>
            <a className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10" href={whatsappLink} aria-label="WhatsApp"><MessageCircle size={16} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
