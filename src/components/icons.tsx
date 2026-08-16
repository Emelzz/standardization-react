import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 0-1Z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const FacebookIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14 9h3V5.5h-3A3.5 3.5 0 0 0 10.5 9v2H8v3.5h2.5V20H14v-5.5h2.5L17 11h-3V9a1 1 0 0 1 1-1Z" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const TwitterIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 5.5c-.7.4-1.5.6-2.3.8a3.4 3.4 0 0 0-5.8 3.1A9.6 9.6 0 0 1 5.9 5.9a3.4 3.4 0 0 0 1 4.5c-.6 0-1.2-.2-1.7-.4v.1a3.4 3.4 0 0 0 2.7 3.3c-.5.1-1 .2-1.6.1a3.4 3.4 0 0 0 3.2 2.3A6.8 6.8 0 0 1 3 17.1a9.6 9.6 0 0 0 5.2 1.5c6.2 0 9.6-5.1 9.6-9.6v-.4c.7-.5 1.3-1.1 1.7-1.8Z" />
  </svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4-4" />
  </svg>
);

export const CartIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="17" cy="20" r="1.2" fill="currentColor" stroke="none" />
    <path d="M3 4h2l2 11h10.5a1 1 0 0 0 1-.8l1.3-6.2a1 1 0 0 0-1-1.2H6.5" />
  </svg>
);

export const HeartIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 20s-7-4.4-9.5-8.8A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5.2C19 15.6 12 20 12 20Z" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m5 5 14 14M19 5 5 19" />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const CommentIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 4h13v3.5H8.5L4 4Z M4 4v10.5a1 1 0 0 0 1 1h4L12 19v-3.5h5a1 1 0 0 0 1-1V7.5" />
  </svg>
);

export const StarIcon = ({ filled, ...props }: IconProps & { filled?: boolean }) => (
  <svg {...base(props)} fill={filled ? 'currentColor' : 'none'}>
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z" />
  </svg>
);

export const BookIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16.5H6.5A2.5 2.5 0 0 0 4 22Z" />
    <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16.5h5.5a2.5 2.5 0 0 1 2.5 2.5Z" />
  </svg>
);

export const GridIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
    <path d="M3.5 9.5h17M8 4v16" />
  </svg>
);

export const TrendingUpIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 17 9.5 10.5 14 15 21 7" />
    <path d="M15 7h6v6" />
  </svg>
);
