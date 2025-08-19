import { useState } from 'react';
import { Button, Space } from 'antd'

const todosData = [
    {
        id: 1,
        title: 'Buy groceries',
        completed: false,
    },
    {
        id: 2,
        title: 'Walk the dog',
        completed: true,
    },
    {
        id: 3,
        title: 'Clean the house',
        completed: false,
    },
];

export default function TodoList() {
    const [todos, setTodos] = useState(todosData);
    const [inputValue, setInputValue] = useState('');

    function handleAdd() {
        const id = todos[todos.length - 1]?.id + 1
        setTodos([...todos, {
            id: id,
            title: inputValue,
            completed: false
        }])
    }

    function handleDelete({ id }) {
        const newTodos = todos.filter((rowId) => id !== rowId)
        setTodos(newTodos)
    }
    return (
        <>
            <div>
                <h1>Todo List</h1>
            </div>
            <Space>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <Button onClick={handleAdd}>Add</Button>
            </Space>
            <ul>
                {todos.map((todo) => (
                    <Space>
                        <li key={todo.id}>{todo.title}</li>
                        <Button
                            onClick={() => handleDelete(todo.id)}>
                            Delete
                        </Button>
                    </Space>
                ))}
            </ul>
        </>
    );
}