import React from 'react'
import Grid from '@material-ui/core/Grid'
import HeaderComponent from "./HeaderComponent"
import TopLeftSideComponent from "./TopLeftSideComponent"
import ChildrenShowRightSideComponent from "./ChildrenShowRightSideComponent"

const ChildrenShowComponent = () => {
  return (
    <React.Fragment>   
      <HeaderComponent />
      <Grid container className="top-back">
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <TopLeftSideComponent />
        </Grid>
        <Grid item xs={8}>
          <ChildrenShowRightSideComponent />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ChildrenShowComponent;
