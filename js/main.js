import { createListItem } from "./modules/createListItem.mjs";
import { input, button } from "./modules/getElements.mjs";

//Add task to list
button.addEventListener("click", () => {
  if (input.value.length < 1 || input.value == "") {
    //Add user feedback
  } else {
    createListItem();
  }
});
