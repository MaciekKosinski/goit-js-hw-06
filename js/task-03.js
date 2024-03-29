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

const galeryElements = document.querySelector('.gallery');

console.log(galeryElements)

const imagesElement = images
  .map(function ({ url, alt }) {
    return `<li><img src = ${url} alt = ${alt} width = '480'></li>`;
  })
  .join(" ");

galeryElements.insertAdjacentHTML("afterbegin", imagesElement);
  

  
galeryElements.style.cssText = `
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  margin-top: 50px;
  padding: 5px;
`;