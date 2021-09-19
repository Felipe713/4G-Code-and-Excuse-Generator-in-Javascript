/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
  let action = ["comio", "orino", "aplasto", "rompio"];
  let what = ["mi tarea", "las llaves", "el auto"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando termino",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  var aleatorio4 = Math.floor(Math.random() * 4);
  var aleatorio3 = Math.floor(Math.random() * 3);
  var aleatorio5 = Math.floor(Math.random() * 5);
  var excusa =
    who[aleatorio4] +
    " " +
    action[aleatorio4] +
    " " +
    what[aleatorio3] +
    " " +
    when[aleatorio5];
  let parrafo = this.document.getElementById("excuse");
  parrafo.innerHTML = excusa;
};
