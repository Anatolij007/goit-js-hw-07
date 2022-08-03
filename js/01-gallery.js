import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const pictureContainer = document.querySelector(".gallery");
const pictureMarkup = createGallery(galleryItems);
const selectedUrl = new Set();
const galleryLink = document.querySelector("gallery__link");

pictureContainer.insertAdjacentHTML("beforeend", pictureMarkup);

pictureContainer.addEventListener("click", onPictureContainerClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

function onPictureContainerClick(event) {
  if (!event.target.classList.contains(".gallery__item")) {
    return;
  }
  //   const sourse = event.target.dataset.sourse;
  //   if (galleryLink) {
  //     selectedUrl.delete(sourse);
  //   } else {
  //     selectedUrl.add(sourse);
  //   }

  //   //   event.preventDefault();
  //   console.log(selectedUrl);
}

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

instance.show();
