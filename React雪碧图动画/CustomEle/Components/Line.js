import React, { useState, useEffect } from 'react';
import text_bg from '../static/text_bg.jpg'
import ic_line_more from '../static/ic_line_more.png'
import ic_line_red from '../static/ic_line_red.png'
import ic_line_yellow from '../static/ic_line_yellow.png'
import normal_arrow from '../static/arrow.svg'
import red_arrow from '../static/red_arrow.svg'
import yellow_arrow from '../static/yellow_arrow.svg'
import useAnimation from '../Hooks/useAnimation';

function Line(props) {
  const [image, setImage] = useState(ic_line_more);
  const [arrow, setArrow] = useState(normal_arrow)
  const {top, left, height, width, rotate, titleStyle, status, In, Out, delay, bandwidth, position} = props.data;
  let { X, Y, init } = useAnimation()
  useEffect(() => {
   if (status !== null && status !== undefined) {
    if (status == '0') {
      setImage(ic_line_red)
      init(30, 'ic_line_red')
      setArrow(red_arrow)
    } else if (status == '2') {
      setImage(ic_line_yellow)
      setArrow(yellow_arrow)
      init(30, 'ic_line_yellow')
    } else {
      init(30, 'ic_line_more')
    }
   }
  }, [status]);

  const createLine = (X, Y, position) => {
    let transform = 'scale(0.4, 0.5)'
    let width = '250px'
    if (position == 'top') {
      transform = 'scaleY(0.6)'
      width = '600px'
    }
    return (
      <div style={{position:'absolute', width}}>
        <img className='right_arrow' src={arrow} style={{
          width: '15px',
          height: '15px',
          position: 'absolute',
          top: '22px',
          right: '15px'
        }}/>
        <img className='left_arrow' src={arrow} style={{
          width: '15px',
          height: '15px',
          position: 'absolute',
          top: '22px',
          left: '-0px',
          transform: 'rotate(180deg)',
        }}/>
        <div style={{
          overflow: 'hidden',
          height: '60px',
          width: '568px',
          transform,
          transformOrigin: 'left center'
        }}>
        <img
          style={{
            transform: `translate(-${X}px, -${Y}px)`,
          }}
          // src={ic_line_more}/>
          src={image}/>
        </div>
      </div>
    )
  }

  return (
    <div
    style={{
      transformOrigin: 'left top',
      // height: `${height}px`,
      height: `60px`,
      width: `${width}px`,
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      transform: `rotate(${rotate}deg) translateY(-30px)`,
    }}
    >
      {/* 线路线路 */}
      {createLine(X, Y, position)}

      {/* 线路详情 */}
      <div
        style={{
          position: 'absolute',
          ...titleStyle,
          color: 'rgba(216,240,251,1)',
          fontSize: '14px',
          lineHeight: '16px',
          transform: `translate(-50%, 0) rotate(${-rotate}deg)`,
          borderBottom: '2px solid #033176DA'
        }}
      >
        <div style={{
          backgroundImage: `url('${text_bg}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          padding: '5px',
        }}>
          <div>IN: {In}</div>
          <div>OUT: {Out}</div>
          <div>延迟：{delay}</div>
          <div>带宽：{bandwidth}</div> 
        </div>
      </div>
    </div>
    )
}

export default Line;