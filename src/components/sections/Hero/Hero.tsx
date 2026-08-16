import { ArrowRightIcon } from '../../icons';
import './Hero.css';

interface HeroTile {
  id: string;
  itemsLabel: string;
  title: string;
  image: string;
  bg: 'pink' | 'blue' | 'sage';
}

const heroTiles: HeroTile[] = [
  { id: 'plates', itemsLabel: '5 Items', title: 'FURNITURE', image: 'https://loremflickr.com/1000/1200/ceramics,tableware', bg: 'pink' },
  { id: 'succulent', itemsLabel: '5 Items', title: 'FURNITURE', image: 'https://loremflickr.com/1000/600/succulent,plant,pot', bg: 'pink' },
  { id: 'pendant', itemsLabel: '5 Items', title: 'FURNITURE', image: 'https://loremflickr.com/600/600/pendant-light,lamp', bg: 'blue' },
  { id: 'vases', itemsLabel: '5 Items', title: 'FURNITURE', image: 'https://loremflickr.com/600/600/ceramic,vases', bg: 'blue' },
];

function HeroCard({ tile }: { tile: HeroTile }) {
  return (
    <a href="#" className={`hero-card hero-card--${tile.bg}`}>
      <img src={tile.image} alt={tile.title} loading="eager" />
      <div className="hero-card__content">
        <span className="hero-card__count">{tile.itemsLabel}</span>
        <h2>{tile.title}</h2>
        <span className="hero-card__link">
          Read More <ArrowRightIcon width={14} height={14} />
        </span>
      </div>
    </a>
  );
}

export function Hero() {
  const [plates, succulent, pendant, vases] = heroTiles;

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__cell hero__cell--large">
          <HeroCard tile={plates} />
        </div>
        <div className="hero__cell hero__cell--top">
          <HeroCard tile={succulent} />
        </div>
        <div className="hero__cell hero__cell--split">
          <HeroCard tile={pendant} />
          <HeroCard tile={vases} />
        </div>
      </div>
    </section>
  );
}
