import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);
const galleryListNode = document.querySelector(".gallery");
const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li>
    <a class="gallery__item" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
       />
     </a>
     </li>`;
};

const markupGallery = galleryItems.map(makeGalleryItemMarkup).join("");
console.log("markupGallery", markupGallery);
galleryListNode.insertAdjacentHTML("beforeend", markupGallery);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
