import { useState } from "react"

export const TodoForm = ({ todoFormFn }) => {

    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem === "") return null
        todoFormFn(newItem)

        setNewItem("")
    }

    return (
        <form className='new-item-form' onSubmit={handleSubmit} >
            <div className='form-row'>
                <label htmlFor="newItem" >New Item</label>
                <input
                    type="text"
                    id="newItem"
                    value={newItem}
                    onChange={(e) => { setNewItem(e.target.value) }}
                />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}