// https://github.com/nextapps-de/spotlight?tab=readme-ov-file

document.addEventListener("DOMContentLoaded", function () {
  // List of image file paths
  const imageData = [
    {path:"images/pic01.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic06.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic03.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic06.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic04.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic01.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic02.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic01.jpg",title:"name",desc:"Test desc"},
    {path:"images/pic03.jpg",title:"name",desc:"Test desc"}
  ];

  // Number of columns
  const numColumns = 3;

  // Select the gallery container
  const galleryContainer = document.querySelector(".gallery-Container");

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
        <a class="spotlight" href="${item.path}" data-description="${item.desc}" data-page="true" data-autofit="false" data-infinite="true" data-fullscreen="false" data-autohide="false"  data-download="true">
          <img src="${item.path}" alt="Image nr ${item.title}" />
        </a>
      </span>
    `;
    columns[colIndex].innerHTML += imageHTML; // Add the image to the appropriate column
  });
});