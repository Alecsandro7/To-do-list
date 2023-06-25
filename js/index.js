import { todoForm, todoInput, todoList, editForm, editInput, cancelEditBtn, } from "./selectElements.js";



let oldInputValue;

const saveTodo = (text)=>{
 const divTodoList = document.createElement('div')
  divTodoList.setAttribute('class' , 'list')

  const todoTitle = document.createElement('h3')
   todoTitle.innerText = text
   divTodoList.appendChild(todoTitle)

  const doneButton = document.createElement('button')
   doneButton.setAttribute('class', 'finish-todo')
   doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'

  const editButton = document.createElement('button')
 editButton.setAttribute('class', 'edit-todo')
 editButton.innerHTML =  '<i class="fa-solid fa-pen"></i>'

   const deleteTodo = document.createElement('button')
 deleteTodo.setAttribute('class', 'remove-todo')
 deleteTodo.innerHTML = '<i class="fa-solid fa-xmark"></i>'
 
 divTodoList.append(doneButton,editButton,deleteTodo)

 todoList.appendChild(divTodoList)

 todoInput.value = ''
 todoInput.focus()

}
const toggleForms = () =>{
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
  todoList.classList.toggle("hide")
}

const updateTodo = (text) =>{
 const allTodo = document.querySelectorAll('.todo')


allTodo.forEach((todo)=>{
  
 let todoTitle = todo.querySelector('h3')
console.log(todoTitle)
 if(todoTitle.innerText === oldInputValue){
  todoTitle.innerText = text
 }
})
}

// Events

todoForm.addEventListener("submit",(evt)=>{
  evt.preventDefault()

  const inputValue = todoInput.value
  if(inputValue){
     saveTodo(inputValue)
  }
})

todoList.addEventListener('click',(e)=>{
  const targetEl = e.target
 
  const parentEl = targetEl.closest('div')

  

  let todoTitle;

  if(parentEl && parentEl.querySelector('h3')){
    todoTitle = parentEl.querySelector('h3').innerText
  }

  if(targetEl.classList.contains('finish-todo')){
    parentEl.classList.toggle('done')
  }

  if(targetEl.classList.contains('edit-todo')){
     toggleForms()
   editInput.value = todoTitle
   oldInputValue = todoTitle
  }
  
  if(targetEl.classList.contains('remove-todo')){
parentEl.remove()
  }
})


cancelEditBtn.addEventListener('click',(e)=>{
e.preventDefault()
toggleForms()
})


editForm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue){
    updateTodo(editInputValue)
  }

  toggleForms()
})


