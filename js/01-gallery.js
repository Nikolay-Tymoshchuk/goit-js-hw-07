import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMainBox = document.body.querySelector('.gallery');
const galleryMarkupCreaton = createGalleryFromObject(galleryItems);

galleryMainBox.insertAdjacentHTML('beforeend', galleryMarkupCreaton);

function createGalleryFromObject(obj) {
    return obj.map(({ original, preview, description}) => `<div class="gallery__item">
    <a class="gallery__link" href = '${original}' >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="large-image.jpg"
                    alt="${description}"
                    target="_self";
                />
            </a>
            </div >`).join('');
}

galleryMainBox.addEventListener('click', onGalleyItemClick());

function onGalleyItemClick(evt) {

};
