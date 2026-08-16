import { featuredPosts } from '../../../data/featuredPosts';
import { ClockIcon, CommentIcon, ArrowRightIcon } from '../../icons';
import './FeaturedPosts.css';

export function FeaturedPosts() {
  return (
    <section className="section featured-posts">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Practice Advice</span>
          <h2>Featured Posts</h2>
        </div>

        <div className="featured-posts__grid">
          {featuredPosts.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-card__image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="post-card__badge">NEW</span>
              </div>
              <div className="post-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{post.title}</h3>
              <p className="post-card__description">{post.description}</p>
              <div className="post-card__meta">
                <span>
                  <ClockIcon width={14} height={14} />
                  {post.date}
                </span>
                <span>
                  <CommentIcon width={14} height={14} />
                  {post.comments} comments
                </span>
              </div>
              <a href="#" className="post-card__link">
                Learn More <ArrowRightIcon width={14} height={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
