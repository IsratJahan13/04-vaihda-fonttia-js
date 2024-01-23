var fontSizes = [20, 24, 28, 32, 16]; // Erilaiset fonttikoot
        var currentFontSizeIndex = 0; // Nykyisen fonttikoon indeksi

        function changeFontSize() {
            // Get all list items within the ordered list
            var listItems = document.getElementById("lista").getElementsByTagName("li");

            // Aseta nykyinen fonttikoko listan alkuarvoksi
            var currentFontSize = fontSizes[currentFontSizeIndex];

            // Loop through each list item and update the font size
            for (var i = 0; i < listItems.length; i++) {
                listItems[i].style.fontSize = currentFontSize + "px";
            }
            document.getElementById("text").innerText = " " + currentFontSize + "px";
            // Siirry seuraavaan fonttikokoon tai aloita alusta jos viimeinen koko saavutettu
            currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
        }
        