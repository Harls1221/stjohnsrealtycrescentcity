var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("contactPopBackDrop");

function btnContact() {
  document.getElementById("contactPopBackDrop").style.display = "flex";
}

span.onclick = function () {
  modal.style.display = "none";
};
