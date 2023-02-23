const input = document.querySelector("input"),
button = document.querySelector("button"),
todoList = document.querySelector(".todo-list"),
clear = document.querySelector(".clear");


const addTask = (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  const delBtn = document.createElement("button");

  delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";

  if (input.value !== "") {
    newLi.textContent = input.value;
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
    input.value = "";
  } else {
    alert("Please enter a task");
  }

  delBtn.addEventListener("click", function() {
    const del = confirm("Do you want to delete?");
    if (del === true) {
      const parent = this.parentNode;
      parent.remove();
    }
  })
}



button.addEventListener("click", addTask);

clear.addEventListener("click", () => {
  todoList.innerHTML = "";
})