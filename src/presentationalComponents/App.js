import React from 'react'
import Grid from '@material-ui/core/Grid'
import TopLeftSideComponent from "./TopLeftSideComponent"
import TopCenterSideComponent from "./TopCenterSideComponent"
import TopRightSideComponent from "./TopRightSideComponent"

const App = () => {
  return (
    <React.Fragment>
      
        <Grid container className="top-back">
          <Grid item xs={2}>
            <TopLeftSideComponent />
          </Grid>
          <Grid item xs={8}>
            <TopCenterSideComponent />
          </Grid>
          <Grid item xs={2}>
            <TopRightSideComponent />
          </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default App;
