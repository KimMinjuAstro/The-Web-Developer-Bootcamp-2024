const btn = document.querySelector('button');

btn.onclick = function () {
    alert("인정합니다.");
}

function scream() {
    console.log("아아아아아아아아아!!!!!!!!!!!!!!!!");
    console.log("만지지마!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

btn.onmouseenter = scream;

const Moon = document.querySelector('#v3');

Moon.addEventListener('click', function () {
    alert("사랑해");
})

