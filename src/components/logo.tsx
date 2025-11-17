import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    width="140"
    height="28"
    viewBox="0 0 140 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* P */}
    <path d="M12.9,2.24h-7.8v23.52h7.8c4.4,0,7.9-3.5,7.9-7.9v-7.72C20.8,5.74,17.3,2.24,12.9,2.24z M12.9,19.04h-3.1V8.84h3.1c2.1,0,3.8,1.7,3.8,3.8v2.6C16.7,17.34,15,19.04,12.9,19.04z" className="fill-[hsl(var(--foreground))]" />

    {/* A */}
    <path d="M29.5,2.24h-7.8l-5.6,23.52h6.5l1.1-4.68h5.4l1.1,4.68h6.5L29.5,2.24z M28.6,17.64h-3.6l1.8-9.04L28.6,17.64z" className="fill-[hsl(var(--foreground))]" />

    {/* Y */}
    <path d="M43.3,2.24l-4.8,11.2l-4.8-11.2h-6.3l8,18.88v4.64h6.3v-4.64l8-18.88H43.3z" className="fill-[hsl(var(--foreground))]" />

    {/* M */}
    <path d="M57,2.24h8.9l3.9,10.4l3.9-10.4h8.9v23.52h-6.3V8.84l-4.2,11.2h-4.4l-4.2-11.2v16.92H57V2.24z" className="fill-[hsl(var(--foreground))]" />

    {/* E */}
    <path
      d="M96.4,2.24H83.5v23.52h13.7v-5.88H90.1v-3.92h9.5v-5.88h-9.5V8.12h10.2V2.24z"
      className="fill-[hsl(var(--foreground))]"
    />

    {/* Final E (was rectangle) */}
    <path
      d="M113 2.24h-12.9v23.52H113v-5.88h-9.1v-3.92h9.1v-5.88h-9.1V8.12h10.1V2.24z"
      className="fill-[hsl(var(--primary))]"
    />
  </svg>
);

export default Logo;
