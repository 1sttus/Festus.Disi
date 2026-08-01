import { cn } from "@/lib/cn";
import { socialLinks } from "@/lib/site";
import { IconBehance, IconExternal, IconInstagram, IconLinkedIn, IconPinterest } from "@/components/icons";

const iconMap = {
  Behance: IconBehance,
  Pinterest: IconPinterest,
  LinkedIn: IconLinkedIn,
  Instagram: IconInstagram
} as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap];
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.placeholder ? undefined : "_blank"}
            rel={link.placeholder ? undefined : "noreferrer"}
            aria-label={link.placeholder ? `${link.label} profile link placeholder` : `Open ${link.label}`}
            className={cn(
              "group inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
              link.placeholder
                ? "border-dashed border-border bg-background text-muted-foreground"
                : "border-border bg-background text-foreground hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            )}
          >
            <span className={cn("flex h-8 w-8 items-center justify-center rounded-full border", link.placeholder ? "border-border bg-muted" : "border-border bg-muted/80")}>
              {Icon ? <Icon className="h-4.5 w-4.5" /> : <IconExternal className="h-4.5 w-4.5" />}
            </span>
            <span>{link.label}</span>
            {link.placeholder ? <span className="text-xs text-muted-foreground">Add profile link</span> : null}
          </a>
        );
      })}
    </div>
  );
}
