const allLazyImg = document.querySelectorAll('img[data-src]');
allLazyImg.forEach(img =>
    img.addEventListener('load', handleImgLoad, { once: true}));

function handleImgLoad(evt) {
    console.log(`Image loaded`);
  evt.target.classList.add('appear');
};


if ('loading' in HTMLImageElement.prototype) {
    addSrcAttribute();
} else {
addLazySizesLib()
};

function addSrcAttribute() {
const arrayLazyImg = document.querySelectorAll('img[loading="lazy"]');
    arrayLazyImg.forEach(img => { img.src = img.dataset.src });
};

function addLazySizesLib() {
     const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script); 
}