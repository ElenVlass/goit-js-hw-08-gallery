function createGallery(images) {
    return images.map(({ preview, original, description = 'alt' }, index) => {
        return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    >
    <img
    class="gallery__image lazyload"
    data-src="${preview}"
    data-source="${original}"
    alt="${description}"
    data-index="${index}"
    width="480"
    height="340"
    />
  </a>
</li>`;
    })
        .join('');
};

export default createGallery;