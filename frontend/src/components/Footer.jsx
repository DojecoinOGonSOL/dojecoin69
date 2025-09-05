import React from 'react';
import { Twitter, MessageCircle, Users } from 'lucide-react';

const Footer = () => {
  const logoUrl = 'https://customer-assets.emergentagent.com/job_dojecoin-social/artifacts/bjg5dbvy_Kmm0DAd7_400x400.png';

  return (
    <footer className="dark-full-container" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '60px', paddingBottom: '40px' }}>
      <div className="dark-content-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoUrl} 
                alt="Dojecoin Logo" 
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
              <span className="heading-3">$DOJECOIN</span>
            </div>
            <p className="body-medium mb-6">
              The first derivative of Dogecoin from 2014, now on Solana Network.
            </p>
            <p className="body-muted">
              Much innovation, very blockchain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="body-medium dark-transition" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                About
              </a>
              <a 
                href="https://solscan.io/token/CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump"
                target="_blank"
                rel="noopener noreferrer"
                className="body-medium dark-transition" 
                style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              >
                Token Info
              </a>
              <a href="#community" className="body-medium dark-transition" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                Community
              </a>
            </div>
          </div>

          {/* Token Info */}
          <div>
            <h4 className="heading-3 mb-6">Token Details</h4>
            <div className="mb-4">
              <p className="body-muted mb-2">Contract Address:</p>
              <p className="body-small" style={{ fontFamily: 'monospace', wordBreak: 'break-all', color: 'var(--brand-primary)' }}>
                CqXWmq5gtHbhDfuThJMecKyrCMx4pXc2Vch9mZwMpump
              </p>
            </div>
            <div>
              <p className="body-muted mb-2">Network:</p>
              <p className="body-medium">Solana</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="heading-3 mb-6">Community</h4>
            <div className="flex gap-4">
              <a 
                href="https://t.me/+kR-q_xbXn-QwOTFh"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-transition"
                style={{ 
                  color: 'var(--text-muted)', 
                  padding: '8px', 
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://x.com/DojecoinOGonSOL/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-transition"
                style={{ 
                  color: 'var(--text-muted)', 
                  padding: '8px', 
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://x.com/i/communities/1962317903954330021"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-transition"
                style={{ 
                  color: 'var(--text-muted)', 
                  padding: '8px', 
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <Users size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '30px', textAlign: 'center' }}>
          <p className="body-muted">
            © 2024 $DOJECOIN. Built on Solana Network. Much copyright, very legal.
          </p>
          <p className="body-muted mt-4" style={{ fontSize: '14px' }}>
            This is not financial advice. Do your own research. Cryptocurrency investments are subject to market risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;