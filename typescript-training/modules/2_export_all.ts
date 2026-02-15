//Named exports:  export data functions with it's name separately.
 function add(a:number, b:number):number{
    return a+b;
}
 function subtract(a:number, b:number):number{
    return a-b;
}

 const pi:number=3.14;
export{add,subtract,pi}; // this is also a way to export the data functions with it's name separately.