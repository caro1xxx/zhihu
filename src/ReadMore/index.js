import React, { useEffect } from "react";
import "./index.css";
export const Index = (props) => {
  // 2022/09/04
  // 这里因为copydata和data引用的同一个对象,导致都出现了省略号,需要实现深拷贝解决问题
  useEffect(() => {
    props.content.content = props.content.content.substring(
      0,
      props.content.content.length - 2
    );
  }, []);

  return (
    <div>
      <div>{props.content.content}</div>
    </div>
  );
};
