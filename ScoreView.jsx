import React from "react";
import "./ScoreView.css";

const ScoreView = (props) => {
  
  return (
  
    <div class = {props.leading == true ? "score-view-wrapper-leading-true" : "score-view-wrapper-leading-false"}>
    <h2>{props.teamName}: {props.score}</h2>
    </div>
    );
}

export default ScoreView;