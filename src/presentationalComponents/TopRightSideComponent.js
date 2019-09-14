import React from 'react'
import Grid from '@material-ui/core/Grid'

const TopRightSideComponent = () => {
  return (
    <React.Fragment>
      <Grid container className="marginTop30px">
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <span className="topAbsenceStyle">けっせき</span>
          <p className="center topRightAbsenceBorderBottom"><span className="boldMore fs35px">2</span>人</p>
          <p className="text-light center">伊藤順子</p>
          <p className="text-light center topCenterSideChildNameStyle2">じゅんちゃん</p>
          <p className="text-light center">武田圭子</p>
          <p className="text-light center topCenterSideChildNameStyle2">けいちゃん</p>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TopRightSideComponent;
