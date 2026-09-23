import React from 'react';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Decorative background blobs */}
      <div className="blob blob-1 animate-float"></div>
      <div className="blob blob-2 animate-float"></div>

      {/* Hero Section */}
      <main className="main-layout" style={{ minHeight: '90vh' }}>
        <div className="glass-container content-wrapper animate-fade-in">
          <span className="badge">Digital Creative Agency</span>
          <h1 className="title">
            Mewujudkan Ide Liar <br />
            Menjadi <span className="gradient-text">Karya Nyata</span>
          </h1>
          
          <p className="subtitle">
            Kami adalah Dreamers Projects, sekumpulan pemimpi yang percaya bahwa 
            kreativitas dipadukan dengan teknologi dapat menciptakan solusi tanpa batas.
          </p>
          
          <div className="button-group">
            <a href="#projects" className="btn-primary">
              Lihat Karya Kami
            </a>
            <a href="#contact" className="btn-secondary">
              Mari Berkolaborasi
            </a>
          </div>
        </div>
      </main>

      {/* Tech Stack Section */}
      <section id="services" className="section animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">Keahlian & <span className="gradient-text">Teknologi</span></h2>
        <div className="grid-3">
          <div className="glass-card">
            <div className="card-icon">⚙️</div>
            <h3 className="card-title">IoT & Hardware</h3>
            <p className="card-desc">
              Membangun sistem otomasi dan monitoring cerdas menggunakan 
              <strong> Arduino</strong>, <strong>NodeMCU</strong>, hingga sistem kelas industri dengan <strong>PLC</strong>.
            </p>
          </div>
          
          <div className="glass-card">
            <div className="card-icon">🌐</div>
            <h3 className="card-title">Web & Mobile Apps</h3>
            <p className="card-desc">
              Pengembangan aplikasi lintas platform dan website modern menggunakan 
              <strong> Javascript</strong>, <strong>React/ReactJS</strong>, <strong>React Native</strong>, <strong>Next.js</strong>, dan <strong>NestJS</strong> dengan basis data <strong>MySQL</strong> & <strong>PostgreSQL</strong>.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-icon">🧠</div>
            <h3 className="card-title">Desktop & Local AI</h3>
            <p className="card-desc">
              Integrasi <strong>Local AI</strong> dan pembuatan perangkat lunak handal menggunakan 
              <strong> Python</strong>, <strong>Delphi</strong>, dan <strong>VisualBasic</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">Proyek <span className="gradient-text">Pilihan</span></h2>
        <div className="grid-2">
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="project-image-container">
              {/* Fallback color/gradient if no image */}
              <div className="project-image" style={{ background: 'linear-gradient(45deg, #10b981, #047857)' }}></div>
            </div>
            <span className="badge">Hardware / IoT</span>
            <h3 className="card-title">Smart Automation System</h3>
            <p className="card-desc">
              Sistem kendali pintar terintegrasi dengan sensor real-time yang memadukan NodeMCU dan PLC untuk keperluan otomasi industri.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="project-image-container">
              <div className="project-image" style={{ background: 'linear-gradient(45deg, #6366f1, #a855f7)' }}></div>
            </div>
            <span className="badge">Fullstack & AI</span>
            <h3 className="card-title">AI-Powered Dashboard</h3>
            <p className="card-desc">
              Dashboard analitik mutakhir dengan integrasi Local AI untuk prediksi data, dibangun dengan ekosistem Next.js, NestJS, dan PostgreSQL.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="section-title">Kenali <span className="gradient-text">The Dreamers</span></h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ textAlign: 'center', maxWidth: '350px', width: '100%' }}>
            <div className="profile-image">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bambang&backgroundColor=b6e3f4" alt="Bambang Nursetia" />
            </div>
            <h3 className="card-title">Bambang Nursetia</h3>
            <p className="card-desc" style={{ marginBottom: '1rem' }}>Developer</p>
            <span className="badge">Code Enthusiast</span>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          Punya Ide Hebat?
        </h2>
        <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Mari kita diskusikan bagaimana proyek ini bisa diwujudkan.
        </p>
        <a href="mailto:bambang_nursetia@gmail.com" className="btn-primary">
          Hubungi Kami
        </a>
        
        <div style={{ marginTop: '4rem', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Dreamers Projects. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
