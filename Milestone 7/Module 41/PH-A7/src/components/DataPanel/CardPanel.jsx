import React from 'react';
import { use } from 'react';
import Card from './Card';
const CardPanel = ({ dataPromise, progress, setProgress, resolved, setResolved, task, setTask, resolvedTask, setResolvedTask, ticketData, handleRemove }) => {
    
    const displayTicketData = ticketData || use(dataPromise);
    
    console.log('Current ticket data:', displayTicketData);
    return (
        <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                displayTicketData.map((ticket) => <Card 
                key={ticket.id} 
                ticket={ticket} 
                progress={progress}
                setProgress={setProgress}
                resolved={resolved}
                setResolved={setResolved}
                task={task}
                setTask={setTask}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                handleRemove={handleRemove}
                />)
            }
        </div>
    );
};

export default CardPanel;