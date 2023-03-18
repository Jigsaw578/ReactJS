const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


async function getPopularMovies() {
    let datas = []
    try {
        await axios.get(API_URL).then((res)=>{
        datas = res.data.results
        console.log(datas);
    })
    } catch (error) {
        console.log(error)
    }
    return datas
}

const moviesDiv = document.getElementById("movies")


async function renderMovies() {
    const movies = await getPopularMovies()
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
            <img src="${IMG_URL + movie?.poster_path}" class="img-fluid" >
        </div>
        `
    )
}

renderMovies()