const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // forEach를 써서 배열의 각 item을 전달하고 출력함
// nums.forEach(
//     function (element) { console.log(element * element) }
// )

// // forEach를 for of으로 써보기
// for (let el of nums) {
//     console.log(el);
// }


const movies = [
    {
        title: 'Grand Budafest Hotel',
        score: 90
    },
    {
        title: 'Everything at all at once',
        score: 92
    },
    {
        title: 'Greenonion Cat',
        score: 85
    },
    {
        title: 'Primal Fear',
        score: 97
    },
    {
        title: 'Tenet',
        score: 85
    },
    {
        title: '착신아리',
        score: 90
    },
    {
        title: '기담',
        score: 93
    },
    {
        title: '기생충',
        score: 88
    }
]

// movies.forEach(
//     function (el) {
//         console.log(`${el.title} - ${el.score}/100`);
//     }
// )

// 

// Map 배열 메소드 써보기

// const double = nums.map(function (num) {
//     return num * 2;
// }
// )

// const titles = movies.map(function (t) {
//     return `${t.title}`
// })




// Arrow function 사용해보기

// const add = (x, y) => {
//     return x + y;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }





// Arrow function 사용시 return 값이 하나일 경우 return과 중괄호를 생략할 수 있다. (암시적 반환)
// 중괄호를 괄호로 바꾸어서 사용도 가능
// 변수가 하나일 시 변수를 감싸는 괄호도 생략 가능 

const rollDie = () => // ( // 
    Math.floor(Math.random() * 6) + 1
// ) //

const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)


// Filter 메소드는 return 값이 참이 되는 요소들을 뽑아 새로운 배열을 생성해낸다
// const goodMovie = movies.filter(movie => movie.score > 91)
// const goodTitles = goodMovie.map(titles => titles.title)

//위의 두 식을 합치기

const goodTitles = movies.filter(m => m.score > 90).map(t => t.title);


// 배열에서 최솟값 찾기
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

const minimum = prices.reduce(function (min, price) {
    if (min <= price) { return min }
    else if (min > price) { return price }
})


// 가장 점수가 높은 영화 찾기

const maxScoreMovie = movies.reduce((max, score) => {
    if (score.score >= max.score) { return score }
    else { return max };
});