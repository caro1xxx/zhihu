import React, { useState, Suspense, useEffect } from "react";
import "./index.css";
import { get } from "../utils/request/fetch";
import { Index as Loading } from "../Loading";
import { Index as Suppose } from "../Suppose";
import { Index as Options } from "../Options";
export const Index = () => {
  const [RecommendContent, setRecommendContent] = useState({
    data: "1",
  });
  // 内容的副本,用于在detail页面展示
  const [copyData, setcopyData] = useState({ data: "2" });

  const saveState = (data) => {
    // 先处理数据
    data.forEach((item, index) => {
      if (item.content.length > 20 && item.picture === "null") {
        item.content = item.content.substring(0, 60) + "...";
      } else {
        item.content = item.content.substring(0, 120) + "...";
      }
    });
    // 在存入,如果是先存入再处理后再存入,这样多了一次diff
    setRecommendContent({
      data: data,
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
                  <div className="detail">
                    {item.content}
                    <div className="Expand">阅读全文</div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Suppose></Suppose>
                    <Options></Options>
                  </div>
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
                    <Suppose></Suppose>
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
