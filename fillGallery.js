import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, onValue, off} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAGFk12CE0pDjGW17nWJvB99W-Ytl3yd1o",
  authDomain: "natdziuadmin.firebaseapp.com",
  databaseURL: "https://natdziuadmin-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "natdziuadmin",
  storageBucket: "natdziuadmin.firebasestorage.app",
  messagingSenderId: "339554989054",
  appId: "1:339554989054:web:4f74c2a953f65df48ec6af",
  measurementId: "G-8NXY6RH4KE"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let currentListenerRef = null;

function detachPreviousListener() {
  if (currentListenerRef) {
    off(currentListenerRef);
    currentListenerRef = null;
  }
}

function loadUserImages(selectedTab, inEnglish) {
  return new Promise((resolve, reject) => {
    const imagesRef = dbRef(db, `webPage/${selectedTab}`);

    detachPreviousListener();
    currentListenerRef = imagesRef;

    onValue(
      imagesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          console.log('❌ No data found.');
          resolve([]); // resolve empty array
          return;
        }

        const res = Object.entries(data)
          .reverse()
          .map(([keyId, { image, plTitle, plDesc, enTitle, enDesc }]) => {
            if (inEnglish) {
              return { path: image, title: enTitle, desc: enDesc };
            } else {
              return { path: image, title: plTitle, desc: plDesc };
            }
          });

        resolve(res); // resolve array after processing
      },
      (error) => {
        reject(error);
      }
    );
  });
}


const href = window.location.href;
// let selectedImageData = href.includes("/en/") ? selectedImageDataEN : selectedImageDataPL; 
let isEnglish = href.includes("/en/");

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


async function showImages(displayTheme) {

  let imageDataSet = await loadUserImages(displayTheme, isEnglish);
  let shouldDisplayInfo = null;
  let buttonSelector = null;

  switch (displayTheme) {
    case "selected":
      shouldDisplayInfo = true;
      buttonSelector = "button#selected";
      break;
    
    case "sketches":
      shouldDisplayInfo = false;
      buttonSelector = "button#sketch";
      break;

    case "tattoo":
      shouldDisplayInfo = true;
      buttonSelector = "button#tattoo";
      break; 
  }

  reLoadGallery(imageDataSet, shouldDisplayInfo);
  document.querySelector("button.button").removeAttribute("class");
  document.querySelector(buttonSelector).setAttribute("class", "button primary");

}

document.addEventListener("DOMContentLoaded", () => showImages("selected") );

document.querySelector("button#selected") .addEventListener("click", ()=>{  showImages("selected")  });
document.querySelector("button#tattoo")   .addEventListener("click", ()=>{  showImages("tattoo")  });
document.querySelector("button#sketch")   .addEventListener("click", ()=>{  showImages("sketches")  });