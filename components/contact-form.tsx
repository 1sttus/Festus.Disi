"use client";

import type { FormEvent } from "react";

import { siteConfig } from "@/lib/site";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Project inquiry from ${name || "a visitor"} | ${projectType || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-border bg-card p-5 shadow-soft sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Name
          <input className={fieldClass} name="name" type="text" placeholder="Your name" required />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Email
          <input className={fieldClass} name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Project Type
          <select className={fieldClass} name="projectType" defaultValue="Brand Identity Design">
            <option>Brand Identity Design</option>
            <option>Product Design</option>
            <option>Graphic Design</option>
            <option>Book Design</option>
            <option>Print Design</option>
            <option>Creative Consulting</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-foreground">
          Budget
          <select className={fieldClass} name="budget" defaultValue="Let's discuss">
            <option>Under $1,000</option>
            <option>$1,000 - $5,000</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000+</option>
            <option>Let's discuss</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        Message
        <textarea className={fieldClass} name="message" rows={6} placeholder="Tell me about your project, timeline, and goals." required />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-muted-foreground">
          The form opens your email app with a prefilled message for fast follow-up.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
