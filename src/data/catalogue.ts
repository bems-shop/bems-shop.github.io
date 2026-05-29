export const siteLinks = [
  { href: "#top", label: "Products" },
  { href: "#about", label: "About / Contact" },
] as const;

export const socialLinks = [
  {
    href: "https://www.instagram.com/bristolelectronicmusicsystems/",
    label: "Instagram",
  },
] as const;

export const catalogueProducts = [
  {
    name: "TreSH",
    subtitle: "3x Sample & Hold",
    price: "GBP 99.99",
    details: [
      "TreSH is a 3x sample and hold module based on Emilie Gillet's Mutable Instruments Kinks circuit, duplicated three times in the same compact form factor.",
      "Each section has input, output, trig input, and noise output. White noise is normalled to the input and disconnects when a jack is inserted.",
    ],
    features: [
      "DC coupled inputs",
      "1M input impedance",
      "Trig edge detector: 25us min pulse, 0.2V/ms max slew",
      "Sampling time: 100us",
      "Droop rate: <0.8mV/s",
      "Noise: flat 10Hz-30kHz, -6dB/oct beyond, 1.8V +/- 10%",
    ],
    specs: [
      { label: "Size", value: "4HP" },
      { label: "+12V", value: "25mA" },
      { label: "-12V", value: "25mA" },
    ],
    availability: [
      { label: "Big Cartel", href: "https://bems.bigcartel.com/product/tresh" },
    ],
    image: {
      src: "/images/tresh.png",
      alt: "B.E.M.S TreSH Eurorack module mounted against weathered wood.",
    },
  },
] as const;
