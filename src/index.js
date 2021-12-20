// your code here
let form = document.querySelector('#create-task-form')
let tasks = document.querySelector('#tasks')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const span = document.createElement('span')
  const li = document.createElement('li')
  li.classList.add('task')
  const btn = document.createElement('button')

  span.appendChild(li)
  span.appendChild(btn)
  span.style.display = 'flex'
  span.style.justifyContent = 'space-between'
  tasks.appendChild(span)

  const user = document.querySelector('#new-task-user')
  const priority = document.querySelector('#new-task-priority')
  li.textContent = `${document.querySelector('#new-task-description').value} - ${user.value} - ${priority.value}`
  
  if (priority.value === 'High') {
    li.classList.add('pri-high')
  } else if (priority.value === 'Medium') {
    li.classList.add('pri-med')
  } else if (priority.value === 'Low') {
    li.classList.add('pri-low')
  }

  btn.textContent = 'x'
  btn.classList.add('x-btn')
  btn.addEventListener('click', (e) => {
    span.remove()
  })

  form.reset()
})





