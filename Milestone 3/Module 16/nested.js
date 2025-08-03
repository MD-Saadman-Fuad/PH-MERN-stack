const college = {
    names: "vnc",
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'], 
    unique: {
        color: 'blue',
        result: {
            merit: 'top'
        }
    }
}

console.log(college.names)
console.log(college.unique.result.merit)

console.log(college.events[1])

delete college.class;
console.log(college)