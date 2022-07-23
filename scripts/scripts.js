let anime = document.getElementById('anime');
let char = document.getElementById('character');
let qoutes = document.getElementById('quotes');


async function getQuote(){
    await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        anime.innerHTML = data.anime;
        char.innerHTML = data.character;
        qoutes.innerHTML = data.quote;
    })
}
getQuote()