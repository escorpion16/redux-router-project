import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const NameForm = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        dispatch({ type: "SET_NAME", payload: name})
        navigate("/characters")
    }

    return (
        <div>
            Name Form
            <form onSubmit={submit}>
                <label>
                    <div>Coloca tu nombre</div>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default NameForm