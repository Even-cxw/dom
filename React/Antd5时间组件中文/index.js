'use client'
import React, { useState, useEffect } from 'react';
import {ConfigProvider} from 'antd';
// 转换中文
import zhCN from "antd/es/locale/zh_CN";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

function PingmeshApp({children}) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
      components: {
        Button: {
          colorBgContainer: '#0B1322',
          colorText: '#fff',
          colorBorder: '#34448a',
          borderRadius: '2px',
          algorithm: true, // 启用算法
        },
        DatePicker: {
          colorBgContainer: '#0B1322',
          // colorBgElevated: '#0B1322', // 弹窗背景颜色
          colorBorder: '#34448a',
          colorTextPlaceholder: '#1C78CA',
          // colorText: '#1C78CA',
          colorText: '#999', // 字体颜色
          borderRadius: '2px',
          algorithm: true, // 启用算法
        },
        Table: {
          // colorBgContainer: '#0B1322',
          colorBgContainer: 'rgba(5, 59, 141, 0.6)',
          headerBg: '#0b2650',
          // colorText: '#F0E6E6',
          colorText: '#999',
          colorTextHeading: '#fff',
          colorTextDescription: '#999',
          colorTextDisabled: '#999',
          // borderRadiusLG: 0, // 圆角
          algorithm: true, // 启用算法
        },
        Select: {
          colorBgElevated: 'rgba(5, 59, 141, 0.6)',
          // colorBgElevated: '#344448a',
          colorText: '#999',
          colorTextPlaceholder: '#999',
          colorBgContainer: '#344448a',
          algorithm: true, // 启用算法
          optionSelectedBg: 'rgba(5, 59, 141, 0.6)',
          optionSelectedColor: '#fff', 
          colorBorder: '#34448a',
        },
        Pagination: {
          colorText: '#fff',
          colorBgContainer: '#20499b', // 选中背景色
          colorPrimary: '#fff',
          colorTextDisabled: '#fff',
        },
        Empty: {
          colorText: '#fff'
        }
      },
    }}
    >
      {children}
    </ConfigProvider>
  );
}

export default PingmeshApp;