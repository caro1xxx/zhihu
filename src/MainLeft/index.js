import React, { useState } from "react";
import "./index.css";
import { Index as Recommend } from "../Recommend";
import { Index as Attention } from "../Attention";
import { Index as Video } from "../Video";
import { Index as Hot } from "../Hot";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export const Index = () => {
  const [NavBarInfo, setNavBarInfo] = useState({
    data: [
      { name: "关注", to: "/follow", color: "black" },
      { name: "首页", to: "/", color: "#056de8" },
      { name: "热榜", to: "/hot", color: "black" },
      { name: "视频", to: "/video", color: "black" },
    ],
  });
  // 导航高亮切换
  const changeNavBarHeightLight = (name) => {
    NavBarInfo.data.map((item, index) => {
      if (item.name === name) {
        item.color = "#056de8";
      } else {
        item.color = "#000";
      }
    });
    setNavBarInfo({
      data: NavBarInfo.data,
    });
  };
  return (
    <div className="leftbody">
      {/* <Recommend></Recommend> */}
      <BrowserRouter>
        <div className="classify">
          {NavBarInfo.data.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                className="classifyLink"
                style={{ color: item.color }}
                onClick={() => {
                  changeNavBarHeightLight(item.name);
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {/* 注册路由 */}
        <Routes>
          <Route path="/" element={<Recommend />} />
          <Route path="/follow" element={<Attention />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
