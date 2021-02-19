'use strict';
function getRandomNo(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
const totalOfTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const timeArr=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
const divEl = document.getElementById('cookieStand');
const tableEl = document.createElement('table');
divEl.appendChild(tableEl);
const headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);
let thEl = document.createElement('th');
headerRowEl.appendChild(thEl);
thEl.textContent = '       ';
for (let i = 0; i < timeArr.length; i++) {
  let thEl = document.createElement('th');
  headerRowEl.appendChild(thEl);
  thEl.textContent = `${timeArr[i]}`;

}


function Stor (loacation, min, max, avgCookie, cookiePurArray, total){
  this.loacation = loacation;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookiePurArray = cookiePurArray;
  this.sum = 0;
  this.total = total;
}
Stor.prototype.getCookiePerCust= function (){
  for (let i = 0; i < (timeArr.length - 1); i++) {
    this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
    this.sum += this.cookiePurArray[i];

  }
  this.cookiePurArray[14] = this.sum;
};

Stor.prototype.render =function () {
  this.getCookiePerCust();
  const dataRowEl = document.createElement('tr');
  tableEl.appendChild(dataRowEl);
  const dataCellEl = document.createElement('td');
  dataRowEl.appendChild(dataCellEl);
  dataCellEl.textContent = this.loacation;
  for (let i = 0; i < this.cookiePurArray.length; i++) {
    const dataCellEl = document.createElement('td');
    dataRowEl.appendChild(dataCellEl);
    dataCellEl.textContent = this.cookiePurArray[i];
    totalOfTotal[i]+=this.cookiePurArray[i];
  }

};

const seattle = new Stor(
  'Seattle',
  23,
  65,
  6.3,
  []
);
seattle.render();
const tokyo = new Stor(
  'Tokyo',
  3,
  24,
  1.2,
  []
);
tokyo.render();
const dubai = new Stor(
  'Dubai',
  11,
  38,
  3.7,
  []
);
dubai.render();
const paris = new Stor(
  'Paris',
  20,
  38,
  2.3,
  []
);
paris.render();
const lima =new Stor(
  'Lima',
  2,
  16,
  4.6,
  []
);
lima.render();

function footerRow(){
  const footRowEl = document.createElement('tr');
  tableEl.appendChild(footRowEl);
  const footCellEl = document.createElement('th');
  footRowEl.appendChild(footCellEl);
  footCellEl.textContent='Total';
  for (let i = 0; i < totalOfTotal.length; i++) {
    const footCellEl = document.createElement('th');
    footRowEl.appendChild(footCellEl);
    footCellEl.textContent = totalOfTotal[i];
  }
}
footerRow();

const form = document.getElementById('salmon-form');
form.addEventListener('submit', function(event){
  event.preventDefault();
  const loacation = event.target.loacation.value;

  const min = parseFloat(event.target.min.value);

  const max = parseFloat(event.target.max.value);

  const avgCookie = parseFloat(event.target.avgCookie.value);

  //to check that the type of min is number
  console.log(typeof(min));



  const newStor = new Stor (loacation,min,max,avgCookie,[],[]);
  //delet the footer
  tableEl.deleteRow(-1);

  //render the new stor
  newStor.render();

  //render the footer
  footerRow();

  form.reset();
 

});


