import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Lockup, Mark } from "./Logo";

/** Internal route (starts with "/") → router Link; anything else → <a>. */
export function SmartLink({ to, className, children, external, ariaLabel }: { to: string; className?: string; children: ReactNode; external?: boolean; ariaLabel?: string }) {
  if (to.startsWith("/") && !external) return <Link to={to} className={className} aria-label={ariaLabel}>{children}</Link>;
  return (
    <a href={to} className={className} aria-label={ariaLabel} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

export type NavItem = { n: string; label: string; to: string };

export function Header({ homeTo, items, cta }: { homeTo: string; items: NavItem[]; cta: { label: string; to: string } }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-20 border-b border-rule-soft bg-ink/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="pad-x mx-auto flex min-h-[76px] max-w-site items-center justify-between gap-x-8 py-2.5">
        <SmartLink to={homeTo} className="flex min-h-[48px] items-center no-underline" ariaLabel="Ciamillo Building Co. — home">
          <Lockup />
        </SmartLink>
        <nav aria-label="Primary" className="hidden flex-wrap items-center gap-x-[clamp(16px,2.6vw,36px)] font-mono text-xs uppercase tracking-[0.14em] lg:flex">
          {items.map((it) => (
            <SmartLink key={it.label} to={it.to} className="inline-flex items-baseline gap-2 py-3.5 no-underline">
              <span className="text-[10px] text-steel-2">{it.n}</span>
              {it.label}
            </SmartLink>
          ))}
        </nav>
        <SmartLink to={cta.to} className="hidden min-h-[46px] items-center gap-3 bg-survey px-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink no-underline hover:text-ink hover:brightness-110 lg:inline-flex">
          {cta.label} <span aria-hidden="true">→</span>
        </SmartLink>
        <button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}
          className="inline-flex min-h-[46px] cursor-pointer items-center gap-3 border border-rule-3 bg-transparent px-4 font-mono text-xs uppercase tracking-[0.14em] text-bone lg:hidden">
          <span aria-hidden="true" className="flex w-4 flex-col gap-[5px]">
            <span className={`h-px bg-bone transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px bg-bone transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="pad-x border-t border-rule-soft pb-6 lg:hidden">
          <ul className="m-0 list-none p-0" onClick={close}>
            {items.map((it) => (
              <li key={it.label} className="border-b border-rule">
                <SmartLink to={it.to} className="flex min-h-[60px] items-center gap-4 font-display font-wide text-xl font-bold uppercase no-underline">
                  <span className="font-mono text-[11px] font-normal text-survey">{it.n}</span>{it.label}
                </SmartLink>
              </li>
            ))}
          </ul>
          <div onClick={close}>
            <SmartLink to={cta.to} className="mt-5 flex min-h-[56px] items-center justify-between bg-survey px-5 font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-ink no-underline hover:text-ink">
              {cta.label} <span aria-hidden="true">→</span>
            </SmartLink>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionLabel({ n, name, tone = "dark", className = "mb-[clamp(28px,3vw,44px)]", as: As = "div" }: { n: string; name: string; tone?: "dark" | "light"; className?: string; as?: "div" | "h2" }) {
  const dark = tone === "dark";
  return (
    <As className={`flex items-center gap-4 font-mono text-xs font-normal tracking-[0.16em] ${dark ? "text-steel" : "text-slate"} ${className}`}>
      <span className={dark ? "text-survey" : "text-survey-dark"}>§ {n}</span>
      <span aria-hidden="true" className={`h-px flex-1 ${dark ? "bg-rule-2" : "bg-bone-3"}`} />
      <span>{name}</span>
    </As>
  );
}

export function SiteFooter() {
  return (
    <footer className="cq overflow-hidden border-t border-rule">
      <div aria-hidden="true" className="flex items-center justify-center" style={{ gap: "3cqi", padding: "5cqi 4cqi 0" }}>
        <Mark size="12cqi" color="#24272B" style={{ width: "12cqi", height: "12cqi" }} />
        <span className="whitespace-nowrap font-display font-wide font-black leading-[0.8] tracking-[-0.03em] text-[#1E2023]" style={{ fontSize: "12.5cqi" }}>CIAMILLO</span>
      </div>
      <div className="pad-x mx-auto flex max-w-site flex-wrap justify-between gap-4 pb-10 pt-7 font-mono text-[11px] tracking-[0.1em] text-steel">
        <span>CIAMILLO BUILDING COMPANY IS A TRADE NAME OF INTENSIVE PRECISION, INC.</span>
        <span className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/brand" className="no-underline">BRAND STANDARDS</Link>
          <span>LONG ISLAND, NEW YORK · © {new Date().getFullYear()}</span>
        </span>
      </div>
    </footer>
  );
}
