import React from 'react'
import Grid from '@material-ui/core/Grid'
import GraphComponent from "./GraphComponent"

const ChildrenShowRightSideComponent = () => {
  return (
    <React.Fragment>   
      <Grid container className="marginTop30px ChildrenShowRightSideBackGroundStyle">
        <Grid item xs={3}>
          <p className="marginTop50px center ChildrenShowPercentStyle bold"><span className="fs70px">80</span>%</p>
          <p className="center bold fs40px marginTop164px">田中美津子</p>
          <p className="center childrenShowChildNameStyle">みっちゃん</p>
          <p className="center"><img src={`${process.env.PUBLIC_URL}/images/onna5.jpg`} alt="onnna" className="childrenShowChildImageStyle" /></p>
        </Grid>
        <Grid item xs={9}>
          <Grid container className="marginTop30px">
            <Grid item xs={1}></Grid>
            <Grid item xs={5}><p className="childrenShowKcalStyle">Kcal <span className="fs40px bold">137</span></p></Grid>
            <Grid item xs={5}><p className="childrenShowBpmStyle">BPM <span className="fs40px bold">97</span></p></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}><GraphComponent /></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ChildrenShowRightSideComponent;
