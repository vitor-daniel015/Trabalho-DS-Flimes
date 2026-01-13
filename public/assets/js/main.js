async function loadPopular() {
    const res = await fetch("http://localhost:8080/api/tmdb/popular");
    const filmes = await res.json();

    document.getElementById("popular").innerHTML =
        filmes.map(f => `
            <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w200${f.poster_path}">
                <h4>${f.title}</h4>
            </div>`).join("");
}

async function searchMovie() {
    const q = document.getElementById("search").value;
    const res = await fetch(`http://localhost:8080/api/tmdb/search?q=${q}`);
    const filmes = await res.json();

    document.getElementById("searchResults").innerHTML =
        filmes.map(f => `
            <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w200${f.poster_path}">
                <h4>${f.title}</h4>
            </div>`).join("");
}

loadPopular();
