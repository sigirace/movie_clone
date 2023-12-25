import { useEffect, useState } from "react";

function Todo(){

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {setToDo(event.target.value);};
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === ""){
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("")
    };
    useEffect(()=>{
        console.log(toDos);  
    }, [toDos])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="plz enter your todo.."
                />
                <button>Enter!</button>
            </form>
            <hr/>
            <ul>
                {
                    toDos.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;