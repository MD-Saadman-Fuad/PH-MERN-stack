import React from 'react';
import calender from '../../assets/icons/calander.png';
import { toast } from 'react-toastify';



const Card = ({ ticket, progress, setProgress, task, setTask}) => {
    // const status = ticket.status;
    const handleAssign = () => {
    setTask([...task, ticket]);
    setProgress(progress + 1);
    toast.success(`Ticket #000${ticket.id} assigned to you!`)
    // Update the ticket status to "In Progress"
    ticket.status = "In Progress";
}
    return (
        <div onClick={handleAssign} className='bg-gray-100 p-4 rounded shadow flex-row'>
            <div className='flex items-center justify-between '>
                <h1 className='font-bold text-lg'>{ticket.title}</h1>
                {ticket.status === "Open" ? (
                    <button className='font-semibold text-green-700 rounded-4xl bg-green-300 px-4 py-2'>
                        🟢 {ticket.status}
                    </button>
                ) : ticket.status === "In Progress" ? (
                    <button className='font-semibold text-orange-400 rounded-4xl bg-yellow-300 px-4 py-2'>
                        🟡 {ticket.status}
                    </button>
                ) : (
                    <button className='font-semibold rounded-4xl bg-gray-300 px-4 py-2'>
                        🔴 {ticket.status}
                    </button>
                )}
            </div>
            <div className='mt-4'

            >
                <p className='text-gray-700'>{ticket.description}</p>
            </div>

            <div className='flex items-center justify-between mt-4 text-sm text-gray-500'>
                <div className='flex items-center justify-between mt-2 text-sm text-gray-500 gap-4'>
                    <h4>#000{ticket.id}</h4>
                    <h4 className='font-bold text-md'>
                        {ticket.priority === 'High' ? (
                            <span className='text-red-500'>HIGH PRIORITY</span>
                        ) : ticket.priority === 'Medium' ? (
                            <span className='text-yellow-500'>MEDIUM PRIORITY</span>
                        ) : ticket.priority === 'Critical' ? (
                            <span className='text-red-700'>CRITICAL PRIORITY</span>
                        ) : (
                            <span className='text-green-500'>LOW PRIORITY</span>
                        )}
                    </h4>
                </div>
                <div className='flex items-center justify-between mt-2 text-sm text-gray-500 gap-4'>
                    <h4>{ticket.customer}</h4>
                    <h4 className='flex items-center'><img src={calender} alt="" />{ticket.createdAt}</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;