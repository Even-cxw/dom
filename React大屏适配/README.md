

### 大屏适适配方案


- react-use

```js
// 获取屏幕宽度
import { useWindowSize } from 'react-use';
// 动态获取屏幕宽高 - 会随着屏幕放大缩小而改变
const { width, height } = useWindowSize();

```

```html
<div style={{
  position: 'relative',
  width,
  height,
  overflow: 'hidden',
}}>
  <div
    style={{
      transform: `scale(${width / 1920}, ${height / 1080})`,
      transformOrigin: '0 0',
      width: 1920,
      height: 1080,
      transition: '0.5s',
    }} 
  >
  </div>
</div>

```