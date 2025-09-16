//Write a function that sorts an array of numbers in ascending order.
function sortarr(num)
{
    for(let i=0; i<num.length;i++)
    {
        for(let j=0; j<num.length;j++)
        {
            if (num[j]> num[j+1]){
                let temp=num[j];
                num[j]=num[j+1];
                num[j+1]=temp;
            }
        }
    }
    return num;
}

let a=[3,6,1,5,8,2];

console.log(sortarr(a));