
import './App.css'
import React, { useState, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import DataPanel from './components/DataPanel/DataPanel'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

const fetchData = async () => {
  const res = await fetch('./tickets.json');
  const data = await res.json();
  return data;
}
const dataPromise = fetchData();
function App() {
  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [task, setTask] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  // console.log(fetchData());


  return (
    <>
      <Navbar />
      <Banner
        progress={progress}
        resolved={resolved}
      />
      <Suspense fallback={
        <div className='flex justify-center items-center h-32 space-x-2'>
          <span class="loading loading-spinner text-primary"></span>
          <span class="loading loading-spinner text-secondary"></span>
          <span class="loading loading-spinner text-accent"></span>
          <span class="loading loading-spinner text-neutral"></span>
          <span class="loading loading-spinner text-info"></span>
          <span class="loading loading-spinner text-success"></span>
          <span class="loading loading-spinner text-warning"></span>
          <span class="loading loading-spinner text-error"></span>
        </div>
      }>
        <DataPanel
          dataPromise={dataPromise}
          progress={progress}
          setProgress={setProgress}
          resolved={resolved}
          setResolved={setResolved}
          task={task}
          setTask={setTask}
          resolvedTask={resolvedTask}
          setResolvedTask={setResolvedTask}
        />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
