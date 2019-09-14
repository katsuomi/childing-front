import React from 'react'

const TopLeftSideComponent = () => {
  return (
    <React.Fragment>
      <div className="marginTop30px center leftSideBackGroundStyle">
        <h1 className="topLeftSideHeadLetter">てんき</h1>
        <p><img src={`${process.env.PUBLIC_URL}/images/sunny.png`} alt="sunny" className="topLeftSideWeatherImageStyle"  /></p>
        <h1 className="topLeftSideHeadLetter">きおん</h1>
        <p className="marginTopminus10px"><span className="fs35px bold">28</span>℃</p>
        <h1 className="topLeftSideHeadLetter">しつど</h1>
        <p className="marginTopminus10px"><span className="fs35px bold">52</span>%</p>
        <p className="marginTop160px fs20px">9/15(日)</p>
        <span className="topLeftSideNowTimeStyle">
          10:00
        </span>
      </div>
    </React.Fragment>
  );
}

export default TopLeftSideComponent;
