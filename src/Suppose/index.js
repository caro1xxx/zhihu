import React, { useState } from "react";
import "./index.css";
export const Index = () => {
  const [Count, setCount] = useState(0);

  // 增加
  const agreeThat = () => {
    setCount(Count + 1);
  };

  // 减少
  const against = () => {
    if (Count === 0) return false;
    setCount(Count - 1);
  };

  return (
    <div className="thumksup">
      <div className="agreethat" onClick={agreeThat}>
        <div className="triangular"></div>
        <div>赞同&nbsp;{Count}</div>
      </div>
      <div className="against" onClick={against}>
        <div className="reverstriangular"></div>
      </div>
    </div>
  );
};
