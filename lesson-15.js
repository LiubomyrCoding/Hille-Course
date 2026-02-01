import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'bootstrap'
import { format } from 'date-fns'
const textMessage = document.querySelector('.modal-body')

const parent1 = document.querySelector(".parent1");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");

let arr = JSON.parse(localStorage.getItem("Value")) || [];

let counter = Number(localStorage.getItem("Counter")) || 0;

let times = JSON.parse(localStorage.getItem('Time')) || []


function saveToLocalStorage() {
  localStorage.setItem("Value", JSON.stringify(arr));
  localStorage.setItem("Counter", JSON.stringify(counter));
  localStorage.setItem('Time', JSON.stringify(times))
}

function createListItem(text, index, time, timeIndex) {
  const newDiv = document.createElement('div')
  
  const newLi = document.createElement("li");
  newLi.textContent = text;
  newLi.dataset.index = index;
  newDiv.textContent = time
  newDiv.dataset.index = timeIndex

  newLi.append(newDiv)


  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  parent1.setAttribute('data-bs-toggle', 'modal')
  parent1.setAttribute('data-bs-target', '#staticBackdrop')
  newLi.append(newButton);

  return newLi;
}

btn.addEventListener("click", function () {
  if (input.value.trim() === "") 
    return;

  const result = format(new Date(), 'E MMM d , h:mm a') 
  times.push(result)

  arr.push(input.value);
  saveToLocalStorage();

  const newLi = createListItem(input.value, arr.length - 1, result, times.length - 1);
  parent1.appendChild(newLi);

  counter++;
  localStorage.setItem("Counter", JSON.stringify(counter));

  input.value = "";
});

for (let i = 0; i < arr.length; i++) {
  const storedLi = createListItem(arr[i], i, times[i], i);
  parent1.appendChild(storedLi);
}

input.addEventListener("change", function () {
  localStorage.setItem("inputValue", input.value);
});

const currentV = localStorage.getItem("inputValue");
if (currentV) {
  input.value = currentV;
}

parent1.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentElement;
    const index = Number(li.dataset.index);

    arr.splice(index, 1);

    times.splice(index, 1)

    saveToLocalStorage();

    li.remove();

    const allLis = parent1.querySelectorAll("li");
    allLis.forEach((item, i) => {
      item.dataset.index = i;
    });
  }
  textMessage.textContent = event.target.textContent
});