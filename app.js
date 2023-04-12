'use strict';


// ********************************* Selectors *********************************
let productsContainer = document.querySelector('.images-container');
let resultContainer = document.querySelector('.result-container');
let resultList = document.querySelector('.result-list');
let totalViews = document.querySelector('.total-views');
let image1 = document.querySelector('.images-container img:nth-child(1)');
let image2 = document.querySelector('.images-container img:nth-child(2)');
let image3 = document.querySelector('.images-container img:nth-child(3)');
// console.log(totalViews);

// Data
let clicks = 0;
let maxClicksAllowed = 25;

const state = {
products: [],
};

// ********************************* Random function **********************************
function getRandomNumber() {
return Math.floor(Math.random() * state.products.length);
}

// *********************************** Constructor ************************************
function Product(name, src) {
this.name = name;
this.src = src;
this.views = 0;
this.clicks = 0;
}

// ********************************** Create products **********************************
let bag = new Product('bag', './assets/images/bag.jpg');
let banana = new Product('banana', './assets/images/banana.jpg');
let bathroom = new Product('bathroom', './assets/images/bathroom.jpg');
let boots = new Product('boots', './assets/images/boots.jpg');
let breakfast = new Product('breakfast', './assets/images/breakfast.jpg');
let bubblegum = new Product('bubblegum', './assets/images/bubblegum.jpg');
let chair = new Product('chair', './assets/images/chair.jpg');
let cthulhu = new Product('cthulhu', './assets/images/cthulhu.jpg');
let dogDuck = new Product('dog-duck', './assets/images/dog-duck.jpg');
let dragon = new Product('dragon', './assets/images/dragon.jpg');
let pen = new Product('pen', './assets/images/pen.jpg');
let petSweep = new Product('pet-sweep', './assets/images/pet-sweep.jpg');
let scissors = new Product('scissors', './assets/images/scissors.jpg');
let shark = new Product('shark', './assets/images/shark.jpg');
let sweep = new Product('sweep', './assets/images/sweep.jpg');
let tauntaun = new Product('tauntaun', './assets/images/tauntaun.jpg');
let unicorn = new Product('unicorn', './assets/images/unicorn.jpg');
let waterCan = new Product('water-can', './assets/images/water-can.jpg');
let wineGlass = new Product('wine-glass', './assets/images/wine-glass.jpg');

state.products.push(bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogDuck,dragon,pen,petSweep,scissors,shark,sweep,tauntaun,unicorn,waterCan,wineGlass);

// ********************************* Render function *********************************
function renderProducts() {
let prod1 = getRandomNumber();
let prod2 = getRandomNumber();
let prod3 = getRandomNumber();

// Functions not repeat a number
while (prod2 === prod1 || prod3 === prod1 || prod3 === prod2) {
prod2 = getRandomNumber();
prod3 = getRandomNumber();
}

// Add images src and name and RENDER
image1.name = state.products[prod1].name;
image1.alt = state.products[prod1].name;
image1.src = state.products[prod1].src;

image2.name = state.products[prod2].name;
image2.alt = state.products[prod2].name;
image2.src = state.products[prod2].src;

image3.name = state.products[prod3].name;
image3.alt = state.products[prod3].name;
image3.src = state.products[prod3].src;

// Update clicks
state.products[prod1].views++;
state.products[prod2].views++;
state.products[prod3].views++;
}

// ********************************* Handle Clicks *********************************
function handleImagesClick(event) {
// Update clicks
clicks++;

// Update products clicks
let productClicked = event.target.alt;
// console.log(productClicked);
for (let i = 0; i < state.products.length; i++) {
if (productClicked === state.products[i].name) {
state.products[i].clicks++;
break;
}
}

// Check maxClicksAllowed
if (clicks === maxClicksAllowed) {
image1.removeEventListener('click', handleImagesClick);
image2.removeEventListener('click', handleImagesClick);
image3.removeEventListener('click', handleImagesClick);

renderResults();
} else {
renderProducts();
}
}

image1.addEventListener('click', handleImagesClick);
image2.addEventListener('click', handleImagesClick);
image3.addEventListener('click', handleImagesClick);

// ********************************* Render Results *********************************
function renderResults() {
for (let i = 0; i < state.products.length; i++) {
let li = document.createElement('li');

if (state.products[i].views > 1) {
li.textContent = `- ${state.products[i].name}: had ${state.products[i].views} views and was clicked ${state.products[i].clicks} times.`;
}
resultList.appendChild(li);
totalViews.textContent = `${clicks} views`;
}
}

// ********************************* Render Products *********************************
renderProducts();

// console.log(state.products);