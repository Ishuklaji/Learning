import {
  MOVIE_BOOK,
  PAYMENT_SUCCESSFULL,
  SEATS_ARR,
} from "../component/global-variable.js";
import { getData, setData } from "../component/local-storage.js";

let count = document.getElementById("count");
let total = document.getElementById("total");
let selectedSeatCount = 0;
let seatsArr = getData(SEATS_ARR) || [];

const movieSelect = document.getElementById("movie");
let selectedMovie = document.getElementById("selectedMovie");

const displayMovieName = () => {
  let movieName = getData(MOVIE_BOOK);
  selectedMovie.innerText = movieName.name;
};
displayMovieName();
let check = getData(PAYMENT_SUCCESSFULL);


// check if seat is occupied
const isoccupied = (i, j) => {
  let check = seatsArr.find((seat) => seat.row == i && seat.column == j);
  return check;
};


// display seats on UI
const generateSeat = () => {
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 8; j++) {
      let seats = document.createElement("div");

      seats.classList.add("seat");
      seats.addEventListener("click", () => {
        if (seats.classList.contains("selected")) {
          seats.classList.remove("selected");
          unselectSeats(i, j);
        } else {
          seats.classList.add("selected");
          selectSeats(i, j);
        }
      });

      if (check && isoccupied(i, j)) {
        seats.classList.add("occupied");
      }

      row.append(seats);
    }

    document.querySelector(".seatContainer").append(row);
  }
};

generateSeat();

const unselectSeats = (i, j) => {
  let selected = seatsArr.findIndex(
    (seat) => seat.row == i && seat.column == j && seat.value == 1
  );
  seatsArr.splice(selected, 1);
  setData(SEATS_ARR, seatsArr);

  selectedSeatCount--;

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * 10;
};

// Select seats for booking
const selectSeats = (i, j) => {
  console.log(i, j);

  let seatsObj = {
    row: i,
    column: j,
    value: 1,
  };

  let booked = seatsArr.filter(
    (seat) => seat.row == i && seat.column == j && seat.value == 1
  );

  console.log(booked);

  if (booked.length > 0) {
    alert("Already booked please select another");
    return;
  }

  selectedSeatCount++;

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * 10;

  seatsArr.push(seatsObj);
  setData(SEATS_ARR, seatsArr);
};
