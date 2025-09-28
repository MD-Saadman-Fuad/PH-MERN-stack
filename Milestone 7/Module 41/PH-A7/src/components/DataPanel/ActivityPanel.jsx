import React from 'react';
import Task from './Task';
import ResolvedTask from './ResolvedTask';
const ActivityPanel = ({progress, setProgress, resolved, setResolved, task, setTask, resolvedTask, setResolvedTask, handleRemove}) => {
    return (
        <div className ='ActivityPanel mt-4'>
            <div className='TaskStatus mb-4 text-center border-1 bg-white rounded-2xl p-4 border-gray-100'>
                <h1 className='text-center text-2xl font-bold '>Task Status</h1>

                {
                    task.map((task) => <Task 
                    key={task.id} 
                    task={task}
                    progress={progress}
                    setProgress={setProgress}
                    resolved={resolved}
                    setResolved={setResolved}
                    resolvedTask={resolvedTask}
                    setResolvedTask={setResolvedTask}
                    setTask={setTask}
                    handleRemove={handleRemove}
                     />)
                }


            </div>


            <div className='ResolvedTask mb-4 text-center border-1 bg-white rounded-2xl p-4 border-gray-100'>

                <h1 className='font-bold text-2xl'>Resolved Task</h1>
                
                {
                    resolvedTask.map((task) => <ResolvedTask 
                    key={task.id} 
                    task={task}
                    progress={progress}
                    setProgress={setProgress}
                    resolved={resolved}
                    setResolved={setResolved}
                    setResolvedTask={setResolvedTask}
                    resolvedTask={resolvedTask}
                    setTask={setTask}
                     />)
                }


            </div>
        </div>
    );
};

export default ActivityPanel;