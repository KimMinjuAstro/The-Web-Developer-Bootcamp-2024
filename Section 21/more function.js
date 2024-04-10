// let deadlyAnimal = "Blue-Ringed Octopus";

// function handleAnimal() {
//     let deadlyAnimal = "Scorpionfish";
//     console.log(deadlyAnimal);
// }

// handleAnimal();
// console.log(deadlyAnimal)

// let radius = 8;
// if (radius > 0) {
//     var PI = 3.141592;
//     let msg = 'HI!!!';
// }

// console.log(radius);
// console.log(PI);
// console.log(msg);


// 고차 함수

// function roll2(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
//     return roll;

// }


// function TenTimes(func) {
//     for (let i = 0; i < 10; i++) {
//         func()
// //     }
// }

//

function makeBetweenFunc(min, max) {
    function isBetween(num) {
        return num >= min && num <= max;
    }
    return isBetween();
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
