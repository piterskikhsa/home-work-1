document.addEventListener('DOMContentLoaded', function () {
  const taskList = document.querySelector('.list')
  const addButton = document.querySelector('.add-task')
  const input = document.querySelector('.input-task')

  let tasks = ['Я хочу сделать список задач']

  function handleClickAdd() {
    const value = input.value.trim()
    if (value) {
      tasks.push(value)
      input.value = ''
      render()
    }
  }

  function handleClickRemove(index) {
    tasks.splice(index, 1)
    render()
  }

  addButton.addEventListener('click', handleClickAdd)
  taskList.addEventListener('click', (e) => {
    const elem = e.target
    if (elem.classList.contains('btn')) {
      const index = elem.getAttribute('data-item')
      handleClickRemove(index)
      render()
    }
  })

  function render() {
    taskList.innerHTML = ''
    tasks.forEach((task, index) => {
      let el = document.createElement('li')
      let rm = document.createElement('button')

      rm.setAttribute('data-item', index)
      rm.setAttribute('class', 'btn btn-danger')
      rm.textContent = ` x `

      el.textContent = `${task}`
      el.appendChild(rm)

      taskList.appendChild(el)
    })
  }
  render()
})
