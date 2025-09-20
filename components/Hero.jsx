import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const logoUrl = 'https://customer-assets.emergentagent.com/job_dojecoin-social/artifacts/bjg5dbvy_Kmm0DAd7_400x400.png';

  return (
    <section className="dark-full-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="dark-content-container">
        <div className="hero-layout">
          {/* Left Content */}
          <div className="hero-content">
            <div className="flex items-center gap-4 mb-8">
              <Image 
                src={logoUrl} 
                alt="Dojecoin Logo" 
                width={80}
                height={80}
                style={{ borderRadius: '50%' }}
              />
              <h1 className="display-huge">$DOJECOIN</h1>
            </div>
            
            <h2 className="display-medium mb-8" style={{ color: 'var(--brand-primary)' }}>
              The First Derivative of Dogecoin from 2014
            </h2>
            
            <p className="body-large mb-12" style={{ lineHeight: '1.6' }}>
              Experience the evolution of the classic meme. $DOJECOIN brings the original Dojecoin spirit to the Solana Network with community-driven features.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="https://pump.fun/coin/CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary dark-button-animate hero-btn"
              >
                <span>Buy $DOJECOIN</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://dexscreener.com/solana/8k1zdEn8RVCGELtMwbWMKqbvMYTWUX9WRv2gk3B2g6ET"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary dark-button-animate hero-btn"
              >
                View Chart
              </a>
            </div>
            
            <div className="mt-12">
              <p className="body-muted mb-4">Token Address:</p>
              <div className="dark-card" style={{ 
                padding: '20px', 
                fontFamily: 'monospace', 
                fontSize: '14px', 
                wordBreak: 'break-all',
                borderRadius: '0.5rem'
              }}>
                CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="doje-img">
              <Image 
                src="/shiba_inu_cartoon_transparent.png"
                alt="dojecoin"
                width={500}
                height={500}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 30px rgba(79, 124, 255, 0.3))'
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
