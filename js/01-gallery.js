import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryListNode = document.querySelector(".gallery");
const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};
const markupGallery = galleryItems.map(makeGalleryItemMarkup).join("");

galleryListNode.insertAdjacentHTML("beforeend", markupGallery);

galleryListNode.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;

  const urlImgOriginal = event.target
    .closest(".gallery__link")
    .getAttribute("href");

  const instance = basicLightbox.create(`<img src="${urlImgOriginal}"/>`);

  instance.show();
  if (instance.visible()) {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}
