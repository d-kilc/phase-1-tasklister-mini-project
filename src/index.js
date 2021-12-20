// your code here
let form = document.querySelector('#create-task-form')
let tasks = document.querySelector('#tasks')

function renderTask(event) {
  const span = document.createElement('span')
  const li = document.createElement('li')
  li.classList.add('task')
  
  const xBtn = document.createElement('button')
  xBtn.textContent = 'X'
  xBtn.classList.add('x-btn')
  xBtn.addEventListener('click', removeTask)

  span.appendChild(li)
  span.appendChild(xBtn)
  span.style.display = 'flex'
  span.style.justifyContent = 'space-between'
  tasks.appendChild(span)

  li.textContent = `${event.target['new-task-description'].value} - ${event.target['new-task-user'].value} - ${event.target['new-task-priority'].value}`
  
  if (event.target['new-task-priority'].value === 'High') {
    li.classList.add('pri-high')
  } else if (event.target['new-task-priority'].value === 'Medium') {
    li.classList.add('pri-med')
  } else if (event.target['new-task-priority'].value === 'Low') {
    li.classList.add('pri-low')
  }
}

function removeTask(e) {
  e.target.parentNode.remove()
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  renderTask(e)
  form.reset()
})