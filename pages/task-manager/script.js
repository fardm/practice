const addBtn = document.querySelector(".input-todo button");
const inputBox = document.querySelector(".input-todo input");
const todoList = document.querySelector(".todo-list");
const deleteAllBtn = document.querySelector(".info-box button");


// actvie style for task button
inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value;

    if (userEnteredValue.trim() != 0) {
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active")
    }
}

// push input value to localstorage
addBtn.addEventListener('click', function () {
    let userEnteredValue = inputBox.value;
    const getLocalStorageData = JSON.parse(localStorage.getItem('todo')) || [];
    getLocalStorageData.push(userEnteredValue);
    localStorage.setItem('todo', JSON.stringify(getLocalStorageData))
    showTasks()
    addBtn.classList.remove("active")
})

// show tasks
showTasks()
function showTasks() {
    let getLocalStorageData = localStorage.getItem('todo')

    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData)
    }

    const pendingTasksNumb = document.querySelector(".pendingTasks")
    pendingTasksNumb.textContent = listArray.length


    if (listArray.length > 0) {
        deleteAllBtn.classList.add("active")
    } else {
        deleteAllBtn.classList.remove("active")
    }

    let newTag = "";
    listArray.forEach((element, index) => {
        newTag += `<li>${element}<span class="icon"><svg onclick="deleteTask(${index})" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<path d="M464.866,96.4H424.7h-57.301V15c0-8.284-6.716-15-15-15H159.6c-8.284,0-15,6.716-15,15v81.4H87.3H47.134			c-8.284,0-15,6.716-15,15s6.716,15,15,15H72.3V497c0,8.284,6.716,15,15,15h337.4c8.284,0,15-6.716,15-15V126.4h25.166			c8.284,0,15-6.716,15-15S473.15,96.4,464.866,96.4z M174.6,30h162.799v66.4H174.6V30z M409.7,482H102.3V126.4h57.3h192.799H409.7			V482z"/>	</g></g><g>	<g>		<path d="M304.2,192.801c-8.284,0-15,6.716-15,15V400.6c0,8.284,6.716,15,15,15s15-6.716,15-15V207.801			C319.2,199.517,312.484,192.801,304.2,192.801z"/>	</g></g><g>	<g>		<path d="M207.8,192.801c-8.284,0-15,6.716-15,15V400.6c0,8.284,6.716,15,15,15s15-6.716,15-15V207.801			C222.8,199.517,216.084,192.801,207.8,192.801z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span></li>`
    })

    todoList.innerHTML = newTag;
    inputBox.value = ""

}


// delete all task button
function deleteTask(index) {
    const getLocalStorageData = JSON.parse(localStorage.getItem('todo')) || [];
    const updatedTasks = getLocalStorageData.filter((_, i) => i !== index)
    localStorage.setItem('todo', JSON.stringify(updatedTasks))
    showTasks()
}

deleteAllBtn.addEventListener('click', function () {
    localStorage.removeItem('todo');
    showTasks()
})