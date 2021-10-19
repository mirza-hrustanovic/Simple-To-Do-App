const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const toDoContainer = document.getElementById("toDoContainer");

inputField.placeholder = "Type Something...";

addButton.addEventListener("click", function () {
  if (inputField.value == "") {
    alert("Input field must be filled");
  } else {
    let toDoInput = document.createElement("input");
    toDoInput.type = "text";
    toDoInput.id = "toDo";
    toDoInput.value = inputField.value;
    toDoContainer.appendChild(toDoInput);

    let editButton = document.createElement("button");
    editButton.id = "edit";
    editButton.innerText = "Edit";
    toDoContainer.appendChild(editButton);

    editButton.addEventListener("click", function () {
      if (editButton) {
        editButton.innerText = "Save";
        toDoInput.focus();
      }
      editButton.addEventListener("click", function () {
        editButton.innerText = "Edit";
        toDoInput.blur();
      });
    });

    let deleteButton = document.createElement("button");
    deleteButton.id = "delete";
    deleteButton.innerText = "Delete";
    toDoContainer.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      toDoContainer.removeChild(toDoInput);
      toDoContainer.removeChild(editButton);
      toDoContainer.removeChild(deleteButton);
    });
    inputField.value = "";
  }
});
