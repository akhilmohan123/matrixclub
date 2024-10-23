import React, { useRef } from 'react';

const New = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(15, 12, 41, 0.9)' }}>
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#" style={{ background: 'linear-gradient(45deg, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Matrix Club
          </a>
          <button 
            onClick={scrollToContact}
            className="btn btn-outline-light rounded-pill px-4 border-2 position-relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
              border: 'none'
            }}
          >
            Connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-vh-100 d-flex align-items-center justify-content-center text-white" style={{ paddingTop: '76px' }}>
        <div className="container text-center py-5">
          <h1 className="display-2 fw-bold mb-4" style={{ background: 'linear-gradient(45deg, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Where Innovation Meets Investment
          </h1>
          <p className="lead mb-5">Choose your path to success</p>
          
          <div className="row justify-content-center g-4">
            {/* Startup Card */}
            <div className="col-md-5">
              <div className="card h-100 text-white border-0 rounded-4 p-4" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transform: 'translateY(0)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center">
                  <div className="display-4 mb-3">🚀</div>
                  <h3 className="card-title fw-bold">For Startups</h3>
                  <p className="card-text text-light">Launch your vision with the right backing</p>
                </div>
              </div>
            </div>

            {/* Investor Card */}
            <div className="col-md-5">
              <div className="card h-100 text-white border-0 rounded-4 p-4"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transform: 'translateY(0)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center">
                  <div className="display-4 mb-3">💎</div>
                  <h3 className="card-title fw-bold">For Investors</h3>
                  <p className="card-text text-light">Discover the next big opportunity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          {[
            { icon: '🎯', title: 'Smart Matching', desc: 'AI-powered algorithm connects startups with the perfect investors' },
            { icon: '🔐', title: 'Secure Platform', desc: 'Enterprise-grade security for all transactions and communications' },
            { icon: '📊', title: 'Real-time Analytics', desc: 'Comprehensive dashboard with market insights and trends' }
          ].map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 text-white border-0 rounded-4"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(10px)',
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="card-body text-center p-4">
                  <div className="display-5 mb-3">{feature.icon}</div>
                  <h4 className="card-title fw-bold mb-3">{feature.title}</h4>
                  <p className="card-text text-light">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="container py-5 text-white text-center">
        <h2 className="display-4 fw-bold mb-5" style={{ background: 'linear-gradient(45deg, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Connect With Us
        </h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card text-white border-0 rounded-4 p-4"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="card-body">
                <p className="fs-5 mb-3">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:contact@futurefund.com" className="text-decoration-none text-white">
                    contact@matrixclub.com
                  </a>
                </p>
                <p className="fs-5 mb-0">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+1234567890" className="text-decoration-none text-white">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;