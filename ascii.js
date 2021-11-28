function decToASCII() {
  x = document.getElementById("inputdec").value;
  var res = String.fromCharCode(x);
  document.getElementById("char").innerHTML = res;
  console.log(res);
}