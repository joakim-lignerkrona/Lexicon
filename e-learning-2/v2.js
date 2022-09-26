
let pokemonList = []
let pokemonCache = []
let selected = 0
const selector = document.querySelector('.selector')
document.querySelector('.image-container').addEventListener('click', e => {
    let display = document.querySelector('.display')
    axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`).then(response => {
        display.innerHTML = response.data.name
    })
})
for (let index = 1; index < 152; index++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => {
            const img = document.createElement('img')
            img.src = response.data.sprites.front_default
            img.addEventListener('click', e => {
                setSelectedPokemon(index)
                    .then(pokemon => outputPokemon(pokemon))
            })
            const div = document.createElement('div')
            div.classList.add('item')
            div.append(img)
            pokemonList[index] = div

        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            if (pokemonList.length === 152) {
                pokemonList.forEach((pokemon, index) => {
                    selector.append(pokemon)

                });
                selectPokemon(pokemonList)
                let scrollArea = document.querySelector(".scroll")
                scrollArea.style.height = (pokemonList[3].offsetHeight * (pokemonList.length - 1)) + scrollArea.parentElement.offsetHeight + "px"
                scrollArea.parentElement.addEventListener('scroll', e => {
                    let scroll = e.target.scrollTop
                    selected = Math.floor(scroll / pokemonList[3].offsetHeight)
                    selectPokemon(pokemonList)
                })
            }
        })
}

/* setInterval(() => {
    selected += 1
    if (selected > 151) {
        selected = 1
    }
    selectPokemon(pokemonList)
}, 1000) */


function selectPokemon(pokemonList) {
    pokemonList.forEach((pokemon, index) => {
        pokemon.classList.remove('passed')
        pokemon.classList.remove('third-previous')
        pokemon.classList.remove('second-previous')
        pokemon.classList.remove('previous')
        pokemon.classList.remove('current')
        pokemon.classList.remove('next')
        pokemon.classList.remove('second-next')
        pokemon.classList.remove('third-next')

        switch (index) {
            case selected - 3:
                pokemon.classList.add('third-previous')
                break
            case selected - 2:
                pokemon.classList.add('second-previous')
                break
            case selected - 1:
                pokemon.classList.add('previous')
                break
            case selected:
                pokemon.classList.add('current')
                break
            case selected + 1:
                pokemon.classList.add('next')
                break
            case selected + 2:
                pokemon.classList.add('second-next')
                break
            case selected + 3:
                pokemon.classList.add('third-next')
                break
            default:
                if (index < selected - 3) {
                    pokemon.classList.add('passed')
                }
                break
        }

    });

    let img = document.querySelector("#pokemon-image")
    if (selected > 0) {
        setTimeout(() => {
            if (selected > 0)
                axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`).then(response => {
                    img.src = response.data.sprites.other['official-artwork'].front_default
                })
        }, 800)
    }
    else {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
    }

}


