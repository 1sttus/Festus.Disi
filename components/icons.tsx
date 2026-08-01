import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" {...props}>
      {children}
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
    </BaseIcon>
  );
}

export function IconSun(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path strokeLinecap="round" d="M12 2.75v2.25M12 19v2.25M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.75 12H5M19 12h2.25M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </BaseIcon>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 3.75a7.5 7.5 0 1 0 4.75 13.5 8.5 8.5 0 1 1-4.75-13.5Z"
      />
    </BaseIcon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15v10.5h-15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 7.5 6.75 5.25L18.75 7.5" />
    </BaseIcon>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 4.75h2.25l1.25 4.25-1.5 1.5a14.5 14.5 0 0 0 4.25 4.25l1.5-1.5 4.25 1.25v2.25c0 .9-.73 1.62-1.62 1.62C10.72 18.37 5.63 13.28 5.63 6.37c0-.9.73-1.62 1.62-1.62Z"
      />
    </BaseIcon>
  );
}

export function IconBehance(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7.5h6.2a2.6 2.6 0 0 1 0 5.2H5V7.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.7h6.9a2.8 2.8 0 1 1 0 5.6H5v-5.6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.8 9.25h3.5M15.8 12h5.1" />
    </BaseIcon>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.5V18M6 6.75h.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 18v-4.6c0-1.77 1.08-3.15 2.85-3.15 1.62 0 2.65 1.12 2.65 3.1V18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 9.5V18" />
    </BaseIcon>
  );
}

export function IconPinterest(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0-3.3-17.4c-1.5.6-2.5 2-2.5 3.8 0 1.6.9 2.8 2.1 2.8.5 0 1-.2 1.3-.6l1-4.2c.1-.4.3-.8.8-1 .8-.3 1.7.2 1.7 1.2 0 1.4-.9 2.9-.9 4.6 0 1.2.7 2.2 2 2.2 2.3 0 3.8-2.8 3.8-6 0-2.5-1.8-4.8-5.2-4.8-3.7 0-6.1 2.7-6.1 5.9 0 1.1.4 1.9 1 2.5" />
    </BaseIcon>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="16.1" cy="7.9" r="0.8" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function IconExternal(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h8v8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 9 15" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 18H6.75A1.75 1.75 0 0 1 5 16.25V8.5" />
    </BaseIcon>
  );
}
