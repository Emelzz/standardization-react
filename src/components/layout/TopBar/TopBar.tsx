import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../../icons';
import './TopBar.css';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href="tel:+12255550118" className="topbar__item">
            <PhoneIcon width={14} height={14} />
            (225) 555-0118
          </a>
          <a href="mailto:michelle.rivera@example.com" className="topbar__item">
            <MailIcon width={14} height={14} />
            michelle.rivera@example.com
          </a>
        </div>
        <p className="topbar__promo">Follow Us and get a chance to win 80% off</p>
        <div className="topbar__social">
          <span>Follow Us :</span>
          <a href="#" aria-label="Facebook">
            <FacebookIcon width={14} height={14} />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon width={14} height={14} />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon width={14} height={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
