import React    from 'react';
import { Link } from 'react-router-dom';
import FWLogo   from 'IMG/favicon.png';

const BrandBar = () => {
  return(
    <nav className="navbar mi-brand-bar justify-content-end">
      <Link className="nav-link text-white" to="http://www.michigan.gov/treasury" target="_blank">Home</Link>
      <Link className="nav-link text-white" to="http://www.michigan.gov/treasury/0,4679,7-121--8483--,00.html" target="_blank">Contact</Link>
      <Link className="nav-link text-white" to="http://www.michigan.gov/" target="_blank" title="MI Gov Home">
        <img src={FWLogo} alt="Logo" height="20" width="20" />
        FW Projects
      </Link>
    </nav>
  );
}

export default BrandBar;
