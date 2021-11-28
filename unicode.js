function unicode() {
  var x, text;

  x = document.getElementById("numb").value;

    text = x;
    unicode = ("&#x" + x)
  
  document.getElementById("demo").innerHTML = unicode;
}