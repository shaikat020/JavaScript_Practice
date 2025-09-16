//For a given array with marks of students -> [33, 38, 83, 69, 96]. Find the average marks of the entire class.

const student=[33, 38, 83, 69, 96];
let sum=0;
for(let i=0;i<student.length;i++)
{
    sum+=student[i];
}
console.log(sum/student.length);