const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83c1b25258bac18104fae4d48173cb46&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=83c1b25258bac18104fae4d48173cb46&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("querry");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('h3');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML =  
        });
    });
}