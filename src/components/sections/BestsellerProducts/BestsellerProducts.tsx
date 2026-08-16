import { useState } from 'react';
import { useGetProductsQuery, PRODUCTS_PAGE_SIZE } from '../../../api/productsApi';
import { ProductCard, ProductCardSkeleton } from '../ProductCard/ProductCard';
import './BestsellerProducts.css';

export function BestsellerProducts() {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, isFetching, isError, refetch } = useGetProductsQuery({
    limit: PRODUCTS_PAGE_SIZE,
    skip,
  });

  const products = data?.products ?? [];
  const hasMore = data ? products.length < data.total : false;

  return (
    <section className="section bestsellers">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Featured Products</span>
          <h2>Bestseller Products</h2>
          <p className="subtitle">Problems trying to resolve the conflict between</p>
        </div>

        {isError && (
          <div className="bestsellers__error">
            <p>Couldn&apos;t load products right now.</p>
            <button type="button" className="btn btn-outline" onClick={() => refetch()}>
              Try Again
            </button>
          </div>
        )}

        {!isError && (
          <>
            <div className="bestsellers__grid">
              {isLoading
                ? Array.from({ length: PRODUCTS_PAGE_SIZE }).map((_, index) => <ProductCardSkeleton key={index} />)
                : products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>

            {!isLoading && products.length === 0 && (
              <p className="bestsellers__empty">No products available right now.</p>
            )}

            {hasMore && (
              <div className="bestsellers__load-more">
                <button
                  type="button"
                  className="btn btn-outline"
                  disabled={isFetching}
                  onClick={() => setSkip((current) => current + PRODUCTS_PAGE_SIZE)}
                >
                  {isFetching ? 'Loading...' : 'Load More Products'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
