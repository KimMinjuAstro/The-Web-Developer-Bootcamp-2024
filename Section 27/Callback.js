// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)


// const delayedColorChange = (newColor, delay, doNext) => {
//     return setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('olive', 1000, () => {
//     delayedColorChange('red', 1000, () => {
//         delayedColorChange('orange', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//             })
//         })
//     })
// })

// const request = fakeRequestPromise('naver.com');
// request.then(() => {
//     console.log("됐습니다!")
// })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))