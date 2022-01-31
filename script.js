const btn = document.querySelector(".btn");

const input = document.querySelector("#input-todo");

const myTodoList = document.querySelector(".todo-list");

btn.addEventListener("click", function(){
     const outputList = document.createElement("div");
    outputList.className = "todo-item";
    myTodoList.appendChild(outputList);
    outputList.innerText = input.value;
    input.value = "";
    outputList.addEventListener("click", function(){
        outputList.remove();
    });
    
const form = document.querySelector(".form");
form.addEventListener("submit", function(e){
    e.preventDefault();
});

});