const section = document.querySelector('section');

for (let i = 1; i <= 100; i++) {
    const pokemon = document.createElement('div');
    const sprite = document.createElement('img');
    const num = document.createElement('span');

    baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //1.png?raw=true
    sprite.src = `${baseURL}${i}.png`;

    num.innerText = `${i}`

    section.appendChild(pokemon);
    pokemon.appendChild(sprite)
    pokemon.appendChild(num);
}

