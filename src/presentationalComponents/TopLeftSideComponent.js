import React from 'react'
const today = new Date();

const TopLeftSideComponent = () => {
  return (
    <React.Fragment>
      <div className="marginTop116px center leftSideBackGroundStyle">
        <h1 className="topLeftSideHeadLetter">てんき</h1>
        <p><img src={`${process.env.PUBLIC_URL}/images/sunny.png`} alt="sunny" className="topLeftSideWeatherImageStyle"  /></p>
        <h1 className="topLeftSideHeadLetter">きおん</h1>
        <p className="marginTopminus10px"><span className="fs35px bold">31</span>℃</p>
        <h1 className="topLeftSideHeadLetter">しつど</h1>
        <p className="marginTopminus10px"><span className="fs35px bold">67</span>%</p>
        <p className="marginTop160px fs20px">{today.getMonth() + 1}/{today.getDate()}(土)</p>
        <span className="topLeftSideNowTimeStyle">
          {today.getHours()}:{today.getMinutes()}
        </span>
      </div>
    </React.Fragment>
  );
}

export default TopLeftSideComponent;
