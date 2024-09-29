import React, { useState } from 'react';

interface AddTodoProps {
    onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onAdd(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
