import images from "./gallery-items.js";

const galleryContainer = document.querySelector('.js-gallery')
const galleryMarkup = createGallery(images);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGallery(images) {
    return images.map(({ preview, original, description }) => {
        return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
        .join('');
}