function isPrime(num: number): boolean {
    if(num<=1){
         console.log(`${num} is not a prime number`);
        return false;
    }
    for(let i=2;i<num;i++)
    {
        if(num%i===0){
                console.log(`${num} is not a prime number`);
            return false;
        }
   }
   console.log(`${num} is a prime number`);
   return true;
}

isPrime(2);
isPrime(7);
isPrime(1);
isPrime(10);

