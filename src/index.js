document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", e => {e.preventDefault()
  handleToDo(e.target.new_task_description.value)})

})


function handleToDo(todo){
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener("click", addingEventListenerToButton)
    p.textContent = `${todo} `
    btn.textContent = "x"
    document.getElementById("tasks").appendChild(p)
    p.appendChild(btn)
    
}

function addingEventListenerToButton(e){
  e.target.parentNode.remove()
}
