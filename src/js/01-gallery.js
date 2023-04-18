// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

export function renderGalleryItems(items) {
    const galleryItemsMarkup = items
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `;
    })
    .join('');

    galleryContainer.innerHTML = galleryItemsMarkup;
}

window.onload = function() {
    const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    });
};

renderGalleryItems(galleryItems);