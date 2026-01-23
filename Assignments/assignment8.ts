let n:number =5;

for(let i=1;i<=n;i++){
    let print:string="";
  for(let j=n;j>i;j--){
    
     print+=" ";     

    }
    for(let j:number=1;j<=i;j++)
    {
        print+=j+" ";
    }

    console.log(print);
}

for(let i=n-1;i>0;i--){
    let print:string="";
  for(let j=n;j>i;j--){
    
     print+=" ";     

    }
    for(let j:number=1;j<=i;j++)
    {
        print+=j+" ";
    }

    console.log(print);
}


