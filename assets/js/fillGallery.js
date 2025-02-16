// https://github.com/nextapps-de/spotlight?tab=readme-ov-file

const selectedImagePath = "images/gallery/selected/";
const selectedImageData = [
  {path: selectedImagePath + "pic01.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic06.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic03.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic06.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic04.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic01.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic02.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic01.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic03.jpg", title:"name", desc:"Test desc"},
  {path: selectedImagePath + "pic03.jpg", title:"name", desc:"Test desc"},
];

const sketchImagePath = "images/gallery/sketches/";
const sketchImageData = [
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"},
  {path: sketchImagePath + "j.jpg", title:"name", desc:"Test desc"}
];


function reLoadGallery(imageData) {

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
    const colIndex = index % numColumns; // Determine the column for this image
    const imageHTML = `
      <span class="image fit">
        <a class="spotlight" href="${item.path}" data-description="${item.desc}" data-page="true" data-autofit="false" data-infinite="true" data-fullscreen="false" data-autohide="false" data-download="true">
          <img src="${item.path}" alt="Image nr ${item.title}" />
        </a>
      </span>
    `;
    columns[colIndex].innerHTML += imageHTML; // Add the image to the appropriate column
  });  
}

document.addEventListener("DOMContentLoaded", reLoadGallery(selectedImageData));

document.querySelector("button#selected").addEventListener("click", function() {
  reLoadGallery(selectedImageData);
  document.querySelector("button#sketch").removeAttribute("class");
  document.querySelector("button#selected").setAttribute("class", "button primary");
});

document.querySelector("button#sketch").addEventListener("click", function() {
  reLoadGallery(sketchImageData);
  document.querySelector("button#selected").removeAttribute("class");
  document.querySelector("button#sketch").setAttribute("class", "button primary");
});