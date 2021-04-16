import * as React from "react";
import { Link } from "gatsby";
import { TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti';

const Header: React.FunctionComponent = () => (
  <header
    style={{
      background: `whitesmoke`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header--item">
      <Link to="https://www.linkedin.com/in/supuilam/">
        <TiSocialInstagram />
      </Link>
      <Link to="https://www.instagram.com/seyjaibao/">
        <TiSocialLinkedin />
      </Link>
    </div>
  </header>
);

export default Header;
