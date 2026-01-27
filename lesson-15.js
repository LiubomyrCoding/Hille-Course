const parent1 = document.querySelector(".parent1");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");

let arr = JSON.parse(localStorage.getItem("Value")) || [];

let counter = Number(localStorage.getItem("Counter")) || 0;

function saveToLocalStorage() {
  localStorage.setItem("Value", JSON.stringify(arr));
  localStorage.setItem("Counter", JSON.stringify(counter));
}

function createListItem() {
  const newLi = document.createElement("li");
  newLi.textContent = input.value;
  newLi.dataset.index = arr.length - 1;

  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newLi.append(newButton);

  return newLi;
}

btn.addEventListener("click", function () {
  if (input.value.trim() === "") 
    return;

  arr.push(input.value);
  saveToLocalStorage();

  const newLi = createListItem();
  parent1.appendChild(newLi);

  counter++;
  localStorage.setItem("Counter", JSON.stringify(counter));

  input.value = "";
});

for (let i = 0; i < arr.length; i++) {
  const storedLi = createListItem(arr[i], i);
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

    saveToLocalStorage();

    li.remove();

    const allLis = parent1.querySelectorAll("li");
    allLis.forEach((item, i) => {
      item.dataset.index = i;
    });
  }
});