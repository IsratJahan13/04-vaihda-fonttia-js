const myListItems = document.querySelectorAll("#lista li");
const myFontText = document.getElementById("text");
 
let currentFontStyle = "Courier New";
let newFontText = "Courier New";
let clickCounter = 0;
 
//vaihdetaan fonttityyli sekä fonttityylin teksti
function myFunction() {
  clickCounter++;
  if (clickCounter === 10) {
    // 10. klikkaus muuttaa fontin värin
    changeFontColor();
  }
 
  if (currentFontStyle === "Courier New") {
    currentFontStyle = "DM Serif Display";
    newFontText = `"DM Serif Display"`;
    myFontText.textContent = `${newFontText}`;
  } else if (currentFontStyle === "DM Serif Display") {
    currentFontStyle = "Grenze";
    newFontText = `"Grenze"`;
    myFontText.textContent = `${newFontText}`;
  } else if (currentFontStyle === "Grenze") {
    currentFontStyle = "Space Mono";
    newFontText = `"Space Mono"`;
    myFontText.textContent = `${newFontText}`;
  } else if (currentFontStyle === "Space Mono") {
    currentFontStyle = "Mansalva";
    newFontText = `"Mansalva"`;
    myFontText.textContent = `${newFontText}`;
  } else {
    currentFontStyle = "Courier New";
    newFontText = `"Courier New"`;
    myFontText.textContent = `${newFontText}`;
  }
 
  // listaelementtien fonttityylin muutos
  myListItems.forEach((item) => {
    item.style.fontFamily = `${currentFontStyle}`;
  });
}
 
// fontin värimuutos
function changeFontColor() {
  myListItems.forEach((item) => {
    item.style.color = "red";
  });
}