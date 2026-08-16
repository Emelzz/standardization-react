import { useState, type FormEvent } from 'react';
import { footerColumns } from '../../../data/footerLinks';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../icons';
import './Footer.css';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__brand-row">
        <span className="footer__logo">Bandage</span>
        <div className="footer__social">
          <a href="#" aria-label="Facebook">
            <FacebookIcon width={16} height={16} />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon width={16} height={16} />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon width={16} height={16} />
          </a>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="container footer__columns">
        {footerColumns.map((column) => (
          <div className="footer__column" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__column footer__subscribe">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubscribe}>
            <div className="footer__subscribe-row">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
            <p className="footer__subscribe-note">Lore imp sum dolor Amit</p>
          </form>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="container footer__bottom">
        <p>Made With Love By Finland All Rights Reserved</p>
      </div>
    </footer>
  );
}
