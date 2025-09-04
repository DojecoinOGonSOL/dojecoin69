import React from 'react';

const Header = () => {
  const logoUrl = 'https://customer-assets.emergentagent.com/job_dojecoin-social/artifacts/bjg5dbvy_Kmm0DAd7_400x400.png';

  return (
    <header className="dark-header">
      <div className="flex items-center gap-4">
        <img 
          src={logoUrl} 
          alt="Dojecoin Logo" 
          className="dark-logo"
        />
        <span className="heading-2">$DOJECOIN</span>
      </div>
      
      <nav className="dark-nav">
        <a href="#about" className="dark-nav-link">About</a>
        <a href="#token" className="dark-nav-link">Token</a>
        <a href="#community" className="dark-nav-link">Community</a>
      </nav>
    </header>
  );
};

export default Header;