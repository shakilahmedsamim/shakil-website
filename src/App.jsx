import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Cpu,
  DatabaseZap,
  Gauge,
  LineChart,
  Linkedin,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Youtube,
} from 'lucide-react';

const heroVideoSrc = '';

const proofPoints = ['Tracking in 3 Hours', 'I Manage Everything', '24/7 Expert Support'];
const partnerTools = ['SCALIXAI', 'Shopify', 'Stape', 'Meta', 'GTM', 'Google Ads', 'GA4', 'Microsoft', 'AdRock'];
const avatars = ['AK', 'MS', 'JR', 'TN', 'RB'];

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
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font800 transition duration-300';
  const styles = {
    primary: 'bg-[#7547ff] text-white shadow-[0_18px_45px_rgba(117,71,255,.38)] hover:-translate-y-0.5 hover:bg-[#5f35df]',
    dark: 'bg-obsidian text-white shadow-[0_24px_70px_rgba(0,0,0,.28)] hover:-translate-y-0.5',
    ghost: 'border border-white/15 bg-white/8 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/14',
  };

  return <a className={`${base} ${styles[variant]}`} href={href}>{children}</a>;
}

function HeroVideo() {
  return (
    <div className="relative mx-auto mt-9 w-full max-w-[710px]">
      <div className="absolute -left-4 top-5 hidden h-[310px] w-44 rounded-l-2xl bg-white md:block" />
      <div className="absolute left-12 top-3 hidden h-24 w-20 rounded-xl bg-white shadow-xl md:block">
        <div className="m-2 h-12 rounded-lg bg-[#dbe8f5]" />
        <div className="mx-auto mt-2 h-3 w-10 rounded-full bg-[#7547ff]/20" />
      </div>
      <div className="relative overflow-hidden rounded-none bg-white shadow-[0_30px_80px_rgba(74,89,110,.18)] md:h-[315px]">
        <div className="grid min-h-[300px] md:grid-cols-[.52fr_.48fr]">
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_20px_20px,#ccd7e4_1.3px,transparent_1.3px)] [background-size:20px_20px]">
            <div className="absolute left-[28%] top-[34%] text-[86px] font900 leading-none text-[#1689f9] opacity-80">M</div>
            <div className="absolute bottom-6 left-24 flex gap-2 rounded-lg bg-white p-2 shadow-xl">
              <span className="h-5 w-5 rounded-full bg-black" />
              <span className="h-5 w-5 rounded-full bg-[#d9903b]" />
              <span className="h-5 w-5 rounded-full bg-[#c92121]" />
            </div>
          </div>
          <div className="relative min-h-[300px] bg-gradient-to-br from-[#ced8df] via-[#aebbc1] to-[#f3c08a]">
            {heroVideoSrc ? (
              <video className="h-full w-full object-cover" src={heroVideoSrc} controls playsInline poster="" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,255,255,.35),rgba(255,255,255,0)_38%),radial-gradient(circle_at_72%_42%,#1c2329_0_8%,transparent_9%)]">
                <div className="h-56 w-40 rounded-t-full bg-[#111820] shadow-2xl" />
                <div className="absolute bottom-0 h-28 w-64 rounded-t-[60px] bg-[#101010]" />
              </div>
            )}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-56 w-[420px] max-w-[78%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-xl border border-white/80 bg-white/35 text-center text-white shadow-[0_20px_80px_rgba(0,0,0,.18)] backdrop-blur-[2px]">
          <Play size={42} fill="currentColor" />
          <p className="mt-4 text-2xl font900 leading-tight drop-shadow">Meta Your Video Is Playing</p>
          <p className="text-xl font900 drop-shadow">Click To Unmute</p>
        </div>
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
    <section id="top" className="overflow-hidden bg-[#eaf3fd] text-[#070a0f]">
      <div className="bg-[#ffdf67] px-4 py-2 text-center text-sm font800">I help marketers & agencies scale campaigns with accurate tracking...</div>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font500 leading-tight tracking-[-0.04em] sm:text-5xl lg:text-[3.45rem]">
            Wasting ad spend due to inaccurate tracking?
            <span className="mt-5 block">I fix it so your ads get the right data to scale</span>
          </h1>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font700">
            {proofPoints.map((point) => (
              <span className="inline-flex items-center gap-2" key={point}>
                <CheckCircle2 size={18} className="text-[#1689f9]" /> {point}
              </span>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center rounded-full bg-[#dbe4ee] px-5 py-3 shadow-sm">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#dbe4ee] bg-white text-[10px] font900 text-slate-700" key={avatar} style={{ zIndex: avatars.length - index }}>{avatar}</span>
              ))}
            </div>
            <div className="ml-3 text-left leading-tight">
              <p className="text-xs text-[#f2a900]">★★★★★</p>
              <p className="text-sm font800 underline decoration-black/30">500+ Tracking</p>
            </div>
          </div>
        </div>

        <HeroVideo />

        <div className="mt-11 text-center">
          <Button href="mailto:kayiumconsults@gmail.com">Claim Your Tracking Audit! <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#7547ff]"><ArrowRight size={18} /></span></Button>
        </div>

        <div className="mx-auto mt-24 grid max-w-[980px] items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <h2 className="max-w-xl text-4xl font900 leading-tight tracking-[-0.04em] sm:text-5xl">Full-Funnel Tracking to Scale Profitably</h2>
            <div className="mt-8 flex items-center gap-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#cde9f4] text-xs font900">AK</span>
                <div>
                  <p className="text-sm font800">Abdul Kayium</p>
                  <p className="text-xs text-slate-500">5,763 Followers</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-[#f2a900]">★★★★★</p>
                <p className="text-xs text-slate-500 underline">500+ Tracking</p>
              </div>
            </div>
            <div className="mt-9 grid grid-cols-4 rounded-xl border border-slate-200 bg-white/90 px-7 py-5 shadow-sm">
              {[
                ['300%', 'Ad revenue'],
                ['35%', 'Lower cost'],
                ['4:1%', 'Average ROAS'],
                ['2.7X%', 'ROI'],
              ].map(([value, label]) => (
                <div className="text-center" key={value}>
                  <p className="text-2xl font900 text-[#1689f9]">{value}<span className="text-lg">↑</span></p>
                  <p className="text-[11px] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rotate-[-3deg] rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(74,89,110,.18)]">
            <div className="absolute -right-5 -top-8 rotate-[22deg] text-6xl">📌</div>
            <ul className="space-y-6 text-xl font800">
              {checklist.map((item) => (
                <li className="flex items-start gap-4" key={item}>
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eea20d] text-sm text-white">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font700 text-slate-700 shadow-sm">
            <ShieldCheck size={16} /> Trusted partners and tools
          </div>
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4">
            {partnerTools.map((tool) => (
              <span className="grid min-h-12 min-w-16 place-items-center rounded-lg bg-white px-4 py-3 text-sm font900 text-slate-700 shadow-sm" key={tool}>{tool}</span>
            ))}
          </div>
          <a className="mt-14 inline-flex items-center gap-2 rounded-lg bg-[#1fd45f] px-6 py-4 text-base font900 text-white shadow-[0_14px_40px_rgba(31,212,95,.26)]" href="https://wa.me/8801883244180">
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, dark = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`text-xs font900 uppercase tracking-[0.22em] ${dark ? 'text-mint' : 'text-cobalt'}`}>{eyebrow}</p>
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
            <p className="text-xs font900 uppercase tracking-[0.22em] text-cobalt">Execution model</p>
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

      <footer className="border-t border-white/10 px-5 py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-5xl font900 leading-tight sm:text-7xl">Get the signal quality your ad budget deserves.</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/55">Start with a focused tracking audit and see exactly where your funnel data is leaking.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="mailto:kayiumconsults@gmail.com">Book audit</Button>
          <Button href="https://wa.me/8801883244180" variant="ghost">WhatsApp</Button>
          <a className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/8" href="https://linkedin.com/in/abdulkayium" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/8" href="https://youtube.com" aria-label="YouTube"><Youtube size={18} /></a>
        </div>
      </footer>
    </main>
  );
}
