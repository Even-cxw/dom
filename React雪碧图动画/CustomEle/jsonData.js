export let regionData = [
  {
    quyuStyle: {
      top: '0',
      left: '0',
      warningStyle: {
        width: '160px',
        height: '135px',
      },
      normalStyle: {
        width: '160px',
        height: '135px',
      }
    },
    titleStyle: {},
    name: '南方',
    id: 'leftTop',
    url: 'https://200.192.4.171/screen/toplogy?uuid=146f0884-2b7c-40d9-ae84-0b772c0a9fb5',
  },
  {
    quyuStyle: {
      top: '0',
      right: '0',
      warningStyle: {
        width: '160px',
        height: '135px',
      },
      normalStyle: {
        width: '160px',
        height: '135px',
      }
    },
    titleStyle: {},
    name: '金桥',
    id: 'righttTop',
    url:'https://200.192.4.171/screen/toplogy?uuid=27356a1a-bf80-493d-965d-329afe2204ad'
  },
  {
    quyuStyle: {
      bottom: '0',
      left: '0',
      warningStyle: null,
      normalStyle: {
        width: '120px',
        height: '100px',
      }
    },
    titleStyle: {},
    name: '南外滩',
    id: 'leftBottom',
    url: 'https://200.192.4.171/screen/toplogy?uuid=8074007c-9f51-43f1-9d23-65bb0c94ab26'
  },
  {
    quyuStyle: {
      bottom: '0',
      right: '0',
      warningStyle: null,
      normalStyle: {
        width: '120px',
        height: '100px',
      }
    },
    titleStyle: {},
    name: '广东路',
    id: 'rightBottom',
  },
  {
    quyuStyle: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      warningStyle: {
        width: '160px',
        height: '135px',
      },
      normalStyle: {
        width: '160px',
        height: '135px',
      }
    },
    titleStyle: {},
    name: '张江',
    id: 'center',
    url: 'https://200.192.4.171/screen/toplogy?uuid=bd5f6150-7478-43f4-8487-61e7d485ba61'
  },
  {
    quyuStyle: {
      bottom: '-35px',
      left: '50%',
      transform: 'translate(-50%, 0)',
      warningStyle: null,
      normalStyle: {
        width: '100px',
        height: '80px',
      }
    },
    titleStyle: {
      color: 'rgba(216,240,251,1)',
      fontSize: '14px',
      transform: 'translate(-50%, 190%)',
    },
    name: '分支机构',
    id: 'bottomCenter',
    status: 1,
    branch: true,
  },
]

export let lineData = [
  {
    position: 'top',
    top:90, 
    left:165,
    height: 5, 
    width: 590, 
    rotate: 0, 
    titleStyle: {bottom: '35px', left: '50%'}
  },
  {
    position: 'leftTop',
    top:230, 
    left:375,
    height: 5, 
    width: 240, 
    rotate: -150,
    titleStyle: {top: '50px', left: '40%'}
  },
  {
    position: 'leftBottom',
    top:250, 
    left:375,
    height: 5, 
    width: 240, 
    rotate: 150,
    titleStyle: {top: '50px', left: '50%'}
  },
  {
    position: 'rightTop',
    top:230, 
    left:545,
    height: 5, 
    width: 240, 
    rotate: -30,
    titleStyle: {bottom: '50px', left: '40%'}
  },
  {
    position: 'rightBottom',
    top:250, 
    left:545,
    height: 5, 
    width: 240, 
    rotate: 30,
    titleStyle: {bottom: '50px', left: '50%'}
  },
]

export let returnRegionData = [
  // {name: '南方'},
  {name: '金桥'},
]

export let returnLineData = [
  {
    position: 'top',
    id: '1',
    In: '0', 
    Out: '00',
    status: '0', // 0:异常(红色)  1:正常  2:超预值(黄色)
  },
  {
    position: 'leftTop',
    id: '2',
    In: '1',
    Out: '11',
    status: '1', // 0:异常(红色)  1:正常  2:超预值(黄色)
  },
  {
    position: 'leftBottom',
    id: '3',
    In: '2',
    Out: '22',
    status: '2', // 0:异常(红色)  1:正常  2:超预值(黄色)
  },
  {
    position: 'rightTop',
    id: '4',
    In: '3',
    Out: '33',
    status: '1', // 0:异常(红色)  1:正常  2:超预值(黄色)
  },
  {
    position: 'rightBottom',
    id: '5',
    In: '4',
    Out: '44',
    status: '1', // 0:异常(红色)  1:正常  2:超预值(黄色)
  },
]