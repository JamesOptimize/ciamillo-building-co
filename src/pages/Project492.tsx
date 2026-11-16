import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, SectionLabel, SiteFooter } from "@/components/Chrome";
import { SitePlan } from "@/components/Drawings";
import { PROJECT_492 as P, type LevelKey } from "@/data/project492";
import aerial from "@/assets/492-aerial.webp";

const mono = "font-mono";

const FACTS = [
  ["SQ FT", P.sqft],
  ["ACRES", P.acres],
  ["EN-SUITE BEDROOMS", String(P.bedrooms)],
  ["FULL + HALF BATHS", `${P.baths.full}+${P.baths.half}`],
  ["HEATED GUNITE POOL", "20×45′"],
  ["COMPLETION", P.completion],
] as const;

const PINS = [
  { k: "A", label: "RESIDENCE", left: "39%", top: "62%" },
  { k: "B", label: "GUNITE POOL + SPA", left: "47%", top: "35%" },
  { k: "C", label: "POOL HOUSE + SAUNA", left: "32%", top: "28%" },
  { k: "D", label: "FULL-SIZE TENNIS", left: "71%", top: "37%" },
  { k: "E", label: "MOTOR COURT", left: "19%", top: "86%" },
];

const LEVEL_BUTTONS: { key: LevelKey; name: string; tag: string; h: string; dashed?: boolean }[] = [
  { key: "upper", name: "UPPER LEVEL", tag: "SUITES", h: "min-h-[92px]" },
  { key: "main", name: "MAIN LEVEL", tag: "LIVING", h: "min-h-[112px]" },
  { key: "lower", name: "LOWER LEVEL", tag: "WELLNESS", h: "min-h-[92px]", dashed: true },
  { key: "grounds", name: "THE GROUNDS", tag: `${P.acres} AC`, h: "min-h-[64px] mt-[18px]" },
];

export default function Project492() {
  const [level, setLevel] = useState<LevelKey>("main");
  const lv = P.levels[level];

  return (
    <div className="overflow-x-hidden bg-ink text-bone">
      <Header
        homeTo="/"
        items={[
          { n: "01", label: "Levels", to: "#levels" },
          { n: "02", label: "Site", to: "#site" },
          { n: "03", label: "Plans → Built", to: "#evolution" },
        ]}
        cta={{ label: "Representation", to: "#contact" }}
      />

      {/* HERO */}
      <section aria-labelledby="p-h" className="pad-x mx-auto max-w-site pb-[clamp(40px,5vw,72px)] pt-[clamp(48px,7vw,104px)]">
        <div className={`${mono} flex flex-wrap justify-between gap-x-6 gap-y-3 border-b border-rule pb-[18px] text-xs tracking-[0.14em] text-steel`}>
          <span>PROJECT 01 · {P.locality.toUpperCase()}</span>
          <span>N {P.coords.lat}° · W {Math.abs(P.coords.lng)}°</span>
          <span className="text-survey">● IN CONTRACT</span>
        </div>
        <h1 id="p-h" className="m-0 mt-[clamp(28px,4vw,56px)] flex flex-wrap items-end gap-x-[clamp(32px,4vw,64px)] gap-y-6">
          <span className="cq block min-w-0 flex-[1.2_1_420px]">
            <span className="block whitespace-nowrap font-display font-wide font-black leading-[0.78] tracking-[-0.06em]" style={{ fontSize: "min(44cqi, 400px)" }}>492</span>
          </span>
          <span className="cq flex min-w-0 flex-[1_1_340px] flex-col gap-[18px] pb-3">
            <span className="whitespace-nowrap font-display font-extrabold uppercase leading-[0.92] tracking-[-0.02em]" style={{ fontSize: "min(11.5cqi, 72px)", fontStretch: "118%" }}>
              <span className="block">Wainscott</span>
              <span className="text-outline-thin block">Harbor Road</span>
            </span>
            <span className="max-w-[460px] font-sans text-lg font-normal leading-relaxed text-fog">
              Over 11,750 square feet on {P.acres} private acres, set back on a flag lot in one of the most coveted zip codes in the Hamptons. Built for grand entertaining and for ordinary Tuesdays.
            </span>
          </span>
        </h1>
      </section>

      {/* FACTS */}
      <section aria-label="Key facts" className="border-y border-rule">
        <dl className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] px-[clamp(4px,3.5vw,52px)]">
          {FACTS.map(([k, v], i) => (
            <div key={k} className={`cq flex min-w-0 flex-col-reverse gap-2.5 px-5 py-8 ${i < FACTS.length - 1 ? "border-r border-rule" : ""}`}>
              <dt className={`${mono} text-[11px] tracking-[0.14em] text-steel`}>{k}</dt>
              <dd className={`m-0 whitespace-nowrap font-display font-wide-md font-extrabold leading-none tracking-[-0.02em] ${k === "COMPLETION" ? "text-survey" : ""}`} style={{ fontSize: "min(20cqi, 54px)" }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* GALLERY */}
      <section aria-label="Photography" className="pad-x mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 pt-[clamp(40px,5vw,72px)]">
        <figure className="col-span-full m-0 flex flex-col border border-rule-2">
          <div className="relative overflow-hidden bg-ink-800" style={{ aspectRatio: "1616 / 690" }}>
            <img src={aerial} alt="Aerial view of 492 Wainscott Harbor Road showing the residence, gravel motor court, gunite pool with spa, pool house, and full-size tennis court within privet hedges" className="absolute inset-0 block h-full w-full object-cover" />
            <div aria-hidden="true">
              {PINS.map((p) => (
                <span key={p.k} className={`cb-pin ${mono} absolute flex h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-survey text-[13px] font-medium text-ink`} style={{ left: p.left, top: p.top }}>{p.k}</span>
              ))}
            </div>
          </div>
          <figcaption className={`${mono} grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] text-xs tracking-[0.1em] text-fog`}>
            {PINS.map((p, i) => (
              <span key={p.k} className={`px-[18px] py-3.5 ${i < PINS.length - 1 ? "border-r border-rule-2" : ""}`}><span className="text-survey">{p.k}</span> {p.label}</span>
            ))}
          </figcaption>
        </figure>
        {["[GREAT ROOM]", "[CHEF'S KITCHEN]", "[POOL HOUSE & SAUNA]"].map((t) => (
          <div key={t} className="hatch flex min-h-[360px] items-end border border-rule-2 p-6">
            <span className={`${mono} text-xs tracking-[0.12em] text-steel`}>{t}</span>
          </div>
        ))}
      </section>

      {/* LEVELS */}
      <section id="levels" aria-labelledby="lv-h" className="pad-x mx-auto max-w-site py-[clamp(64px,9vw,136px)]">
        <SectionLabel n="01" name="IN SECTION" />
        <div className="mb-[clamp(36px,4vw,56px)] flex flex-wrap items-end justify-between gap-6">
          <h2 id="lv-h" className="m-0 font-display text-[clamp(38px,5.4vw,84px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]" style={{ fontStretch: "118%" }}>Read it<br />in section.</h2>
          <p className="m-0 max-w-[360px] text-base leading-relaxed text-steel">Select a level of the cut to see what it holds — from the bedroom suites down to the wellness level, then out to the grounds.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(32px,5vw,80px)]">
          <div role="group" aria-label="Choose a level" className="blueprint-sm flex flex-col gap-1.5 border border-rule-2 p-7">
            <svg viewBox="0 0 400 70" aria-hidden="true" className="block h-auto w-full">
              <path d="M10 68 L80 6 L320 6 L390 68" fill="none" stroke="#EDEBE6" strokeWidth={1.2} />
              <path d="M60 68 L60 40 M340 68 L340 40" stroke="#6B7076" strokeWidth={1} />
            </svg>
            {LEVEL_BUTTONS.map((b) => {
              const on = level === b.key;
              return (
                <div key={b.key} className="contents">
                  {b.key === "lower" && (
                    <div aria-hidden="true" className={`${mono} -mx-7 my-1 flex items-center gap-2.5 text-[10px] tracking-[0.16em] text-survey`}>
                      <span className="h-0.5 flex-1 bg-bone" /><span>GRADE</span><span className="h-0.5 w-7 bg-bone" />
                    </div>
                  )}
                  <button type="button" aria-pressed={on} onClick={() => setLevel(b.key)}
                    className={`${b.h} ${mono} flex cursor-pointer items-center justify-between px-[22px] text-left text-[13px] tracking-[0.14em] transition-[background,color,filter] hover:brightness-110 ${b.dashed ? "border border-dashed" : "border"} ${on ? "border-transparent bg-survey text-ink" : "border-rule-3 bg-ink/70 text-bone"}`}>
                    <span>{b.name}</span><span>{b.tag}</span>
                  </button>
                </div>
              );
            })}
          </div>
          <div aria-live="polite" className="flex flex-col gap-6 pt-2">
            <span className={`${mono} text-xs tracking-[0.14em] text-survey`}>{lv.code}</span>
            <h3 className="m-0 font-display text-[clamp(40px,4.6vw,68px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]" style={{ fontStretch: "118%" }}>{lv.title}</h3>
            <p className="m-0 max-w-[520px] text-lg leading-relaxed text-fog">{lv.lede}</p>
            <ul className="m-0 mt-2 list-none border-t border-rule-3 p-0">
              {lv.items.map((t, i) => (
                <li key={t} className="flex items-baseline gap-5 border-b border-rule py-4 text-[17px]">
                  <span className={`${mono} min-w-[28px] text-xs text-steel`}>{String(i + 1).padStart(2, "0")}</span><span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SITE */}
      <section id="site" aria-labelledby="site-h" className="bg-bone text-ink">
        <div className="pad-x mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(32px,5vw,80px)] py-[clamp(64px,9vw,136px)]">
          <div className="flex flex-col gap-6">
            <SectionLabel n="02" name="THE SITE" tone="light" className="" />
            <h2 id="site-h" className="m-0 font-display text-[clamp(38px,5vw,76px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]" style={{ fontStretch: "118%" }}>Off the road.<br />Out of sight.</h2>
            <p className="m-0 max-w-[480px] text-lg leading-relaxed text-slate-2">A flag lot puts a private drive between the street and the house. Inside a continuous privet wall, the residence, pool court and tennis lawn each get their own room.</p>
            <ol className="m-0 list-none border-t-2 border-ink p-0 text-base">
              {["Residence · three levels", "Heated gunite pool and spa", "Pool house and sauna", "Full-size tennis court", "Private drive and motor court"].map((t, i) => (
                <li key={t} className="flex gap-[18px] border-b border-bone-3 py-3.5"><span className={`${mono} min-w-[22px] font-medium`}>{"ABCDE"[i]}</span>{t}</li>
              ))}
            </ol>
          </div>
          <figure className="m-0 flex flex-col gap-3">
            <SitePlan />
            <figcaption className={`${mono} text-[11px] tracking-[0.1em] text-slate`}>SCHEMATIC, KEYED TO THE AERIAL ABOVE · NOT A SURVEY · NOT TO SCALE</figcaption>
          </figure>
        </div>
      </section>

      {/* EVOLUTION */}
      <section id="evolution" aria-labelledby="ev-h" className="pad-x mx-auto max-w-site py-[clamp(64px,9vw,136px)]">
        <SectionLabel n="03" name="PLANS → BUILT" />
        <h2 id="ev-h" className="m-0 mb-[clamp(36px,4vw,56px)] font-display text-[clamp(38px,5.4vw,84px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]" style={{ fontStretch: "118%" }}>
          The house outgrew<br />its plans<span className="text-survey">.</span>
        </h2>
        <div className="flex flex-wrap border border-rule-2">
          <div className="flex flex-[1_1_320px] flex-col gap-[18px] border-r border-rule-2 p-[clamp(28px,3vw,44px)]">
            <span className={`${mono} text-xs tracking-[0.14em] text-steel`}>APPROVED PLANS · AS MARKETED WITH THE LAND</span>
            <span className="font-display font-wide-md text-[clamp(48px,5vw,80px)] font-extrabold tracking-[-0.03em] text-steel-2">±9,700</span>
            <span className="text-[17px] text-fog-2">sq ft · 7 bedrooms · 3 levels</span>
          </div>
          <div className="flex flex-[0_1_220px] flex-col items-center justify-center gap-2.5 border-r border-rule-2 px-5 py-[clamp(28px,3vw,44px)] text-center">
            <span aria-hidden="true" className="font-display text-[64px] font-extrabold text-survey">→</span>
            <span className={`${mono} text-xs tracking-[0.14em] text-survey`}>+2,000 SQ FT · +1 SUITE</span>
          </div>
          <div className="flex flex-[1_1_320px] flex-col gap-[18px] bg-ink-700 p-[clamp(28px,3vw,44px)]">
            <span className={`${mono} text-xs tracking-[0.14em] text-survey`}>AS BUILT · CIAMILLO</span>
            <span className="font-display font-wide-md text-[clamp(48px,5vw,80px)] font-extrabold tracking-[-0.03em]">{P.sqft}</span>
            <span className="text-[17px] text-fog">sq ft · 8 suites · 8 full + 3 half baths</span>
          </div>
        </div>
      </section>

      {/* REPRESENTATION */}
      <section id="contact" aria-labelledby="ct-h" className="border-t border-rule">
        <div className="pad-x mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-10 py-[clamp(56px,8vw,112px)]">
          <div className="flex flex-col gap-4">
            <SectionLabel n="04" name="EXCLUSIVE REPRESENTATION" className="" />
            <h2 id="ct-h" className="m-0 font-display font-wide-md text-[clamp(32px,3.6vw,52px)] font-extrabold leading-none tracking-[-0.02em]">{P.listing.brokerage}</h2>
            <p className="m-0 text-[17px] leading-relaxed text-fog">{P.listing.agent}<br /><a href={`tel:${P.listing.phone.replace(/\D/g, "")}`} className="no-underline">{P.listing.phone}</a></p>
            <p className={`${mono} m-0 text-xs tracking-[0.12em] text-steel`}>WEB# {P.listing.webId} · MLS# {P.listing.mls} · LISTED {P.listPrice} · IN CONTRACT</p>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <a href={P.listing.url} target="_blank" rel="noopener noreferrer" className={`${mono} inline-flex min-h-[56px] items-center gap-2.5 bg-survey px-[26px] text-[13px] font-medium uppercase tracking-[0.1em] text-ink no-underline hover:text-ink hover:brightness-110`}>View the listing <span aria-hidden="true">↗</span></a>
            <Link to="/#inquire" className={`${mono} inline-flex min-h-[56px] items-center border border-rule-3 px-[26px] text-[13px] uppercase tracking-[0.1em] no-underline`}>Build the next one →</Link>
          </div>
        </div>
        <div className={`pad-x ${mono} mx-auto max-w-site border-t border-rule pb-10 pt-6 text-[11px] tracking-[0.1em] text-steel`}>
          FIGURES FROM PUBLIC LISTING DATA · SUBJECT TO VERIFICATION · BUILT BY CIAMILLO BUILDING COMPANY (INTENSIVE PRECISION, INC.)
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
