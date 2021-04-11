var i;
//Preguntas frecuentes
var uquest = document.getElementsByClassName("uquestion");
for (i = 0; i < uquest.length; i++) {
    uquest[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var modal = document.getElementById("ModalMap");
var link = document.getElementById("AppMap");
var close = document.getElementsByClassName("close")[0];
link.onclick = function() {
  modal.style.display = "block";
}
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}