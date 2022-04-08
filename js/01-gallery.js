import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMainBox = document.body.querySelector(".gallery");
const galleryMarkupCreaton = createGalleryFromObject(galleryItems);

galleryMainBox.insertAdjacentHTML("beforeend", galleryMarkupCreaton);

function createGalleryFromObject(obj) {
  return obj
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryMainBox.addEventListener("click", onGalleyItemClick);

function onGalleyItemClick(evt) {
  evt.preventDefault();

  const targetedImageInGallery = evt.target;
  if (!targetedImageInGallery.classList.contains("gallery__image")) {
    return;
  }

  creationOfModalImage(targetedImageInGallery);
  galleryMainBox.addEventListener("keydown", onEscapeButtonCloseModal);
}

function creationOfModalImage(item) {
  const originalItemSource = item.dataset.source;
  const instance =
    basicLightbox.create(`<img src=${originalItemSource} class="basicLightbox__image" width="800" height="600">
`);

  instance.show();
}

function onEscapeButtonCloseModal(evt) {
  const modalWindow = document.body.querySelector(".basicLightbox");
  if (evt.code !== "Escape") {
    return;
  } else modalWindow.remove();
}
