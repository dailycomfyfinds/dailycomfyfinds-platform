import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <section className="page-header">
        <p className="tag">About Daily Comfy Finds</p>
        <h1>We simplify product discovery without the noise.</h1>
      </section>

      <div className="content-grid">
        <article className="content-card">
          <h3>Our mission</h3>
          <p>
            Daily Comfy Finds helps people discover practical products that improve their routines without forcing them through endless listings, fake hype, or low-value recommendations.
          </p>
        </article>

        <article className="content-card">
          <h3>How we review</h3>
          <p>
            Each product is evaluated across utility, value, practicality, demand, and quality of presentation so recommendations feel useful, not manipulative.
          </p>
        </article>

        <article className="content-card">
          <h3>Why it matters</h3>
          <p>
            Real life is full of clutter, noise, and inflated suggestions. We aim to make discovery sharper, cleaner, and easier to trust.
          </p>
        </article>
      </div>

      <div className="cta-panel">
        <h3>Look for useful products, not empty hype.</h3>
        <Link href="/" className="primary-btn">Back to home</Link>
      </div>
    </div>
  );
}
