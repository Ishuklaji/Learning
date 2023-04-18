import { MOVIE_BOOK, MOVIE_DETAILS } from "../component/global-variable.js";
import { getData, setData } from "../component/local-storage.js";

let details = getData(MOVIE_DETAILS) || []
let selectedMovie = document.querySelector(".detailContainer")


// display particular movie details
const movieDetails = ()=> {
    
      let div = document.createElement("div");
      div.setAttribute("class", "movieDetails");
      let image = document.createElement("img");
      image.setAttribute("class", "poster");
      image.setAttribute("src", details.poster);
  
      let name = document.createElement("h3");
      name.innerText = details.name;
  
      let date = document.createElement("h3");
      date.innerText = details.date;
  
      let imdb = document.createElement("h3");
      imdb.innerText = `IMDB Rating:   ${details.imdb}`;
  
      let genre = document.createElement("h3");
      genre.innerText = `Genre:  + ${details.genre}`;
  
      let trailer = document.createElement("iframe");
      trailer.setAttribute("src", details.trailer);

      let bookTicket = document.createElement("p");
      bookTicket.innerText = "Book Tickets";
      bookTicket.setAttribute("class", "bookticket");
    
      bookTicket.addEventListener("click", ()=>{
        setData(MOVIE_BOOK,details)
        window.location.href = "../pages/seats.html";
      })

      div.append(image, name, date, imdb , genre ,trailer,bookTicket);
  
      selectedMovie.append(div);
    }

movieDetails()
