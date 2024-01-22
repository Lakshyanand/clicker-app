import React from "react";
import { useState } from "react";
import classes from './Clicker.module.css';

function Clicker() {
    const [clickedValue, setClickedValue] = useState(0);
    return (
        <div className={classes.container}>
          <div className={`${classes.clickerParent} border border-secondary rounded mt-4`}>
            <div className={` ${classes.clickerDisplay} d-flex align-items-center justify-content-center bg-light display-2`}>
              {clickedValue}
            </div>
            <div className={` ${classes.clickerButtonContainer} d-flex flex-row`}>
              <button className="btn btn-success w-100" onClick={() => setClickedValue(clickedValue + 1)}>
                <i className="fa fa-2x fa-plus" />
              </button>
              <button className="btn btn-warning w-100" onClick={() => setClickedValue(0)}>
                <i className="fa fa-2x fa-refresh" />
              </button>
              <button className="btn btn-danger w-100" onClick={() => setClickedValue(clickedValue - 1)}>
                <i className="fa fa-2x fa-minus" />
              </button>
            </div>
          </div>
        </div>
      );        
}
 // onClick={() => setClickedValue(Math.max(0, clickedValue - 1))}
export default Clicker;