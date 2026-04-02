import {
  ArrowUpRight,
  Mail,
  ShoppingBag,
  Store,
} from "lucide-react"

import bemsLogo from "@/assets/bems-logo.svg"
import { catalogueProducts, siteLinks, socialLinks } from "@/data/catalogue"

function ProductCard({
  name,
  subtitle,
  price,
  summary,
  availability,
  image,
}: (typeof catalogueProducts)[number]) {
  return (
    <article className="flex h-full flex-col gap-10 px-6 py-2 sm:px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
                {name}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="shrink-0 text-sm tracking-[0.18em] text-foreground/80">
            {price}
          </p>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">
          {summary}
        </p>
      </div>

      <figure className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-sm bg-card/10">
          <img
            alt={image.alt}
            className="aspect-[1/1] w-full object-cover object-center"
            loading="lazy"
            src={image.src}
          />
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary/70"
              href={href}
            >
              {label === "Shopify" ? (
                <ShoppingBag className="size-4" />
              ) : (
                <Store className="size-4" />
              )}
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export function App() {
  return (
    <div className="min-h-svh bg-background text-foreground" id="top">
      <div className="noise-overlay pointer-events-none fixed inset-0 opacity-40" />

      <div className="relative min-h-svh">
        <header className="sticky top-0 z-40 border-b border-border/80 bg-background/88 px-5 py-5 backdrop-blur-md sm:px-8">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:gap-10">
              <a
                className="inline-flex w-fit items-center"
                href="#top"
              >
                <img
                  alt="B.E.M.S."
                  className="h-12 w-auto sm:h-14"
                  src={bemsLogo}
                />
              </a>

              <nav aria-label="Primary" className="flex flex-wrap gap-5 text-sm">
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
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                  href={href}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
          <section className="border-b border-border/80 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-18">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <h1 className="max-w-4xl text-3xl tracking-[-0.08em] sm:text-5xl lg:text-6xl">
                Eurorack modules, front and centre.
              </h1>
            </div>

            <div
              className="mt-28 scroll-mt-28 grid gap-x-16 gap-y-20 lg:grid-cols-2 xl:gap-x-18"
              id="products"
            >
              {catalogueProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </section>

          <section
            className="grid gap-px bg-border/80 lg:grid-cols-[1.1fr_0.9fr]"
            id="about"
          >
            <div className="bg-background px-5 py-12 sm:px-8">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                About
              </p>
              <h2 className="mt-4 text-2xl tracking-[-0.05em] sm:text-3xl">
                Placeholder studio introduction for the people behind the
                modules.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                Use this block for the short version of the story, design
                philosophy, manufacturing notes, or the point of difference.
                It is intentionally plain so product content remains dominant.
              </p>
            </div>

            <div className="bg-background px-5 py-12 sm:px-8" id="contact">
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
                  Placeholder for direct contact details, support channel, lead
                  times, or dealer enquiries.
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
          </section>

          <footer className="flex flex-col gap-4 border-t border-border/80 px-5 py-5 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>Placeholder catalogue site for GitHub Pages.</p>
            <p>Edit product data in `src/data/catalogue.ts`.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
