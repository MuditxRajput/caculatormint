import { siteConfig } from "@/lib/site";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: 28,
  md: 34,
  lg: 42,
};

/** Shared CalculatorMint brand mark — orange & white themed calculator screen + keys */
export function BrandMark({
  size = 34,
  gradientId = "cm-mark-bg",
}: {
  size?: number;
  gradientId?: string;
}) {
  return (
    <svg
      className="brand__mark-svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          y1="4"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fb923c" />
          <stop offset="0.5" stopColor="#f97316" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
        <filter id="mark-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#ea580c" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
      {/* Screen */}
      <rect x="10" y="10" width="28" height="10" rx="3" fill="white" fillOpacity="0.96" />
      {/* Dot accent on screen */}
      <circle cx="34" cy="15" r="1.5" fill="#ea580c" />
      {/* Keypad rows */}
      <rect x="10" y="24" width="7.5" height="6" rx="2" fill="white" fillOpacity="0.94" />
      <rect x="20.25" y="24" width="7.5" height="6" rx="2" fill="white" fillOpacity="0.94" />
      <rect x="30.5" y="24" width="7.5" height="6" rx="2" fill="white" fillOpacity="0.94" />
      <rect x="10" y="33" width="7.5" height="6" rx="2" fill="white" fillOpacity="0.94" />
      <rect x="20.25" y="33" width="7.5" height="6" rx="2" fill="white" fillOpacity="0.94" />
      {/* Accent compute key */}
      <rect x="30.5" y="33" width="7.5" height="6" rx="2" fill="#ffedd5" />
      <path d="M33 36H35.5" stroke="#ea580c" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  showWordmark = true,
  size = "md",
  className = "",
}: LogoProps) {
  const px = sizes[size];

  return (
    <span className={`brand ${className}`.trim()}>
      <BrandMark size={px} gradientId={`cm-mark-bg-${size}`} />
      {showWordmark ? (
        <span className="brand__wordmark" aria-label={siteConfig.name}>
          <span className="brand__wordmark-main">Calculator</span>
          <span className="brand__wordmark-accent">Mint</span>
        </span>
      ) : null}
    </span>
  );
}
