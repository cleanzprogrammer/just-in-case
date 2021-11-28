function binToHex() {
  var x = document.getElementById("inputBin").value;
  var hexOut = parseInt(x , 2).toString(16).toUpperCase();
  let demo = document.getElementById("hex").innerHTML = hexOut;
  }