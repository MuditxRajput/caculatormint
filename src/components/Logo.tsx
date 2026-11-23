import { siteConfig } from "@/lib/site";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: 26,
  md: 32,
  lg: 38,
};

/** Minimalist Precision Brand Mark with Mint Accent */
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
      <rect width="48" height="48" rx="11" fill="#0F172A" />
      {/* Mint top display screen */}
      <rect x="12" y="11" width="24" height="8" rx="2.5" fill="#10B981" />
      {/* White Keypads */}
      <rect x="12" y="22" width="10.5" height="15" rx="2.5" fill="#FFFFFF" />
      <rect x="25.5" y="22" width="10.5" height="6.5" rx="2" fill="#FFFFFF" />
      {/* Mint accent execution key */}
      <rect x="25.5" y="30.5" width="10.5" height="6.5" rx="2" fill="#34D399" />
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
