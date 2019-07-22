'use strict';
var lastShown = [];
var allProducts = [];
var totalClicks = 0;
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntuan', 'unicorn'];

var firstImg = document.getElementById('left');
var secondImg = document.getElementById('center');
var thirdImg = document.getElementById('right');


function Product(name) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.votes = 0;

  allProducts.push(this);
}

for(var i = 0; i < productName.length; i++) {
  new Product(productName[i]);
}

Product.all = [];

firstImg.addEventListener('click', handleImageClick);
secondImg.addEventListener('click', handleImageClick);
thirdImg.addEventListener('click', handleImageClick);

function randomImage() {

  var firstRandom = Math.floor(Math.random() * allProducts.length);
  var secondRandom = Math.floor(Math.random() * allProducts.length);
  var thirdRandom = Math.floor(Math.random() * allProducts.length);

  while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || lastShown.includes(secondRandom) || lastShown.includes(thirdRandom)) {
    firstRandom = Math.floor(Math.random() * allProducts.length);
    secondRandom = Math.floor(Math.random() * allProducts.length);
    thirdRandom = Math.floor(Math.random() * allProducts.length);
  }

  lastShown[0] = firstRandom;
  lastShown[0] = secondRandom;
  lastShown[0] = thirdRandom;

  firstImg.src = allProducts[firstRandom].path;
  secondImg.src = allProducts[secondRandom].path;
  thirdImg.src = allProducts[thirdRandom].path;

  firstImg.alt = allProducts[firstRandom].name;
  secondImg.alt = allProducts[secondRandom].name;
  thirdImg.alt = allProducts[thirdRandom].name;

  allProducts[firstRandom ].views++;
  allProducts[secondRandom].views++;
  allProducts[thirdRandom].views++;

  totalClicks++;

  if(totalClicks === 5) {
    firstImg.removeEventListener('click', handleImageClick);
    secondImg.removeEventListener('click', handleImageClick);
    thirdImg.removeEventListener('click', handleImageClick);
  }
}

function handleImageClick(event) {
  //iterate through array to check that event has been clicked
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.id === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  randomImage();
}
randomImage();



