import type { Product } from '../../../types/product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);
  const hasDiscount = product.discountPercentage > 0;

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__category">{product.category}</p>
      <p className="product-card__price">
        {hasDiscount && <span className="product-card__price--original">{formatPrice(product.price)}</span>}
        <span className="product-card__price--sale">{formatPrice(discountedPrice)}</span>
      </p>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="product-card product-card--skeleton" aria-hidden="true">
      <div className="product-card__image skeleton-block" />
      <div className="skeleton-line skeleton-line--title" />
      <div className="skeleton-line skeleton-line--sub" />
      <div className="skeleton-line skeleton-line--price" />
    </div>
  );
}
