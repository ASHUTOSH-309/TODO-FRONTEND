

export function Todos({ tasks }) {
console.log(tasks)
    return <div>
        {tasks.map(function (task) {
            return <div>
                <h1>{task.title}</h1>
                <h2>{task.description}</h2>
                <button> {task.completed === true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>




}