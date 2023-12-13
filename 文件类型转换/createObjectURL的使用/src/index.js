let file = document.getElementById('file');
file.addEventListener('change', function() {
  console.log('this.files[0]', this.files[0]);
  // 生成的是连接；
  let url = URL.createObjectURL(this.files[0]);
  console.log('url',url);
  showUrl(url)
})

function showUrl(url) {
  let img = document.createElement('img');
  img.src = url;
  img.style.width = '140px';
  img.style.height = '140px';
  document.body.appendChild(img);
}