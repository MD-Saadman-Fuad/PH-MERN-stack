import React from 'react';
import { toast } from 'react-toastify';
const Task = ({ task, setProgress, setResolved, setResolvedTask, resolvedTask, setTask, handleRemove }) => {
    // console.log('task:', task);
    const completeTask = (task) => {
        toast.success(`Ticket #000${task.id} completed!`);
        setResolved(prev => prev + 1);
        setProgress(prev => prev - 1);
        setResolvedTask([...resolvedTask, task]);
        setTask(prevTasks => prevTasks.filter(t => t.id !== task.id));
        if (handleRemove) {
            handleRemove(task.id);
        }
        
    }
    return (
        <div className=' p-4 bg-gray-100 rounded shadow mt-4'>
            <h1 className='text-left font-bold'>{task.title}</h1>
            <h2 className='text-left font-semibold'>{task.description}</h2>
            <button onClick={() => completeTask(task)} className='w-full bg-[#02A53B] mt-4 font-bold text-white px-4 py-2 rounded'>Complete</button>
        </div>
    );
};

export default Task;