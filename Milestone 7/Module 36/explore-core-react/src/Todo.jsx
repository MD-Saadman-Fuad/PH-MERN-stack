

// export default function Todo ({name, isDone}) {
//     return (
//         <li>I have to do {name} - {isDone ? "Done" : "Not Done"}</li>
//     )
// }

// export default function Todo({name, isDone}){
//     if(isDone){
//         return <li style={{textDecoration: 'line-through'}}>I have to do {name} - Done</li>
//     }
//     else{
//         return <li>I have to do {name} - Not Done</li>
//     }}

// consitional rendering using ternery operator

// export default function Todo ({name, isDone}){
//     return isDone ? <li>Done: {name}</li> : <li>Not Done: {name}</li>
// }

// Conditional rendering using inline && operator

// export default function Todo ({name, isDone}){
//     return (
//         <li>
//             {isDone && <span style={{textDecoration: 'line-through'}}>I have to do {name} - Done</span>}
//             {!isDone && <span>I have to do {name} - Not Done</span>}
//         </li>
//     )
// }

// // Conditional rendering using inline || operator

// export default function Todo ({name, isDone}){
//     return (
//         <li>
//             {isDone || <span>I have to do {name} - Not Done</span>}
//         </li>
//     )
// }


// Conditional rendering using Variables

export default function Todo ({name, isDone}){
    let task;
    if(isDone){
        task = <span style={{textDecoration: 'line-through'}}>I have to do {name} - Done</span>
    }
    else{
        task = <span>I have to do {name} - Not Done</span>
    }
    return (
        <li>
            {task}
        </li>
    )
}