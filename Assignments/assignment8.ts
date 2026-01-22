function power(x:number,n:number):number{
    let result:number=0;
    if(n==0)
    {
     result=1
    }
    else if(n<0)
    {
        let m : number=-1*n;
        result=(1/(x*m));
       
    }
    else 
    {
        result=x*n;
        
    }
    console.log(`${n} power of number ${x} is ${result}`);
    return result;
}

console.log(power(2,2));
console.log(power(2,-2));
console.log(power(2,0));
