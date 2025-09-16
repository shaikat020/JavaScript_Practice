//Write a function that takes an array of numbers and returns the largest number.
function largearray(number){
    max= number[0];
    for(let i=0; i<number.length;i++){
        
        if (number[i] > max)
        {
            max=number[i];
        }
        
    }
    return max;
}

const arr=[510,960,30,340,3050];

console.log(largearray(arr));

