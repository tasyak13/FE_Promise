'use strict';

//1
const promiseTwoSeconds = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Прошло 2 секунды');
    }, 2000)
});

promiseTwoSeconds
    .then(function(resolve) {
        alert(resolve);
    })
    .catch(function(reject) {
        console.log("Error");
    });

//2
const promiseMathRandom = new Promise(function(resolve, reject) {
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      resolve(getRandomInRange(0, 10));
});

promiseMathRandom
    .then(function(resolve) {
        console.log(resolve);
    })
    .catch(function(reject) {
        console.log("Error2");
    });


//3 and 4

const promiseOneSecond = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Прошла одна секунда!');
        return resolve();
    }, 1000);
});

const promiseThreeSeconds = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Прошло три секунды!');
        return resolve();
    }, 3000);
});

const promiseFiveSeconds = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Прошло пять секунд!');
        return resolve();
    }, 5000);
});

Promise
    .any([promiseOneSecond, promiseThreeSeconds, promiseFiveSeconds])
    .then(function(results) {
        console.log("Ожидание первого выполненого promise");
    });

Promise
    .all([promiseOneSecond, promiseThreeSeconds, promiseFiveSeconds])
    .then(function(results) {
        console.log("Ожидание всех выполненных promises");
    });   