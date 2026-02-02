"use strict";

require("bootstrap/dist/css/bootstrap.min.css");
var _bootstrap = require("bootstrap");
var _dateFns = require("date-fns");
var textMessage = document.querySelector('.modal-body');
var parent1 = document.querySelector(".parent1");
var input = document.querySelector("input");
var btn = document.querySelector(".btn");
var arr = JSON.parse(localStorage.getItem("Value")) || [];
var counter = Number(localStorage.getItem("Counter")) || 0;
var times = JSON.parse(localStorage.getItem('Time')) || [];
function saveToLocalStorage() {
  localStorage.setItem("Value", JSON.stringify(arr));
  localStorage.setItem("Counter", JSON.stringify(counter));
  localStorage.setItem('Time', JSON.stringify(times));
}
function createListItem(text, index, time, timeIndex) {
  var newDiv = document.createElement('div');
  var newLi = document.createElement("li");
  newLi.textContent = text;
  newLi.dataset.index = index;
  newDiv.textContent = time;
  newDiv.dataset.index = timeIndex;
  newLi.append(newDiv);
  var newButton = document.createElement("button");
  newButton.textContent = "Delete";
  parent1.setAttribute('data-bs-toggle', 'modal');
  parent1.setAttribute('data-bs-target', '#staticBackdrop');
  newLi.append(newButton);
  return newLi;
}
btn.addEventListener("click", function () {
  if (input.value.trim() === "") return;
  var result = (0, _dateFns.format)(new Date(), 'E MMM d , h:mm a');
  times.push(result);
  arr.push(input.value);
  saveToLocalStorage();
  var newLi = createListItem(input.value, arr.length - 1, result, times.length - 1);
  parent1.appendChild(newLi);
  counter++;
  localStorage.setItem("Counter", JSON.stringify(counter));
  input.value = "";
});
for (var i = 0; i < arr.length; i++) {
  var storedLi = createListItem(arr[i], i, times[i], i);
  parent1.appendChild(storedLi);
}
input.addEventListener("change", function () {
  localStorage.setItem("inputValue", input.value);
});
var currentV = localStorage.getItem("inputValue");
if (currentV) {
  input.value = currentV;
}
parent1.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    var li = event.target.parentElement;
    var index = Number(li.dataset.index);
    arr.splice(index, 1);
    times.splice(index, 1);
    saveToLocalStorage();
    li.remove();
    var allLis = parent1.querySelectorAll("li");
    allLis.forEach(function (item, i) {
      item.dataset.index = i;
    });
  }
  textMessage.textContent = event.target.textContent;
});