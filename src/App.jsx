import {
  ArrowRight,
  BarChart3,
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
  Zap,
} from 'lucide-react';

const channels = ['GA4', 'GTM', 'Meta CAPI', 'Google Ads', 'TikTok', 'Klaviyo', 'Shopify', 'Stape'];

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

const caseMetrics = [
  ['+31%', 'recoverable signal found during audit'],
  ['99%', 'purchase delivery target for server events'],
  ['48h', 'priority fix sprint for broken funnels'],
  ['0', 'mystery tags left undocumented'],
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
    primary: 'bg-white text-obsidian shadow-[0_24px_80px_rgba(255,255,255,.18)] hover:-translate-y-0.5 hover:bg-mint',
    dark: 'bg-obsidian text-white shadow-[0_24px_70px_rgba(0,0,0,.28)] hover:-translate-y-0.5',
    ghost: 'border border-white/15 bg-white/8 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/14',
  };

  return <a className={`${base} ${styles[variant]}`} href={href}>{children}</a>;
}

function SignalConsole() {
  const rows = [
    ['Meta CAPI', 'Purchase', 'Matched', '+18.4%'],
    ['Google Ads', 'Lead value', 'Clean', '+$42k'],
    ['GA4', 'Checkout', 'Verified', '0 dupes'],
    ['Klaviyo', 'Session', 'Enriched', '2.3x'],
  ];

  return (
    <div className="relative">
      <div className="absolute inset-x-8 -top-6 h-10 rounded-full border border-mint/30 bg-mint/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#090b0f] shadow-[0_40px_140px_rgba(0,0,0,.58)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex gap-2">
            <span className="dot bg-red-400" />
            <span className="dot bg-gold" />
            <span className="dot bg-mint" />
          </div>
          <span className="font-mono text-xs text-white/45">signal-os.audit</span>
        </div>
        <div className="grid gap-4 p-5 lg:grid-cols-[.78fr_1fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-sm font900 text-obsidian">SA</div>
              <div>
                <p className="font800">Tracking War Room</p>
                <p className="text-xs text-white/45">GA4 / GTM / Ads / CAPI</p>
              </div>
            </div>
            <button className="mt-8 grid h-16 w-16 place-items-center rounded-full bg-white text-obsidian" aria-label="Play tracking review">
              <Play size={24} fill="currentColor" />
            </button>
            <p className="mt-6 text-sm leading-6 text-white/55">A premium tracking audit finds the leak before your ad platforms learn from bad data.</p>
          </div>
          <div className="space-y-3">
            {rows.map(([platform, event, status, delta]) => (
              <div className="grid grid-cols-[1fr_auto] items-center rounded-2xl border border-white/10 bg-white/[0.055] p-4" key={platform}>
                <div>
                  <p className="text-sm font800">{platform}</p>
                  <p className="text-xs text-white/45">{event} - {status}</p>
                </div>
                <span className="rounded-full bg-mint/15 px-3 py-1 font-mono text-xs font800 text-mint">{delta}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 border-t border-white/10 bg-white/[0.035]">
          {caseMetrics.map(([value, label]) => (
            <div className="border-r border-white/10 p-4 last:border-r-0" key={value}>
              <p className="font-mono text-xl font900 text-white">{value}</p>
              <p className="mt-1 text-[11px] leading-4 text-white/42">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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
      <section className="hero-grid overflow-hidden">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <a className="text-sm font900 tracking-[0.18em]" href="#top">SHAKIL AHMED</a>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font700 text-white/70 md:flex md:gap-8">
            <a href="#services">Services</a>
            <a href="#audit">Audit</a>
            <a href="#faq">FAQ</a>
          </div>
          <Button href="mailto:kayiumconsults@gmail.com">Book audit <ArrowRight size={16} /></Button>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-12 lg:min-h-[820px] lg:grid-cols-[.92fr_1.08fr] lg:pt-6">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font800 text-white/72 backdrop-blur">
              <Sparkles size={14} className="text-gold" /> Premium conversion tracking systems
            </div>
            <h1 className="max-w-4xl text-6xl font900 leading-[0.9] tracking-[-0.055em] sm:text-8xl lg:text-[7.7rem]">
              Make your ad platforms stop guessing.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              GA4, GTM, Meta CAPI, Google Ads, server-side tracking, and first-party signal architecture for brands that cannot afford dirty conversion data.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:kayiumconsults@gmail.com">Book a signal audit <CalendarCheck size={17} /></Button>
              <Button href="https://wa.me/8801883244180" variant="ghost">WhatsApp <MessageCircle size={17} /></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {channels.map((tool) => <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font800 text-white/58" key={tool}>{tool}</span>)}
            </div>
          </div>
          <SignalConsole />
        </div>
      </section>

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
