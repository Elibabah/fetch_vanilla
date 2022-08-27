const getPersonajes = (callback) => {
    const dataPersonajes = fetch("https://rickandmortyapi.com/api/character")
    dataPersonajes
        .then((resp) => resp.json())
        .then((data) => {
            callback(data)
        })
}

getPersonajes(data => {
    console.log(data.results)
    data.results.map((personaje) => {
        const pintar = document.createRange().createContextualFragment(
            `<article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="${personaje.name}">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
                <span>${personaje.species}</span>
            </article>`
        )
        const main = document.querySelector("main");
        main.append(pintar)
    })
})