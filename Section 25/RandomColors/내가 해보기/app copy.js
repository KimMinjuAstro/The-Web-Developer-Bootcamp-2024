// function ranColor() {
//     const R = Math.floor(Math.random() * 256);
//     const G = Math.floor(Math.random() * 256);
//     const B = Math.floor(Math.random() * 256);
//     return `rgb(${R}, ${G}, ${B})`;
// }



// this 키워드를 사용하여 콜백 함수를 만들어서 event listener에 꽂기

// const buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener('click', colorize)
// }

// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize);
// }


// function colorize() {
//     this.style.backgroundColor = ranColor();
//     this.style.color = ranColor();
// }



document.querySelector('button').addEventListener('click', function (evt) { console.log(evt) })

const input = document.querySelector('input')
input.addEventListener('keydown', function (e) {
    // console.log(e);
    console.log(e.key);
    console.log(e.code)
})
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })