export default function AdminPage() {
  return (
    <div className="page-wrap">
      <section className="page-header">
        <p className="tag">Founder controls</p>
        <h1>Site operations dashboard</h1>
      </section>

      <div className="dashboard-grid">
        <div className="content-card">
          <h3>Publication status</h3>
          <p className="status-pill status-pill--dark">LOCKED</p>
        </div>
        <div className="content-card">
          <h3>Live products</h3>
          <p>12 active picks</p>
        </div>
        <div className="content-card">
          <h3>Markets</h3>
          <p>US, EG, SA, UAE</p>
        </div>
      </div>

      <div className="content-card">
        <h3>Launch authorization</h3>
        <input type="text" className="input" placeholder="Enter authorization phrase" />
        <button type="button" className="primary-btn">Authorize public launch</button>
      </div>
    </div>
  );
}
