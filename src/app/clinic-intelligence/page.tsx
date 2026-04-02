import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import {
  MapPin,
  BarChart3,
  Bell,
  Database,
  ArrowLeft,
  Search,
  RefreshCw,
  Zap,
  Shield,
  Mail,
  Users,
  Globe,
  Monitor,
} from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clinic Market Intelligence | Australian Healthcare Data",
  description:
    "28,252 Australian clinic locations mapped. Tech stacks, firmographics, migration alerts, and decision-maker contacts for B2B SaaS vendors and agencies.",
  openGraph: {
    title: "Clinic Market Intelligence | 28,252 Australian Clinics Mapped",
    description:
      "Tech stacks, firmographics, migration alerts, and decision-maker contacts. Built for B2B SaaS vendors and agencies.",
    type: "website",
    siteName: "Yoluko",
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/images/og-clinic-intelligence.png`,
        width: 1200,
        height: 630,
        alt: "Clinic Market Intelligence - 28,252 Australian Clinic Locations Mapped",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Market Intelligence | 28,252 Australian Clinics Mapped",
    description:
      "Tech stacks, firmographics, migration alerts, and decision-maker contacts. Built for B2B SaaS vendors and agencies.",
    images: [`${SITE_CONFIG.baseUrl}/images/og-clinic-intelligence.png`],
  },
};

const highlightStats = [
  { value: "28,252", label: "Clinic Locations", icon: MapPin },
  { value: "20,080", label: "Unique Domains", icon: Globe },
  { value: "39.3%", label: "Multi-Location Brands", icon: Users },
  { value: "Weekly", label: "Data Refresh", icon: RefreshCw },
];

const clinicCategories = [
  { category: "Psychologist", locations: "5,131", domains: "4,480", pct: "18.2%" },
  { category: "Dentist", locations: "4,160", domains: "3,191", pct: "14.7%" },
  { category: "Chiropractor", locations: "3,121", domains: "2,446", pct: "11.1%" },
  { category: "Medical Clinic", locations: "2,382", domains: "1,932", pct: "8.4%" },
  { category: "Audiologist", locations: "2,018", domains: "369", pct: "7.1%" },
  { category: "Podiatrist", locations: "1,984", domains: "1,352", pct: "7.0%" },
  { category: "Optometrist", locations: "1,532", domains: "820", pct: "5.4%" },
  { category: "Osteopath", locations: "1,365", domains: "1,141", pct: "4.8%" },
  { category: "Occupational Therapist", locations: "1,362", domains: "1,036", pct: "4.8%" },
  { category: "Speech Pathologist", locations: "1,246", domains: "1,030", pct: "4.4%" },
];

const pmsData = [
  { name: "Cliniko", domains: "2,765", greenfield: "13.8%", competitor: "31.4%" },
  { name: "HotDoc", domains: "957", greenfield: "4.8%", competitor: "10.9%" },
  { name: "Halaxy", domains: "840", greenfield: "4.2%", competitor: "9.5%" },
  { name: "Dental4Windows", domains: "710", greenfield: "3.5%", competitor: "8.1%" },
  { name: "HealthEngine", domains: "528", greenfield: "2.6%", competitor: "6.0%" },
  { name: "PracSuite", domains: "504", greenfield: "2.5%", competitor: "5.7%" },
  { name: "Power Diary", domains: "432", greenfield: "2.2%", competitor: "4.9%" },
  { name: "Exact (SOE)", domains: "428", greenfield: "2.1%", competitor: "4.9%" },
  { name: "Splose", domains: "320", greenfield: "1.6%", competitor: "3.6%" },
  { name: "Nookal", domains: "299", greenfield: "1.5%", competitor: "3.4%" },
];

const digitalMaturity = [
  { tech: "Email Provider", detected: "93.9%", greenfield: "6.1%" },
  { tech: "CMS", detected: "87.0%", greenfield: "13.0%" },
  { tech: "Payments Integration", detected: "74.8%", greenfield: "25.2%" },
  { tech: "Ad Tracking (Pixels)", detected: "64.4%", greenfield: "35.6%" },
  { tech: "Booking Platform", detected: "57.2%", greenfield: "42.8%" },
  { tech: "PMS / EHR", detected: "43.9%", greenfield: "56.1%" },
  { tech: "Telehealth", detected: "8.6%", greenfield: "91.4%" },
  { tech: "CRM / Marketing", detected: "8.3%", greenfield: "91.7%" },
];

const deliveryModels = [
  {
    icon: Database,
    title: "One-Shot Extract",
    subtitle: "Campaign Sizing & Outbound",
    description:
      "A static dataset filtered exactly to your Ideal Customer Profile. Typically used for TAM sizing and territory planning.",
  },
  {
    icon: RefreshCw,
    title: "Monthly Refresh",
    subtitle: "Recurring",
    description:
      "Same filter re-run each month. New clinics added to your ICP automatically appear, removed ones drop off.",
  },
  {
    icon: Bell,
    title: "Migration Alerting",
    subtitle: "Advanced",
    description:
      "Weekly tracking of tech stack changes: PMS switches, booking tool additions or removals. Time your outbound to clinics actively changing systems.",
  },
];

const exampleQueries = [
  {
    label: "Campaign Sizing",
    query: "All Dentists in NSW currently using Dental4Windows but NOT using a CRM.",
  },
  {
    label: "Ad-Spend Signals",
    query: "All clinics with 6+ pracs that have an active Meta Ad Pixel.",
  },
  {
    label: "Competitor Churn",
    query: "Alert me the week a clinic removes HotDoc or HealthEngine from their website.",
  },
  {
    label: "Reputation Triggers",
    query: "Alert me when a high-volume clinic (10+ practitioners) drops below a 4.2 Google rating.",
  },
];

export default function ClinicIntelligencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link href="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <svg className="h-[30px] w-auto drop-shadow-[0_2px_8px_rgba(254,203,0,0.3)]" viewBox="0 0 799 212" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Yoluko">
              <path d="M664 51.5H607.159L542 118.083L595.144 119.5L664 51.5Z" fill="#ffdd7c" stroke="#ffdd7c"/>
              <path d="M536 119H510V0H551V104L536 119Z" fill="#ffdd7c"/>
              <path d="M542 122H594.5L684 211.5H631.5L542 122Z" fill="#ffdd7c"/>
              <path d="M536.5 121H510.5V192.5H551.5V137L536.5 121Z" fill="#ffdd7c"/>
              <path d="M465 62.5H430V140C428.5 142.5 420 167 396.5 167C387.106 167 370.166 157.5 371.5 143V62.5H337C336.833 90.8333 336.6 148.3 337 151.5C337.5 155.5 337 165.572 345.5 176.5C356 190 371 193 382.5 194C394 195 405.5 190.5 411 188C416.556 185.474 426.5 178.5 430 173V192.5H465V62.5Z" fill="white"/>
              <path d="M312 20.5H278.5V191H312V20.5Z" fill="white"/>
              <path d="M99.5 122.5L162.5 21.5H119L81 91.5L42.5 21.5H0L64.5 122.5V191H99.5V122.5Z" fill="white"/>
              <path d="M198.5 61.5C235.227 61.5 265 91.2731 265 128C265 164.727 235.227 194.5 198.5 194.5C161.773 194.5 132 164.727 132 128C132 91.2731 161.773 61.5 198.5 61.5ZM198 90.5C179.775 90.5 165 107.065 165 127.5C165 147.935 179.775 164.5 198 164.5C216.225 164.5 231 147.935 231 127.5C231 107.065 216.225 90.5 198 90.5Z" fill="white"/>
              <path d="M732.5 62.5C769.227 62.5 799 92.2731 799 129C799 165.727 769.227 195.5 732.5 195.5C695.773 195.5 666 165.727 666 129C666 92.2731 695.773 62.5 732.5 62.5ZM732 91.5C713.775 91.5 699 108.065 699 128.5C699 148.935 713.775 165.5 732 165.5C750.225 165.5 765 148.935 765 128.5C765 108.065 750.225 91.5 732 91.5Z" fill="white"/>
            </svg>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <span className="text-primary font-label font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Data Product
            </span>
            <h1 className="text-5xl lg:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6">
              Clinic Market{" "}
              <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed mb-8">
              Structured visibility into the technology stacks, firmographics, and change activity of{" "}
              <span className="text-primary font-bold">28,252 Australian clinic locations</span>.
              Built for B2B tech vendors and agencies who need deterministic market data, not guesswork.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {highlightStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10"
                  >
                    <Icon className="h-5 w-5 text-primary mb-3" />
                    <div className="text-2xl lg:text-3xl font-headline font-black text-on-surface">
                      {stat.value}
                    </div>
                    <div className="text-sm text-on-surface-variant mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 lg:p-10">
                  <span className="text-primary font-label font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
                    National Coverage
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-4">
                    Full <span className="text-primary">Australia-Wide</span> Coverage
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    Every state and territory mapped, from metro hubs to regional and rural clinics.
                    Our dataset covers the entire Australian private healthcare market with no geographic gaps.
                  </p>
                </div>
                <div className="relative min-h-[300px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aus_map.png"
                    alt="Heatmap of Australian clinic coverage across all states and territories"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-6">
              What Is <span className="text-primary">This Data?</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mb-4">
              For B2B tech vendors and agencies, finding out who a clinic uses for their PMS,
              if they run ads, or when they switch booking providers usually requires manual research.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
              We&apos;ve automated it by deterministically mapping the digital footprint of the
              Australian private clinic market. Systems are tagged only when structurally
              identified. No guessing, no stale directories.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-low p-4 rounded-xl border border-primary/20 mb-4">
              <p className="text-primary text-sm font-label font-bold text-center">
                80.6% of clinics offer online booking, but only 57.2% use a dedicated booking platform, 11.2% use a CRM and 8.3% offer Telehealth. Massive greenfield.
              </p>
            </div>
          </div>
        </section>

        {/* Clinic Categories Table */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-3">
              TAM by <span className="text-primary">Clinic Category</span>
            </h2>
            <p className="text-on-surface-variant mb-8">
              Dentistry is highly fragmented (1.3 locations per brand), while Audiology is heavily consolidated (6.3 locations per brand).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-6 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Category</th>
                    <th className="py-4 pr-6 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant text-right">Locations</th>
                    <th className="py-4 pr-6 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant text-right">Unique Domains</th>
                    <th className="py-4 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant text-right">% of Total</th>
                  </tr>
                </thead>
                <tbody>
                  {clinicCategories.map((row) => (
                    <tr key={row.category} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-6 font-headline font-bold text-on-surface">{row.category}</td>
                      <td className="py-4 pr-6 text-on-surface-variant text-right tabular-nums">{row.locations}</td>
                      <td className="py-4 pr-6 text-on-surface-variant text-right tabular-nums">{row.domains}</td>
                      <td className="py-4 text-primary font-bold text-right tabular-nums">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PMS Market Share */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-3">
              PMS / EHR <span className="text-primary">Market Share</span>
            </h2>
            <p className="text-on-surface-variant mb-8">
              Over 56% of clinics expose no public PMS signal, representing a massive greenfield opportunity.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-6 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">PMS/EHR</th>
                    <th className="py-4 pr-6 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant text-right">Domains</th>
                    <th className="py-4 pr-6 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant text-right">% Greenfield</th>
                    <th className="py-4 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant text-right">% Competitor</th>
                  </tr>
                </thead>
                <tbody>
                  {pmsData.map((row) => (
                    <tr key={row.name} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-6 font-headline font-bold text-on-surface">{row.name}</td>
                      <td className="py-4 pr-6 text-on-surface-variant text-right tabular-nums">{row.domains}</td>
                      <td className="py-4 pr-6 text-on-surface-variant text-right tabular-nums">{row.greenfield}</td>
                      <td className="py-4 text-primary font-bold text-right tabular-nums">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Digital Maturity */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-3">
              Digital <span className="text-primary">Maturity</span>
            </h2>
            <p className="text-on-surface-variant mb-8">
              How much &quot;Greenfield&quot; opportunity exists across different tech categories.
            </p>
            <div className="grid gap-3">
              {digitalMaturity.map((row) => (
                <div key={row.tech} className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline font-bold text-on-surface">{row.tech}</span>
                    <span className="text-sm text-on-surface-variant">
                      <span className="text-primary font-bold">{row.greenfield}</span> greenfield
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: row.detected }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-on-surface-variant">
                    <span>{row.detected} detected</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Data */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-low p-8 lg:p-10 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-headline font-bold text-on-surface">
                  20-Clinic Free Sample
                </h3>
              </div>
              <p className="text-on-surface-variant mb-6">
                See exactly how the structural data is formatted and delivered. Includes the full data dictionary.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1Dan2Sl4QIMpS3sPFvO1jgHhx22iZL8GazPpekQ83GAg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-headline font-bold hover:bg-primary-dim transition-all"
              >
                View Data Dictionary & Sample
                <Monitor className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Delivery Models */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-8">
              Data <span className="text-primary">Delivery Models</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {deliveryModels.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.title}
                    className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-on-surface mb-1">
                      {model.title}
                    </h3>
                    <span className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-4 block">
                      {model.subtitle}
                    </span>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Example Queries */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-8">
              Example <span className="text-primary">Queries</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {exampleQueries.map((q) => (
                <div
                  key={q.label}
                  className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10"
                >
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-label font-black uppercase tracking-widest mb-3 inline-block">
                    {q.label}
                  </span>
                  <p className="text-on-surface text-sm font-mono leading-relaxed">
                    &quot;{q.query}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Enrichment */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-8">
              Custom <span className="text-primary">Enrichment</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
                  Decision Maker Contacts
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We append First/Last Name, Position (e.g., Practice Manager, Principal Dentist, Founder),
                  and verified B2B email for the specific clinics in your list. All emails undergo live
                  SMTP/bounce-testing before delivery.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
                  Custom Scraping
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Need to know if a clinic specifically mentions &quot;Bulk Billing&quot; or &quot;NDIS&quot;?
                  We own the scrapers in-house. Tell us what you need and we&apos;ll run a custom
                  scrape for your extract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Principles */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: RefreshCw, title: "Fresh Data", desc: "Regularly refreshed to reflect the live market, not stale directories." },
                { icon: Shield, title: "Deterministic", desc: "Systems tagged only when structurally identified in the public footprint." },
                { icon: Search, title: "Greenfield Signal", desc: "A null result means no public signal, itself a qualification for outbound." },
                { icon: Shield, title: "Public Data Only", desc: "All signals from publicly exposed sources. No patient-level data collected." },
              ].map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.title}
                    className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10"
                  >
                    <Icon className="h-5 w-5 text-primary mb-3" />
                    <h4 className="font-headline font-bold text-on-surface mb-2">{principle.title}</h4>
                    <p className="text-on-surface-variant text-sm">{principle.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface mb-6">
              Request a Custom <span className="text-primary">Quote</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Tell us your Ideal Customer Profile and we&apos;ll run a free market sizing count and send you pricing.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-extrabold hover:bg-primary-dim transition-all text-lg"
            >
              <Mail className="h-5 w-5" />
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
