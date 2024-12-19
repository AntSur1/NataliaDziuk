// Functionality for dropdown menu
function dropDownMenu() {
  var x = document.querySelector("#side-slide-menu");
  var icon = document.querySelector("#menu-button").firstChild
  if (x.style.display == "none") {
    x.style.display = "block";
    icon.innerHTML = "close"
  } else {
    x.style.display = "none";
    icon.innerHTML = "menu"
  }
}

// Function to fetch and inject navbar HTML
function fetchAndInjectSection(section) {
  // Fetch the navbar HTML section
  const sectionURL = "sections/" + section + ".html"

  // Fetch and inject navbar HTML
  return fetch(sectionURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load " + sectionURL);
      }
      return response.text();
    })
    .then(html => {
      // Inject the retrieved HTML into the document
      document.getElementById(section).innerHTML = html;
      console.debug("loaded " + section);
    })
    .catch(error => console.error("Error loading section:", error));
}


// Load page content
async function fetchAndPopulateContent() {
  await Promise.all([
    fetchAndInjectSection("nav"),
    fetchAndInjectSection("footer"),
  ]);
}


// Avoid flickering webiste while everything loads
function showBody() {
  document.body.removeAttribute("style");
}


// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", async function () {
  try {
    await fetchAndPopulateContent();
    showBody();
  } 
  catch (error) {
    console.error("An error occurred:", error, ", trying again");
  }
});
