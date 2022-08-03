import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const pictureContainer = document.querySelector(".gallery");
const pictureMarkup = createGallery(galleryItems);

pictureContainer.insertAdjacentHTML("beforeend", pictureMarkup);

pictureContainer.addEventListener("click", onPictureContainerClick);

//Створення і рендер розмітки
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

let instance;

function onPictureContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const sourse = event.target.dataset.source;

  instance = basicLightbox.create(
    `
    <img src="${sourse}">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", escapeModalClose);
      },
      onClose: (instance) => {
        document.addEventListener("keydown", escapeModalClose);
      },
    }
  );

  instance.show();
}
//закриття модального вікна після натискання клавіші Escape
function escapeModalClose(event) {
  event.preventDefault();
  if (event.key === "Escape") {
    instance.close();
  }
}
