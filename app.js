'use strict';

import { doWhileStatement } from "@babel/types";

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

  left.src = Product.all[showing[0]].path;
  center.src = Product.all[showing[1]].path;
  right.src = Product.all[showing[2]].path;
  left.id = Product.all[showing[0]].name;
  center.id = Product.all[showing[1]].name;
  right.id = Product.all[showing[2]].name;
}

function handleClick(e) {
  if(event.target.id === 'image_container') {
    alert('click on the image!');
  }
  displayImg();
}

container.addEventListener('click', handleClick);
displayImg();
