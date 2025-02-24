// https://github.com/nextapps-de/spotlight?tab=readme-ov-file

const selectedImagePath = "/assets/images/gallery/featured/";
const selectedImageData = [
  {path: selectedImagePath + "Rose Garden.jpg"      , desc:"A painting on cardboard using traditional acrylic paints, depicting a botanical garden bathed in sunlight."},
  {path: selectedImagePath + "Basement.jpg"         , desc:"A painting created with acrylic paints on paper, depicting the basement of an old, abandoned house."},
  {path: selectedImagePath + "Bathroom.jpg"         , desc:"A drawing on paper created with dry pastels."},
  {path: selectedImagePath + "Concentration.jpg"    , desc:"A portrait of a girl drawn on paper with pencils."},
  {path: selectedImagePath + "Colorful Hummingbird.jpg", desc:"The second version of the hummingbird. A painting on paper created with acrylic paints."},
  {path: selectedImagePath + "Grandma.jpg"          , desc:"A work created with oil pastels for the 1st National Competition 'Pastel Portrait,' named after Krzysztof Krzych. It won the Grand Prix award in 2024."},
  {path: selectedImagePath + "Illusion.jpg"         , desc:"A self-portrait created with oil pastels for the 2nd National Competition 'Pastel Portrait,' named after Krzysztof Krzych."},
  {path: selectedImagePath + "Dolly.jpg"            , desc:"A digital portrait depicting the beauty of aged objects."},
  {path: selectedImagePath + "Passion.jpg"          , desc:"A self-portrait drawn with oil pastels."},
  {path: selectedImagePath + "Love of a Mother.jpg" , desc:"A commissioned portrait of a mother and daughter, drawn with pencils."},
  {path: selectedImagePath + "Affection.jpg"        , desc:"A commissioned painting for a couple more than 30 years after their wedding. I used acrylic paints on canvas."},
  {path: selectedImagePath + "Never Enough.jpg"     , desc:"A digital portrait depicting a young woman looking at everything and everyone with superiority."},
  {path: selectedImagePath + "Light Spirit.jpg"     , desc:"A geometric digital illustration of a cheerful little soul, created as a profile picture."},
  {path: selectedImagePath + "Hope.jpg"             , desc:"A work created for the review in Koszalin in 2023. The portrait was drawn with pencils."},
  {path: selectedImagePath + "Hope of Tomorrow.jpg" , desc:"An outdoor painting created with oil paints on canvas. It was part of a post-plein-air exhibition."},
  {path: selectedImagePath + "Infinite Knowledge.jpg", desc:"A digital illustration depicting a figure with the essence of a heavenly creator."},
  {path: selectedImagePath + "Still Life.jpg"       , desc:"A work created with acrylics on canvas."},
  {path: selectedImagePath + "Timid Timmy.jpg"      , desc:"A digital portrait of a young boy seeking affection from his parents."},
  {path: selectedImagePath + "Pose 1.jpg"           , desc:"A drawing of a young woman posing. Created with pencils and graphite."},
  {path: selectedImagePath + "Pose 2.jpg"           , desc:"A drawing of a young woman posing. Created with pencils and graphite."},
  {path: selectedImagePath + "Ruined King.jpg"      , desc:"An original portrait of Viego from League of Legends, drawn with a black pen."},
  {path: selectedImagePath + "Hummingbird.jpg"      , desc:"A drawing of a bird, created with a pencil."},
  {path: selectedImagePath + "Neverland.jpg"        , desc:"A panorama of my fantasy interpretation of Neverland. I used ink, pen drawing, and the wash technique for this piece."},
  {path: selectedImagePath + "Mural.jpg"            , desc:"A commissioned project created in the town of Niewodniki (Poland). It references the town’s history and was created digitally."},
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
    const title = shouldDisplayInfo ? item.path.substring(selectedImagePath.length, item.path.length - ".jpg".length) : false; 
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