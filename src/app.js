/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const randVal = numWords => {
    return Math.floor(Math.random() * numWords);
  };

  let pronounShow = pronoun[randVal(pronoun.length)];
  let adjShow = adj[randVal(adj.length)];
  let nounShow = noun[randVal(noun.length)];
  let print = `${pronounShow}${adjShow}${nounShow}.com`;

  console.log(print);

  document.querySelector("#excuse").innerHTML = print;
};
