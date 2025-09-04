import React from 'react';
import Spline from '@splinetool/react-spline';
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
              <button className="btn-primary dark-button-animate">
                <span>Buy $DOJECOIN</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary dark-button-animate">
                View Chart
              </button>
            </div>
            
            <div className="mt-12">
              <p className="body-muted mb-4">Token Address:</p>
              <div className="dark-card" style={{ padding: '16px', fontFamily: 'monospace', fontSize: '14px', wordBreak: 'break-all' }}>
                CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump
              </div>
            </div>
          </div>

          {/* Right Side - Spline 3D */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '700px', height: '700px', overflow: 'visible', position: 'relative' }}>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;