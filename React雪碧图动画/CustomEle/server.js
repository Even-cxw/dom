// 获取column fields
import { getUrlParams, request } from 'cn-lib-for-4';

const url = APP_URL;

// 获取事件（区域）有数据代表异常
// 获取线路 id=100
export function apiGetRegion(payload) {
  return request.get(`${url}/dataset/${payload.id}/search`);
}

export function addDataView(payload) {
  return request.post(`${url}/view`, payload);
}

// 根据名称模糊查询地址信息。名称为空则全返回
export function getRegionsByFuzzyName(payload) {
  return request.get(`${url}/dataScreen/map/region?${getUrlParams(payload)}`);
}

