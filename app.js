'use strict';
var lastShown = [];
var allProducts = [];
var totalClicks = 0;
var views = 0;
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn'];

var firstImg = document.getElementById('left');
var secondImg = document.getElementById('center');
var thirdImg = document.getElementById('right');

var firstImg1 = document.getElementById('one');
var secondImg2 = document.getElementById('two');
var thirdImg3 = document.getElementById('three');

var formEl = document.getElementById('votes');


function Product(name) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allProducts.push(this);
}

var getStorage = localStorage.getItem('productVotes');

if (localStorage.ProductVotes) {
  allProducts = JSON.parse(getStorage);
} else {
  productName.forEach (product => {
    new Product(product);
  });
}
// new Product('bag', './img/bag.jpg');
// new Product('banana', './img/banana.jpg');
// new Product('bathroom', './img/bathroom.jpg');
// new Product('boots', './img/boots.jpg');
// new Product('breakfast', './img/breakfast.jpg');
// new Product('bubblegum', './img/bubblegum.jpg');
// new Product('chair', './img/chair.jpg');
// new Product('cthulhu', './img/cthulhu.jpg');
// new Product('dog-duck', './img/dog-duck.jpg');
// new Product('dragon', './img/dragon.jpg');
// new Product('pen', './img/pen.jpg');
// new Product('pet-sweep', './img/pet-sweep.jpg');
// new Product('scissors', './img/scissors.jpg');
// new Product('shark', './img/shark.jpg');
// new Product('sweep', './img/sweep.png');
// new Product('tauntaun', './img/tauntaun.jpg');
// new Product('unicorn', './img/unicorn.jpg');
// new Product('usb', './img/usb.gif');
// new Product('water-can', './img/water-can.jpg');
// new Product('wine-glass', './img/wine-glass.jpg');

function randomImage() {

  while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || lastShown.includes(secondRandom) || lastShown.includes(thirdRandom)) {
    var firstRandom = Math.floor(Math.random() * allProducts.length);
    var secondRandom = Math.floor(Math.random() * allProducts.length);
    var thirdRandom = Math.floor(Math.random() * allProducts.length);
  }

  lastShown[0] = firstRandom;
  lastShown[0] = secondRandom;
  lastShown[0] = thirdRandom;

  firstImg.src = allProducts[firstRandom].path;
  secondImg.src = allProducts[secondRandom].path;
  thirdImg.src = allProducts[thirdRandom].path;

  firstImg1.value = allProducts[firstRandom].name;
  secondImg2.value = allProducts[secondRandom].name;
  thirdImg3.value = allProducts[thirdRandom].name;

  allProducts[firstRandom].views++;
  allProducts[secondRandom].views++;
  allProducts[thirdRandom].views++;
  console.log(views);

  totalClicks++;

  if(totalClicks === 5) {
    formEl.removeEventListener('onclick', handleImageClick);
    randomImage();
    var jsonProducts = JSON.stringify(allProducts);
    localStorage.setItem('productVotes', jsonProducts);
  }
}

var count = 0;
function handleImageClick(event) {
  event.preventDefault();
  if (count > 24) {
    event.preventDefault();
    alert('You\'re done, no more clicks');
    return;
  } else {
    event.preventDefault();
    var voteOption = event.target.radioName.value;

    for (var i = 0; i < allProducts.length ; i++) {
      if (allProducts[i].name === voteOption) {
        allProducts[i].votes++;
        event.preventDefault();
      }
    }
    randomImage();
    count++;
  }
}
randomImage();

formEl.addEventListener('submit', handleImageClick);

randomImage();
