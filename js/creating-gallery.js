function createGallery(images) {
    return images.map(({ preview, original, description = 'alt' }, index) => {
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

export default createGallery;