export const siteLinks = [
  { href: "#top", label: "Products" },
  { href: "#about", label: "About / Contact" },
] as const

export const socialLinks = [
  {
    href: "https://www.instagram.com/bristolelectronicmusicsystems/",
    label: "Instagram",
  },
] as const

export const catalogueProducts = [
  {
    name: "TreSH",
    subtitle: "signal shaper",
    price: "GBP 99.99",
    summary:
      "Short placeholder description for the first module.",
    availability: [
      { label: "eBay", href: "#" },
      { label: "Shopify", href: "#" },
    ],
    image: {
      src: "/images/tresh-temp.jpg",
      alt: "Close-up view of a Eurorack modular synthesizer patch.",
    },
  },
  {
    name: "TreENV",
    subtitle: "contour generator",
    price: "GBP 149.99",
    summary:
      "Short placeholder description for the second module.",
    availability: [
      { label: "eBay", href: "#" },
      { label: "Shopify", href: "#" },
    ],
    image: {
      src: "/images/treenv-temp.jpg",
      alt: "Eurorack modular synthesizer system with illuminated modules.",
    },
  },
] as const
