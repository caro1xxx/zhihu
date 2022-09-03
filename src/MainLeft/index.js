import React from "react";
import "./index.css";
import { Index as Recommend } from "../Recommend";
export const Index = () => {
  return (
    <div className="leftbody">
      <div className="classify">
        <div>关注</div>
        <div style={{ color: "#056de8" }}>推荐</div>
        <div>热榜</div>
        <div>视频</div>
      </div>
      <Recommend></Recommend>
    </div>
  );
};
