function getRandomNo(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  const seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookie: 6.3,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function () {
      for (let i = 0; i < (this.timeArr.length - 1); i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.sum += this.cookiePurArray[i];
      }
      this.cookiePurArray[14] = this.sum;
    },
    render: function () {
      this.getCookiePerCust();
      const division = document.getElementById('cookieStand');
      console.log(division);
      const articleEl = document.createElement('article');
      division.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.location;
      let ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < this.timeArr.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
      }
    }
  };
  seattle.render();
  
  const tokyo = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookie: 1.2,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function () {
      for (let i = 0; i < (this.timeArr.length - 1); i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.sum += this.cookiePurArray[i];
      }
      this.cookiePurArray[14] = this.sum;
    },
    render: function () {
      this.getCookiePerCust();
      const division = document.getElementById('cookieStand');
      console.log(division);
      const articleEl = document.createElement('article');
      division.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.location;
      let ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < this.timeArr.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
      }
    }
  };
  tokyo.render();
  
  const dubai = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookie: 3.7,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function () {
      for (let i = 0; i < (this.timeArr.length - 1); i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.sum += this.cookiePurArray[i];
      }
      this.cookiePurArray[14] = this.sum;
    },
    render: function () {
      this.getCookiePerCust();
      const division = document.getElementById('cookieStand');
      console.log(division);
      const articleEl = document.createElement('article');
      division.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.location;
      let ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < this.timeArr.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
      }
    }
  };
  dubai.render();
  
  const paris = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookie: 2.3,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function () {
      for (let i = 0; i < (this.timeArr.length - 1); i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.sum += this.cookiePurArray[i];
      }
      this.cookiePurArray[14] = this.sum;
    },
    render: function () {
      this.getCookiePerCust();
      const division = document.getElementById('cookieStand');
      console.log(division);
      const articleEl = document.createElement('article');
      division.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.location;
      let ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < this.timeArr.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
      }
    }
  };
  paris.render();
  
  const lima = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookie: 4.6,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function () {
      for (let i = 0; i < (this.timeArr.length - 1); i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.sum += this.cookiePurArray[i];
      }
      this.cookiePurArray[14] = this.sum;
    },
    render: function () {
      this.getCookiePerCust();
      const division = document.getElementById('cookieStand');
      console.log(division);
      const articleEl = document.createElement('article');
      division.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.location;
      let ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < this.timeArr.length; i++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
      }
    }
  };
  lima.render();


// 'use strict';
// //helper function
// function getRandomNo(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }
// const seattle = {
//   locationname: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCook: 6.3,
//   cooke:[],
//   total:0,
//   hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'],
//   getAvgCust: function () {
//     this.avgCust = getRandomNumber(this.minCust, this.maxCust);
//     console.table(this);
//   },
//   getCookiePerCust: function (min, max) {
//     for (let i = 0; i < (this.hours.length - 1); i++) {
//         this.cooke[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
//         this.total += this.cooke[i];
//     }
//     this.cooke[14] = this.total;
// },
// render: function () {
//     const division = document.getElementById('cookieStand');
//     console.log(division);
//     const articleEl = document.createElement('article');
//     division.appendChild(articleEl);
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `${this.hours[i]}:${this.cooke[i]}`;
//     }
// }
// }
// seattle.getCookiePerCust();
// seattle.render();



// //   render: function () {
// //     const container = document.getElementById('salmon-profiles');
// //     console.log(container);
// //      /*
//     //    <!-- <article>
//     //       <h2>Seattle</h2>
//     //       <ul>
//     //         <li></li>
//     //       </ul>
//     //       <img src="image/salmon.png" />
//     //     </article> -->
//     // */
//     //1 create element
//     //2 append the element to its parent
//     // //3 add text content to the element || attributes
//     // const articleEl = document.createElement('article');
//     // container.appendChild(articleEl);
//     // const h2El = document.createElement('h2');
//     // articleEl.appendChild(h2El);
//     // h2El.textContent = this.name;
//     // const pEl = document.createElement('p');
//     // articleEl.appendChild(pEl);
//     // pEl.textContent = `${this.name} `;
// //     const ulEl = document.createElement('ul');
// //     articleEl.appendChild(ulEl);
// //     for (let i = 0; i < this.hours.length; i++) {
// //       const liEl = document.createElement('li');
// //       ulEl.appendChild(liEl);
// //       liEl.textContent =`${this.hours[i]}:${this.cooke[i]}`;
// //     }
// //   },
// // };
// // let imagePath='./images/frankie.jpeg',
// // const imgEl = document.createElement('img');
// // articleEl.appendChild(imgEl);
// // imgEl.setAttribute('src', this.imagePath);