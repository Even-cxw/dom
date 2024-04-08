import React, { useState, useEffect } from 'react';
import {allAnimation} from '../static/allAnimation'

function useAnimation() {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [imgW, setImgW] = useState(0)
  const [imgH, setImgH] = useState(0)
  const [isStart, setIsStart] = useState(false)
  const [imageAttribute, setImageAttribute] = useState(null)
  const indexRef = React.useRef(0)
  const timeRef = React.useRef(window.performance.now())
  const requestRef = React.useRef()
  const speedRef = React.useRef()

  useEffect(() => {
    if (imageAttribute) {
      start()
    }
    return () => {
      cancelAnimationFrame(requestRef.current);
    }
  }, [imageAttribute])

  // 得到雪碧图JSON数据
  const init = (uSpeed, JSONKey) =>{
    speedRef.current = uSpeed;
    let obj = {
      height: allAnimation[JSONKey][0].height,
      width: allAnimation[JSONKey][0].width,
      childrens: []
    }
    setImgW(allAnimation[JSONKey][0].width)
    setImgH(allAnimation[JSONKey][0].height)
    for (let item of allAnimation[JSONKey]) {
      let value = [];
      value.push(item.x);
      value.push(item.y);
      obj.childrens.push(value);
    }
    setImageAttribute(obj)
  }

  const stop = () => {
    if (!isStart) return;
    cancelAnimationFrame(requestRef.current);
    let initX = imageAttribute.childrens[0][0];
    let initY = imageAttribute.childrens[0][1];
    setX(initX)
    setY(initY)
    setIsStart(false)
  }

  const start = () => {
    if (isStart) return;
    setIsStart(true)
    repeatAnimation();
  }

   // 循环开始动画
  const repeatAnimation = () => {   
    requestRef.current = requestAnimationFrame(function fn(timestamp) {
      rander(timestamp);
      requestRef.current = requestAnimationFrame(fn);
    });
  }

  const rander = (timestamp) => {
    const elapsedTime = timestamp - timeRef.current;
    if (elapsedTime > speedRef.current) {
      timeRef.current = timestamp
      if (imageAttribute.childrens.length <= indexRef.current) {
        indexRef.current = 0;
      }
      let X = imageAttribute.childrens[indexRef.current][0];
      let Y = imageAttribute.childrens[indexRef.current][1];
      setX(X)
      setY(Y)
      indexRef.current = indexRef.current+1
    }
  }

  return {start, stop, X, Y, imgW, imgH, init}
}

export default useAnimation;