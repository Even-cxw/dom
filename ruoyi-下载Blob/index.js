// blob下载插件
import { saveAs } from 'file-saver'; 

// blob文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

// 判断blob对象类型 验证是否为blob格式
export function blobValidate(data) {
  return data.type !== 'application/json'
}



// 通用上传并下载方法
export async function importAnddownload(url, params, filename, config) {
  return service.post(url, params, {
    headers: { 'Content-Type': 'multipart/form-data' },
    responseType: 'blob',
    ...config
  }).then(async (data) => {
    const isBlob = blobValidate(data);
    if (isBlob) {
      const blob = new Blob([data])
      saveAs(blob, filename)
      message.success({ message: '导入成功!' });
    } else {
      console.log('data', data);
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      // message.error(rspObj.details || '下载文件出现错误，请联系管理员')
      notification.error({ message: rspObj.details || '下载文件出现错误，请联系管理员', });

      // const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
      // message.error(errMsg);
    }
  }).catch((r) => {
    console.error(r)
    message.error('下载文件出现错误，请联系管理员！')
  })
}



// ------------------------------------------------------------------------------
// 其他无关代码service

const service = axios.create({
  baseURL,
  timeout: 10000,
  withCredentials: false,
});

// 请求拦截
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers['X-Auth-Token'] = `${token}`;
  return config;
});

// 响应拦截
service.interceptors.response.use(response => {
  const res = response.data;

  // 请求成功
  if (res.code === 200 || isEmpty(res?.code)) {// 上传接口直接返回文件, 无code
    // 非 ok 弹窗展示信息
    // if (res.msg !== 'ok') message.success(res.msg);
    return res;
  } else {
    console.log(res);
    // 请求失败
    if (res instanceof Blob) return res
    message.error(res.msg || '请求失败');
    return res;
  }
});