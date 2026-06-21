export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, background: 'linear-gradient(135deg, #2563EB, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>404</h1>
      <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem' }}>This page could not be found.</p>
      <a href="/" style={{ padding: '0.75rem 2rem', borderRadius: '9999px', background: '#2563EB', color: '#fff', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
        Back to Home
      </a>
    </div>
  );
}
