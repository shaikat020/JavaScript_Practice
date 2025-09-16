const car=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

console.log("Using For loop:  \n");
let text="";

for(let i=0; i<car.length;i++)
{
    text+=car[i]+"\n";
}

console.log(text);

//While loop
console.log("Using While loop:  \n");
text="";
let i=0;
while(i<car.length)
{
    text+=car[i]+"\n";
    i++;
}
console.log(text);

//Do-while loop
console.log("Using Do-while loop:  \n");

text="";
i=0;
do
{
    text+=car[i]+"\n";
    i++;
}while(i<car.length);
console.log(text);