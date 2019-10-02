import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import GraphComponent from "./GraphComponent"
import { connect } from 'react-redux';
import {  } from "../actions";

class ChildrenShowRightSideComponent extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <React.Fragment>   
        <Grid container className="marginTop30px ChildrenShowRightSideBackGroundStyle">
          <Grid item xs={3}>
            <p className="marginTop50px center ChildrenShowPercentStyle bold" style={{marginLeft: "85px"}}><span className="fs70px">
              {String((Math.tanh(0.005 * (this.props.bpm - this.props.kcal)) + 1) * 50 + 20).slice(0,2)}
            </span>%</p>
            <p className="center bold fs20px marginTop164px" style={{marginLeft: "85px"}}>田中美津子</p>
            <p className="center childrenShowChildNameStyle2" style={{marginLeft: "87px"}}>みっちゃん</p>
            <p className="center" style={{marginLeft: "89px"}}><img src={`${process.env.PUBLIC_URL}/images/onna5.jpg`} alt="onnna" className="childrenShowChildImageStyle" /></p>
          </Grid>
          <Grid item xs={9}>
            <Grid container className="marginTop80px">
              <Grid item xs={1}></Grid>
              <Grid item xs={5}><p className="childrenShowKcalStyle">Kcal <span className="fs40px bold">{this.props.kcal}</span></p></Grid>
              <Grid item xs={5}><p className="childrenShowBpmStyle">BPM <span className="fs40px bold">{this.props.bpm}</span></p></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <GraphComponent />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({kcal: state.kcals.kcal,bpm: state.bpms.bpm })
const mapDispatchToProps = ({ })
export default connect(mapStateToProps, mapDispatchToProps)(ChildrenShowRightSideComponent)
