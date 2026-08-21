import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Radar,
  MapPin,
  Clock,
  Users,
  Bell,
  Route as RouteIcon,
  Cpu,
  Cloud,
  Smartphone,
  ShieldCheck,
  Building2,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Check,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroMap from "@/assets/hero-map.jpg";
import iotDevice from "@/assets/iot-device.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import dashboardImg from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--5bd77cd9-f923-480c-9722-ae5144d911a3.lovable.app/og.jpg" },
    ],
  }),
  component: Landing,
});

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Problem", "#problem"],
    ["Solution", "#solution"],
    ["Features", "#features"],
    ["Product", "#product"],
    ["Technology", "#tech"],
    ["Market", "#market"],
    ["FAQ", "#faq"],
  ] as const;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground teal-glow">
            <Radar className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight">Rideradar</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#cta">Get the App <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="glass-strong border-t border-border/50 lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">Contact</a>
            <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#cta" onClick={() => setOpen(false)}>Get the App</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            India's Smart Public Transportation Platform
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">Every Journey,</span>
            <br />
            <span className="text-foreground">Predictable.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Rideradar brings live tracking, accurate ETAs, live occupancy and smart alerts to India's public transit —
            so every commuter knows exactly when their ride will arrive, and every city runs a smarter fleet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
              <a href="#cta">Get the App <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-transparent hover:bg-secondary">
              <a href="#solution">See how it works</a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              ["10x", "Faster planning"],
              ["±30s", "ETA accuracy"],
              ["24/7", "Live coverage"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-2xl font-bold text-foreground">{k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="glass-strong relative overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={heroMap}
              alt="Live transit network map with real-time bus routes across an Indian city"
              width={1920}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" aria-hidden />
            {/* Floating cards */}
            <div className="glass absolute left-4 top-4 rounded-2xl px-3 py-2 sm:left-6 sm:top-6 animate-float-slow">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Arriving in</p>
                  <p className="text-base font-semibold text-foreground">2 min · Route 332</p>
                </div>
              </div>
            </div>
            <div className="glass absolute bottom-4 right-4 rounded-2xl px-3 py-2 sm:bottom-6 sm:right-6" style={{ animation: "float-slow 7s ease-in-out infinite" }}>
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary">
                  <Users className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Occupancy</p>
                  <p className="text-base font-semibold text-foreground">Many seats</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl" aria-hidden />
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Built for Smart Cities · Startup India · SSIP · IIT incubators
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-4 md:grid-cols-6">
          {["Smart Cities", "SSIP", "Startup India", "IIT Bombay", "MoRTH", "Digital India"].map((n) => (
            <div key={n} className="glass rounded-xl px-4 py-3 text-center text-xs font-medium tracking-wide text-muted-foreground">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section wrapper ---------- */
function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">{intro}</p>
          )}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const items = [
    { k: "10B+", v: "public transit trips a year in India — mostly untracked." },
    { k: "45 min", v: "average wait uncertainty at Indian bus stops." },
    { k: "1 in 3", v: "commuters abandon public transit for lack of information." },
  ];
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title="India moves on public transport. But it moves in the dark."
      intro="Half a billion daily commuters still guess when their bus will arrive. Operators run blind. Cities can't plan. The information gap costs time, money and trust."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((i) => (
          <div key={i.k} className="glass rounded-2xl p-6">
            <p className="text-4xl font-bold text-gradient">{i.k}</p>
            <p className="mt-3 text-sm text-muted-foreground">{i.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Solution ---------- */
function Solution() {
  const pillars = [
    {
      icon: Cpu,
      title: "IoT on every vehicle",
      body: "Compact tracking device streams GPS, telemetry and occupancy in real time.",
    },
    {
      icon: Cloud,
      title: "Predictive cloud engine",
      body: "AI models fuse live data with traffic and history to predict ETA to the second.",
    },
    {
      icon: Smartphone,
      title: "Delightful commuter app",
      body: "One tap to know exactly when your ride arrives, how full it is, and where to board.",
    },
  ];
  return (
    <Section
      id="solution"
      eyebrow="The solution"
      title="One platform. From vehicle to pocket."
      intro="Rideradar is a full-stack transit intelligence platform — hardware, cloud, apps and dashboards, engineered together."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="glass group relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1">
            <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
              <p.icon className="h-6 w-6" />
            </span>
            <h3 className="relative mt-6 text-xl font-semibold">{p.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Install", d: "Fit the Rideradar IoT device inside any bus — under an hour, no downtime." },
    { n: "02", t: "Stream", d: "Live GPS, speed and occupancy stream to the Rideradar cloud every second." },
    { n: "03", t: "Predict", d: "Our ETA engine fuses traffic, history and route context into precise arrivals." },
    { n: "04", t: "Ride", d: "Commuters open the app and know exactly when their ride shows up. Cities see everything." },
  ];
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="From device to commuter — in seconds."
      intro="A single, tightly integrated pipeline turns raw vehicle motion into a predictable journey."
    >
      <div className="relative">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2 md:block" aria-hidden />
        <ol className="grid gap-8 md:grid-cols-2 md:gap-x-24">
          {steps.map((s, i) => (
            <li key={s.n} className={`glass relative rounded-2xl p-6 md:p-8 ${i % 2 ? "md:mt-24" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground font-bold">
                  {s.n}
                </span>
                <h3 className="text-xl font-semibold">{s.t}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const features = [
    { icon: MapPin, t: "Live Tracking", d: "Watch every bus move on the map, refreshed second by second." },
    { icon: Clock, t: "Accurate ETA", d: "AI-powered arrival predictions with ±30 second precision." },
    { icon: Users, t: "Live Occupancy", d: "See how crowded the next bus is before you decide to board." },
    { icon: Bell, t: "Smart Alerts", d: "Get pinged when your bus is 5 minutes away, or when your stop is next." },
    { icon: RouteIcon, t: "Route Maps", d: "Discover every route, stop and interchange in your city — beautifully drawn." },
    { icon: ShieldCheck, t: "Safe Journeys", d: "SOS, trip sharing and verified operators baked into every ride." },
  ];
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Everything a commuter needs. Nothing they don't."
      intro="Designed for daily use — fast, calm, and accurate. Built to feel like the best product on your phone."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.t} className="glass group rounded-2xl p-6 transition-all hover:border-primary/40">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">{f.t}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Product showcase ---------- */
function Product() {
  return (
    <section id="product" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* IoT */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">The device</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A quiet piece of hardware.<br />A city's nervous system.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Ruggedised for Indian roads. 4G-LTE with 2G fallback. Solar-friendly power draw.
              Installs in under an hour. Streams every second, forever.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["GPS + IMU fusion", "Occupancy sensing", "Edge computing", "OTA firmware", "Tamper resistant", "5-year warranty"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl glass-strong shadow-elevated">
              <img src={iotDevice} alt="Rideradar IoT tracking device" width={1280} height={960} loading="lazy" className="w-full" />
            </div>
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/20 blur-3xl" aria-hidden />
          </div>
        </div>

        {/* App */}
        <div className="mt-32 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] shadow-elevated">
              <img src={appMockup} alt="Rideradar commuter mobile app showing live bus tracking" width={1080} height={1350} loading="lazy" className="w-full" />
            </div>
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/15 blur-3xl" aria-hidden />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">The app</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The most trusted app on your commute.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Open it, look once, put it away. Live buses, accurate ETAs, occupancy at a glance and a smart alert
              that taps your shoulder when it's time to leave.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#cta">Join the waitlist</a>
              </Button>
              <Button asChild variant="outline" className="border-border bg-transparent hover:bg-secondary">
                <a href="#features">See features</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">The dashboard</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A mission control for city transit.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Purpose-built for transport authorities, private operators and Smart City command centers.
              Fleet-wide visibility, on-time performance, alerts and analytics — all in one calm interface.
            </p>
          </div>
          <div className="relative mt-12">
            <div className="glass-strong overflow-hidden rounded-3xl shadow-elevated">
              <img src={dashboardImg} alt="Rideradar operations dashboard with live fleet map and KPIs" width={1600} height={1000} loading="lazy" className="w-full" />
            </div>
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Technology ---------- */
function Technology() {
  const layers = [
    { icon: Cpu, t: "Edge", d: "IoT devices with edge compute for reliability on patchy networks." },
    { icon: Cloud, t: "Cloud", d: "Elastic ingestion pipeline handling millions of events per minute." },
    { icon: Sparkles, t: "Intelligence", d: "ML models for ETA, occupancy classification and anomaly detection." },
    { icon: Smartphone, t: "Experience", d: "Native mobile app, operator dashboard, and open APIs." },
  ];
  return (
    <Section
      id="tech"
      eyebrow="Technology"
      title="Four layers. One predictable ride."
      intro="An architecture engineered for Indian conditions — resilient, low-latency, and open."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {layers.map((l, i) => (
          <div key={l.t} className="glass relative overflow-hidden rounded-2xl p-6">
            <span className="text-xs font-mono text-primary">L{i + 1}</span>
            <span className="mt-3 grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
              <l.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{l.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Market ---------- */
function Market() {
  const stats = [
    { k: "$40B+", v: "Indian public transport market by 2030" },
    { k: "500M+", v: "daily public transit trips across India" },
    { k: "100+", v: "Smart Cities actively modernising fleets" },
    { k: "1.7M", v: "buses on the road, mostly untracked" },
  ];
  return (
    <Section
      id="market"
      eyebrow="Market opportunity"
      title="A generational infrastructure moment."
      intro="India is spending unprecedented capital on urban mobility. Rideradar is the intelligence layer that unlocks it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="glass rounded-2xl p-6">
            <p className="text-4xl font-bold text-gradient">{s.k}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          { i: Users, t: "Commuters", d: "Daily riders across metros and tier-2 cities." },
          { i: Building2, t: "Authorities & Cities", d: "Transport corporations and Smart City missions." },
          { i: TrendingUp, t: "Operators & Investors", d: "Private fleets and infrastructure investors." },
        ].map((a) => (
          <div key={a.t} className="glass rounded-2xl p-6">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
              <a.i className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{a.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const t = [
    { q: "Rideradar changed how I plan my morning. I don't wait — I arrive.", n: "Priya S.", r: "Daily commuter, Mumbai" },
    { q: "For the first time we can see our entire fleet live. On-time performance jumped 18%.", n: "Depot Manager", r: "Municipal Transport Corporation" },
    { q: "A textbook example of the intelligence layer Indian Smart Cities have been missing.", n: "Innovation Lead", r: "Smart City Mission (pilot)" },
  ];
  return (
    <Section
      id="testimonials"
      eyebrow="Voices"
      title="Early signal from the ground."
      intro="Pilot placeholders — replaced with named testimonials as deployments go live."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {t.map((x) => (
          <figure key={x.n} className="glass flex flex-col rounded-2xl p-6">
            <blockquote className="text-base leading-relaxed text-foreground">"{x.q}"</blockquote>
            <figcaption className="mt-6 border-t border-border/50 pt-4 text-sm">
              <div className="font-semibold text-foreground">{x.n}</div>
              <div className="text-muted-foreground">{x.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "Which cities is Rideradar live in?", a: "We're piloting in select Indian metros and tier-2 cities in partnership with municipal operators and Smart City missions. Join the waitlist to be notified when we launch in yours." },
    { q: "Do buses need to install anything?", a: "Yes — the Rideradar IoT device is installed once per vehicle in under an hour, with no downtime for operations." },
    { q: "How accurate are the ETAs?", a: "Our AI-powered ETA engine typically predicts arrival within ±30 seconds, using live GPS, historical patterns and real-time traffic." },
    { q: "Is my data private?", a: "Yes. Personal data is never sold. Location data is used only to power your journey and is protected by end-to-end encryption in transit." },
    { q: "Do you offer APIs for cities and operators?", a: "Yes. Rideradar exposes GTFS-Realtime and REST APIs for transport authorities, Smart City command centers and third-party integrators." },
    { q: "How do you monetise?", a: "SaaS subscriptions from transport authorities and operators, plus enterprise APIs. The commuter app stays free." },
  ];
  return (
    <Section id="faq" eyebrow="Answers" title="Frequently asked questions." intro="Everything commuters, cities and investors ask.">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="glass rounded-2xl px-2">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="px-4 text-left text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ---------- CTA + Contact ---------- */
function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ride with confidence.<br />Or bring us to your city.
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Join the commuter waitlist, or partner with us to deploy Rideradar across your fleet, corridor or city.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"><Check className="h-3.5 w-3.5" />No card required</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"><Check className="h-3.5 w-3.5" />Free for commuters</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"><Check className="h-3.5 w-3.5" />Pilot programs open</span>
              </div>
            </div>

            <form
              id="contact"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-2xl p-6"
              aria-label="Contact Rideradar"
            >
              {sent ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">Thanks — we'll be in touch.</h3>
                  <p className="mt-1 text-sm text-muted-foreground">A Rideradar teammate replies within one business day.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</label>
                    <Input id="name" required placeholder="Your name" className="bg-background/40" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email</label>
                    <Input id="email" type="email" required placeholder="you@company.com" className="bg-background/40" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="role" className="text-xs font-medium text-muted-foreground">I am a</label>
                    <select id="role" className="h-10 rounded-md border border-input bg-background/40 px-3 text-sm text-foreground">
                      <option>Commuter</option>
                      <option>Transport authority / Smart City</option>
                      <option>Fleet operator</option>
                      <option>Investor</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="msg" className="text-xs font-medium text-muted-foreground">Message (optional)</label>
                    <Textarea id="msg" placeholder="Tell us about your city or use case…" className="min-h-[96px] bg-background/40" />
                  </div>
                  <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get early access <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Radar className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight">Rideradar</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            India's Smart Public Transportation Platform. Every Journey, Predictable.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Github, Mail].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Product</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#product" className="hover:text-foreground">Device & App</a></li>
            <li><a href="#tech" className="hover:text-foreground">Technology</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#market" className="hover:text-foreground">Market</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            <li><a href="#cta" className="hover:text-foreground">Partner with us</a></li>
            <li><a href="#cta" className="hover:text-foreground">Investors</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Rideradar. All rights reserved.</p>
          <p>Made in India · Built for the world.</p>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Product />
      <Technology />
      <Market />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
