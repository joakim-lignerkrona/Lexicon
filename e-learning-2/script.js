
let pokemonList = []
let pokemonCache = []

const pokemonContainer = document.querySelector('.pokemon-container')
const pokemonDiv = document.createElement('div')
pokemonDiv.classList.add('d-flex')
pokemonDiv.classList.add('flex-row')
pokemonDiv.classList.add('pokemon-div')
pokemonContainer.append(pokemonDiv)
addListners()
for (let index = 1; index < 152; index++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => {
            const img = document.createElement('img')
            img.src = response.data.sprites.front_default
            img.addEventListener('click', e => {
                setSelectedPokemon(index)
                    .then(pokemon => outputPokemon(pokemon))
            })
            pokemonList[index] = img
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            if (pokemonList.length === 152) {
                pokemonList.forEach(pokemon => {
                    pokemonDiv.append(pokemon)
                });
            }
        })
}

async function setSelectedPokemon(index) {
    if (pokemonCache[index]) {
        console.log('pokémon in storage');
        return pokemonCache[index]
    }

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
    pokemonCache[index] = response.data
    console.log('Got pokemon from server');
    return pokemonCache[index]

}

function outputPokemon(pokemon) {

    axios.get(pokemon.species.url).then(response => {
        let englishText = response.data.flavor_text_entries.filter(entry => {
            return entry.language.name == 'en'
        }).map(entry => { return entry.flavor_text.replace(/\\[n, f]/gm, ' ') })
        console.log(englishText)
        let set = new Set(englishText)
        console.log(set)
        let fullDescription = ''
        set.forEach(entry => {
            fullDescription += entry + ' '
        })
        const description = document.querySelector('#pokemon-description')
        description.textContent = fullDescription

    })


    console.log(pokemon);
    const name = document.querySelector('#pokemon-name')
    name.textContent = capitalizeFirstLetter(pokemon.name)

    const number = document.querySelector('#pokemon-number')
    number.textContent = formatPokemonNumber(pokemon.id)
    const img = document.querySelector('#pokemon-image')
    img.src = pokemon.sprites.other['official-artwork'].front_default

}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function formatPokemonNumber(number) {
    let formatedString = '#'
    if (number < 10) {
        formatedString += "0"
    }
    if (number < 100) {
        formatedString += "0"
    }
    formatedString += number
    return formatedString
}
function addListners() {
    document.querySelector('#selector-scroll-controll-left').addEventListener('click', e => scrollSelector('left', pokemonDiv))
    document.querySelector('#selector-scroll-controll-right').addEventListener('click', e => scrollSelector('right', pokemonDiv))
}

function scrollSelector(direction, container) {
    let itemStyle = getComputedStyle(pokemonDiv.childNodes[0])
    let itemWidth = parseInt(itemStyle.marginLeft) + parseInt(itemStyle.marginRight) + pokemonDiv.childNodes[0].offsetWidth

    let scrollableContainer = document.querySelector('.pokemon-container')

    let nextStopOffset = scrollableContainer.scrollLeft / itemWidth
    nextStopOffset = (nextStopOffset - Math.floor(nextStopOffset))
    nextStopOffset = nextStopOffset > 0.5 ? (1 - nextStopOffset) * itemWidth : nextStopOffset * itemWidth * -1


    scrollableContainer.scrollLeft = (direction == 'right' ? scrollableContainer.scrollLeft + Math.floor(pokemonDiv.offsetWidth / itemWidth) * itemWidth : scrollableContainer.scrollLeft - Math.floor(pokemonDiv.offsetWidth / itemWidth) * itemWidth) + nextStopOffset
}