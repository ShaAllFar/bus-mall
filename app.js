var imgArray = [];
var randomNumArray = [];
var totalClicks = 0;
var timesDisplayed = 0;
var cycles = 0;
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
  return (this.numTimesClicked / this.numTimesDisplayed) * 100;
};

//generate random number for parsing array
function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}
//function to populate numnerarray
function populateRanNumArray(){
  for(var i = 0; i < 3; i++){
    randomNumArray.push(getRandomInt(0,imgArray.length));
  }
  while(randomNumArray[1] === randomNumArray[0]){
    randomNumArray[1] = getRandomInt(0,imgArray.length);
  }
  while(randomNumArray[2] === randomNumArray[1] || randomNumArray[2] === randomNumArray[0]){
    randomNumArray[2] = getRandomInt(0,imgArray.length);
  }
}

//function to render images to index.html
function renderImages(){
  populateRanNumArray();
  var imgLeft = document.getElementsByClassName('img-left')[0];
  var imgMiddle = document.getElementsByClassName('img-middle')[0];
  var imgRight = document.getElementsByClassName('img-right')[0];
  imgLeft.src = imgArray[randomNumArray[0]].filepath;
  imgLeft.id = imgArray[randomNumArray[0]].name;
  imgMiddle.src = imgArray[randomNumArray[1]].filepath;
  imgMiddle.id = imgArray[randomNumArray[1]].name;
  imgRight.src = imgArray[randomNumArray[2]].filepath;
  imgRight.id = imgArray[randomNumArray[2]].name;
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

//chart

function renderChart(){
  var names = [];
  var percentageChosen = [];
  for(var i = 0; i < imgArray.length; i++){
    names.push(imgArray[i].name);
    percentageChosen.push(imgArray[i].numTimesClicked);
  }

  var data = {
    labels: names,
    datasets: [
      {
        data: percentageChosen,
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet',
          '#790e08',
          '#7d443d',
          '#89a5bb',
          '#ab831b',
          '#ead83c',
          '#22d7a5',
          '#760567',
          '#52f6bf',
          '#b30000',
          '#534317',
          '#cf7e0b',
          '#3017ec',
          '#4f7c9a'
        ],
        hoverBackgroundColor: [

        ]
      }]
  };
  var chosenChart = document.getElementById('chosen-chart').getContext('2d');
  var myPieChart = new Chart(chosenChart,{
    type: 'pie',
    data: data,
    options: {
      responsive: false
    }
  });
}

//use render function
renderImages();
//image display container
var displayImages = document.getElementById('display');
document.getElementById('button-display').style.visibility = 'hidden';
document.getElementById('hr2').style.visibility = 'hidden';
document.getElementById('logo2').style.visibility = 'hidden';
document.getElementById('chart-head').style.visibility = 'hidden';

//event handler
function handleImageClick(event){
  cycles++;
  for(var i = 0; i < imgArray.length; i++){
    if(imgArray[i].name === event.target.id){
      imgArray[i].numTimesClicked++;
    }
  }
  renderImages();
  if(cycles === 25){
    document.getElementById('display').style.visibility = 'hidden';
    document.getElementById('button-display').style.visibility = 'visible';
  }
  console.log(cycles);

}
//event listener
displayImages.addEventListener('click',handleImageClick);
//display chart button
var btnDisplayChart = document.getElementById('button-display-chart');
function handleBtnDisplay(event){
  document.getElementById('chosen-chart').scrollIntoView({block: 'start', behavior: 'smooth'});
  document.getElementById('hr2').style.visibility = 'visible';
  document.getElementById('logo2').style.visibility = 'visible';
  document.getElementById('chart-head').style.visibility = 'visible';

  renderChart();
}
btnDisplayChart.addEventListener('click',handleBtnDisplay);
var btnMoreCycles = document.getElementById('button-more-cycles');
function handleBtnMoreChances(event){
  document.getElementById('button-display').style.visibility = 'hidden';
  document.getElementById('display').style.visibility = 'visible';

  cycles = 15;
}
btnMoreCycles.addEventListener('click',handleBtnMoreChances);
//function to toggle a div
