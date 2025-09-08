import React from 'react';
import { MessageCircle, Twitter, Users } from 'lucide-react';

const Community = () => {
  const socialLinks = [
    {
      name: 'Telegram',
      icon: <MessageCircle size={24} />,
      description: 'Join our main community chat',
      url: 'https://t.me/dojecoinOGonSOL',
      members: '5.2K+'
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter size={24} />,
      description: 'Follow for latest updates',
      url: 'https://x.com/DojecoinOGonSOL/',
      members: '12.8K+'
    },
    {
      name: 'X Community',
      icon: <Users size={24} />,
      description: 'Join our X community',
      url: 'https://x.com/i/communities/1962317903954330021',
      members: '3.4K+'
    }
  ];

  return (
    <section id="community" className="dark-full-container pad-large">
      <div className="dark-content-container">
        <div className="text-center mb-12">
          <h2 className="display-large mb-8">Join the Pack</h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Connect with fellow $DOJECOIN believers across our vibrant community platforms. 
            Much community, very engagement!
          </p>
        </div>

        <div className="community-grid">
          {socialLinks.map((link, index) => (
            <div key={index} className="dark-card dark-hover">
              <div className="flex items-center gap-4 mb-6">
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  background: 'rgba(79, 124, 255, 0.1)', 
                  padding: '16px', 
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="heading-3">{link.name}</h3>
                  <p className="body-muted">{link.members} members</p>
                </div>
              </div>
              
              <p className="body-medium mb-6">{link.description}</p>
              
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full dark-button-animate"
                style={{ textDecoration: 'none', justifyContent: 'center' }}
              >
                Join {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="dark-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px' }}>
            <h3 className="heading-2 mb-4" style={{ color: 'var(--brand-primary)' }}>
              Why Join Our Community?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              <li className="body-medium mb-3">🚀 Get early updates on developments</li>
              <li className="body-medium mb-3">💎 Connect with diamond-handed holders</li>
              <li className="body-medium mb-3">🎯 Participate in community events</li>
              <li className="body-medium mb-3">📈 Share trading insights and analysis</li>
              <li className="body-medium">🤝 Build lasting friendships in the crypto space</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;