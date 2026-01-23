function power(x:number,n:number):number{
    let result:number=0;
    if(n==0)
    {
     result=1
    }
    else if(n<0)
    {
        n=-1*n;
        x=1/x       
    }
    for(let i=0;i<n;i++)
    {
        result=result*x;
        
    }
    console.log(`${n} power of number ${x} is ${result}`);
    return result;
}

console.log(power(2,2));
console.log(power(2,-2));
console.log(power(2,0));
