// https://github.com/nextapps-de/spotlight?tab=readme-ov-file

const selectedImagePath = "/assets/images/gallery/featured/";
const selectedImageData = [
  {path: selectedImagePath + "Rose Garden.jpg", title: "Ogród Różany", desc:"Obraz na kartonie wykonany tradycyjnymi farbami akrylowymi, przedstawiający ogród botaniczny skąpany w świetle słonecznym."},
  {path: selectedImagePath + "Basement.jpg", title: "Piwnica", desc:"Obraz wykonany farbami akrylowymi na papierze, przedstawiający piwnicę starego, opuszczonego domu."},
  {path: selectedImagePath + "Bathroom.jpg", title: "Łazienka", desc:"Rysunek na papierze wykonany suchymi pastelami."},
  {path: selectedImagePath + "Concentration.jpg", title: "Koncentracja", desc:"Portret dziewczyny narysowany na papierze ołówkami."},
  {path: selectedImagePath + "Colorful Hummingbird.jpg", title: "Kolorowy Koliber", desc:"Druga wersja kolibra. Obraz na papierze wykonany farbami akrylowymi."},
  {path: selectedImagePath + "Grandma.jpg", title: "Babcia", desc:"Praca wykonana pastelami olejnymi na 1. Ogólnopolski Konkurs 'Portret Pastelowy' im. Krzysztofa Krzycha. Zdobyła Grand Prix w 2024 roku."},
  {path: selectedImagePath + "Illusion.jpg", title: "Iluzja", desc:"Autoportret wykonany pastelami olejnymi na 2. Ogólnopolski Konkurs 'Portret Pastelowy' im. Krzysztofa Krzycha."},
  {path: selectedImagePath + "Dolly.jpg", title: "Laleczka", desc:"Portret cyfrowy przedstawiający piękno przestarzałych przedmiotów."},
  {path: selectedImagePath + "Passion.jpg", title: "Pasja", desc:"Autoportret wykonany pastelami olejnymi."},
  {path: selectedImagePath + "Love of a Mother.jpg", title: "Miłość Matki", desc:"Zamówienie, portret matki i córki, narysowany ołówkami."},
  {path: selectedImagePath + "Affection.jpg", title: "Czułość", desc:"Zamówienie, obraz dla pary, ponad 30 lat po ich ślubie. Użyłam farb akrylowych na płótnie."},
  {path: selectedImagePath + "Never Enough.jpg", title: "Nigdy Dość", desc:"Portret cyfrowy przedstawiający młodą kobietę patrzącą na wszystko i wszystkich z poczuciem wyższości."},
  {path: selectedImagePath + "Light Spirit.jpg", title: "Lekka Dusza", desc:"Geometryczna ilustracja cyfrowa przedstawiająca wesołą małą duszę, stworzona jako zdjęcie profilowe."},
  {path: selectedImagePath + "Hope.jpg", title: "Nadzieja", desc:"Praca stworzona na przegląd w Koszalinie w 2023 roku. Portret narysowany ołówkami."},
  {path: selectedImagePath + "Hope of Tomorrow.jpg", title: "Nadzieja Jutra", desc:"Obraz plenerowy namalowany farbami olejnymi na płótnie. Był częścią wystawy po plenerowej."},
  {path: selectedImagePath + "Infinite Knowledge.jpg", title: "Nieskończona Wiedza", desc:"Ilustracja cyfrowa przedstawiająca postać z esencją niebiańskiego twórcy."},
  {path: selectedImagePath + "Still Life.jpg", title: "Martwa Natura", desc:"Praca wykonana farbami akrylowymi na płótnie."},
  {path: selectedImagePath + "Timid Timmy.jpg", title: "Nieśmiały Timmy", desc:"Portret cyfrowy przedstawiający młodego chłopca szukającego czułości u swoich rodziców."},
  {path: selectedImagePath + "Pose 1.jpg", title: "Pozowanie 1", desc:"Rysunek młodej kobiety pozującej. Wykonany ołówkami i węglem."},
  {path: selectedImagePath + "Pose 2.jpg", title: "Pozowanie 2", desc:"Rysunek młodej kobiety pozującej. Wykonany ołówkami i węglem."},
  {path: selectedImagePath + "Ruined King.jpg", title: "Zrujnowany Król", desc:"Oryginalny portret Viego z gry League of Legends, narysowany czarnym długopisem."},
  {path: selectedImagePath + "Hummingbird.jpg", title: "Koliber", desc:"Rysunek ptaka, wykonany ołówkiem."},
  {path: selectedImagePath + "Neverland.jpg", title: "Nibylandia", desc:"Panorama mojej fantazyjnej interpretacji Nibylandii. Użyłam tuszu, rysunku piórkiem i techniki lawowania do tej pracy."},
  {path: selectedImagePath + "Mural.jpg", title: "Mural", desc:"Zlecony projekt stworzony do miejscowości Niewodniki. Odnosi się do historii miejscowości i został stworzony cyfrowo."},
];



const sketchImagePath = "/assets/images/gallery/sketches/";
const sketchImageData = [
  {path: sketchImagePath + "28.jpg", desc:"Test desc"},
  {path: sketchImagePath + "29.jpg", desc:"Test desc"},
  {path: sketchImagePath + "20.jpg", desc:"Test desc"},
  {path: sketchImagePath + "21.jpg", desc:"Test desc"},
  {path: sketchImagePath + "22.jpg", desc:"Test desc"},
  {path: sketchImagePath + "23.jpg", desc:"Test desc"},
  {path: sketchImagePath + "24.jpg", desc:"Test desc"},
  {path: sketchImagePath + "25.jpg", desc:"Test desc"},
  {path: sketchImagePath + "26.jpg", desc:"Test desc"},
  {path: sketchImagePath + "27.jpg", desc:"Test desc"},
];


function reLoadGallery(imageData, shouldDisplayInfo) {

  // Number of columns
  const numColumns = 3;

  // Select the gallery container
  const galleryContainer = document.querySelector(".gallery-Container");

  while (galleryContainer.firstChild) {
    galleryContainer.removeChild(galleryContainer.firstChild);
  }

  // Create column divs dynamically
  const columns = Array.from({ length: numColumns }, () => {
    const col = document.createElement("div");
    col.classList.add("col-4");
    galleryContainer.appendChild(col);
    return col;
  });

  // Distribute images across the columns
  imageData.forEach((item, index) => {
    const title = shouldDisplayInfo ? item.title: false; 
    const description = shouldDisplayInfo ? item.desc : false; 


    const colIndex = index % numColumns; // Determine the column for this image
    const imageHTML = `
      <span class="image fit">
        <a class="spotlight" href="${item.path}" data-title="${title}" data-description="${description}" data-page="true" data-autofit="false" data-infinite="true" data-fullscreen="false" data-autohide="false" data-download="true">
          <img src="${item.path}" alt="Image nr ${item.title}" />
        </a>
      </span>
    `;
    columns[colIndex].innerHTML += imageHTML; // Add the image to the appropriate column
  });  
}


function showFeatured() {
  reLoadGallery(selectedImageData, true);
  document.querySelector("button#sketch").removeAttribute("class");
  document.querySelector("button#selected").setAttribute("class", "button primary");
}

function showSketches() {
  reLoadGallery(sketchImageData, false);
  document.querySelector("button#selected").removeAttribute("class");
  document.querySelector("button#sketch").setAttribute("class", "button primary");
}



document.addEventListener("DOMContentLoaded", showFeatured );

document.querySelector("button#selected").addEventListener("click", showFeatured );

document.querySelector("button#sketch").addEventListener("click", showSketches );