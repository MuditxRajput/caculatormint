import { siteConfig } from "@/lib/site";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
<<<<<<< HEAD
  sm: 26,
  md: 32,
  lg: 38,
};

/** Minimalist Precision Brand Mark with Mint Accent */
=======
  sm: 28,
  md: 34,
  lg: 42,
};

/** Shared CalculatorMint brand mark — orange & white themed calculator screen + keys */
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
export function BrandMark({
  size = 32,
}: {
  size?: number;
}) {
  return (
    <svg
      className="inline-block shrink-0"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
<<<<<<< HEAD
      <rect width="48" height="48" rx="11" fill="#0F172A" />
      {/* Mint top display screen */}
      <rect x="12" y="11" width="24" height="8" rx="2.5" fill="#10B981" />
      {/* White Keypads */}
      <rect x="12" y="22" width="10.5" height="15" rx="2.5" fill="#FFFFFF" />
      <rect x="25.5" y="22" width="10.5" height="6.5" rx="2" fill="#FFFFFF" />
      {/* Mint accent execution key */}
      <rect x="25.5" y="30.5" width="10.5" height="6.5" rx="2" fill="#34D399" />
=======
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
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
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
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`.trim()}>
      <BrandMark size={px} />
      {showWordmark ? (
        <span className="font-extrabold tracking-tight text-slate-900 flex items-center text-sm sm:text-base font-display">
          <span>Calculator</span>
          <span className="text-emerald-600 font-black ml-0.5">Mint</span>
        </span>
      ) : null}
    </span>
  );
}
