import React from "react";
import "./index.css";
export const Index = (props) => {
  return (
    <div className={props.isFocus ? "SearchBody" : "unSearchBody"}>
      <h1>搜索发现</h1>
      <hr></hr>
      <div>微软称Xbox不会涨价</div>
      <div>女鬼桥改编游戏</div>
      <div>央视报道PS5涨价</div>
      <div>中美签署审计监管合作协议</div>
      <div>JDG 让二追三 TES 晋级决赛</div>
    </div>
  );
};
