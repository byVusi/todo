import { input } from "./getElements.mjs";

//Setup unordered list
const ul = document.createElement("ul");
ul.setAttribute("class", "list");
document.querySelector("main").appendChild(ul);

export function createListItem() {
  let task = input.value;
  
  //Set up list item
  const li = document.createElement("li");
  li.setAttribute("class", "list-item");
  
  //Set up boxes
  const left_box = document.createElement("div");
  const right_box = document.createElement("div");
  left_box.setAttribute("class", "left-box");
  right_box.setAttribute("class", "right-box");

  //In left box
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox");

  const label = document.createElement("label");
  label.setAttribute("for", "checkbox");
  label.innerText = task;

  left_box.appendChild(checkbox);
  left_box.appendChild(label);

  //In right box
  const del = document.createElement("i")
  del.setAttribute("class", "fa fa-trash");
  del.setAttribute("onclick", "this.parentNode.parentNode.remove()");
  right_box.appendChild(del);

  //Append spans to list item
  li.appendChild(left_box);
  li.appendChild(right_box);

  //Append list item to list
  ul.appendChild(li);

  //Clear input field
  input.value = "";
}