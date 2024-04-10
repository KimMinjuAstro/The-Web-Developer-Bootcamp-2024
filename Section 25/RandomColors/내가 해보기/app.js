const bodySt = document.body.style;
const btn = document.querySelector('button');



const makeRandColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const rgb = `rgb(${R},${G},${B})`;
    return { R, G, B, rgb };
}



btn.addEventListener('click', function () {
    const { R, G, B, rgb } = makeRandColor();
    const sumNum = R + G + B;
    document.body.style.backgroundColor = rgb;
    document.querySelector('h1').innerText = rgb;
    document.querySelector('h1').style.color = 'black';
    if (sumNum < 300) {
        console.log(sumNum);
        document.querySelector('h1').style.color = 'white';
    }
})
