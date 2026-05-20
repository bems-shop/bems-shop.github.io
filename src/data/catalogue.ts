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
      { label: "Big Cartel", href: "#" },
    ],
    image: {
      src: "/images/tresh.png",
      alt: "B.E.M.S TreSH Eurorack module mounted against weathered wood.",
    },
  },
] as const
