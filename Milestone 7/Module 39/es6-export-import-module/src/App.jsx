
import './App.css'
import { Suspense } from 'react'
import Bottles from './components/Bottles/Bottles'
// import { add, sub, mult , division as div } from './utils/math/math'

const bottlesPromise = fetch('./bottles.json').then(res => res.json());

function App() {
  // const [count, setCount] = useState(0)
  // const sum = add(5, 6);
  // const diff = sub(5, 6);
  // const product = mult(5, 6);
  // const quotient = div(5, 6);
  // console.log(sum, diff, product, quotient);

  // const bottles = [
  //   { id: 1, name: 'Bottle A', price: 1200, color: 'red' },
  //   { id: 2, name: 'Bottle B', price: 1500, color: 'blue' },
  //   { id: 3, name: 'Bottle C', price: 1800, color: 'green' },
  // ]



  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      <h1>Buy awesome water bottles</h1>

    </>
  )
}

export default App
