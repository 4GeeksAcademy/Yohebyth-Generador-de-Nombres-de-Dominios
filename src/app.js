/* eslint-disable */
import "./style.css";

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
