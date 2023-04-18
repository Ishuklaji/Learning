import { MOVIE_DETAILS } from "../component/global-variable.js";
import { setData } from "../component/local-storage.js";

const servercall = async (filter) =>{
    let api= `http://localhost:3000/moviesData`
    if(filter)
      api=`http://localhost:3000/moviesData?q=${filter}`
    
      try {
        const res = await fetch(api);
        const jsonData = await res.json();
        moviesData(jsonData)
      } 
      catch (error) {
        console.log("error", error);
      }
}

var movie ;

// Display the movies
const moviesData = (data)=> {
  movie = data;
  document.querySelector("#movies").innerHTML = "";
  data.map( (e)=> {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("class", "poster");
    image.setAttribute("src", e.poster);

    let name = document.createElement("h3");
    name.innerText = e.name;

    let date = document.createElement("h3");
    date.innerText = e.date;

    let imdb = document.createElement("h3");
    imdb.innerText = `IMDB Rating: ${e.imdb}`;

    let genre = document.createElement("h3");
    genre.innerText = `Genre: ${e.genre}`;

    let more = document.createElement("p");
    more.innerText = "More Info";
    more.setAttribute("class", "more");

    more.addEventListener("click", ()=>{
        setData(MOVIE_DETAILS,e)
        window.location.href = "../pages/movieDetails.html";
    })

    div.append(image, name, date, imdb , genre , more);

    document.querySelector("#movies").append(div);
  });
}


// Sort By Rating
const ratingsort = ()=> {
  let selected = document.getElementById("sortrating").value;
  console.log(selected);

  if (selected == "htl") {
    movie.sort(function (a, b) {
      return b.imdb - a.imdb;
    });
  }

  if (selected == "lth") {
    movie.sort(function (a, b) {
      return a.imdb - b.imdb;
    });
  }

  moviesData(movie);
}

// Filter By Genre
const filtermovies = ()=> {
 let selected = document.getElementById("filtergenre").value
 console.log(selected);
 servercall(selected)
}

servercall();
document.querySelector("#sortrating").addEventListener("change",ratingsort)
document.querySelector("#filtergenre").addEventListener("change",filtermovies)
