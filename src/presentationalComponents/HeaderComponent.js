import React from 'react'

const HeaderComponent = () => {
  return (
    <React.Fragment>   
      {/* ごめんなさい。 */}
      <a href="/"><p className="center"><img src={`${process.env.PUBLIC_URL}/images/childing.svg`} alt="child" className="headerLogoStyle" /></p></a>
    </React.Fragment>
  );
}

export default HeaderComponent;
