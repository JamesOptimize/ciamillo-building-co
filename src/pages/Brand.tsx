import type { ReactNode } from "react";
import { Header, SectionLabel, SiteFooter } from "@/components/Chrome";
import { Mark } from "@/components/Logo";

const mono = "font-mono";

const COLORS = [
  { name: "Ink", hex: "#0E0F11", note: "GROUND · 70%", bg: "#0E0F11", fg: "#EDEBE6", sub: "#9A9EA3" },
  { name: "Bone", hex: "#EDEBE6", note: "CEDAR-SHINGLE WHITE · 20%", bg: "#EDEBE6", fg: "#0E0F11", sub: "#4A4E54" },
  { name: "Survey Orange", hex: "#FF5A1F", note: "SIGNAL ONLY · ≤5% · ON BONE USE #A8360A", bg: "#FF5A1F", fg: "#0E0F11", sub: "#0E0F11" },
  { name: "Graphite", hex: "#24272B", note: "RULES · FRAMES", bg: "#24272B", fg: "#EDEBE6", sub: "#C9CBCE" },
  { name: "Steel", hex: "#9A9EA3", note: "LABELS ON INK", bg: "#9A9EA3", fg: "#0E0F11", sub: "#0E0F11" },
];

export default function Brand() {
  return (
    <div className="overflow-x-hidden bg-ink text-bone">
      <Header homeTo="/" items={[{ n: "01", label: "Mark", to: "#mark" }, { n: "02", label: "Lockups", to: "#lockups" }, { n: "03", label: "Color", to: "#color" }, { n: "04", label: "Type", to: "#type" }]} cta={{ label: "Back to site", to: "/" }} />

      <section id="mark" aria-labelledby="b-h" className="pad-x mx-auto flex max-w-site flex-wrap items-center gap-[clamp(40px,6vw,96px)] py-[clamp(56px,8vw,120px)]">
        <div className="blueprint-sm flex min-w-0 flex-[1_1_360px] justify-center border border-rule-2 p-[clamp(32px,5vw,72px)]">
          <svg viewBox="-6 -6 60 60" role="img" aria-label="Construction drawing of the Ciamillo mark: a house outline with its right wall left open to form a C, roof at a true 12:12 pitch" className="block h-auto w-full max-w-[440px]">
            <g stroke="#33373C" strokeWidth={0.25} fill="none">
              <path d="M8 -6 V54 M40 -6 V54 M24 -6 V54 M-6 22 H54 M-6 44 H54 M-6 6 H54" />
              <path d="M-6 36 L36 -6 M12 -6 L54 36" strokeDasharray="1 1" />
            </g>
            <path d="M40 44 H8 V22 L24 6 L40 22" fill="none" stroke="#EDEBE6" strokeWidth={4} />
            <path d="M36.5 47.5 L43.5 40.5 M36.5 25.5 L43.5 18.5" stroke="var(--accent)" strokeWidth={2} />
            <g fontFamily="JetBrains Mono, monospace" fontSize={1.7} letterSpacing={0.2} fill="#9A9EA3">
              <text x="25.5" y="3">RIDGE</text><text x="-5.5" y="20.8">EAVE</text><text x="-5.5" y="42.8">SILL</text>
              <text x="44.5" y="33.6" fill="var(--accent)">OPEN</text><text x="9" y="15">12:12</text>
            </g>
          </svg>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <SectionLabel n="01" name="THE MARK" className="" />
          <h1 id="b-h" className="m-0 font-display font-wide text-[clamp(44px,6vw,96px)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em]">A house,<br /><span className="text-outline-thin">left open.</span></h1>
          <p className="m-0 max-w-[520px] text-lg leading-relaxed text-fog">The mark is a single continuous line: grade, wall, and a true 12:12 gable. The right wall is never drawn, so the house reads as a C. Two orange dimension ticks measure the opening. That open side is where every client comes in.</p>
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-7 gap-y-3 border-t border-rule-2 pt-5 text-[15px]">
            {[["GRID", "48 units square; stroke 4 units, mitred corners, butt ends"], ["PITCH", "45°, the classic 12:12 East End gable"], ["TICKS", "Survey Orange only; never removed above 24 px, never recolored to match the line"]].map(([k, v]) => (
              <div key={k} className="contents"><dt className={`${mono} pt-[3px] text-[11px] tracking-[0.14em] text-steel`}>{k}</dt><dd className="m-0">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section id="lockups" aria-labelledby="lk-h" className="pad-x mx-auto max-w-site pb-[clamp(64px,9vw,120px)]">
        <h2 id="lk-h" className="m-0"><SectionLabel n="02" name="LOCKUPS" className="mb-8" /></h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-4">
          <Tile caption="PRIMARY · HORIZONTAL · ON INK" bg="#0E0F11">
            <div className="flex items-center gap-5">
              <Mark size={56} color="#EDEBE6" />
              <span aria-hidden="true" className="h-14 w-px bg-rule-4" />
              <span className="flex flex-col gap-[9px]"><span className="font-display font-wide text-[32px] font-bold leading-none tracking-[0.26em]">CIAMILLO</span><span className={`${mono} text-[11px] leading-none tracking-[0.34em] text-steel`}>INTENSIVE PRECISION</span></span>
            </div>
          </Tile>
          <Tile caption="STACKED · SIGNAGE, SITE BOARDS · ON BONE" bg="#EDEBE6">
            <div className="flex flex-col items-center gap-[18px] text-ink">
              <Mark size={64} color="#0E0F11" tick="#E2470F" />
              <span className="pl-[0.26em] font-display font-wide text-[28px] font-bold leading-none tracking-[0.26em]">CIAMILLO</span>
              <span className={`${mono} pl-[0.34em] text-[10px] leading-none tracking-[0.34em] text-slate`}>BUILDING COMPANY</span>
            </div>
          </Tile>
          <Tile caption="MARK ONLY · ONE-COLOR · BELOW 24 PX DROP TICKS, THICKEN TO 5" bg="var(--accent)">
            <div className="flex items-center gap-7">
              <Mark size={96} color="#0E0F11" tick="#0E0F11" />
              <Mark size={48} color="#0E0F11" tick="#0E0F11" />
              <Mark size={20} color="#0E0F11" tick={null} strokeWidth={5} />
            </div>
          </Tile>
        </div>
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
          {[["CLEAR SPACE", "Keep one gable height (16 units) of empty space on every side of the mark."], ["MINIMUM SIZE", "Mark 16 px on screen, 6 mm in print. Horizontal lockup 120 px wide."], ["NEVER", "Close the right wall, round the corners, add a chimney, or set the wordmark in any other face."]].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-2.5 border border-rule-2 p-6"><span className={`${mono} text-[11px] tracking-[0.14em] text-survey`}>{k}</span><span className="text-[15px] leading-relaxed text-fog">{v}</span></div>
          ))}
        </div>
      </section>

      <section id="color" aria-labelledby="c-h" className="pad-x mx-auto max-w-site pb-[clamp(64px,9vw,120px)]">
        <h2 id="c-h" className="m-0"><SectionLabel n="03" name="COLOR" className="mb-8" /></h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] border border-rule-2">
          {COLORS.map((c) => (
            <div key={c.name} className="flex min-h-[240px] flex-col justify-between p-[22px]" style={{ background: c.bg, color: c.fg }}>
              <span className="font-display font-wide-md text-[22px] font-bold">{c.name}</span>
              <span className={`${mono} text-xs leading-[1.7]`} style={{ color: c.sub }}>{c.hex}<br />{c.note}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="type" aria-labelledby="t-h" className="pad-x mx-auto max-w-site pb-[clamp(64px,9vw,120px)]">
        <h2 id="t-h" className="m-0"><SectionLabel n="04" name="TYPE" className="mb-8" /></h2>
        <div className="flex flex-col border-t border-rule-2">
          <TypeRow k={"DISPLAY\nARCHIVO · 125% WIDTH · 800"}><span className="font-display font-wide text-[clamp(40px,5vw,72px)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]">Solid, then <span className="text-outline-thin">outlined.</span></span></TypeRow>
          <TypeRow k={"TEXT\nINTER TIGHT · 400 / 600"}><span className="text-xl leading-relaxed text-fog">Body copy is plain and short. Say what the house is, where it is, and what it holds. Let the numbers carry the weight.</span></TypeRow>
          <TypeRow k={"MEASURE\nJETBRAINS MONO · CAPS"}><span className={`${mono} text-[15px] tracking-[0.16em]`}>§ 01 — 11,754 SQ FT · 2.09 AC · N 40.9568° W 72.2723°</span></TypeRow>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Tile({ caption, bg, children }: { caption: string; bg: string; children: ReactNode }) {
  return (
    <figure className="m-0 flex flex-col border border-rule-2">
      <div className="flex min-h-[260px] items-center justify-center p-10" style={{ background: bg }}>{children}</div>
      <figcaption className="border-t border-rule-2 px-[18px] py-3.5 font-mono text-[11px] tracking-[0.12em] text-steel">{caption}</figcaption>
    </figure>
  );
}

function TypeRow({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3 border-b border-rule-2 py-7">
      <span className="flex-[0_0_220px] whitespace-pre-line font-mono text-[11px] leading-[1.7] tracking-[0.14em] text-steel">{k}</span>
      <span className="min-w-0 flex-[1_1_400px]">{children}</span>
    </div>
  );
}
