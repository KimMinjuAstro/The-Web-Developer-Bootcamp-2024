// const promise = () =>
//     new Promise((resolve, reject) => {
//         let a = 1 + 1;
//         if (a === 2) {
//             resolve('success')
//         } else {
//             reject('failed')
//         }
//     })


// promise().then((message) => {
//     console.log(`This is in the then ${message}`)
// }).catch((message) => {
//     console.log(`This is in the catch ${message}`)
// })
// function increaseAndPrint(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const increased = n + 1;
//             console.log(increased);
//             resolve(increased);
//         }, 1000)
//     })
// }

// increaseAndPrint(0)
//     .then((n) => increaseAndPrint(n))
//     .then((n) => increaseAndPrint(n))
//     .then((n) => increaseAndPrint(n))
//     .then((n) => increaseAndPrint(n)); // 체이닝 기법


// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.6) { resolve('데이터 여기 있다'); }
//             reject('에러에러');
//         }, 1000)
//     })
// }

// fakeRequest('/naver.com')
//     .then(() => { console.log(`너의 데이터`) })
//     .then(() => { console.log(`너의 데이터`) })
//     .catch(() => { console.log(`없음`) })


async function hello() { }

const sing = async () => {
    throw "에러 선언"
    return '비동기 함수 선언'
}

const login = async (username, password) => {
    if (!username || !password) throw '필수 항목을 채워주세요'
    if (password === '붉은 시선') return '어서와, 베르길리우스.'
    throw '비밀번호를 다시 입력해주십시오.'
}

login('V', '베르길리우스')
    .then(msg => {
        console.log('로그인 되었습니다.');
        console.log(msg);
    })
    .catch(err => {
        console.log('ERROR');
        console.log(err);
    })