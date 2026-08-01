import Link from "next/link";

import { FloatingShapes } from "@/components/floating-shapes";
import { ContactForm } from "@/components/contact-form";
import { IconArrowRight, IconExternal, IconMail, IconPhone } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  experience,
  heroFacts,
  navLinks,
  projects,
  services,
  siteConfig,
  skillGroups,
  testimonials
} from "@/lib/site";
import { cn } from "@/lib/cn";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";
const buttonPrimary = `${buttonBase} bg-accent text-accent-foreground hover:bg-accent/90`;
const buttonSecondary = `${buttonBase} border border-border bg-background text-foreground hover:border-accent hover:text-accent`;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="font-heading text-lg font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />
            <Link href="#contact" className={cn(buttonPrimary, "hidden sm:inline-flex")}>
              Let&apos;s Work Together
            </Link>
          </div>
        </div>

        <div className="border-t border-border/70 px-4 py-3 sm:px-6 md:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main id="content">
        <section id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Creative Graphic Designer | Product Designer | Brand Consultant
              </p>
              <h1 className="font-heading text-5xl font-semibold tracking-tighter text-foreground text-balance sm:text-6xl lg:text-7xl">
                Designing Brands, Products &amp; Experiences That Matter.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                I help businesses, startups, ministries, and organizations transform ideas into memorable brands,
                engaging digital products, and impactful visual communication.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#portfolio" className={buttonPrimary}>
                  View My Work
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#contact" className={buttonSecondary}>
                  Contact Me
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {heroFacts.map((fact) => (
                  <span
                    key={fact}
                    className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-soft">
                <FloatingShapes />
                <div className="relative overflow-hidden rounded-[1.65rem] border border-border bg-[linear-gradient(180deg,rgba(248,250,252,0.96)_0%,rgba(255,255,255,0.88)_100%)] p-5 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.98)_0%,rgba(30,41,59,0.92)_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.06),transparent_28%)]" />
                  <div className="relative flex min-h-[28rem] flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                          Professional Portrait
                        </p>
                        <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                          Professional portrait placeholder
                        </p>
                      </div>
                      <div className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                        FESTUS DISI
                      </div>
                    </div>

                    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center rounded-[2rem] border border-border bg-background/80 p-8 text-center backdrop-blur-sm">
                      <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border border-border bg-muted text-4xl font-heading font-semibold tracking-tighter text-foreground">
                        FD
                      </div>
                      <p className="mt-6 text-lg font-semibold text-foreground">Festus Disi</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Replace this placeholder with a polished headshot for the live site.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-background/85 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Focus</p>
                        <p className="mt-2 text-sm font-medium text-foreground">Brand systems, UI/UX, editorial design</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-background/85 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Location</p>
                        <p className="mt-2 text-sm font-medium text-foreground">Warri, Delta State, Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border/70 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="About"
              title="About Festus Disi"
              description="A thoughtful designer with a strategic mindset and a calm, editorial approach to visual communication."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                <div className="flex flex-wrap gap-3">
                  {["Graphic Designer", "Product Designer", "Brand Consultant", "Creative Strategist"].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    Festus Disi is a creative graphic designer, product designer, brand consultant, and creative
                    director based in Warri, Delta State, Nigeria. With 10+ years of design practice and more than 7
                    years of client-facing experience, he helps businesses, startups, ministries, and organizations
                    communicate with clarity and confidence.
                  </p>
                  <p>
                    His background includes branding, UI/UX, marketing design, publication design, and visual
                    storytelling. He studied Computer Science, which sharpened the systems thinking that shapes his
                    design process today.
                  </p>
                  <p>
                    The work began with a simple pattern: local organizations needed communication that felt clearer,
                    more consistent, and easier to trust. That practical starting point still guides his approach,
                    whether he is shaping a brand identity, structuring an interface, or refining a print layout.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Experience</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    <p>- 10+ years of design practice</p>
                    <p>- B.Sc. Computer Science</p>
                    <p>- Branding, UI/UX, marketing, publication, and visual storytelling</p>
                    <p>- Based in Warri, Delta State, Nigeria</p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(20,184,166,0.08),rgba(20,184,166,0.02))] p-6 shadow-soft dark:bg-[linear-gradient(180deg,rgba(20,184,166,0.12),rgba(20,184,166,0.04))]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Working Style</p>
                  <p className="mt-4 text-lg font-medium leading-8 text-foreground">
                    Strategy first. Typography always. Every system is designed to feel calm, trustworthy, and easy to
                    use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Services"
              title="Clear, modern design services for brands that want to look and communicate better."
              description="Each service is shaped to reduce noise, sharpen perception, and create consistency across print and digital touchpoints."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-muted text-sm font-semibold text-accent">
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-accent/70 transition-transform duration-200 group-hover:scale-125" />
                  </div>
                  <h3 className="mt-8 font-heading text-2xl tracking-tighter text-foreground">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="border-y border-border/70 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Selected Projects"
              title="A selection of brand and product work built around clarity, structure, and trust."
              description="Each card represents a project direction, with room to expand into a deeper case study page later."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={cn(
                    "group overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-200 hover:-translate-y-1",
                    index === 0 && "md:col-span-2 xl:col-span-1"
                  )}
                >
                  <div className={cn("relative aspect-[4/3] overflow-hidden border-b border-border bg-gradient-to-br p-5", project.tone)}>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_55%)] opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <span className="inline-flex rounded-full border border-border bg-background/85 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-border bg-background/85 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                          Cover image placeholder
                        </span>
                      </div>

                      <div className="self-end rounded-[1.5rem] border border-border bg-background/90 p-4 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">DISI</p>
                        <p className="mt-2 max-w-[14rem] text-sm leading-6 text-muted-foreground">
                          Visual direction preview
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-md font-heading text-2xl tracking-tighter text-foreground">{project.title}</h3>
                      <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                    <Link href="#contact" className={buttonSecondary}>
                      Case Study
                      <IconExternal className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Experience"
              title="A clean vertical timeline of roles, growth, and long-term creative practice."
              description="The path combines in-house leadership, independent consulting, and print-focused production experience."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Timeline</p>
                <div className="mt-8 space-y-8">
                  {experience.map((item) => (
                    <article key={`${item.company}-${item.role}`} className="relative pl-7">
                      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent" />
                      <span className="absolute left-1.5 top-4 h-full w-px bg-border" />
                      <p className="text-sm font-semibold text-foreground">{item.role}</p>
                      <p className="mt-1 text-sm text-accent">{item.company}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.period}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-border bg-muted/40 p-6 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Creative Focus</p>
                  <p className="mt-4 text-lg leading-8 text-foreground">
                    Communication that feels precise, professional, and easy to trust across brands, products, and
                    publications.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">What Clients Get</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Clear design direction",
                      "Reliable visual systems",
                      "Practical communication",
                      "Polished presentation"
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-border bg-muted px-4 py-3 text-sm text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Skills"
              title="Structured skills presented as clean pill badges."
              description="A compact overview of design disciplines, methods, and tools used across brand and product work."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                  <h3 className="font-heading text-2xl tracking-tighter text-foreground">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Testimonials"
              title="Professional testimonial placeholders ready for real client quotes."
              description="Simple cards keep the section calm and readable without turning it into a carousel."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                  <p className="text-sm leading-8 text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border/70 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Contact"
              title={"Let's build something remarkable together."}
              description="Whether the project is a brand refresh, a product interface, or a design system, the conversation can start here."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-full border border-border bg-muted p-2 text-accent">
                        <IconPhone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground">Phone</p>
                        <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-1 inline-block text-foreground hover:text-accent">
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-full border border-border bg-muted p-2 text-accent">
                        <IconMail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block text-foreground hover:text-accent">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-full border border-border bg-muted p-2 text-accent">
                        <IconExternal className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground">Location</p>
                        <p className="mt-1 text-foreground">{siteConfig.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Social Links</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Social icons with hover states are included below. Replace the placeholder links with live profiles
                    when ready.
                  </p>
                  <SocialLinks className="mt-6" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                  <h3 className="font-heading text-3xl tracking-tighter text-foreground">Let&apos;s Build Something Remarkable Together</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                    Share a few details about your project and I&apos;ll open your email app with a ready-to-send
                    message.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tighter text-foreground">{siteConfig.logo}</p>
            <p className="mt-2 text-sm text-muted-foreground">Designing meaningful brands and digital experiences.</p>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2026 DISI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
