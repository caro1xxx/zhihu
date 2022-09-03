import React from "react";
import "./index.css";
import { Index as Create } from "../Create";
import { Index as Follower } from "../Follower";
import { Index as QuickAccess } from "../QuickAccess";
import { Index as Statement } from "../Statement";
export const Index = () => {
  return (
    <div className="rightbody">
      <Create></Create>
      <Follower></Follower>
      <QuickAccess></QuickAccess>
      <Statement></Statement>
    </div>
  );
};
