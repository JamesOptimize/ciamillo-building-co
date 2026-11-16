import type { CSSProperties } from "react";

type MarkProps = {
  size?: number | string;
  color?: string;
  /** Tick color. Pass null to drop the ticks (use below 24px). */
  tick?: string | null;
  strokeWidth?: number;
  title?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * The Ciamillo mark: one continuous line — grade, wall, 12:12 gable — with the
 * right wall left open so the house reads as a "C". Two Survey Orange ticks
 * measure the opening.
 */
export function Mark({ size = 30, color = "currentColor", tick = "var(--accent)", strokeWidth = 4, title, className, style }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      style={{ display: "block", flex: "none", ...style }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M40 44 H8 V22 L24 6 L40 22" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="miter" strokeLinecap="butt" />
      {tick && <path d="M36.5 47.5 L43.5 40.5 M36.5 25.5 L43.5 18.5" stroke={tick} strokeWidth={2} />}
    </svg>
  );
}

/** Primary horizontal lockup used in navigation. */
export function Lockup({ markSize = 30, word = 17, sub = 9, subline = "INTENSIVE PRECISION" }: { markSize?: number; word?: number; sub?: number; subline?: string }) {
  return (
    <span className="flex items-center gap-[14px] text-bone">
      <Mark size={markSize} color="#EDEBE6" />
      <span aria-hidden="true" className="w-px bg-rule-4" style={{ height: markSize }} />
      <span className="flex min-w-0 flex-col gap-[5px]">
        <span className="whitespace-nowrap font-display font-wide font-bold leading-none tracking-[0.26em]" style={{ fontSize: word }}>CIAMILLO</span>
        <span className="whitespace-nowrap font-mono leading-none tracking-[0.34em] text-steel" style={{ fontSize: sub }}>{subline}</span>
      </span>
    </span>
  );
}
