function findDuplicateOccurances(str:string):void{
  const actualString: string[] = str.split(' ');
  const map: Map<string, number> = new Map<string, number>();
  
  for (const word of actualString) {
    
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  
  
  map.forEach((count, word) => {
    if (count > 1){
        if(word=="Java" || word=="java"){
         console.log(`${word}: ${count}`);
         

        }
    } 
  });
let count:number=0;
  for(let i:number=0;i<actualString.length;i++)
  {
    if(actualString[i]=="Java" || actualString[i]=="java")
    {
      console.log("Word 'java' found at index:"+i);
      count++;
    }
  }
  console.log("Java keyword is found :"+count+" times in the given string")
}

let str:string ="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
findDuplicateOccurances(str);
export{};