import { Link, Outlet } from 'umi';
import styles from './index.less';
import React, { useState, useEffect } from 'react';
import {ConfigProvider} from 'antd';
import zhCN from "antd/es/locale/zh_CN";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
console.log(`当前环境-${process.env.NODE_TYPE}`);

export default function Layout() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Spin: {
            colorText: '#fff',
            colorBgContainer: 'rgba(0,0,0,0)',
            fontSize: 18,
          },
          Modal: {
            contentBg: '#0b1322',
            // contentBg: 'rgba(5, 59, 141, 1)',
            colorBgMask: 'rgba(5, 59, 141, 0)',
            colorIcon: '#fff',
            colorIconHover: '#E70A0A'
          },
          Empty: {
            colorText: '#fff'
          },
          Button: {
            colorBgContainer: '#0B1322',
            colorText: '#fff',
            colorBorder: '#34448a',
            borderRadius: '1px',
            algorithm: true, // 启用算法
          },
          DatePicker: {
            colorBgContainer: '#0B1322',
            // colorBgElevated: '#0B1322', // 弹窗背景颜色
            colorBorder: '#34448a',
            colorTextPlaceholder: '#1C78CA',
            // colorText: '#1C78CA',
            colorText: '#999', // 字体颜色
            borderRadius: '1px',
            algorithm: true, // 启用算法
          },
          Table: {
            colorBgContainer: '#0B1322',
            headerBg: 'rgba(5, 59, 141, 0.6)',
            // colorBgContainer: 'rgba(5, 59, 141, 0.6)',
            headerBg: '#0b2650',
            // colorText: '#F0E6E6',
            colorText: '#fff',
            colorTextHeading: '#fff',
            colorTextDescription: '#999',
            colorTextDisabled: '#999',
            // borderRadiusLG: 0, // 圆角
            // algorithm: true, // 启用算法 - 会有bug;
            fontSize: '12px',
            borderRadius: '1px',
          },
          Select: {
            // colorBgElevated: 'rgba(5, 59, 141, 1)',
            colorBgElevated: '#fff',
            colorText: '#999',
            colorTextPlaceholder: '#999',
            colorBgContainer: '#344448a',
            algorithm: true, // 启用算法
            // optionSelectedBg: 'rgba(5, 59, 141, 1)',// 选
            optionSelectedColor: '#fff', 
            colorBorder: '#34448a',
            borderRadius: '1px',
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
      <Outlet />
    </ConfigProvider>
  );
}
