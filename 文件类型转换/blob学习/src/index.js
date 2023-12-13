console.log('blob')
var input = document.getElementById('file');
var btn = document.querySelector('.btn');
var blobData;
input.addEventListener('change', function(e){
  var fileList = this.files;
  console.log(e);
  console.log(this.files)
  debugger
  var fr = new FileReader()
  fr.onload = function() {
    console.log('fr.result', fr.result);
    blobData = new Blob([fr.result], {type: 'application/zip'});
    // blobData = fr.result
  }
  fr.readAsDataURL(fileList[0])
})
btn.addEventListener('click', function() {
  down()
})
function down() {
  var a = document.createElement('a')
  var event = new MouseEvent('click');
  a.download = 'lalla'
  a.href = window.URL.createObjectURL(blobData);
  console.log('blobData',blobData)
  debugger;
  a.dispatchEvent(event)
}
