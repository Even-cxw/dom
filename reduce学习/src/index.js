
// /**
//  * @desc reduce
//  * @param {all} : 累计器累计回调的返回值
//  * @param {current} : 数组中正在处理的元素。
//  * @param {currentIndex} : 数组中正在处理的元素的索引值。
//  * @param {initialValue:[]} : 作为第一次调用 callback函数时的第一个参数的值
//  */

// // 将数组扁平化
// let a = [[0, 1], [2, 3], [4, 5]];
// let b = a.reduce(function (all, current, currentIndex) {
//   return [...all, ...current]
// }, [])
// console.log(a);


// // 计算数组中每个元素出现的次数
// var c = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// // 希望输出 { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
// let d = c.reduce(function (all, current) {
//   if (all[current]) {
//     all[current]++
//   } else {
//     all[current] = 1;
//   }
//   return all;
// }, {})
// console.log(d)

// // 数组去重
// let e = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// var f = e.reduce(function (all, current) {
//   if (all.indexOf(current) == -1) {
//     all.push(current)
//   }
//   return all;
// }, [])
// console.log(f)

// //按顺序运行Promise
// function p1(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 5);
//   });
// }
// function p2(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 2);
//   });
// }
// function f3(a) {
//   return a * 3;
// }
// function p4(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 4);
//   });
// }
// const promiseArr = [p1, p2, f3, p4];
// promiseArr.reduce(function (all, current) {
//   return all.then(function (res) {
//     return p1()
//   })
// }, Promise, resolve(1))



// // 根据ID合并两个数组
// let arr = [{ id: 1, name: 'dylan' }, { id: 2, name: 'kebi' }]
// let arr1 = [{ id: 1, position: 'ceo' }, { id: 3, position: 'sales' }]
// let list = arr.reduce((pre, cur) => {
//   let target = pre.find(ee => ee.id == cur.id)
//   if (target) {
//     Object.assign(target, cur)
//   } else {
//     pre.push(cur)
//   }
//   return pre
// }, arr1)
// console.log(list)


let result = {
  "list": [
    {
      "id": "3311669803",
      "collection": "ltm_radware",
      "properties": {
        "BESslv3Version": "",
        "BETls10Version": "",
        "BETls11Version": "",
        "BETls12Version": "",
        "BackSSLVersion": "",
        "Cert_subject": "",
        "CertifcateID": "",
        "CommonName": "",
        "CountryName": "",
        "Expirty": "",
        "FESslv3Version": "",
        "FETls10Version": "",
        "FETls11Version": "",
        "FETls12Version": "",
        "FrontCipherUserdef": "",
        "FrontSSLVersion": "",
        "HealthID": "tcp",
        "Index": 1,
        "IntermcaChainName": "",
        "LocalityName": "",
        "Metric": "Least Connections",
        "OrganizationName": "",
        "OrganizationUnitName": "",
        "Pbind": "disabled",
        "PersistentTimeOut": "0",
        "ProxyIpAddr": "10.203.193.137",
        "ProxyIpMode": "ADDRESS",
        "PrpvinceName": "",
        "Real_Server_Address": "10.203.94.64",
        "Real_Server_Admin_State": "ENABLED",
        "Real_Server_ID": "ACCM_DEV_20004_svr1",
        "Real_Server_Port": "20004",
        "Real_Server_State": "RUNNING",
        "SSLpol": "",
        "ServCert": "",
        "SubjectAltName": "",
        "VirtPort": "20004",
        "VirtServerIndex": "ACCM_DEV_20004_VIP",
        "VirtServerIpAddress": "10.203.193.137",
        "VirtServerRealGroup": "ACCM_DEV_20004",
        "VirtServerRealPort": "20004",
        "VirtServerSrcNetwork": "",
        "VirtServerState": "enabled",
        "VirtServiceProtocol": "tcp",
        "VirtualServerServiceState": "Warning",
        "XForwardedFor": "DISABLED",
        "area": "PATAC",
        "createTime": "2022-05-31T16:02:48.526Z",
        "device_ip": "10.203.16.164",
        "functional_zone": "DEV",
        "lastUpdateTime": "2022-05-31T16:02:03.000Z",
        "name": "PJQDC23-DEVLBRD60-01"
      },
      "relatedCI": null,
      "tags": [],
      "resourceGroups": null,
      "bussinessGroups": null,
      "edgeFullUpdate": null,
      "orUpdate": null,
      "externalCi": null
    }
  ],
  "pageNum": 1,
  "pageSize": 10,
  "size": 1,
  "startRow": 0,
  "endRow": 0,
  "pages": 1,
  "prePage": 0,
  "nextPage": 0,
  "isFirstPage": true,
  "isLastPage": true,
  "hasPreviousPage": false,
  "hasNextPage": false,
  "navigatePages": 0,
  "navigatepageNums": null,
  "navigateFirstPage": 0,
  "navigateLastPage": 0

}


let paramsVSIArr = result.list.reduce((all,current,i) => {
  let VirtServerIndex = current.properties.VirtServerIndex
  if (all.length == 0) {
    return [VirtServerIndex]
  } else if (all.includes(VirtServerIndex)) {
    return all
  } else {
    return [...all,VirtServerIndex]
  }
},[])

console.log('paramsVSIArr', paramsVSIArr)