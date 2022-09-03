import React from "react";
import "./index.css";
import { Index as MainLeft } from "../MainLeft";
import { Index as MainRight } from "../MainRight";
export const Index = () => {
  return (
    <div className="Topic">
      <MainLeft></MainLeft>
      <MainRight></MainRight>
    </div>
  );
};
