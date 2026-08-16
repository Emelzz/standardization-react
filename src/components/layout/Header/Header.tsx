import { useState } from 'react';
import { navLinks } from '../../../data/navLinks';
import { SearchIcon, CartIcon, HeartIcon, MenuIcon, CloseIcon, ChevronDownIcon } from '../../icons';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          Bandage
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                  {link.hasDropdown && <ChevronDownIcon width={14} height={14} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#" className="header__auth">
            Login / Register
          </a>
          <button type="button" className="header__icon-btn" aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className="header__icon-btn" aria-label="Cart, 1 item">
            <CartIcon />
            <span className="header__badge">1</span>
          </button>
          <button type="button" className="header__icon-btn header__wishlist-btn" aria-label="Wishlist, 1 item">
            <HeartIcon />
            <span className="header__badge">1</span>
          </button>
          <button
            type="button"
            className="header__icon-btn header__menu-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="header__mobile-nav" aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
