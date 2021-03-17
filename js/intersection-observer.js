
import refs from "./refs.js";


const options = {
  root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
  rootMargin: '10px',
  threshold: 0.75,
};

const onEntry = (entries, observer) => {
    entries.forEach(entry => {
         entry.target; // the Element whose intersection with the intersection root changed.
    entry.isIntersecting; // intersecting: true or false
    console.log(entry);
  });
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(refs.galleryContainer.firstElementChild);

// [...refs.galleryContainer.children].forEach((elem) => observer.observe(elem));
document.querySelectorAll('.gallery__item').forEach((elem) => observer.observe(elem));

console.dir(document.querySelectorAll('.gallery__item'))
console.dir(refs.galleryContainer.children)
console.dir([1, 2, 3])