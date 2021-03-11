
import images from "./gallery-items.js";

const refs = {
    galleryContainer: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    btnLightboxClose: document.querySelector('[data-action="close-lightbox"]'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
}
const galleryMarkup = createGallery(images);
function createGallery(images) {
    return images.map(({ preview, original, description }, index) => {
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
    data-index="${index}"
    />
  </a>
</li>`;
    })
        .join('');
};
refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryContainer.addEventListener('click', handleGalleryItemClick);
refs.btnLightboxClose.addEventListener('click', handleCloseGalleryClick);
refs.lightboxOverlay.addEventListener('click', handleCloseGalleryClick);


function handleGalleryItemClick(evt) {
    evt.preventDefault();
    const imageEl = evt.target.classList.contains('gallery__image');
    if (!imageEl) {
        return;
    };
    openLightbox();
    refs.lightboxImage.src = evt.target.dataset.source;
    refs.lightboxImage.alt = evt.target.alt;
    refs.lightboxImage.dataset.index = evt.target.dataset.index;
}

function openLightbox() {
    refs.lightbox.classList.add('is-open');
        window.addEventListener('keydown', handleKeyPressInLightbox);
}

function handleCloseGalleryClick() {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
        window.removeEventListener('keydown', handleKeyPressInLightbox);
}

function handleKeyPressInLightbox(evt) {
    switch (evt.code) {
        case 'Escape':
            handleCloseGalleryClick();
            break;
        
         case 'ArrowLeft':
            handleArrowLeftClick();
            break;
        
         case 'ArrowRight':
            handleArrowRightClick();
            break;
    }
}

const imagesSrc = images.map(({ original }) => original);

function setStep(step, index) {
    refs.lightboxImage.dataset.index = `${index + step}`;
    refs.lightboxImage.src = imagesSrc[index + step];
}

function handleArrowLeftClick() {
    const IndexOfLightboxImg = +refs.lightboxImage.dataset.index;
if(IndexOfLightboxImg === 0) {
    setStep(0, imagesSrc.length - 1);
    return;
}
    setStep(-1, IndexOfLightboxImg);
};

function handleArrowRightClick() {;
    const IndexOfLightboxImg = +refs.lightboxImage.dataset.index;
    if(IndexOfLightboxImg === imagesSrc.length - 1) {
        setStep(0, 0);
        return;
    }
    setStep(1, IndexOfLightboxImg);
};
