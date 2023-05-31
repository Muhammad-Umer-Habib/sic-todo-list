import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

function App() {


    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })


    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))

    }, [todos])


    const todoFormFn = (newItem) => {
        setTodos(todos => {
            return [...todos,
            {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false,
            }
            ]
        })
    }

    const toggleTodo = (id, completed) => {

        setTodos(currentTodo => {
            return currentTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    const deleteTodo = (id) => {
        setTodos(currentTodo => {
            return currentTodo.filter(todo => todo.id !== id)
        })
    }



    return (
        <>
            <TodoForm todoFormFn={todoFormFn} />

            <h1 className='header'> Todo List</h1>

            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        </>
    )
}

export default App