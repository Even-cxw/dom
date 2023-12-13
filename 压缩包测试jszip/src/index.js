var btn = document.getElementById('btn');
// 生成图片base64 https://fanyi-cdn.cdn.bcebos.com/static/translation/img/footer/wechatQr_68e950b.png
var base64;
var img = new Image();
img.crossOrigin = 'anonymous'
img.src = 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/footer/wechatQr_68e950b.png';
img.onload = function() {
  let canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  let content = canvas.getContext('2d');
  content.drawImage(img,0,0,img.width,img.height);
  base64 = canvas.toDataURL();
  console.log('base64',base64);
}
// jszip : 保存文件
// jszip-utils : 读取文件
btn.addEventListener('click', function() {
  // 实例化（jszip）对象
  var zip = new JSZip();
  // 创建一个虚拟文件
  zip.file("hello.txt", "Hello[p my)6cxsw2q")
  // 创建虚拟文件夹
  var photoZip = zip.folder("photos");
  // 生成虚拟jszip文件
  photoZip.file('tupian.png',base64.substring(22),{base64:true});
  zip.generateAsync({type:"blob"})
  .then(function (blob) {
      // 下载保存文件
      saveAs(blob, "hello.zip");
  });
})

