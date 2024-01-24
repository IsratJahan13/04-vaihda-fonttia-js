const myListItems = document.querySelectorAll("#lista li");
const myFontText = document.getElementById("text");
let currentFontSize = 1.6;
 
function myFunction() {
  if (currentFontSize === 1.6) {
    currentFontSize = 2;
  } else if (currentFontSize === 2) {
    currentFontSize = 2.4;
  } else if (currentFontSize === 2.4) {
    currentFontSize = 2.8;
  } else if (currentFontSize === 2.8) {
    currentFontSize = 3.2;
  } else {
    currentFontSize = 1.6;
  }
 
  // fonttikoko pikseleiksi kertomalla 10
  myFontText.textContent = `${currentFontSize * 10}px`;
 
  // listaelementtien fonttikoon muutos
  myListItems.forEach((item) => {
    item.style.fontSize = `${currentFontSize}rem`;
  });
}