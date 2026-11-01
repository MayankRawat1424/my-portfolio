import type { CertBadge, Highlight, NavLink, Photo, SocialLink } from "@/types";

export const SITE = {
  name: "Mayank Rawat",
  handle: "Mayank_Rawat",
  role: "Systems Engineer @ Infosys · Frontend Developer · AWS Certified",
  description:
    "Mayank Rawat: Systems Engineer at Infosys and frontend developer building responsive web apps with React, Next.js, and TypeScript.",
  email: "mayankrawat1424@gmail.com",
  location: "Dehradun, India",
  contactFormAction: "https://formspree.io/f/mrbavqwk",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", hideOnMobile: true },
  { label: "About", href: "#about", hideOnMobile: true },
  { label: "Projects", href: "#projects", hideOnMobile: true },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X (Twitter)", href: "https://x.com/babyboytycoon", icon: "x" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayank-rawat-a6971924b/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/MayankRawat1424",
    icon: "github",
  },
];

export const HOME_HIGHLIGHTS: Highlight[] = [
  {
    title: "Web Development",
    description:
      "Responsive, accessible interfaces with React, Next.js, and TypeScript.",
  },
  {
    title: "Cloud Technologies",
    description:
      "AWS Certified Cloud Practitioner (CLF-C02). Hosting and deploying on S3, CloudFront, and Auto Scaling.",
  },
];

export const CERT_BADGES: CertBadge[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    src: "/badges/aws-cloud-practitioner.png",
    width: 506,
    height: 584,
  },
  {
    name: "GitHub Copilot Certification",
    src: "/badges/github-copilot.png",
    width: 364,
    height: 359,
  },
];

/** Web-sized copies of the originals live in public/photos. */
export const PHOTOS = {
  home: {
    src: "/photos/desk.jpg",
    width: 1600,
    height: 900,
    alt: "Infosys welcome kit on a desk beside a laptop",
  },
  contact: {
    src: "/photos/corporate.jpg",
    width: 1200,
    height: 1600,
    alt: "Mayank standing on a balcony overlooking a campus",
  },
  gallery: [
    {
      src: "/photos/hobby.jpg",
      width: 919,
      height: 1275,
      alt: "Playing a MIDI keyboard at a desk setup",
    },
    {
      src: "/photos/candid.jpg",
      width: 1067,
      height: 1600,
      alt: "Mayank reading a book in a bookstore",
    },
    {
      src: "/photos/travel.jpg",
      width: 1200,
      height: 1600,
      alt: "View of a plane wing above the clouds from a window seat",
    },
  ],
} satisfies { home: Photo; contact: Photo; gallery: Photo[] };
