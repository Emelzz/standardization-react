export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#', hasDropdown: true },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Pages', href: '#' },
];
