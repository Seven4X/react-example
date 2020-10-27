import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
 const FlexDemo:React.FC<any> = () => {
  return (
    <div className="container">
      <div className="header">Header</div>

      <div className="contentWrapper">
        <div className="linkCenter">
          <div className="topRel">topRel</div>

          <div className="content">
            <div className="leftRel">leftRel</div>
            <div className="linkList">linkList</div>
            <div className="rightRel">rightRel</div>
          </div>
          <div className="downRel">downRel</div>
        </div>
        <div className="about">about</div>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
};


export default FlexDemo