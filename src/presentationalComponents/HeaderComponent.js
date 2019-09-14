import React from 'react'
import {Link} from "react-router-dom"

const HeaderComponent = () => {
  return (
    <React.Fragment>   
      <Link to="/"><p className="center"><img src={`${process.env.PUBLIC_URL}/images/childing.svg`} alt="child" className="headerLogoStyle" /></p></Link>
    </React.Fragment>
  );
}

export default HeaderComponent;
