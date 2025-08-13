function findTallest(height){
    // console.log(height);
    let max = height[0]; 
    for(let num of height){
        // console.log(max);
        if (max < num){
            max = num;
        }
    }
    return max;
}

const height = [34, 56, 23, 5, 5, 7, 9,3,0];

console.log(findTallest(height));