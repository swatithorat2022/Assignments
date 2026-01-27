function displayTriangle(rows:number):void{
    
    for(let i:number=0;i<=rows;i++){
        let result:string="";
        for(let j:number=0;j<rows;j++)
        {   
        if(j<rows-i) {   
         result=result+" ";
            }
        else{
        result=result+"*";
        }
        }
              console.log(result) 
    }

    }

displayTriangle(6);
export{};