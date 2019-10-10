import React    from 'react';
import { Link } from 'react-router-dom';
import FWLogo   from 'IMG/favicon.png';

const BrandBar = () => {
  return(
    <nav className="navbar mi-brand-bar justify-content-end">
      <Link className="nav-link text-white" to="#" target="_blank">Home</Link>
      <Link className="nav-link text-white" to="#" target="_blank">Contact</Link>
      <Link className="nav-link text-white" to="#" target="_blank" title="MI Gov Home">
        <img src={FWLogo} alt="Logo" height="20" width="20" />
        FW Projects
      </Link>
    </nav>
  );
}

export default BrandBar;
