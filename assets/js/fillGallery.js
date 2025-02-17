// https://github.com/nextapps-de/spotlight?tab=readme-ov-file

const selectedImagePath = "assets/images/gallery/featured/";
const selectedImageData = [
  {path: selectedImagePath + "1.jpg", title:"Grandma",        desc:"A work created with oil pastels for the 1st National Competition 'Pastel Portrait,' named after Krzysztof Krzych. It won the Grand Prix award in 2024."},
  {path: selectedImagePath + "2.jpg", title:"Illusion",       desc:"A self-portrait created with oil pastels for the 2nd National Competition 'Pastel Portrait,' named after Krzysztof Krzych."},
  {path: selectedImagePath + "3.jpg", title:"Dolly",          desc:"A digital portrait depicting the beauty of aged objects."},
  {path: selectedImagePath + "4.jpg", title:"Passion",        desc:"A self-portrait drawn with oil pastels."},
  {path: selectedImagePath + "5.jpg", title:"Love of a Mother", desc:"A commissioned portrait of a mother and daughter, drawn with pencils."},
  {path: selectedImagePath + "6.jpg", title:"Affection",      desc:"A commissioned painting for a couple more than 30 years after their wedding. I used acrylic paints on canvas."},
  {path: selectedImagePath + "7.jpg", title:"Never Enough",   desc:"A digital portrait depicting a young woman looking at everything and everyone with superiority."},
  {path: selectedImagePath + "8.jpg", title:"Light Spirit",   desc:"A geometric digital illustration of a cheerful little soul, created as a profile picture."},
  {path: selectedImagePath + "9.jpg", title:"Hope",           desc:"A work created for the review in Koszalin in 2023. The portrait was drawn with pencils."},
  {path: selectedImagePath + "10.jpg", title:"Hope of Tomorrow", desc:"An outdoor painting created with oil paints on canvas. It was part of a post-plein-air exhibition."},
  {path: selectedImagePath + "11.jpg", title:"Infinite Knowledge", desc:"A digital illustration depicting a figure with the essence of a heavenly creator."},
  {path: selectedImagePath + "12.jpg", title:"Still Life",    desc:"A work created with acrylics on canvas."},
  {path: selectedImagePath + "13.jpg", title:"Timid Timmy",   desc:"A digital portrait of a young boy seeking affection from his parents."},
  {path: selectedImagePath + "14.jpg", title:"Pose 1",        desc:"A drawing of a young woman posing. Created with pencils and graphite."},
  {path: selectedImagePath + "15.jpg", title:"Pose 2",        desc:"A drawing of a young woman posing. Created with pencils and graphite."},
  {path: selectedImagePath + "16.jpg", title:"Ruined King",   desc:"An original portrait of Viego from League of Legends, drawn with a black pen."},
  {path: selectedImagePath + "17.jpg", title:"Hummingbird",   desc:"A drawing of a bird, created with a pencil."},
  {path: selectedImagePath + "18.jpg", title:"Neverland",     desc:"A panorama of my fantasy interpretation of Neverland. I used ink, pen drawing, and the wash technique for this piece."},
  {path: selectedImagePath + "19.jpg", title:"Mural",         desc:"A commissioned project created in the town of Niewodniki (Poland). It references the town’s history and was created digitally."}
];


const sketchImagePath = "assets/images/gallery/sketches/";
const sketchImageData = [
  {path: sketchImagePath + "20.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "21.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "22.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "23.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "24.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "25.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "26.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "27.jpg", title:"name", desc:"Test desc"}
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
    const title = shouldDisplayInfo ? item.title : false; 
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