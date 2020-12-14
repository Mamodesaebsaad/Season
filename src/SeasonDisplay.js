import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer1" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer2";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(new Date().getMonth());
  console.log(season);
  return <div>Season Display</div>;
};

export default SeasonDisplay;
