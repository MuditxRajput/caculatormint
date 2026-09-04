import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How Dog Bite Settlements Work in the USA";
const description =
  "Follow a U.S. dog bite claim from ER visit to insurer offer: documentation traps, comparative fault surprises, and why policy limits — not online averages — often decide the check.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "dog bite settlement USA",
    "how dog bite compensation works",
    "strict liability dog bite",
    "one bite rule explained",
    "dog bite pain and suffering",
    "homeowners insurance dog bite",
  ],
  alternates: {
    canonical: "/blog/how-dog-bite-settlements-work-in-the-usa",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: absoluteUrl("/blog/how-dog-bite-settlements-work-in-the-usa"),
  },
};

export default function DogBiteSettlementGuidePost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-07-30",
    dateModified: "2026-09-04",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(
      "/blog/how-dog-bite-settlements-work-in-the-usa",
    ),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span>Dog bite settlements</span>
        </nav>
        <h1>How dog bite settlements work in the USA</h1>
        <p>
          A claim-timeline story and the mistakes that weaken leverage — then
          model a range with the{" "}
          <Link href="/calculators/dog-bite-compensation-calculator">
            dog bite compensation calculator
          </Link>
          .
        </p>
      </header>

      <article className="content-stack" style={{ marginBottom: "3rem" }}>
        <div className="prose-panel">
          <h2>A worked scenario: the park path bite</h2>
          <p>
            Sam is walking a neighborhood path when an off-leash dog bites his
            forearm. ER stitches, antibiotics, two follow-ups, and a week off
            work produce about <strong>$9,400</strong> in documented medical
            bills and lost wages. Online “average settlement” articles make him
            expect six figures. The owner&apos;s homeowners policy limit is{" "}
            <strong>$100,000</strong> — but the first adjuster offer is $12,000
            “for medicals only,” citing disputed provocation and a shared path.
          </p>
          <p>
            Sam&apos;s outcome will turn less on a national average and more on
            three local facts: whether his state leans strict liability or
            one-bite/negligence, how clean his documentation is, and whether
            comparative fault or trespass defenses apply. The calculator page
            already walks through damage categories and liability toggles; this
            guide walks through how those facts play out in practice.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Where claims quietly lose value</h2>
          <ul>
            <li>
              <strong>Delayed care</strong> — gaps between the bite and treatment
              invite “injury wasn&apos;t serious” arguments.
            </li>
            <li>
              <strong>No animal-control report</strong> — without an official
              record, ownership and prior-history facts get harder to prove.
            </li>
            <li>
              <strong>Social media posts</strong> — vacation photos or “I&apos;m
              fine” updates surface in negotiations even for legitimate scars.
            </li>
            <li>
              <strong>Accepting the first medicals-only check</strong> — early
              offers often ignore scarring, fear of dogs, and future care.
            </li>
            <li>
              <strong>Ignoring the statute of limitations</strong> — deadlines
              vary by state; waiting for “final scarring” can run out the clock.
            </li>
          </ul>
        </div>

        <div className="prose-panel">
          <h2>Edge case: same injury, different states</h2>
          <p>
            Imagine identical medical bills and a facial scar on a child. In a
            strict-liability state, the owner&apos;s “first bite” history may
            matter less for basic liability (though defenses still exist). In a
            one-bite / negligence state, proving the owner knew — or should have
            known — the dog was dangerous can become the whole case. That is why
            two families with similar hospital bills can hear wildly different
            settlement talk from local counsel.
          </p>
          <p>
            Insurance still often caps what is collectible. A strong liability
            story against a $50,000 renters policy will not magically produce a
            $250,000 check unless other coverage or assets exist.
          </p>
        </div>

        <div className="prose-panel">
          <h2>What strong documentation looks like</h2>
          <p>
            Photograph wounds over time, keep every bill and pharmacy receipt,
            note missed work days, save clothing that was torn, collect witness
            names, and write down the dog description and owner contact the day
            it happens. Those records do more for claim value than memorizing
            multiplier rules of thumb.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Estimate a range — then talk to a lawyer</h2>
          <p>
            Use the{" "}
            <Link href="/calculators/dog-bite-compensation-calculator">
              USA dog bite compensation calculator
            </Link>{" "}
            for a transparent educational low–high range. It is not legal advice.
            A licensed attorney in your state can weigh evidence, defenses, and
            coverage that no public tool can see.
          </p>
        </div>
      </article>
    </div>
  );
}
