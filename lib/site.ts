export const siteConfig = {
  name: "Festus.Disi.",
  logo: "DISI",
  title: "Festus Disi | Creative Graphic Designer, Product Designer & Brand Consultant",
  description:
    "DISI is the personal portfolio of Festus Disi, a creative professional designing brands, products, and communication systems with clarity and restraint.",
  email: "disifestus@live.com",
  phone: "+234 903 591 9172",
  location: "Warri, Delta State, Nigeria",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://festusdisi.com",
  social: {
    behance: "https://www.behance.net/disyn",
    pinterest: "#",
    linkedin: "#",
    instagram: "#"
  }
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
] as const;

export const heroFacts = [
  "10+ years of design practice",
  "B.Sc. Computer Science",
  "Based in Warri, Delta State"
] as const;

export const services = [
  {
    title: "Brand Identity Design",
    description: "Logos, visual systems, and brand guidelines that make organizations feel consistent and credible."
  },
  {
    title: "Product Design",
    description: "UI/UX design, wireframes, user flows, and prototypes for thoughtful digital experiences."
  },
  {
    title: "Graphic Design",
    description: "Campaign assets, marketing materials, and social visuals that communicate quickly and clearly."
  },
  {
    title: "Book Design",
    description: "Book covers and interior layouts shaped for readability, structure, and shelf appeal."
  },
  {
    title: "Print Design",
    description: "Publication and print production design built for polished physical communication."
  },
  {
    title: "Creative Consulting",
    description: "Strategic support for organizations that need clearer communication and stronger presentation."
  }
] as const;

export const projects = [
  {
    title: "ErrandLink Mobile App",
    category: "Product Design",
    summary:
      "A delivery and task-booking experience designed to make requests, tracking, and communication feel simple and reliable.",
    tone: "from-teal-500/15 via-white to-slate-50"
  },
  {
    title: "Nigeria Residential Wiring Standards Training App",
    category: "Product Design",
    summary:
      "A structured learning product that turns technical material into a clearer path for study, assessment, and certification.",
    tone: "from-slate-900/10 via-white to-teal-500/10"
  },
  {
    title: "Medical Startup Branding",
    category: "Brand Identity",
    summary:
      "A clean and trustworthy identity system created to support modern healthcare communication and a calm digital presence.",
    tone: "from-teal-500/10 via-white to-slate-100"
  },
  {
    title: "Kuest Engineering Company",
    category: "Brand Identity",
    summary:
      "A refined corporate brand direction that balances precision, professionalism, and technical credibility.",
    tone: "from-slate-100 via-white to-teal-500/10"
  },
  {
    title: "VeeandCee Cosmetic Beauty Shop",
    category: "Brand & Digital Design",
    summary:
      "A retail brand and digital presentation system created to feel polished, approachable, and memorable.",
    tone: "from-teal-500/10 via-white to-slate-100"
  },
  {
    title: "Book Cover & Interior Design Projects",
    category: "Editorial Design",
    summary:
      "Book layouts and covers focused on hierarchy, readability, and the quiet confidence of well-crafted editorial work.",
    tone: "from-slate-900/10 via-white to-teal-500/15"
  }
] as const;

export const experience = [
  {
    role: "Head Graphic Designer / Media",
    company: "MorningStar Covenant International Church",
    period: "2019 - Present",
    description:
      "Leading visual communication, campaign graphics, publications, and digital content for church communications."
  },
  {
    role: "Freelance Designer & Brand Consultant",
    company: "Independent Practice",
    period: "2018 - Present",
    description:
      "Helping businesses, startups, ministries, and organizations shape clearer brands and more effective digital experiences."
  },
  {
    role: "Lead Graphic Designer",
    company: "Manifest Printing Press",
    period: "2015 - 2016",
    description:
      "Produced print-ready artwork, publication layouts, and design assets with a strong focus on clarity and production quality."
  }
] as const;

export const skillGroups = [
  {
    title: "Product Design",
    skills: ["UI/UX Design", "Wireframing", "User Flows", "Prototyping", "Design Systems"]
  },
  {
    title: "Graphic Design",
    skills: ["Branding", "Marketing Design", "Publication Design", "Social Media Design", "Campaign Design"]
  },
  {
    title: "Tools",
    skills: ["Figma", "CorelDRAW", "Adobe Photoshop", "Adobe Illustrator"]
  }
] as const;

export const testimonials = [
  {
    name: "Client Name Placeholder",
    role: "Founder, Startup Studio",
    quote:
      "Festus brings clarity to the process. The final brand and product direction felt calm, confident, and easy for our team to use."
  },
  {
    name: "Client Name Placeholder",
    role: "Communications Lead, Ministry",
    quote:
      "He understands how to turn ideas into visuals that communicate quickly. The work improved both our consistency and our credibility."
  },
  {
    name: "Client Name Placeholder",
    role: "Operations Manager, Company",
    quote:
      "The design thinking was strategic, not decorative. Every decision seemed to support the message and the audience."
  }
] as const;

export const socialLinks = [
  { label: "Behance", href: siteConfig.social.behance, placeholder: false },
  { label: "Pinterest", href: siteConfig.social.pinterest, placeholder: true },
  { label: "LinkedIn", href: siteConfig.social.linkedin, placeholder: true },
  { label: "Instagram", href: siteConfig.social.instagram, placeholder: true }
] as const;
