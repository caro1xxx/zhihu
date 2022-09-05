import React, { useState, Suspense, useEffect } from "react";
import "./index.css";
import { get } from "../utils/request/fetch";
import { clone } from "../utils/clone";

import { Index as Loading } from "../Loading";
import { Index as Suppose } from "../Suppose";
import { Index as Options } from "../Options";
import { Index as ReadMore } from "../ReadMore";
export const Index = () => {
  // 推荐内容
  const [RecommendContent, setRecommendContent] = useState({
    data: "1",
  });
  // 内容的副本,用于在detail页面展示
  const [copyData, setcopyData] = useState({ data: "2" });

  // 处理数据
  const saveState = (data) => {
    // 拷贝
    const result = clone(data);
    // 先处理数据
    result.forEach((item, index) => {
      item.isShowReadMore = false;
      if (item.content.length > 20 && item.picture === "null") {
        item.content = item.content.substring(0, 70) + "...";
      } else {
        item.content = item.content.substring(0, 150) + "...";
      }
    });
    setRecommendContent({
      data: result,
    });
  };

  // 请求推荐内容
  const getRecommendContent = () => {
    get("/api/recommend").then((value) => {
      setcopyData({
        data: value.data,
      });
      saveState(value.data);
    });
  };

  // 执行副作用
  useEffect(() => {
    getRecommendContent();
    // 这里添加effect依赖为[],防止因为数据发生变化再次触发effect
  }, []);

  // 收齐全文
  const pickUpMore = (WordId) => {
    RecommendContent.data.map((item, index) => {
      if (index === WordId) {
        item.isShowReadMore = false;
      }
    });
    setRecommendContent({
      data: RecommendContent.data,
    });
  };

  //阅读全文
  const OpenReadMore = (WordId) => {
    RecommendContent.data.map((item, index) => {
      if (index === WordId) {
        item.isShowReadMore = true;
      }
    });
    setRecommendContent({
      data: RecommendContent.data,
    });
  };

  return (
    <div>
      {RecommendContent.data === "1" ? (
        <Loading></Loading>
      ) : (
        RecommendContent.data.map((item, index) => {
          return (
            <div key={index} className="item">
              <div className="title">{item.title}</div>
              {item.picture === "null" ? (
                <div>
                  {item.isShowReadMore ? (
                    <ReadMore content={copyData.data[index]}></ReadMore>
                  ) : (
                    <div className="detail">
                      {item.content}
                      <div
                        className="Expand"
                        onClick={() => {
                          OpenReadMore(index);
                        }}
                      >
                        阅读全文
                      </div>
                    </div>
                  )}
                  {item.isShowReadMore ? (
                    <div
                      style={{
                        display: "flex",
                        position: "sticky",
                        bottom: "0px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <Suppose count={item.endorsement}></Suppose>
                      <Options></Options>
                      <div
                        className="pickUp"
                        onClick={() => {
                          pickUpMore(index);
                        }}
                      >
                        收起^
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <Suppose count={item.endorsement}></Suppose>
                      <Options></Options>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="grid">
                    <div>
                      <img className="pic" src={item.picture}></img>
                    </div>
                    <div className="detail">
                      {item.content}
                      <div className="Expand">阅读全文</div>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Suppose count={item.endorsement}></Suppose>
                    <Options></Options>
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
