import React from 'react'
import Grid from '@material-ui/core/Grid'

const TopCenterSideComponent = () => {
  return (
    <React.Fragment>   
      <Grid container className="marginTop100px paddingLeft60px">
        <Grid item xs={12} >
          {[0,1,2,3,4,5,6,7,8].map((i) =>(
            <div key={i} className="topCenterElementBackStyle center">
              <img src={`${process.env.PUBLIC_URL}/images/onnna.jpg`} alt="onnna" className="topCenterChildImageStyle"  />
              <p className="bold topCenterSideChildNameStyle">青木克臣</p>
              <p className="text-light topCenterSideChildNameStyle2">あおきかつおみ</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TopCenterSideComponent;
