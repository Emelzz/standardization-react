import { BookIcon, GridIcon, TrendingUpIcon } from '../../icons';
import './Services.css';

const services = [
  { id: 'easy-wins', Icon: BookIcon, title: 'Easy Wins', description: 'Get your best looking smile now!' },
  {
    id: 'concrete',
    Icon: GridIcon,
    title: 'Concrete',
    description: 'Defalcate is most focused in helping you discover your most beautiful smile',
  },
  { id: 'hack-growth', Icon: TrendingUpIcon, title: 'Hack Growth', description: 'Overcame any hurdle or any other problem.' },
];

export function Services() {
  return (
    <section className="section services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Featured Products</span>
          <h2>The Best Services</h2>
          <p className="subtitle">Problems trying to resolve the conflict between</p>
        </div>

        <div className="services__grid">
          {services.map(({ id, Icon, title, description }) => (
            <div className="services__item" key={id}>
              <span className="services__icon">
                <Icon width={28} height={28} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
