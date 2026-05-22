import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  DatabaseZap,
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

const proofPoints = [
  ['Signal recovery', 'Browser loss, ad blockers, consent gaps, and missing transport URLs checked before scaling.'],
  ['First-party setup', 'Server-side GTM, CAPI, enhanced conversions, and CRM/offline signals planned cleanly.'],
  ['Operator handoff', 'You get a readable tracking map, QA checklist, and launch notes instead of mystery tags.'],
];

const services = [
  ['GA4 + GTM audit', 'Clean event names, conversion rules, and dataLayer checks before scaling spend.', BarChart3],
  ['Meta Pixel + CAPI', 'Browser and server-side events matched with reliable deduplication.', Target],
  ['Google Ads conversions', 'Primary actions, enhanced conversions, and value tracking configured correctly.', Zap],
  ['Server-side tracking', 'Stape-ready setup for stronger attribution and reduced browser loss.', DatabaseZap],
  ['Reporting QA', 'DebugView, Ads diagnostics, Pixel helper, and live checkout event validation.', LineChart],
  ['Fix broken funnels', 'Find missing steps, duplicate events, weak triggers, and bad payloads fast.', ShieldCheck],
];

const stack = ['GA4', 'GTM', 'Meta', 'Google Ads', 'Looker', 'Stape', 'Shopify', 'WordPress'];

const audits = ['Duplicate purchase events', 'Missing lead values', 'Bad consent signals', 'Wrong attribution source', 'Broken CAPI dedupe', 'Weak ecommerce payloads'];

const testimonials = [
  ['Founder, DTC brand', 'Tracking finally matched our CRM and ad platforms. Decisions got cleaner within the first week.'],
  ['Media buyer', 'He found duplicate purchase events and missing lead values that were distorting every campaign.'],
  ['Agency owner', 'Clear setup, clean documentation, and no confusing technical handoff for the client.'],
];

const faqs = [
  ['Can you work with existing GTM?', 'Yes. I audit the current container first, then keep what is useful and remove what is risky.'],
  ['Do I need server-side tracking?', 'If you run paid ads seriously, server-side tracking is often worth it for cleaner signal quality.'],
  ['Can you fix Meta and Google Ads both?', 'Yes. The setup can cover GA4, Google Ads, Meta Pixel, CAPI, and reporting QA together.'],
  ['Will this work on Vercel and cPanel?', 'Yes. This site builds to a static dist folder and can be deployed on both.'],
];

function Button({ children, href, variant = 'dark' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition';
  const styles = variant === 'light'
    ? 'bg-white text-ink shadow-soft hover:-translate-y-0.5'
    : 'bg-ink text-white shadow-dark hover:-translate-y-0.5';
  return <a className={`${base} ${styles}`} href={href}>{children}</a>;
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[2rem] border border-white/70 bg-white p-3 shadow-soft">
        <div className="overflow-hidden rounded-[1.55rem] bg-ink text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex gap-2"><span className="dot bg-red-400" /><span className="dot bg-gold" /><span className="dot bg-mint" /></div>
            <span className="text-xs text-white/50">tracking-checkout.live</span>
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-3xl bg-gradient-to-br from-white/12 to-white/5 p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-xl font-black text-ink">SA</div>
                <div>
                  <p className="text-sm font-semibold">Tracking Setup Review</p>
                  <p className="text-xs text-white/55">GA4, GTM, Ads, CAPI</p>
                </div>
              </div>
              <button className="grid h-16 w-16 place-items-center rounded-full bg-white text-ink shadow-dark" aria-label="Play intro video"><Play size={24} fill="currentColor" /></button>
              <p className="mt-5 text-sm text-white/65">Audit signal quality before scaling campaigns.</p>
            </div>
            <div className="space-y-3">
              {['Purchase event matched', 'Lead value sent', 'CAPI dedupe clean', 'DebugView verified'].map((item) => (
                <div className="flex items-center gap-2 rounded-2xl bg-white/8 px-3 py-3 text-xs" key={item}>
                  <CheckCircle2 size={15} className="text-mint" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-7 left-6 right-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="grid grid-cols-4 gap-3 text-center text-xs">
          {['500+', '4.9/5', '27%', '2.7x'].map((stat, index) => <div key={stat}><b className="block text-base text-ink">{stat}</b><span className="text-slate-500">{['clients', 'rating', 'less loss', 'ROAS'][index]}</span></div>)}
        </div>
      </div>
    </div>
  );
}

function AuditPanel() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold text-cobalt">FREE TRACKING DIAGNOSTIC</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Before fixing tags, find the real leak.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">The best tracking teams do not sell server-side tracking as magic. They audit the current data path first, then fix the exact points where signal quality is breaking.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-paper p-5 shadow-soft">
          <div className="rounded-[1.5rem] bg-ink p-5 text-white">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-bold">Signal Leak Scan</span>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-black text-ink">LIVE QA</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {audits.map((item) => (
                <div className="flex items-center gap-2 rounded-2xl bg-white/8 px-3 py-3 text-sm" key={item}>
                  <CheckCircle2 size={16} className="text-mint" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <section className="bg-paper text-ink">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a className="text-sm font-black tracking-wide" href="#top">SHAKIL AHMED</a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services">Services</a><a href="#work">Work</a><a href="#faq">FAQ</a>
          </div>
          <Button href="mailto:kayiumconsults@gmail.com" variant="dark">Book audit <ArrowRight size={16} /></Button>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-10 lg:grid-cols-[1fr_.92fr] lg:pb-32 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm"><Sparkles size={14} /> Full-funnel tracking specialist</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">Accurate tracking for better ad decisions.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">I set up GA4, Google Ads, Meta Pixel, GTM, and server-side tracking so your campaigns get cleaner conversion data before you scale.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="mailto:kayiumconsults@gmail.com">Book free consultation <CalendarCheck size={17} /></Button><Button href="https://wa.me/8801883244180" variant="light">WhatsApp me <MessageCircle size={17} /></Button></div>
            <div className="mt-9 flex flex-wrap gap-2">{stack.map((tool) => <span className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm" key={tool}>{tool}</span>)}</div>
          </div>
          <HeroVisual />
        </div>
        <div className="mx-auto grid max-w-7xl gap-4 px-5 pb-20 md:grid-cols-3">
          {proofPoints.map(([title, body]) => (
            <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm" key={title}>
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <AuditPanel />

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 max-w-2xl"><p className="text-sm font-semibold text-mint">WHAT GETS FIXED</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Tracking made simple, verified, and ready to scale.</h2></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, body, Icon]) => <article className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 shadow-dark" key={title}><Icon className="mb-8 text-mint" size={30} /><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{body}</p></article>)}</div>
      </section>

      <section id="work" className="bg-white text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.85fr_1fr]">
          <div><p className="text-sm font-semibold text-cobalt">PROCESS</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">A clean setup without messy handoffs.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Audit first, build second, verify last. That keeps the setup practical and stops bad data from moving into reporting.</p></div>
          <div className="grid gap-4">
            {['Audit what is firing now', 'Rebuild tags, triggers, and payloads', 'Verify live events and conversion diagnostics'].map((step, index) => <div className="flex gap-5 rounded-[1.5rem] border border-slate-200 bg-paper p-6" key={step}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-black text-white">0{index + 1}</span><div><h3 className="font-bold">{step}</h3><p className="mt-2 text-sm leading-6 text-slate-600">You get a setup that is easier to trust, maintain, and explain.</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 text-center"><p className="text-sm font-semibold text-gold">TRUSTED BY OPERATORS</p><h2 className="mt-3 text-4xl font-black tracking-tight">Clean feedback from real tracking work.</h2></div>
        <div className="grid gap-4 md:grid-cols-3">{testimonials.map(([name, quote]) => <figure className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6" key={name}><blockquote className="text-sm leading-7 text-white/70">"{quote}"</blockquote><figcaption className="mt-6 text-sm font-bold">{name}</figcaption></figure>)}</div>
      </section>

      <section id="faq" className="bg-paper text-ink">
        <div className="mx-auto max-w-4xl px-5 py-24"><div className="mb-10 text-center"><p className="text-sm font-semibold text-cobalt">FAQ</p><h2 className="mt-3 text-4xl font-black tracking-tight">Questions you may ask</h2></div><div className="space-y-3">{faqs.map(([q, a]) => <details className="group rounded-2xl border border-slate-200 bg-white p-5" key={q}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">{q}<ChevronDown className="transition group-open:rotate-180" size={18} /></summary><p className="mt-4 text-sm leading-6 text-slate-600">{a}</p></details>)}</div></div>
      </section>

      <footer className="px-5 py-20 text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Let us fix your website tracking issues.</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/60">Book a focused tracking review and see exactly where your data is leaking.</p>
        <div className="mt-8 flex justify-center gap-3"><Button href="mailto:kayiumconsults@gmail.com" variant="light">Get in touch</Button><a className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/8" href="https://linkedin.com/in/abdulkayium" aria-label="LinkedIn"><Linkedin size={18} /></a><a className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/8" href="https://youtube.com" aria-label="YouTube"><Youtube size={18} /></a></div>
      </footer>
    </main>
  );
}
