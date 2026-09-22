import Link from 'next/link';
import { products } from '../../data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div className="page-wrap narrow">
        <h1>Product not found</h1>
        <Link href="/" className="primary-btn">Go home</Link>
      </div>
    );
  }

  return (
    <div className="page-wrap product-page">
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-detail__image" />
        <div className="product-detail__content">
          <p className="eyebrow">{product.market}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__summary">{product.summary}</p>

          <div className="score-row">
            <div>
              <span>DCF score</span>
              <strong>{product.score}/7</strong>
            </div>
            <div>
              <span>Utility</span>
              <strong>{product.utility}/7</strong>
            </div>
            <div>
              <span>Value</span>
              <strong>{product.value}/7</strong>
            </div>
          </div>

          <div className="detail-list">
            <div>
              <h4>Why buy it</h4>
              <ul>
                {product.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Best for</h4>
              <ul>
                {product.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/" className="primary-btn">Back to picks</Link>
        </div>
      </div>
    </div>
  );
}
