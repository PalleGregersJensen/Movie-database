"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://dummy-movieobjects-default-rtdb.firebaseio.com/";
let movies = [];

async function initApp() {
  console.log("js kører");
  const data = await getData();
  movies = changeFromJsonObjektToArray(data);
  movies.forEach(showMovies);
}

async function getData() {
  const response = await fetch(`${endpoint}/movies.json`);
  const data = await response.json();
  console.log(response);
  console.log(data);
  return data;
}

function changeFromJsonObjektToArray(movieObject) {
  const movieArray = [];
  for (let key in movieObject) {
    const movie = movieObject[key];
    movie.id = key;
    movieArray.push(movie);
  }
  console.log(movieArray);
  return movieArray;
}

function showMovies(movieObject) {
  const myHtml = `
    <article>
      <img src=${movieObject.image}>
      <h2>${movieObject.title}</h2>
      <p>${movieObject.description}</p>
      <button class="btn-delete">Delete</button>
      <button class="btn-update">Update</button>
    </article>
  `;

  document
    .querySelector("#grid-container")
    .insertAdjacentHTML("beforeend", myHtml);
}
