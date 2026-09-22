import Link from 'next/link';
import { stores } from '../../data/products';

export default function StoresPage() {
  return (
    <div className="page-wrap">
      <section className="page-header">
        <p className="tag">Global retail map</p>
        <h1>Stores and marketplaces we watch.</h1>
      </section>

      <div className="store-grid">
        {stores.map((store) => (
          <article key={store.name} className="content-card">
            <p className="eyebrow">{store.region}</p>
            <h3>{store.name}</h3>
            <p>{store.description}</p>
          </article>
        ))}
      </div>

      <div className="cta-panel">
        <h3>Discovery should feel global and clear.</h3>
        <Link href="/" className="primary-btn">Explore picks</Link>
      </div>
    </div>
  );
}
