import React from 'react';
import { Navbar } from 'react-bootstrap';
import SiteLogo from '../../assets/images/sitelogo_ethereum.png';
import './index.scss';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/dashboard">
          <img
            src={SiteLogo}
            alt="site logoo"
            className="logo"
            height="48"
            width="70"
          />
        </Navbar.Brand>
        <h5 className="section-title h1">Ethereum Blockchain Project</h5>
      </Navbar>
    </div>
  );
};

export default Header;
