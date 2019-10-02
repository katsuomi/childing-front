import React from 'react'
import Grid from '@material-ui/core/Grid'
import {Link} from "react-router-dom"
const children = require('../materials/material.js');

const TopCenterSideComponent = () => {
  return (
    <React.Fragment>   
      <Grid container className="marginTop14px paddingLeft60px">
        <Grid item xs={12} >
          {children.children.map((child,i) =>(
            <Link to={"children/"+child.id} key={i}>
              {child.id === 5 ?
                  <div className="topCenterElementBackStyle2 center">
                    <div className="topCenterChildImageBorderStyle">
                      <img src={child.image_path} alt="onnna" className="topCenterChildImageStyle"  />
                    </div>
                    <p className="bold topCenterSideChildNameStyle">{child.name}</p>
                    <p className="text-light topCenterSideChildNameStyle2">{child.name_furigana}</p>
                  </div>
                :
                  <div className="topCenterElementBackStyle center">
                    <img src={child.image_path} alt="onnna" className="topCenterChildImageStyle2"  />
                    <p className="bold topCenterSideChildNameStyle">{child.name}</p>
                    <p className="text-light topCenterSideChildNameStyle2">{child.name_furigana}</p>
                  </div>
              }
            </Link>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TopCenterSideComponent;
