function updateCounters(){

    //total number of todos
    const totalCount = document.getElementById("total-count")
    const numberOfTodo = document.getElementById("todolist").getElementsByTagName("li").length
       //const numberOfTodo = document.getElementsByClassName("todo").length
    totalCount.innerHTML = numberOfTodo


    //// Total number of completed todos
    const completedCount =  document.getElementById("completed-count")
    const completedTodo = document.getElementsByClassName("todo-completed").length
    completedCount.innerHTML = completedTodo

    
    //Total number of notcompleted todos
    const notCompletedCount = document.getElementById("todouncompleted-count")
    const notCompleted = numberOfTodo - completedTodo
    notCompletedCount.innerHTML = notCompleted
}

updateCounters()


