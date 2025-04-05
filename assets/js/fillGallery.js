// https://github.com/nextapps-de/spotlight?tab=readme-ov-file

const selectedImagePath = "/assets/images/gallery/featured/";
const selectedImageDataEN = [
  {path: selectedImagePath + "Rose Garden.jpg", title: "Rose Garden", desc:"A painting on cardboard using traditional acrylic paints, depicting a botanical garden bathed in sunlight."},
  {path: selectedImagePath + "Basement.jpg", title: "Basement", desc:"A painting created with acrylic paints on paper, depicting the basement of an old, abandoned house."},
  {path: selectedImagePath + "Bathroom.jpg", title: "Bathroom", desc:"A drawing on paper created with dry pastels."},
  {path: selectedImagePath + "Concentration.jpg", title: "Concentration", desc:"A portrait of a girl drawn on paper with pencils."},
  {path: selectedImagePath + "Colorful Hummingbird.jpg", title: "Colorful Hummingbird", desc:"The second version of the hummingbird. A painting on paper created with acrylic paints."},
  {path: selectedImagePath + "Grandma.jpg", title: "Grandma", desc:"A work created with oil pastels for the 1st National Competition 'Pastel Portrait,' named after Krzysztof Krzych. It won the Grand Prix award in 2024."},
  {path: selectedImagePath + "Illusion.jpg", title: "Illusion", desc:"A self-portrait created with oil pastels for the 2nd National Competition 'Pastel Portrait,' named after Krzysztof Krzych."},
  {path: selectedImagePath + "Dolly.jpg", title: "Dolly", desc:"A digital portrait depicting the beauty of aged objects."},
  {path: selectedImagePath + "Passion.jpg", title: "Passion", desc:"A self-portrait drawn with oil pastels."},
  {path: selectedImagePath + "Love of a Mother.jpg", title: "Love of a Mother", desc:"A commissioned portrait of a mother and daughter, drawn with pencils."},
  {path: selectedImagePath + "Affection.jpg", title: "Affection", desc:"A commissioned painting for a couple more than 30 years after their wedding. I used acrylic paints on canvas."},
  {path: selectedImagePath + "Never Enough.jpg", title: "Never Enough", desc:"A digital portrait depicting a young woman looking at everything and everyone with superiority."},
  {path: selectedImagePath + "Light Spirit.jpg", title: "Light Spirit", desc:"A geometric digital illustration of a cheerful little soul, created as a profile picture."},
  {path: selectedImagePath + "Hope.jpg", title: "Hope", desc:"A work created for the review in Koszalin in 2023. The portrait was drawn with pencils."},
  {path: selectedImagePath + "Hope of Tomorrow.jpg", title: "Hope of Tomorrow", desc:"An outdoor painting created with oil paints on canvas. It was part of a post-plein-air exhibition."},
  {path: selectedImagePath + "Infinite Knowledge.jpg", title: "Infinite Knowledge", desc:"A digital illustration depicting a figure with the essence of a heavenly creator."},
  {path: selectedImagePath + "Still Life.jpg", title: "Still Life", desc:"A work created with acrylics on canvas."},
  {path: selectedImagePath + "Timid Timmy.jpg", title: "Timid Timmy", desc:"A digital portrait of a young boy seeking affection from his parents."},
  {path: selectedImagePath + "Pose 1.jpg", title: "Pose 1", desc:"A drawing of a young woman posing. Created with pencils and graphite."},
  {path: selectedImagePath + "Pose 2.jpg", title: "Pose 2", desc:"A drawing of a young woman posing. Created with pencils and graphite."},
  {path: selectedImagePath + "Ruined King.jpg", title: "Ruined King", desc:"An original portrait of Viego from League of Legends, drawn with a black pen."},
  {path: selectedImagePath + "Hummingbird.jpg", title: "Hummingbird", desc:"A drawing of a bird, created with a pencil."},
  {path: selectedImagePath + "Neverland.jpg", title: "Neverland", desc:"A panorama of my fantasy interpretation of Neverland. I used ink, pen drawing, and the wash technique for this piece."},
  {path: selectedImagePath + "Mural.jpg", title: "Mural", desc:"A commissioned project created in the town of Niewodniki (Poland). It references the town’s history and was created digitally."},
];

const selectedImageDataPL = [
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

const href = window.location.href;
let selectedImageData = selectedImageDataPL;

if (href.includes("/en/")) {
  selectedImageData = selectedImageDataEN;
}


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