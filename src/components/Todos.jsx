

export function Todos({ tasks }) {

    console.log(tasks)

    function updateTask(id) {

        fetch("http://localhost:8000/completed", {

            method: "PUT",
            body: JSON.stringify({
                id:id

            }),

            headers:{
                "Content-Type":"application/json"
            }

        }) 


    }



    console.log(tasks)
    return <div>
        {tasks.map(function (task) {
            return <div>
                <h1>{task.title}</h1>
                <h2>{task.description}</h2>
                <button onClick={()=>updateTask(task._id)} id={task._id} > {task.completed === true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}