import React from 'react'
import Grid from '@material-ui/core/Grid'
import TopLeftSideComponent from "./TopLeftSideComponent"
import TopCenterSideComponent from "./TopCenterSideComponent"
import TopRightSideComponent from "./TopRightSideComponent"
import HeaderComponent from "./HeaderComponent"

const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Grid container className="top-back">
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <TopLeftSideComponent />
        </Grid>
        <Grid item xs={6}>
          <TopCenterSideComponent />
        </Grid>
        <Grid item xs={2}>
          <TopRightSideComponent />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
