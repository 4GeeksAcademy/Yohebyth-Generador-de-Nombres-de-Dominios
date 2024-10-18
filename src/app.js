/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let printHtml = "";

for (let iAdj of adj) {
  for (let iPronoun of pronoun) {
    for (let iNoun of noun) {
      let print = `${iPronoun}${iAdj}${iNoun}.com`;
      console.log(print);
      printHtml += print + " <br>";
    }
  }
}
document.querySelector("#excuse").innerHTML = printHtml;
