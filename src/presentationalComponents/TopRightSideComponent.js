import React from 'react'

const TopRightSideComponent = () => {
  return (
    <React.Fragment>
      <div container className="marginTop116px">
        <span className="topAbsenceStyle">けっせき</span>
        <p className="center topRightAbsenceBorderBottom"><span className="boldMore fs35px">9</span>人</p>
        {[0,1,2,3,4,5,6,7,8].map((i) =>(
          <div className="center" key={i}>
            <p className="text-light">青木克臣</p>
            <p className="text-light topCenterSideChildNameStyle2">あおきかつおみ</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default TopRightSideComponent;
