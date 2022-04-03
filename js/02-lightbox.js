import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMainBox = document.body.querySelector('.gallery');
const galleryMarkupCreaton = createGalleryFromObject(galleryItems);

galleryMainBox.insertAdjacentHTML('beforeend', galleryMarkupCreaton);

function createGalleryFromObject(obj) {
    return obj.map(({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
};



const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});







