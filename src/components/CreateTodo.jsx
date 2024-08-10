import { useEffect, useState } from "react"


export function CreateTodo(props) {

    const [title, setTitle] = useState(" ")
    const [description, setDescription] = useState(" ")


    function AddTask() {
        console.log(title)
        console.log(description)
        fetch("http://localhost:8000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description

            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            async function (res) {
                const json = await res.json()
                alert("Todo Added")
               
            }
        )
    }


    return <div>
        <h1>What's your plan for today??</h1>
        <input type="text" placeholder="title" onChange={(e) => {

            setTitle(e.target.value)
        }} /> <br /> <br />
        <input type="text" placeholder="description" onChange={(e) => { setDescription(e.target.value) }} /> <br /> <br />

        <button onClick={AddTask}>Add a todo</button>

    </div>



}