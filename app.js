'use strict';

var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntuan', 'unicorn'];
console.log(productName);

var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var container = document.getElementById('image_container');

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

Product.all = [];

for(var i = 0; i < productName.length; i++) {
  new Product(productName[i]);
}

function makeRandom() {
  for(var i = 0; i < productName.length; i++) {
    Math.floor(Math.random * productName.length);
  }
}

function displayImg() {
  var showing = [];
  showing[0] = makeRandom();
  showing[1] = makeRandom();
  while(showing[0] === showing[1]) {
    showing[1] = makeRandom();
  }

  showing[2] = makeRandom();
  while (showing[0] === showing[2] || showing [1] === showing[2]) {
    showing[2] = makeRandom();
  }
}
