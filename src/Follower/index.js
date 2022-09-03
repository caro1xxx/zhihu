import React, { useEffect, useState } from "react";
import "./index.css";
import { get } from "../utils/request/fetch";
export const Index = () => {
  const [FollowInfo, setFollowInfo] = useState({
    data: [{ name: "", description: "", avatar: "" }],
    maxLength: 0,
  });

  const [CurrentIndex, setCurrentIndex] = useState(4);

  // 请求数据
  const getFollow = () => {
    get("/api/follower").then((value) => {
      setFollowInfo({
        data: value.data,
        maxLength: value.data.length,
      });
    });
  };

  // 翻页
  const changePage = (direction) => {
    if (direction === "next") {
      if (CurrentIndex + 3 <= FollowInfo.maxLength) {
        setCurrentIndex(CurrentIndex + 3);
      }
    } else {
      if (CurrentIndex - 4 > 0) {
        setCurrentIndex(CurrentIndex - 3);
      }
    }
  };

  useEffect(() => {
    getFollow();
  }, []);

  return (
    <div className="follower">
      <div className="recommendFollerTitler">推荐关注</div>
      <div style={{ marginTop: "10px" }}>
        {FollowInfo.data.map((item, index) => {
          if (index < CurrentIndex && index > CurrentIndex - 5) {
            return (
              <div key={index}>
                <div className="followerList">
                  <div>
                    <img
                      className="avatar"
                      alt={item.name}
                      src={item.avatar}
                    ></img>
                  </div>
                  <div className="followerListCenter">
                    <div className="name">{item.name}</div>
                    <div className="description">{item.description}</div>
                  </div>
                  <div className="followButtom">关注</div>
                </div>
              </div>
            );
          } else {
          }
        })}
        <div className="bottom">
          <div
            onClick={() => {
              changePage("prev");
            }}
          >
            上一页
          </div>
          <div>
            {Number.parseInt(CurrentIndex / 3)}/
            {Number.parseInt(FollowInfo.maxLength / 4) + 1}
          </div>
          <div
            onClick={() => {
              changePage("next");
            }}
          >
            下一页
          </div>
        </div>
      </div>
    </div>
  );
};
