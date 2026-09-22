import Link from 'next/link';
import { products } from '../data/products';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <span className="score-badge">DCF {product.score}/7</span>
      </div>
      <div className="product-card__body">
        <p className="eyebrow">{product.market}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="product-card__meta">
          <span>Utility {product.utility}/7</span>
          <span>Value {product.value}/7</span>
        </div>
        <Link href={`/products/${product.slug}`} className="primary-btn">
          View review
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="tag">Daily recommendations for everyday life</p>
          <h1>Curated finds that actually earn a place in your life.</h1>
          <p className="hero__text">
            We evaluate products across global stores by real utility, value, practicality, and appeal.
          </p>
          <div className="hero__actions">
            <Link href="#discover" className="primary-btn">Browse picks</Link>
            <Link href="/about" className="secondary-btn">Our process</Link>
          </div>
          <div className="market-row">
            <span>Markets:</span>
            <button type="button">US</button>
            <button type="button">EG</button>
            <button type="button">SA</button>
            <button type="button">UAE</button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="feature-panel">
            <div className="feature-panel__header">
              <span className="dot dot--green" />
              <span className="dot dot--amber" />
              <span className="dot dot--red" />
            </div>
            <div className="product-spotlight">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" alt="Featured product" />
              <div>
                <p className="eyebrow">Top rated</p>
                <h3>Motion sensor under-cabinet light</h3>
                <strong>6.9/7</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-header" id="discover">
        <div>
          <p className="tag">Product shortlist</p>
          <h2>Evaluated finds worth discovering</h2>
        </div>
        <span className="status-pill">DCF quality gate passed</span>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </>
  );
}
