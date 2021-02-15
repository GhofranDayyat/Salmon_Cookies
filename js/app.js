'use strict';
function getRandomNo(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}



function Stor (loacation, min, max, avgCookie, cookiePurArray, timeArr){
  this.loacation = loacation;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookiePurArray = cookiePurArray;
  this.sum = 0;
  this.timeArr = timeArr;
}
Stor.prototype.getCookiePerCust= function (){
  for (let i = 0; i < (this.timeArr.length - 1); i++) {
    this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
    this.sum += this.cookiePurArray[i];
  }
  this.cookiePurArray[14] = this.sum;
};
Stor.render=function(){
  const articleEl = document.createElement('article');
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.location;
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const thEl =document.createElement('th');
  headerRowEl.appendChild(thEl);
  thEl.textContent = '     ';
  for (let i = 0; i < this.timeArr.length; i++) {
    let thEl = document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = `${this.timeArr[i]}`;
  }
};
Stor.prototype.render =function () {
  this.getCookiePerCust();
  const division = document.getElementById('cookieStand');
  console.log(division);
  const articleEl = document.createElement('article');
  division.appendChild(articleEl);
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.location;
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const td2El = document.createElement('td');
  headerRowEl.appendChild(td2El);
  td2El.textContent = `${this.loacation}`;
  const dataRowEl = document.createElement('tr');
  tableEl.appendChild(dataRowEl);
  for (let i = 0; i < this.cookiePurArray.length; i++) {
    const td1El = document.createElement('td');
    dataRowEl.appendChild(td1El);
    td1El.textContent = `${this.cookiePurArray[i]}`;
  }
};
//hedder function ;
// function hedder (){
//   const headerRowEl = document.createElement('tr');
//   const thEl =document.createElement('th');
//   headerRowEl.appendChild(thEl);
//   thEl.textContent = '     ';
//   for (let i = 0; i < this.timeArr.length; i++) {
//     let thEl = document.createElement('th');
//     headerRowEl.appendChild(thEl);
//     thEl.textContent = `${this.timeArr[i]}`;
//   }
// }
// hedder();
const seattle = new Stor(
  'Seattle',
  23,
  65,
  6.3,
  [],
  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']
);
seattle.render();
const tokyo = new Stor(
  'Tokyo',
  3,
  24,
  1.2,
  [],
  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']
);
tokyo.render();
const dubai = new Stor(
  'Dubai',
  11,
  38,
  3.7,
  [],
  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']
);
dubai.render();
const paris = new Stor(
  'Paris',
  20,
  38,
  2.3,
  [],
  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']
);
paris.render();
const lima =new Stor(
  'Lima',
  2,
  16,
  4.6,
  [],
  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']
);
lima.render();