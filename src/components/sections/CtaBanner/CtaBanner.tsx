import './CtaBanner.css';

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__grid">
        <div className="cta-banner__content">
          <span className="eyebrow">Designing Better Experience</span>
          <h2>Problems trying to resolve the conflict between</h2>
          <p className="cta-banner__price">$16.48</p>
          <p className="cta-banner__description">
            Problems trying to resolve the conflict between the two major realms of Classical physics:
          </p>
          <button type="button" className="btn btn-primary">
            Add Your Call To Action
          </button>
        </div>
        <div className="cta-banner__image">
          <img src="https://loremflickr.com/800/800/kitchen,utensils,cooking" alt="Kitchen utensils" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
