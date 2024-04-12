// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log(res);
//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2");
//     })
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("ERROR!!!!!");
//         console.log(err);
//     })



// const loadStarWarsPeople = async () => {
//     try {
//         for (let i = 1; i <= 5; i++) {
//             const res = await fetch(`https://swapi.dev/api/people/${i}`);
//             const data = await res.json();
//             console.log(data);
//         }
//     } catch (err) {
//         console.log("ERRER!!!!!!", err);
//     }
// }

// loadStarWarsPeople();


// axios.get('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log("ERROR!", e);
//     })


// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) { console.log("ERROR", e) }
// }
// getStarWarsPerson(5);


const jokes = document.querySelector('#jokes');
const buttons = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await badJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const badJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
}



buttons.addEventListener('click', addNewJoke)
