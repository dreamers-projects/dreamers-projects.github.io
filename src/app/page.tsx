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

      {/* Services Section */}
      <section id="services" className="section animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">Layanan <span className="gradient-text">Kami</span></h2>
        <div className="grid-3">
          <div className="glass-card">
            <div className="card-icon">✧</div>
            <h3 className="card-title">UI/UX Design</h3>
            <p className="card-desc">
              Mendesain antarmuka yang tidak hanya indah dipandang, tetapi juga 
              intuitif dan memberikan pengalaman pengguna yang luar biasa.
            </p>
          </div>
          
          <div className="glass-card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Web Development</h3>
            <p className="card-desc">
              Membangun website modern, cepat, dan responsif menggunakan 
              teknologi terkini seperti Next.js dan React.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-icon">⌘</div>
            <h3 className="card-title">Branding</h3>
            <p className="card-desc">
              Menciptakan identitas visual yang kuat dan berkarakter untuk 
              membuat brand Anda tampil menonjol.
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
              <div className="project-image" style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}></div>
            </div>
            <span className="badge">Web App</span>
            <h3 className="card-title">Nova Dashboard</h3>
            <p className="card-desc">
              Platform analitik dengan visualisasi data real-time dan dashboard 
              interaktif yang kustomizable.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="project-image-container">
              <div className="project-image" style={{ background: 'linear-gradient(45deg, #10b981, #3b82f6)' }}></div>
            </div>
            <span className="badge">E-Commerce</span>
            <h3 className="card-title">Lumina Storefront</h3>
            <p className="card-desc">
              Toko online premium dengan pengalaman belanja yang mulus dan 
              integrasi pembayaran multi-channel.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="section-title">Kenali <span className="gradient-text">The Dreamers</span></h2>
        <div className="grid-3">
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div className="profile-image">
              {/* Dummy Image Profile */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Team Member 1" />
            </div>
            <h3 className="card-title">Alex Chandra</h3>
            <p className="card-desc" style={{ marginBottom: '1rem' }}>Lead Developer</p>
            <span className="badge">Next.js Wizard</span>
          </div>

          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div className="profile-image">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica&backgroundColor=ffdfbf" alt="Team Member 2" />
            </div>
            <h3 className="card-title">Sarah Maheswari</h3>
            <p className="card-desc" style={{ marginBottom: '1rem' }}>UI/UX Designer</p>
            <span className="badge">Pixel Perfect</span>
          </div>

          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div className="profile-image">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=c0aede" alt="Team Member 3" />
            </div>
            <h3 className="card-title">Bima Sakti</h3>
            <p className="card-desc" style={{ marginBottom: '1rem' }}>Project Manager</p>
            <span className="badge">Scrum Master</span>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          Punya Ide Hebat?
        </h2>
        <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Mari kita diskusikan bagaimana kami bisa membantu mewujudkan ide Anda.
        </p>
        <a href="mailto:hello@dreamers-projects.com" className="btn-primary">
          Hubungi Kami
        </a>
        
        <div style={{ marginTop: '4rem', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Dreamers Projects. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
