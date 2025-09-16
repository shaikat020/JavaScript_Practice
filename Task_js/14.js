//Given array with prices of items -> [351, 564, 400, 789, 33]. All items have an offer of 10% OFF on them. Change the array to store the final price after applying for an offer.



let price=[351, 564, 400, 789, 33];
for(let i=0;i<price.length;i++)
{
    let discount= price[i]*0.10;
    let final=price[i] -discount;
    console.log(final);

}
