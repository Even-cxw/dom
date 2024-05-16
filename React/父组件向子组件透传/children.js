import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';


function Children() {

  // 返回对象给父组件
  useImperativeHandle(ref,() => {
    name: 'age'
  })
  
}


export default forwardRef(Children);
