
import images from "./gallery-items.js";
import refs from "./refs.js";
import createGallery from "./creating-gallery.js"

const galleryMarkup = createGallery(images);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryContainer.addEventListener('click', handleGalleryItemClick);
refs.btnLightboxClose.addEventListener('click', handleCloseGalleryClick);
refs.lightboxOverlay.addEventListener('click', handleCloseGalleryClick);


function handleGalleryItemClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    };
    openLightbox();
    showlightboxImage(evt.target.dataset.source, evt.target.dataset.index, evt.target.alt);
};
 
function showlightboxImage(src, index, alt) {
    refs.lightboxImage.src = src;
    refs.lightboxImage.dataset.index = index;
    refs.lightboxImage.alt = alt;
};

function openLightbox() {
    refs.lightbox.classList.add('is-open');
        window.addEventListener('keydown', handleKeyPressInLightbox);
};

function handleCloseGalleryClick() {
    refs.lightbox.classList.remove('is-open');
    showlightboxImage();
        window.removeEventListener('keydown', handleKeyPressInLightbox);
};

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
};

const imagesSrc = images.map(({ original }) => original);

function setStep(step, index) {
    showlightboxImage(imagesSrc[index + step], `${index + step}`);
};


function handleArrowLeftClick() {
    const IndexOfLightboxImg = +refs.lightboxImage.dataset.index;
    if (IndexOfLightboxImg === 0) {
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