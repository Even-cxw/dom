import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import Children from './children'

function Parent() {
  const childrenRef = useRef(null)

  useEffect(() => {
    console.log('childrenRef.current.name', childrenRef.current.name)
  }, [])

  return (
    <div>
      <Children ref={childrenRef}></Children>
    </div>
  )
  
}


export default Parent;
