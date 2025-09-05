import React from 'react';
import { TrendingUp, Users, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Original Heritage',
      description: 'First memecoin on Solana of the first derivative of the legendary Dogecoin from 2014 called Dojecoin.'
    },
    {
      icon: <Users size={32} />,
      title: 'Community Driven',
      description: 'Powered by a passionate community of believers in the original Dojecoin contract on Solana. First to much profit. Much wow.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Lore',
      description: (
        <span>
          Discover the origins in the{' '}
          <a 
            href="https://bitcointalk.org/index.php?topic=615668.0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--brand-primary)', 
              textDecoration: 'underline',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand-active)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--brand-primary)'}
          >
            original forum post
          </a>
          {' '}about creating Dojecoin back in 2014.
        </span>
      )
    }
  ];

  return (
    <section id="about" className="dark-full-container pad-xxlarge">
      <div className="dark-content-container">
        <div className="text-center mb-12">
          <h2 className="display-large mb-8">About $DOJECOIN</h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Dojecoin is the first derivative of Dogecoin from 2014. $Dojecoin is the first Dojecoin meme on the Solana Network.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '80px' }}>
          {features.map((feature, index) => (
            <div key={index} className="dark-card dark-hover text-center">
              <div style={{ color: 'var(--brand-primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                {feature.icon}
              </div>
              <h3 className="heading-2 mb-4">{feature.title}</h3>
              <p className="body-medium">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="dark-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px' }}>
            <h3 className="heading-1 mb-8" style={{ color: 'var(--brand-primary)' }}>
              The Legacy Continues
            </h3>
            <p className="body-large" style={{ lineHeight: '1.6' }}>
              From the iconic "much wow" to "very crypto," $DOJECOIN carries forward the playful spirit 
              that made Dogecoin a cultural phenomenon. Now enhanced with Solana's cutting-edge technology, 
              we're building the next chapter of meme coin history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;