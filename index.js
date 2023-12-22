

async function searchMovies() {
  let name = document.getElementById("searchBar").value;
  let response = await fetch(
    `http://www.omdbapi.com/?s=${name}&apikey=c0ea8759`
  );
  let data = await response.json();
  // console.log(data);
  return data.Search;
}

let id;
async function showMovies() {
  let mainDiv = document.getElementById("card");
  mainDiv.innerHTML = null;
  let showData = await searchMovies();
  // console.log(showData);

  if (showData === undefined) {
    return false;
  }

  showData.map(function (movie) {
    console.log(movie);
    let poster = document.createElement("div");
    let img = document.createElement("img");
    img.src = movie.Poster;

    let tiltle = document.createElement("h3");
    tiltle.innerHTML = movie.Title;
    poster.style.color = "white";

    img.addEventListener("mouseover", () => {
      tiltle.style.display = "block";
      img.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseout", () => {
      tiltle.style.display = "none";
      img.style.transform = "scale(1)";
    });
    poster.append(img, tiltle);
    mainDiv.append(poster);
  });
  // console.log(showData)
}

function debounce(func, delay) {
  clearTimeout(id);
  id = setTimeout(function () {
    func();
  }, delay);
}

var url = `https://api.themoviedb.org/3/discover/movie?&api_key=8796761f365f22339c5a4afba8f4f14b&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=2`;

async function searchMovie() {
  // let name = document.getElementById('searchBar').value
  let response = await fetch(url);
  let data = await response.json();
   console.log(data)
  showMovi(data.results);
}

function showMovi(showData) {
  let main = document.getElementById("movie");
  //let showData =  searchMovie()
  // console.log(showData)

  showData.map(function (movies) {
    //console.log(movies)
    let poster = document.createElement("div");
    let img = document.createElement("img");
    const imgpath = movies.poster_path;
    img.src = `https://image.tmdb.org/t/p/original/${imgpath}`;
    let title = document.createElement("h3");
    poster.style.color = "white";
    title.innerHTML = movies.title;

    // let release_date = document.createElement('h6')
    // release_date.innerHTML = movies.release_date

    img.addEventListener("mouseover", () => {
      title.style.display = "block";
      img.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseout", () => {
      title.style.display = "none";
      img.style.transform = "scale(1)";
    });

    poster.append(img, title);
    main.append(poster);
  });
}

searchMovie();
