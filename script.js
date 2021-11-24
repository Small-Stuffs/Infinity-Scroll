const imageContainer = document.querySelector(".image-container");

let photosArray = [];

const count = 10;
const apiKey = `5x-UTQZ6IFEuzm2x2-2JvAjx1ERHilaZD8J9xgZ5OeY`;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// Helper for setAttribute on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

const displayPhotos = () => {
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, { href: photo.links.html, target: "_blank" });
    const img = document.createElement("img");

    // setAttributes(img, {
    //   src: photo.url.regular,
    //   alt: photo.alt_description,
    //   title: photo.add_description,
    // });
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

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

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log("load more");
  }
});
