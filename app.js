'use strict';

var totalClicks = 0;
var lastShown = [];
var allProducts = [];
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntuan', 'unicorn'];
console.log(productName);

var firstImg = document.getElementById('left');
var secondImg = document.getElementById('center');
var thirdImg = document.getElementById('right');

firstImg.addEventListener('click', handleImageClick);
secondImg.addEventListener('click', handleImageClick);
thirdImg.addEventListener('click', handleImageClick);


function Product(name, path) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  this.tally = 0;

  this.bgColor = `rgba(${cOne}, ${cTwo}, ${cThree}, 0.2)`;
  var cOne = Math.floor(Math.random() * 255);
  var cTwo = Math.floor(Math.random() * 255);
  var cThree = Math.floor(Math.random() * 255);

  allProducts.push(this);

}
if(localStorage.productVotes) {
  allProducts = JSON.parse(localStorage.getItem('productVotes'));
} else {
  new Product('bag', './img/bag.jpg');
  new Product('banana', './img/banana.jpg');
  new Product('bathroom', './img/bathroom.jpg');
  new Product('boots', './img/boots.jpg');
  new Product('breakfast', './img/breakfast.jpg');
  new Product('bubblegum', './img/bubblegum.jpg');
  new Product('chair', './img/chair.jpg');
  new Product('cthulhu', './img/cthulhu.jpg');
  new Product('dog-duck', './img/dog-duck.jpg');
  new Product('dragon', './img/dragon.jpg');
  new Product('pen', './img/pen.jpg');
  new Product('pet-sweep', './img/pet-sweep.jpg');
  new Product('scissors', './img/scissors.jpg');
  new Product('shark', './img/shark.jpg');
  new Product('sweep', './img/sweep.png');
  new Product('tauntaun', './img/tauntaun.jpg');
  new Product('unicorn', './img/unicorn.jpg');
  new Product('usb', './img/usb.gif');
  new Product('water-can', './img/water-can.jpg');
  new Product('wine-glass', './img/wine-glass.jpg');
}


Product.all = [];

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

  firstImg[0] = allProducts[firstRandom].path;
  secondImg[1] = allProducts[secondRandom].path;
  thirdImg[2] = allProducts[thirdRandom].path;

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
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  randomImage();
}
randomImage();



