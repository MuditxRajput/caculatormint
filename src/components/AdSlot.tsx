"use client";

import { useEffect, useRef } from "react";

type AdFormat = "leaderboard" | "in-article" | "rectangle" | "horizontal" | "sidebar";

interface AdSlotProps {
  format?: AdFormat;
  slotId?: string;
  className?: string;
  label?: string;
}

const CLIENT_ID = "ca-pub-8884977910314227";

export function AdSlot({
  format = "horizontal",
  slotId,
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only execute client-side
    if (typeof window === "undefined" || pushedRef.current) return;
    try {
      // @ts-expect-error - adsbygoogle is loaded externally from script tag in layout
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      // Ignore if AdSense blocked or already initialized
    }
  }, []);

  const formatClasses: Record<AdFormat, string> = {
    leaderboard: "ad-slot--leaderboard",
    "in-article": "ad-slot--in-article",
    rectangle: "ad-slot--rectangle",
    horizontal: "ad-slot--horizontal",
    sidebar: "ad-slot--sidebar",
  };

  return (
    <div
      className={`ad-slot ${formatClasses[format]} ${className}`.trim()}
      aria-label={label}
    >
      {/* Official Google AdSense Tag — Present in DOM, seamlessly fills once approved/served */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slotId || "1234567890"}
        data-ad-format={format === "rectangle" ? "rectangle" : "auto"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
