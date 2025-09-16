//Write a function that takes three numbers and returns the largest.
function largest(n1,n2,n3){
    if(n1>n2 && n1>n3){
        return n1+ " is the largest";
    }
    else if(n2>n3 && n2>n1){
        return n2+ " is the largest";
    }
    else if(n3>n1 && n3>n2){
        return n3+ " is the largest";
    }
    else{
        return "At least 2 equal"
    }
}

console.log(largest(2,3,1));