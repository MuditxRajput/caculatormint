import { siteConfig } from "@/lib/site";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: 28,
  md: 34,
  lg: 40,
};

/** Shared CalculatorMint brand mark — calculator screen + keys */
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
          x1="6"
          y1="4"
          x2="42"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2DD4BF" />
          <stop offset="1" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
      <rect x="11" y="10" width="26" height="9" rx="2.5" fill="white" fillOpacity="0.95" />
      <rect x="11" y="23" width="7" height="6" rx="1.6" fill="white" fillOpacity="0.92" />
      <rect x="20.5" y="23" width="7" height="6" rx="1.6" fill="white" fillOpacity="0.92" />
      <rect x="30" y="23" width="7" height="6" rx="1.6" fill="white" fillOpacity="0.92" />
      <rect x="11" y="32" width="7" height="6" rx="1.6" fill="white" fillOpacity="0.92" />
      <rect x="20.5" y="32" width="7" height="6" rx="1.6" fill="white" fillOpacity="0.92" />
      <rect x="30" y="32" width="7" height="6" rx="1.6" fill="#99F6E4" />
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
