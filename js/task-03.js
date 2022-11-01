const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
// console.log(gallery)

const markup = el =>
  `<li>
    <img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" />
  </li>`;

const galleryItems = images.map(image => markup(image));
console.log(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));

// ====================
// images.forEach(el => {
//   gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
//   );
// });
// ====================
// const createGalleryItem = images.map(image => {
  
//   const galleryItem = document.createElement('li');
  
//   const galleryImage = document.createElement('img');
//   // galleryImage.setAttribute('src', image.url);
//   galleryImage.src = image.url;
//   // galleryImage.setAttribute('alt', image.alt);
//    galleryImage.alt = image.alt;
//   galleryImage.width = 150;
//   galleryImage.height = 100;
//   galleryItem.appendChild(galleryImage)
// console.log(galleryImage)
//   return galleryItem;
// })

// console.log(createGalleryItem)
// gallery.append(...createGalleryItem)
