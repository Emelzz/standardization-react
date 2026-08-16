import { StarIcon } from '../../icons';
import './Testimonial.css';

const RATING = 4;
const TOTAL_STARS = 5;

const GALLERY_TAGS = [
  'camera,vintage',
  'fashion,portrait',
  'city,street',
  'flowers,bouquet',
  'portrait,woman',
  'writing,desk',
  'marble,texture',
  'aerial,landscape',
  'ocean,blue',
];

const galleryImages = GALLERY_TAGS.map((tag) => `https://loremflickr.com/360/360/${tag}`);

export function Testimonial() {
  return (
    <section className="section testimonial">
      <div className="container testimonial__grid">
        <div className="testimonial__content">
          <h2>What they say about us</h2>
          <img
            className="testimonial__avatar"
            src="https://loremflickr.com/240/240/portrait,woman,designer"
            alt="Regina Miles"
          />
          <div className="testimonial__stars" aria-label={`Rated ${RATING} out of ${TOTAL_STARS} stars`}>
            {Array.from({ length: TOTAL_STARS }).map((_, index) => (
              <StarIcon key={index} width={18} height={18} filled={index < RATING} />
            ))}
          </div>
          <p className="testimonial__quote">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
          <p className="testimonial__name">Regina Miles</p>
          <p className="testimonial__role">Designer</p>
        </div>

        <div className="testimonial__gallery">
          {galleryImages.map((src, index) => (
            <img key={index} src={src} alt="" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
