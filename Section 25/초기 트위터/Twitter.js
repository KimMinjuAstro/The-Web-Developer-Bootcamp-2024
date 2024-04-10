const username = document.querySelector("#username");
const tweet = document.querySelector("#tweet");
const uList = document.querySelector("ul");
const form = document.querySelector("form");
// const btn = document.querySelector("button");

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//     li.addEventListener('click', function (e) {
//         li.remove();
//     })
// }


form.addEventListener('submit', function (e) {
    e.preventDefault();


    const list = document.createElement("li");
    list.innerText = `${username.vallue} - ${tweet.value}`;

    uList.append(list);

    document.querySelector("#username").value = "";
    document.querySelector("#tweet").value = "";
})


uList.addEventListener('click', function (e) {
    // e.target.remove();
    console.dir(e.target);
})

