import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header, SectionLabel, SiteFooter } from "@/components/Chrome";
import { Elevation } from "@/components/Drawings";
import { PROJECT_492 as P } from "@/data/project492";
import aerial from "@/assets/492-aerial.webp";

const mono = "font-mono";

const TICKER = [P.address, P.status, `${P.sqft} sq ft`, `${P.acres} acres`, "8 bedroom suites", "Heated gunite pool & spa", "Full-size tennis", `Completion ${P.completion}`];

const FACTS: [string, ReactNode][] = [
  ["STATUS", <span className={`${mono} inline-block bg-ink px-2.5 py-1 text-xs tracking-[0.1em] text-bone`}>IN CONTRACT</span>],
  ["LISTED", P.listPrice],
  ["LIVING AREA", `${P.sqft} sq ft`],
  ["LAND", `${P.acres} acres, private flag lot`],
  ["SUITES", "8 bedrooms, every one en suite"],
  ["BATHS", "8 full · 3 half"],
  ["OUTDOORS", "Heated 20′ × 45′ gunite pool & spa, pool house, sauna, full-size tennis"],
  ["COMPLETION", P.completion],
];

const METHOD = [
  { n: "01 / GROUND", h: "The land comes first", p: "Siting, survey and the approvals that decide what a parcel can become, worked out before anything else." },
  { n: "02 / DRAWINGS", h: "Resolved on paper", p: "Every room, sightline and system is settled in the plans before a footing is poured." },
  { n: "03 / BUILD", h: "Managed directly", p: "High-quality materials and trusted trades, run by the builder himself, for a house meant to outlast the build." },
  { n: "04 / KEYS", h: "Smart from day one", p: "Systems commissioned and the smart-home layer tuned, so light, climate and security answer to a phone." },
];

const INTERESTS = [
  { id: "buy", label: "Buying a Ciamillo home" },
  { id: "build", label: "Building on my land" },
  { id: "sell", label: "Selling a parcel" },
  { id: "press", label: "Brokers & press" },
];

const label = `${mono} text-xs tracking-[0.12em] text-steel`;
const field = "cb-field min-h-[48px] border border-rule-3 bg-ink-700 px-3.5 font-sans text-base text-bone";

export default function Home() {
  const [interest, setInterest] = useState("buy");
  const [sent, setSent] = useState(false);

  return (
    <div id="top" className="overflow-x-hidden bg-ink text-bone">
      <Header
        homeTo="/#top"
        items={[
          { n: "01", label: "Work", to: "#work" },
          { n: "02", label: "Residence 492", to: P.path },
          { n: "03", label: "Method", to: "#method" },
          { n: "04", label: "Press", to: "#press" },
        ]}
        cta={{ label: "Inquire", to: "#inquire" }}
      />

      {/* HERO */}
      <section aria-labelledby="hero-h" className="pad-x mx-auto flex max-w-site flex-col gap-[clamp(40px,5vw,72px)] pb-[clamp(40px,6vw,88px)] pt-[clamp(48px,7vw,104px)]">
        <div className="cq flex flex-col gap-7">
          <div className={`${mono} flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs tracking-[0.14em] text-steel`}>
            <span>{P.coords.dms} — SAGAPONACK, NEW YORK</span>
            <span>EAST END · LONG ISLAND</span>
          </div>
          <div aria-hidden="true" className="flex items-center gap-2.5">
            <span className="h-[18px] w-px bg-survey" />
            <span className="h-px flex-1 bg-survey" />
            <span className={`${mono} whitespace-nowrap text-[11px] tracking-[0.16em] text-survey`}>TOLERANCE: NONE GIVEN</span>
            <span className="h-px flex-1 bg-survey" />
            <span className="h-[18px] w-px bg-survey" />
          </div>
          <h1 id="hero-h" className="m-0 font-display font-wide font-extrabold uppercase leading-[0.86] tracking-[-0.03em]" style={{ fontSize: "min(13.6cqi, 192px)" }}>
            <span className="block">Intensive</span>
            <span className="text-outline block">Precision<span className="text-survey" style={{ WebkitTextStroke: 0 }}>.</span></span>
          </h1>
        </div>
        <div className="flex flex-wrap items-start gap-[clamp(36px,5vw,72px)]">
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-8 pt-2">
            <p className="m-0 max-w-[520px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-fog">
              Ciamillo Building Company develops and builds new-construction estates on the East End of Long Island — from raw land and approved plans to the day the keys change hands. One builder. One name. Every detail answered for.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link to={P.path} className={`${mono} inline-flex min-h-[52px] items-center gap-3 bg-survey px-[26px] text-[13px] font-medium uppercase tracking-[0.1em] text-ink no-underline hover:text-ink hover:brightness-110`}>
                Enter 492 Wainscott Harbor <span aria-hidden="true">→</span>
              </Link>
              <a href="#inquire" className={`${mono} inline-flex min-h-[52px] items-center border border-rule-3 px-[26px] text-[13px] uppercase tracking-[0.1em] no-underline`}>Build with us</a>
            </div>
          </div>
          <figure className="blueprint relative m-0 min-w-0 flex-[1.7_1_520px] overflow-hidden border border-rule-2">
            <div aria-hidden="true" className="cb-scan absolute inset-x-0 top-0 h-px bg-survey opacity-55" />
            <Elevation />
            <figcaption className={`${mono} grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-t border-rule-2 text-[11px] tracking-[0.1em] text-steel`}>
              <span className="border-r border-rule-2 px-4 py-3">SHEET A-201</span>
              <span className="border-r border-rule-2 px-4 py-3">FRONT ELEVATION · 492</span>
              <span className="px-4 py-3 text-bone">CIAMILLO BLDG. CO.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TICKER */}
      <div aria-label="Current project facts" className="overflow-hidden border-y border-rule py-[18px]">
        <div className={`cb-tick ${mono} flex w-max gap-14 whitespace-nowrap text-[13px] uppercase tracking-[0.14em] text-fog`}>
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex gap-14"><span>{t}</span><span className="text-survey">◆</span></span>
          ))}
        </div>
      </div>

      {/* AERIAL */}
      <figure aria-label={`${P.address} from the air`} className="m-0 bg-ink">
        <Link to={P.path} className="relative block min-h-[300px] overflow-hidden bg-ink-800" style={{ aspectRatio: "1616 / 690" }}>
          <img src={aerial} alt="Aerial view of 492 Wainscott Harbor Road: a white cedar-shingle residence with gravel motor court, gunite pool and pool house behind, and a full-size tennis court, enclosed by tall privet hedges" className="absolute inset-0 block h-full w-full object-cover" style={{ objectPosition: "50% 55%" }} />
          <span aria-hidden="true" className={`${mono} absolute flex items-center gap-2.5 bg-ink px-3.5 py-2.5 text-[11px] tracking-[0.14em] text-bone`} style={{ left: "clamp(20px,5vw,72px)", top: "clamp(20px,3vw,40px)" }}>
            <span className="h-2 w-2 rounded-full bg-survey" />LIVE · IN CONTRACT
          </span>
        </Link>
        <figcaption className={`pad-x ${mono} mx-auto flex max-w-site flex-wrap justify-between gap-x-6 gap-y-2.5 border-b border-rule py-[18px] text-xs tracking-[0.12em] text-steel`}>
          <span><span className="text-bone">492 WAINSCOTT HARBOR ROAD</span> · RESIDENCE · POOL &amp; SPA · POOL HOUSE · TENNIS</span>
          <span>SAGAPONACK · {P.acres} AC</span>
        </figcaption>
      </figure>

      {/* FEATURED */}
      <section aria-labelledby="feat-h" className="bg-bone text-ink">
        <div className="pad-x mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-start gap-[clamp(32px,5vw,72px)] py-[clamp(56px,8vw,120px)]">
          <div className="cq flex min-w-0 flex-col gap-2">
            <SectionLabel n="01" name="LATEST RESIDENCE" tone="light" />
            <h2 id="feat-h" className="m-0 flex flex-col">
              <span className="whitespace-nowrap font-display font-wide font-black leading-[0.8] tracking-[-0.05em]" style={{ fontSize: "min(40cqi, 360px)" }}>492</span>
              <span className="mt-[18px] font-display font-wide-sm text-[clamp(22px,2.6vw,38px)] font-bold uppercase tracking-[0.02em]">Wainscott Harbor Road</span>
              <span className={`${mono} mt-2 text-[13px] font-normal tracking-[0.14em] text-slate`}>{P.locality.toUpperCase()}</span>
            </h2>
            <p className="mt-7 max-w-[520px] text-lg leading-relaxed text-slate-2">
              A new-construction estate in the heart of Sagaponack: timeless Hamptons architecture carried through with modern systems, set on a private flag lot of just over two acres.
            </p>
          </div>
          <div className="flex flex-col">
            <dl className="m-0 grid grid-cols-[minmax(120px,0.7fr)_minmax(0,1.3fr)] border-t-2 border-ink text-base">
              {FACTS.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className={`${mono} border-b border-bone-3 py-4 text-xs tracking-[0.12em] text-slate`}>{k}</dt>
                  <dd className="m-0 border-b border-bone-3 py-4 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to={P.path} className={`${mono} mt-7 flex min-h-[64px] items-center justify-between bg-ink px-6 text-[13px] uppercase tracking-[0.12em] text-bone no-underline`}>
              Explore the estate, level by level <span aria-hidden="true" className="text-xl text-survey">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" aria-labelledby="method-h" className="pad-x mx-auto max-w-site py-[clamp(64px,9vw,136px)]">
        <SectionLabel n="02" name="METHOD" />
        <div className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
          <h2 id="method-h" className="m-0 max-w-[980px] flex-[1_1_620px] font-display text-[clamp(38px,5.4vw,84px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]" style={{ fontStretch: "118%" }}>
            From dirt to keys.<br /><span className="text-steel-2">One name on all of it.</span>
          </h2>
          <p className="m-0 max-w-[360px] text-base leading-relaxed text-steel">We act as developer and builder at once. Nothing gets handed off, so nothing gets lost between the drawings and the house.</p>
        </div>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] p-0">
          {METHOD.map((m, i) => (
            <li key={m.n} className={`flex flex-col gap-[18px] pb-10 pr-7 pt-7 ${i === 0 ? "border-t-2 border-survey" : "border-t border-rule-3"}`} style={i === 0 ? { borderColor: "var(--accent)" } : undefined}>
              <span className={`${mono} text-[13px] ${i === 0 ? "text-survey" : "text-steel"}`}>{m.n}</span>
              <h3 className="m-0 font-display font-wide-sm text-[26px] font-bold">{m.h}</h3>
              <p className="m-0 text-base leading-relaxed text-fog-2">{m.p}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* INDEX */}
      <section id="work" aria-labelledby="work-h" className="pad-x mx-auto max-w-site pb-[clamp(64px,9vw,136px)]">
        <SectionLabel n="03" name="INDEX OF WORKS" />
        <div className="flex items-baseline justify-between gap-4 border-b border-rule-3 pb-5">
          <h2 id="work-h" className="m-0 font-display text-[clamp(38px,5.4vw,84px)] font-extrabold uppercase tracking-[-0.02em]" style={{ fontStretch: "118%" }}>Index</h2>
          <span className={`${mono} text-xs tracking-[0.14em] text-steel`}>EAST END · LONG ISLAND</span>
        </div>
        <IndexRow to={P.path} n="01 — 2026" name={P.address} place="Sagaponack" scale="11,754 SF · 8 SUITES" status="IN CONTRACT" active />
        <IndexRow to="#press" n="02 — [YEAR]" name="The Urban Barn" place="East Hampton" scale="±7,500 SF · 7 BEDROOMS" status="COMPLETED · IN PRINT" />
        <IndexRow to="#inquire" n="03 — NEXT" name="Your parcel" place="East End" scale="TO BE DRAWN" status="INQUIRE →" muted />
      </section>

      {/* PRESS */}
      <section id="press" aria-labelledby="press-h" className="pad-x mx-auto max-w-site pb-[clamp(64px,9vw,136px)]">
        <h2 id="press-h" className="m-0"><SectionLabel n="04" name="IN PRINT" /></h2>
        <a href="https://27east.com/home-garden/laura-klein-defines-simple-living-2293957" target="_blank" rel="noopener noreferrer" className="flex flex-wrap items-end gap-x-[clamp(32px,5vw,80px)] gap-y-7 border border-rule-2 bg-ink-800 p-[clamp(28px,4vw,48px)] no-underline">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[18px]">
            <span className={`${mono} text-xs tracking-[0.14em] text-survey`}>27EAST · HOME &amp; GARDEN</span>
            <span className="font-display font-wide-md text-[clamp(30px,3.6vw,54px)] font-extrabold leading-none tracking-[-0.02em]">Laura Klein Defines Simple Living</span>
            <span className="max-w-[640px] text-[17px] leading-relaxed text-fog">A seven-bedroom East Hampton “urban barn” built by James Ciamillo of Intensive Precision, finished in high-quality materials and wired as a smart home run entirely from a phone.</span>
          </div>
          <span className={`${mono} inline-flex min-h-[48px] items-center gap-2.5 text-[13px] tracking-[0.12em] text-bone`}>READ THE FEATURE <span aria-hidden="true" className="text-survey">↗</span></span>
        </a>
      </section>

      {/* MANIFESTO */}
      <section aria-label="Statement" className="bg-survey text-ink">
        <div className="pad-x mx-auto flex max-w-site flex-col gap-8 py-[clamp(64px,10vw,160px)]">
          <p className={`${mono} m-0 text-xs tracking-[0.16em]`}>THE NAME ON THE HOUSE</p>
          <p className="m-0 max-w-[1200px] font-display text-[clamp(34px,5.6vw,92px)] font-extrabold leading-[0.98] tracking-[-0.025em]" style={{ fontStretch: "115%" }}>
            A house carries its builder&apos;s name long after the sign comes down. Ours says Ciamillo.
          </p>
        </div>
      </section>

      {/* INQUIRE */}
      <section id="inquire" aria-labelledby="inq-h" className="pad-x mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(40px,6vw,96px)] py-[clamp(64px,9vw,136px)]">
        <div className="flex flex-col gap-7">
          <SectionLabel n="05" name="INQUIRE" className="" />
          <h2 id="inq-h" className="m-0 font-display font-wide text-[clamp(56px,8vw,128px)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]">Inquire<span className="text-survey">.</span></h2>
          <p className="m-0 max-w-[420px] text-lg leading-relaxed text-fog">Buying a finished Ciamillo home, building on land you own, or selling a parcel with potential: tell us where you stand and we will answer personally.</p>
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-7 gap-y-3.5 text-base">
            <dt className={`${label} pt-[3px]`}>OFFICE</dt><dd className="m-0">[OFFICE ADDRESS], Long Island, NY</dd>
            <dt className={`${label} pt-[3px]`}>PHONE</dt><dd className="m-0">[PHONE]</dd>
            <dt className={`${label} pt-[3px]`}>EMAIL</dt><dd className="m-0">[EMAIL]</dd>
          </dl>
        </div>

        {!sent ? (
          <form aria-label="Inquiry form" className="flex flex-col gap-[22px]" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
              <legend className={`${label} mb-3 p-0`}>I AM INTERESTED IN</legend>
              <div className="flex flex-wrap gap-2.5">
                {INTERESTS.map((o) => {
                  const on = interest === o.id;
                  return (
                    <button key={o.id} type="button" aria-pressed={on} onClick={() => setInterest(o.id)}
                      className={`min-h-[44px] cursor-pointer border px-[18px] font-sans text-[15px] transition-colors ${on ? "border-transparent bg-survey text-ink" : "border-rule-3 bg-transparent text-bone hover:border-bone"}`}>
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[22px]">
              <label className={`${label} flex flex-col gap-2`}>NAME<input className={field} type="text" name="name" autoComplete="name" required /></label>
              <label className={`${label} flex flex-col gap-2`}>EMAIL<input className={field} type="email" name="email" autoComplete="email" required /></label>
            </div>
            <label className={`${label} flex flex-col gap-2`}>PHONE<input className={field} type="tel" name="phone" autoComplete="tel" /></label>
            <label className={`${label} flex flex-col gap-2`}>TELL US ABOUT THE SITE OR THE HOUSE<textarea className={`${field} resize-y py-3.5`} rows={5} name="message" /></label>
            <input type="hidden" name="interest" value={interest} />
            <button type="submit" className={`${mono} min-h-[56px] cursor-pointer self-start border-0 bg-survey px-8 text-[13px] font-medium uppercase tracking-[0.12em] text-ink hover:brightness-110`}>Send inquiry →</button>
          </form>
        ) : (
          <div role="status" className="flex flex-col justify-center gap-5 border p-12" style={{ borderColor: "var(--accent)" }}>
            <span className={`${mono} text-xs tracking-[0.14em] text-survey`}>RECEIVED</span>
            <p className="m-0 font-display font-wide-md text-[34px] font-bold leading-tight">Thank you. James Ciamillo will be in touch directly.</p>
            <button type="button" onClick={() => setSent(false)} className={`${mono} min-h-[44px] cursor-pointer self-start border border-rule-3 bg-transparent px-[18px] text-xs tracking-[0.12em] text-bone`}>SEND ANOTHER</button>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function IndexRow({ to, n, name, place, scale, status, active, muted }: { to: string; n: string; name: string; place: string; scale: string; status: string; active?: boolean; muted?: boolean }) {
  const cls = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] items-center gap-x-6 gap-y-3 border-b border-rule px-3 py-7 no-underline transition-colors hover:bg-ink-600";
  const body = (
    <>
      <span className={`font-mono text-[13px] ${active ? "text-survey" : "text-steel"}`}>{n}</span>
      <span className={`font-display font-wide-sm text-[clamp(22px,2.2vw,30px)] font-bold ${muted ? "text-steel-2" : ""}`}>{name}</span>
      <span className={`text-base ${muted ? "text-steel-2" : "text-fog-2"}`}>{place}</span>
      <span className={`font-mono text-[13px] ${muted ? "text-steel-2" : "text-fog-2"}`}>{scale}</span>
      <span className={`justify-self-start font-mono text-xs tracking-[0.1em] ${active ? "border border-bone px-2.5 py-1.5 text-bone" : muted ? "text-survey" : "border border-rule-3 px-2.5 py-1.5 text-steel"}`}>{status}</span>
    </>
  );
  return to.startsWith("/") ? <Link to={to} className={cls}>{body}</Link> : <a href={to} className={cls}>{body}</a>;
}
