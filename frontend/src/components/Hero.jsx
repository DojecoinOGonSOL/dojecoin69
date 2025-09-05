import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const logoUrl = 'https://customer-assets.emergentagent.com/job_dojecoin-social/artifacts/bjg5dbvy_Kmm0DAd7_400x400.png';

  return (
    <section className="dark-full-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="dark-content-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', minHeight: '80vh' }}>
          {/* Left Content */}
          <div style={{ flex: 1, maxWidth: '600px' }}>
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={logoUrl} 
                alt="Dojecoin Logo" 
                style={{ width: '80px', height: '80px', borderRadius: '50%' }}
              />
              <h1 className="display-huge">$DOJECOIN</h1>
            </div>
            
            <h2 className="display-medium mb-8" style={{ color: 'var(--brand-primary)' }}>
              The First Derivative of Dogecoin from 2014
            </h2>
            
            <p className="body-large mb-12" style={{ lineHeight: '1.6' }}>
              Experience the evolution of the classic meme. $DOJECOIN brings the original Dogecoin spirit to the Solana Network with enhanced utility and community-driven features.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://jup.ag/tokens/CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary dark-button-animate"
                style={{ textDecoration: 'none' }}
              >
                <span>Buy $DOJECOIN</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://dexscreener.com/solana/8k1zdEn8RVCGELtMwbWMKqbvMYTWUX9WRv2gk3B2g6ET"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary dark-button-animate"
                style={{ textDecoration: 'none' }}
              >
                View Chart
              </a>
            </div>
            
            <div className="mt-12">
              <p className="body-muted mb-4">Token Address:</p>
              <div className="dark-card" style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', wordBreak: 'break-all' }}>
                CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump
              </div>
            </div>
          </div>

          {/* Right Side - Shiba Inu Image */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src="https://cdn.pixabay.com/photo/2023/03/03/19/19/doge-7828307_1280.jpg"
                alt="Shiba Inu Dog - DOJECOIN Mascot"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain',
                  borderRadius: '20px',
                  filter: 'drop-shadow(0 0 30px rgba(79, 124, 255, 0.3)) hue-rotate(200deg) saturate(1.1) brightness(1.05) contrast(1.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;