export default function LoginPage() {
  return (
    <div className="page-wrap narrow">
      <section className="page-header">
        <p className="tag">Founder access</p>
        <h1>Admin login</h1>
      </section>

      <form className="login-card">
        <label>
          Email
          <input type="email" placeholder="founder@dailycomfyfinds.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button type="submit" className="primary-btn">Access dashboard</button>
      </form>
    </div>
  );
}
