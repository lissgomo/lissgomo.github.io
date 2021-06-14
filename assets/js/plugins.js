// LinkedIn Modal
var modal1 = document.getElementById("id-linkedin");
var btn1 = document.getElementById("li-btn");
var span1 = document.getElementsByClassName("close-l")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// Indeed Modal
var modal2 = document.getElementById("id-indeed");
var btn2 = document.getElementById("id-btn");
var span2 = document.getElementsByClassName("close-i")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
