var imgArray = [];
var randomNumArray = [];
var totalClicks = 0;
var timesDisplayed = 0;
var cycles = 0;
//generate random number for parsing array
function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}
//image object
function imageOption(name,filepath,numTimesDisplayed,numTimesClicked){
  this.name = name;
  this.filepath = filepath;
  this.numTimesDisplayed = numTimesDisplayed;
  this.numTimesClicked = numTimesClicked;
  imgArray.push(this);
}
//function to calculate percentage clicked
imageOption.prototype.percentClicked = function(){
  return this.numTimesClicked / this.numTimesDisplayed;
};

//function to populate numnerarray
function populateRanNumArray(){
  var rand  = getRandomInt(0,imgArray.length);
  randomNumArray.push(rand);
  var rand2 = getRandomInt(0,imgArray.length);
  var rand3 = getRandomInt(0,imgArray.length);
  rand2 = getRandomInt(0,imgArray.length);
  while(rand2 === rand){
    rand2 = getRandomInt(0,imgArray.length);
  }
  while(rand3 === rand2 || rand3 === rand){
    rand3 = getRandomInt(0,imgArray.length);
  }
  randomNumArray.push(rand2);
  randomNumArray.push(rand3);
}

//function to render images to index.html
function renderImages(){
  populateRanNumArray();
  console.log(randomNumArray);
  var imgLeft = document.getElementById('img-left');
  var imgMiddle = document.getElementById('img-middle');
  var imgRight = document.getElementById('img-right');
  imgLeft.src = imgArray[randomNumArray[0]].filepath;
  imgMiddle.src = imgArray[randomNumArray[1]].filepath;
  imgRight.src = imgArray[randomNumArray[2]].filepath;
  imgArray[randomNumArray[0]].numTimesDisplayed++;
  imgArray[randomNumArray[1]].numTimesDisplayed++;
  imgArray[randomNumArray[2]].numTimesDisplayed++;
  randomNumArray = [];
};
//populate the array
new imageOption('bag','images/bag.jpg',0,0);
new imageOption('banana','images/banana.jpg',0,0);
new imageOption('bathroom','images/bathroom.jpg',0,0);
new imageOption('boots','images/boots.jpg',0,0);
new imageOption('breakfast','images/breakfast.jpg',0,0);
new imageOption('bubblegum','images/bubblegum.jpg',0,0);
new imageOption('chair','images/chair.jpg',0,0);
new imageOption('cthulhu','images/cthulhu.jpg',0,0);
new imageOption('dog-duck','images/dog-duck.jpg',0,0);
new imageOption('dragon','images/dragon.jpg',0,0);
new imageOption('pen','images/pen.jpg',0,0);
new imageOption('pet-sweep','images/pet-sweep.jpg',0,0);
new imageOption('scissors','images/scissors.jpg',0,0);
new imageOption('shark','images/shark.jpg',0,0);
new imageOption('sweep','images/sweep.png',0,0);
new imageOption('tauntaun','images/tauntaun.jpg',0,0);
new imageOption('unicorn','images/unicorn.jpg',0,0);
new imageOption('usb','images/usb.gif',0,0);
new imageOption('water-can','images/water-can.jpg',0,0);
new imageOption('wine-glass','images/wine-glass.jpg',0,0);
//use render function
renderImages();
//image display container
var displayImages = document.getElementById('display');
//event handler
function handleImageClick(event){
  event.preventDefault();
  var clickedEl = event.target;
  console.log(clickedEl.src);
  for(var i = 0; i < imgArray.length; i++){
    if(clickedEl.src.toString().includes(imgArray[i].filepath)){
      imgArray[i].numTimesClicked++;
    }
  }
  renderImages();
  cycles++;
}
//event listener
displayImages.addEventListener('click',handleImageClick);
