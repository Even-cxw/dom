import React, { useState, useEffect, useRef } from 'react';
import { regionData, lineData, returnRegionData, returnLineData } from './jsonData';
import normal_base from './static/normal_base.png'
import warning_base from './static/warning_base.png'
import branch_base from './static/branch_base.png'
import { Spin } from 'antd';
import { isEmptyArr, isNotEmptyArr } from 'cn-lib-for-4';
import { apiGetRegion } from './server';
import Line from './Components/Line'
import './index.less'

let api1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>resolve(returnRegionData), 2000)
  })
}

let api2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>resolve(returnLineData), 2000)
  })
}

function CustomEle() {
  const [loading, setLoading] = useState(false);
  const [regionArr, setRegionArr] = useState([])
  const [lineArr, setLineArr] = useState([])

  // 合并数组方法
  function mergeArrays(arr1, arr2, name) {
    let merged = arr1.reduce((acc, obj) => {
        let existing = acc.find(item => item[name] === obj[name]);
        if (existing) {
            Object.assign(existing, obj);
        } else {
            acc.push(obj);
        }
        return acc;
    }, arr2.slice());

    return merged;
}

  // 接口逻辑
  useEffect(() => {
    setLoading(true)

    if (APP_ENV === 'development') {
      //创建区域
      api1({id: 84}).then((region) => {
        let newRegion = region.map(item => ({...item, status: 0}));
        let result = mergeArrays(regionData, newRegion, 'name');
        setLoading(false)
        setRegionArr(result)
      })
      //创建线路
      api2().then(line => {
        let result = mergeArrays(lineData, line, 'position');
        setLoading(false)
        setLineArr(result)
      })
    } else if (APP_ENV === 'production') {
      apiGetRegion({id: 107}).then(({res}) => {
        console.log('apiGetRegion-res', res)
        let region = res.results;
        let newRegion = region.map(item => ({...item, status: 0}));
        let result = mergeArrays(regionData, newRegion, 'name');
        setRegionArr(result)
      })
  
      // 创建线路
      apiGetRegion({id: 100}).then(({res}) => {
        console.log('line-res', res)
        let line = res.results;
        let result = mergeArrays(lineData, line, 'position');
        setLoading(false)
        setLineArr(result)
      })
    }
  }, [])

  // 创建区域
  const creatRegionEle = (regionArr) => {
    if (isEmptyArr(regionArr)) return ''
    return regionArr.map(data => {
      let image = data.status === 0 ? warning_base : normal_base;
      if (data.branch) {image = branch_base}
      let imageStyle = data.status === 0 ? data.quyuStyle.warningStyle : data.quyuStyle.normalStyle
      return (<div 
        id={data.id}
        key={data.id}
        style={{
          position: 'absolute',
          ...data.quyuStyle,
          width: '170px',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => {clickRegion(data.url)}}
      >
        {/* //区域图片 */}
        <div style={{
          ...imageStyle,
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }} className={data.id}></div>

        {/* 区域title */}
        <span
          style={{
            position: 'absolute',
            top: '-13%',
            left: '50%',
            fontSize: '20px',
            transform: 'translate(-50%, 100%)',
            color: 'rgba(66,215,255,1)',
            lineHeight: '27px',
            ...data.titleStyle
          }}
        >{data.name}</span>
      </div>)
      }
    )
  }

  // 点击事件
  const clickRegion = (url) =>{
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    // 内层边框
    <Spin 
      style={{
        position: 'absolute',
        top: '315px',
        left: '45px',
        width: '1086px',
        height: '480px',
        zIndex: '100',
      }}
      spinning={loading}>
      <div 
      style={{
        position: 'absolute',
        top: '315px',
        left: '45px',
        // background: 'rgba(0, 0, 0, .1)',
        width: '1086px',
        height: '480px',
        // border: '1px solid red',
        zIndex: '100',
      }}>
        {/* 二层边框 */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '80px',
            right: '80px',
            bottom: '10px',
            // border: '1px solid yellow',
          }}
        >
          {/* 元素循环 */}
          {creatRegionEle(regionArr)}
          {/* 创建线路 */}
          {isNotEmptyArr(lineArr) ? lineArr.map((data) => (<Line data={data}></Line>)): ''}


        </div>
      </div>
    </Spin>
  );
}

export default CustomEle;