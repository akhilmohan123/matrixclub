import React, { useRef } from 'react';

const New = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(15, 12, 41, 0.95)' }}>
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#" style={{ 
            background: 'linear-gradient(45deg, #00c6ff, #0072ff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 198, 255, 0.3)'
          }}>
            Matrix Club
          </a>
          <button 
            onClick={scrollToContact}
            className="btn btn-outline-light rounded-pill px-4 border-2 position-relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
              border: 'none',
              boxShadow: '0 0 20px rgba(0, 198, 255, 0.3)'
            }}
          >
            Connect
          </button>
        </div>
      </nav>

      {/* Hero Section with enhanced animation */}
      <div className="min-vh-100 d-flex align-items-center justify-content-center text-white" style={{ paddingTop: '76px' }}>
        <div className="container text-center py-5">
          <h1 className="display-2 fw-bold mb-4" style={{ 
            background: 'linear-gradient(45deg, #00c6ff, #0072ff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(0, 198, 255, 0.2)'
          }}>
            Where Innovation Meets Investment
          </h1>
          <p className="lead mb-5" style={{ color: '#a0d8ef' }}>Choose your path to success</p>
          
          <div className="row justify-content-center g-4">
            {/* Startup Card with enhanced effects */}
            <div className="col-md-5">
              <div className="card h-100 text-white border-0 rounded-4 p-4" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(0, 198, 255, 0.1)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 198, 255, 0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 198, 255, 0.1)';
                }}
              >
                <div className="card-body text-center">
                  <div className="display-4 mb-3">🚀</div>
                  <h3 className="card-title fw-bold">For Startups</h3>
                  <p className="card-text text-light">Launch your vision with the right backing</p>
                </div>
              </div>
            </div>

            {/* Investor Card with enhanced effects */}
            <div className="col-md-5">
              <div className="card h-100 text-white border-0 rounded-4 p-4"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(0, 198, 255, 0.1)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 198, 255, 0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 198, 255, 0.1)';
                }}
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

      {/* Motivational Quotes Section */}
      <div className="container py-5">
        <div className="row g-4">
          {[
            { icon: '✨', quote: '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."', author: '- Albert Schweitzer' },
            { icon: '🌟', quote: '"The only way to do great work is to love what you do. If you havent found it yet, keep looking. Dont settle."', author: '- Steve Jobs' },
            { icon: '⭐', quote: '"Success usually comes to those who are too busy to be looking for it."', author: '- Henry David Thoreau' }
          ].map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 text-white border-0 rounded-4"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(10px)',
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(0, 198, 255, 0.1)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 198, 255, 0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 198, 255, 0.1)';
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="display-5 mb-3">{item.icon}</div>
                  <p className="card-text fs-5 fw-light mb-3" style={{ fontStyle: 'italic' }}>{item.quote}</p>
                  <p className="card-text text-light fw-bold">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section with enhanced effects */}
      <div ref={contactRef} className="container py-5 text-white text-center">
        <h2 className="display-4 fw-bold mb-5" style={{ 
          background: 'linear-gradient(45deg, #00c6ff, #0072ff)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(0, 198, 255, 0.2)'
        }}>
          Connect With Us
        </h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card text-white border-0 rounded-4 p-4"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(0, 198, 255, 0.1)'
              }}
            >
              <div className="card-body">
                <p className="fs-5 mb-3">
                  <i className="bi bi-envelope-fill me-2"></i>
                </p>
                <p className="fs-5 mb-3">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+918590843747" className="text-decoration-none text-white">
                    +91 8590843747
                  </a>
                </p>
                <p className="fs-5 mb-3">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+919778190256" className="text-decoration-none text-white">
                    +91 9778190256
                  </a>
                </p>
                <p className="fs-5 mb-0">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+918547090714" className="text-decoration-none text-white">
                    +91 8547090714
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