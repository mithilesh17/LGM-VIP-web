import React from 'react';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
export default function TodoList(){
    const [todos, setTodos] = useState([]);

    //add todo to list
    const addTask = task =>{
        if(!task.text){
            return 
        }

        const newTodos = [task,...todos];
        //const oldTask = todos;
        //todos.push(task);
        setTodos(newTodos);

    }

    //remove todo to list

    const removeTask = id =>{
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }

    //task is completed or not

    const completeTask = id =>{
        let updatedTask = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTask)
    }
    return <div>
        <TodoForm addTask={addTask}></TodoForm>   
        <Todo todos = {todos} completeTask = {completeTask} removeTask = {removeTask}></Todo>
    </div>;
}
