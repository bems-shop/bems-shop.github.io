import { ArrowUpRight, ExternalLink, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siBigcartel } from "simple-icons";

import bemsLogo from "@/assets/bems-logo.svg";
import { catalogueProducts, siteLinks, socialLinks } from "@/data/catalogue";

function ProductCard({
  name,
  subtitle,
  price,
  details,
  features,
  specs,
  availability,
  image,
}: (typeof catalogueProducts)[number]) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const detailsPanelId = `${name.toLowerCase()}-details`;

  useEffect(() => {
    if (!isImageOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageOpen]);

  return (
    <article className="flex h-full flex-col gap-10 px-6 py-2 sm:px-8">
      <div className="relative">
        <div className="min-w-0 pr-28">
          <h3 className="text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
            {name}
          </h3>
        </div>
        <p className="absolute right-0 top-1 shrink-0 text-sm tracking-[0.18em] text-foreground/80">
          {price}
        </p>
        <div className="mt-2 flex items-baseline justify-between gap-4">
          <p className="text-sm uppercase text-muted-foreground">
            {subtitle}
          </p>
          <button
            aria-controls={detailsPanelId}
            aria-expanded={isDetailsOpen}
            className="shrink-0 border-2 border-foreground/70 px-2 py-1 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:border-foreground focus-visible:bg-foreground focus-visible:text-background focus-visible:outline-none"
            onClick={() => setIsDetailsOpen((current) => !current)}
            type="button"
          >
            {isDetailsOpen ? "Close" : "Details"}
          </button>
        </div>
      </div>

      <figure className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-sm bg-background">
          <button
            aria-label={`View ${name} image larger`}
            className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => setIsImageOpen(true)}
            type="button"
          >
            <img
              alt={image.alt}
              className="aspect-[1/1] w-full cursor-zoom-in object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
              loading="lazy"
              src={image.src}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/[0.04] motion-reduce:transition-none"
            />
          </button>
          <div
            aria-hidden={!isDetailsOpen}
            className={`absolute -inset-px z-10 flex origin-top flex-col overflow-hidden bg-background transition-transform duration-300 ease-out ${
              isDetailsOpen
                ? "translate-y-0"
                : "pointer-events-none -translate-y-full"
            }`}
            id={detailsPanelId}
          >
            <div className="flex min-h-full flex-col border border-border/80 px-0 py-0">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Details
                </p>
                <div className="mt-3 h-px bg-border/80" />
              </div>

              <div className="mt-3 flex-1">
                <div className="max-w-[38rem] space-y-2 text-[0.8rem] leading-[1.35rem] text-foreground/90">
                  {details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    Circuit notes
                  </p>
                  <div className="mt-2.5 h-px bg-border/80" />
                  <ul className="mt-2.5 space-y-1 text-[0.8rem] leading-[1.35rem] text-foreground/85">
                    {features.map((feature) => (
                      <li className="flex gap-2" key={feature}>
                        <span aria-hidden="true">-</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Specs
                </p>
                <div className="mt-2.5 h-px bg-border/80" />
                <dl className="mt-2 grid grid-cols-3 divide-x divide-border/80">
                  {specs.map(({ label, value }) => (
                    <div className="min-w-0 px-5 first:pl-0 last:pr-0" key={label}>
                      <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="mt-1 text-[1rem] leading-none tracking-[-0.04em] text-foreground">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </figure>

      <div className="mt-auto flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Available at
        </p>
        <div className="flex flex-wrap gap-3">
          {availability.map(({ label, href }) => (
            <a
              key={label}
              className="inline-flex items-center gap-2.5 border-2 border-foreground/70 px-3 py-2 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:border-foreground focus-visible:bg-foreground focus-visible:text-background focus-visible:outline-none"
              href={href}
            >
              <svg
                aria-hidden="true"
                className="size-4"
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={siBigcartel.path} />
              </svg>
              {label}
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          ))}
        </div>
      </div>

      {isImageOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/92 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
        >
          <button
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 sm:top-6"
            onClick={() => setIsImageOpen(false)}
            type="button"
          >
            <X className="size-5" />
          </button>

          <button
            aria-label="Close image viewer backdrop"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setIsImageOpen(false)}
            type="button"
          />

          <div className="pointer-events-none relative z-10 flex max-h-[88svh] max-w-6xl items-center justify-center">
            <img
              alt={image.alt}
              className="max-h-[88svh] w-auto max-w-full object-contain"
              src={image.src}
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

export function App() {
  return (
    <div className="min-h-svh bg-background text-foreground" id="top">
      <div className="noise-overlay pointer-events-none fixed inset-0 opacity-40" />

      <div className="relative min-h-svh">
        <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 px-5 pb-6 pt-5 backdrop-blur-md sm:px-8">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:gap-10">
              <a className="inline-flex w-fit items-center" href="#top">
                <img
                  alt="B.E.M.S."
                  className="h-12 w-auto sm:h-14"
                  src={bemsLogo}
                />
              </a>

              <nav
                aria-label="Primary"
                className="flex flex-wrap gap-8 text-sm sm:gap-10"
              >
                {siteLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    className="uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                    href={href}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramIcon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
          <section className="border-b border-border/80 px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8">
            <div
              className="scroll-mt-28 grid gap-x-16 gap-y-20 lg:grid-cols-2 xl:gap-x-18"
              id="products"
            >
              {catalogueProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </section>

          <section className="px-5 py-12 sm:px-8 sm:pb-12 sm:pt-16">
            <div
              className="grid gap-x-16 gap-y-12 lg:grid-cols-2 xl:gap-x-18"
              id="about"
            >
              <div className="px-6 sm:px-8">
                <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                  About
                </p>
                <h2 className="mt-4 text-2xl tracking-[-0.05em] sm:text-3xl">
                  Placeholder introduction.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Use this block for the short version of the story, design
                  philosophy, manufacturing notes, or the point of difference.
                  It is intentionally plain so product content remains dominant.
                </p>
              </div>

              <div className="px-6 sm:px-8" id="contact">
                <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                  Contact
                </p>
                <div className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
                  <a
                    className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"
                    href="mailto:hello@example.com"
                  >
                    <Mail className="size-4" />
                    hello@example.com
                  </a>
                  <p>
                    Placeholder for direct contact details, support channel,
                    lead times, or dealer enquiries.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-foreground"
                    href="#products"
                  >
                    Review products
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
