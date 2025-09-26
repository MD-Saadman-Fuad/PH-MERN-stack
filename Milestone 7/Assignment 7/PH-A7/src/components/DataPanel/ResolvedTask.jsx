import React from 'react';
import { toast } from 'react-toastify';
const ResolvedTask = ({ task, resolvedTask, setResolvedTask}) => {
    
    const handleRemoveResolved = () => {
        
        setResolvedTask(resolvedTask.filter(t => t.id !== task.id));
        toast.info(`Ticket #000${task.id} removed from resolved tasks.`);
        
        // setResolved(resolved - 1);
    };

    return (
        <div className='rounded-2xl shadow text-left font-bold bg-[#E0E7FF] p-4 mt-2 relative'>
            <button 
                onClick={handleRemoveResolved}
                className='absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-100'
            >
                ×
            </button>
            <h1 className='mt-2 pr-8'>{task.title}</h1>
            <p className='text-green-500'>Completed</p>
        </div>
    );
};

export default ResolvedTask;