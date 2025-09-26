import React, { useState } from 'react';
import { use } from 'react';
import CardPanel from './CardPanel';
import ActivityPanel from './ActivityPanel';
const DataPanel = ({ dataPromise, progress, setProgress, resolved, setResolved, task, setTask, resolvedTask, setResolvedTask }) => {
    
    const initialTicketData = use(dataPromise);
    const [ticketData, setTicketData] = useState(initialTicketData);
    
    
    const handleRemove = (id) => {
        console.log('Removing ticket with id:', id);
        setTicketData(prevTickets => prevTickets.filter(ticket => ticket.id !== id));
    };
    if (!ticketData) {
        return <div>Loading...</div>;
    }

    if (ticketData.length === 0) {
        return (
            <div className='max-w-[1440px] m-4 grid md:grid-cols-3 gap-4 mx-auto'>
            <div className=' p-4 col-span-1 md:col-span-2'>
                <h1 className='font-bold text-lg mb-4'>Customer Tickets</h1>
                <div className='flex-row text-center items-center justify-center h-full'>
                    <h1 className='text-9xl'>All Tickets Resolved</h1>
                    <h2 className='text-2xl pt-10'>Thank you for your service</h2>
                </div>
                </div>
            
            <div className=' p-4 rounded '>
                <h1 className='font-bold text-lg mb-4'>Activity</h1>
                <ActivityPanel 
                dataPromise={dataPromise} 
                progress={progress}
                setProgress={setProgress}
                resolved={resolved}
                setResolved={setResolved}
                task={task}
                setTask={setTask}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                handleRemove={handleRemove}
                />
                </div>
        </div>
        );
    }
    return (
        <div className='max-w-[1440px] m-4 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto'>
            <div className=' p-4 col-span-1 md:col-span-2'>
                <h1 className='font-bold text-lg mb-4'>Customer Tickets</h1>
                <CardPanel 
                dataPromise={dataPromise} 
                ticketData={ticketData}
                setTicketData={setTicketData}
                progress={progress}
                setProgress={setProgress}
                resolved={resolved}
                setResolved={setResolved}
                task={task}
                setTask={setTask}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                handleRemove={handleRemove}
                />
                </div>
            
            <div className=' p-4 rounded '>
                <h1 className='font-bold text-lg mb-4'>Activity</h1>
                <ActivityPanel 
                dataPromise={dataPromise} 
                progress={progress}
                setProgress={setProgress}
                resolved={resolved}
                setResolved={setResolved}
                task={task}
                setTask={setTask}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                handleRemove={handleRemove}
                />
                </div>
        </div>
    );
};

export default DataPanel;