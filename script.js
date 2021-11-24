const imageContainer = document.querySelector(".image-container");

let photosArray = [];

const count = 10;
const apiKey = `5x-UTQZ6IFEuzm2x2-2JvAjx1ERHilaZD8J9xgZ5OeY`;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const displayPhotos = () => {
  photosArray.forEach((photo) => {
    const item = document.createElement("a");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// Get photos from API

(async function getPhotos() {
  try {
    const response = await fetch(API_URL);
    photosArray = await response.json();
    displayPhotos();
    console.log(photosArray);
  } catch {
    //error
  }
})();
