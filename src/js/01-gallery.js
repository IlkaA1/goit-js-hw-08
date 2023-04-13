// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const galleryUl = document.querySelector(".gallery");

const galleryLi = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
  )
  .join("");

galleryUl.insertAdjacentHTML("afterbegin", galleryLi);

galleryUl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
