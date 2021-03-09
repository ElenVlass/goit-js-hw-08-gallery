import images from "./gallery-items.js";

const refs = {
    galleryContainer: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    btnLightboxClose: document.querySelector('[data-action="close-lightbox"]'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
}
const galleryMarkup = createGallery(images);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryContainer.addEventListener('click', handleGalleryItemClick);
refs.btnLightboxClose.addEventListener('click', handleBtnCloseClick);
refs.lightboxOverlay.addEventListener('click', handlelightboxOverlayClick);

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

function handleGalleryItemClick(evt) {
    evt.preventDefault();
    const imageEl = evt.target.classList.contains('gallery__image');
    if (!imageEl) {
        return;
    };
    openLightbox();
    refs.lightboxImage.src = evt.target.dataset.source;
    refs.lightboxImage.alt = evt.target.alt;
}

function openLightbox() {
    refs.lightbox.classList.add('is-open');

}

function handleBtnCloseClick() {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
}

function handlelightboxOverlayClick(evt) {
    handleBtnCloseClick();
}