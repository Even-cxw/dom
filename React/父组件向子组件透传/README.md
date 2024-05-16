
### useEffect, useImperativeHandle, forwardRef 的使用。



### useRef扩展使用 - 当多个ref时

```js
  const refMap = useRef({})

  const createPanel = (taskDefKey, refMap) => {
    let {type} = location.query;
    if (!taskDefKey) return;
    let taskInfo = cloneDeep(dataInfo)
    return collapseItem.map(({header, key, showKey}, index) =>{
      let Component = null;
      let disabled = taskDefKey !== key
      if (type === 'look') disabled = true;
      switch(key) {
        case 'applyInit':
          Component = <ApplicationInfo ref={f => {refMap.current.applyInit = f}} disabled={disabled} taskInfo={taskInfo}/>
          break;
        case 'applyAccept':
          Component = <ResourceAllocation ref={f => {refMap.current.applyAccept = f}} disabled={disabled} taskInfo={taskInfo}/>
          break;
        case 'applyRespone':
          Component = <BranchFeedback ref={f => {refMap.current.applyRespone = f}} disabled={disabled} taskInfo={taskInfo}/>
          break;
        case 'applyChange':
          Component = <ChangeInformation ref={f => {refMap.current.applyChange = f}} disabled={disabled} taskInfo={taskInfo}/>
          break;
      }
      let flag = showKey.includes(taskDefKey)
      if (flag) {
        return (
          <Panel header={header} key={key}>
            {Component}
          </Panel>
       )
      } else {
        return null;
      }
    })
  }

```