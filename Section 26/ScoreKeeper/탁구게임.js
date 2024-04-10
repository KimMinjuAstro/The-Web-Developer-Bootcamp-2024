const p1Display = document.querySelector("#p1Score");
const p2Display = document.querySelector("#p2Score");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const winningSelect = document.querySelector("select");


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;


p1Button.addEventListener("click", function (e) {
    if (p1Score < winningScore && p2Score < winningScore) {
        p1Score += 1;
        p1Display.innerText = p1Score;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
    }

})

p2Button.addEventListener("click", function (e) {
    if (p2Score < winningScore && p1Score < winningScore) {
        p2Score += 1;
        p2Display.innerText = p2Score;
        if (p2Score === winningScore) {
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
        }
    }
})

winningSelect.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);

})


reset.addEventListener("click", function (e) {
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
})

console.dir(p1Score)


