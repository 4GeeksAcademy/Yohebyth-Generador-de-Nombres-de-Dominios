/* eslint-disable */
import "./style.css";

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
