// var acc = document.getElementsByClassName("block_header");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     var image=this.children[1];
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//       image.src = "assets/images/icon-plus.svg"; 
//     } else {
//       panel.style.display = "block";
//       image.src = "assets/images/icon-minus.svg";
//     }
//   });
// }

var acc = document.getElementsByClassName("block_header");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var text=this.children[1];
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      text.innerText = "+"; // change le texte
      text.style.fontFamily= "none";
    } else {
      panel.style.display = "block";
      text.innerText = "x"; // change le texte
      text.style.fontFamily= "Arial, Helvetica, sans-serif";
      text.style.textAlign="center"
    }
  });
}