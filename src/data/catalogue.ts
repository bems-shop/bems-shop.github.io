import { AtSign, Globe2, type LucideIcon } from "lucide-react"

export const siteLinks = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
] as const

export const socialLinks: Array<{
  href: string
  label: string
  icon: LucideIcon
}> = [
  { href: "#", label: "Website", icon: Globe2 },
  { href: "#", label: "Social", icon: AtSign },
]

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
