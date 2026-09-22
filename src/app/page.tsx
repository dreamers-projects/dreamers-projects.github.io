export default function Home() {
  return (
    <main className="main-layout">
      {/* Decorative background blobs */}
      <div className="blob blob-1 animate-float"></div>
      <div className="blob blob-2 animate-float"></div>

      <div className="glass-container content-wrapper animate-fade-in">
        <h1 className="title">
          Welcome to <br />
          <span className="gradient-text">Dreamers Projects</span>
        </h1>
        
        <p className="subtitle">
          Experimental lab & collaborative playground for innovative software.
        </p>
        
        <div className="button-group">
          <a href="https://github.com/dreamers-projects" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View GitHub
          </a>
          <button className="btn-secondary">
            Explore Projects
          </button>
        </div>
      </div>
    </main>
  );
}
