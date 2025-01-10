

document.addEventListener("DOMContentLoaded", function () {
  // List of image file paths
  const imagePaths = [
    "images/pic01.jpg",
    "images/pic06.jpg",
    "images/pic03.jpg",
    "images/pic06.jpg",
    "images/pic04.jpg",
    "images/pic01.jpg",
    "images/pic02.jpg",
    "images/pic01.jpg",
    "images/pic03.jpg"
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
  imagePaths.forEach((path, index) => {
    const colIndex = index % numColumns; // Determine the column for this image
    const imageHTML = `
      <span class="image fit">
        <a data-fslightbox="gallery" href="${path}">
          <img src="${path}" alt="" />
        </a>
      </span>
    `;
    columns[colIndex].innerHTML += imageHTML; // Add the image to the appropriate column
  });

  refreshFsLightbox();
});
