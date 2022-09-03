import React, { useState, Fragment } from "react";
import "./index.css";
import { Index as SearchRecommend } from "../SearchRecommend";
import avator from "../assets/img/avator.jpg";
export const Index = () => {
  const inputFocus = () => {
    setstate({
      isShowInputHint: true,
      focusStyle: "focusInput",
    });
  };

  const inputBlur = () => {
    setstate({
      isShowInputHint: false,
      focusStyle: "unfocusInput",
    });
  };

  const [state, setstate] = useState({
    isShowInputHint: false,
    focusStyle: "unfocusInput",
  });

  return (
    <Fragment>
      <div className="NavBarStyle">
        <div className="topic">
          <p className="logo" style={{ color: "#056de8", fontWeight: "bold" }}>
            知否
          </p>
          <div className="home">首页</div>
          <div>学习</div>
          <div>会员</div>
          <div>发现</div>
          <div>等你来答</div>
          <h1 className={state.focusStyle}>
            <input
              placeholder="EDG 晋级败者组决赛"
              onFocus={inputFocus}
              onBlur={inputBlur}
            ></input>
          </h1>
          <button className="question">提问</button>
          <div>消息</div>
          <div>私信</div>
          <div>
            <img className="avator" src={avator} alt=""></img>
          </div>
        </div>
      </div>
      <SearchRecommend isFocus={state.isShowInputHint}></SearchRecommend>
    </Fragment>
  );
};
