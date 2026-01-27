function findDuplicateOccurances(str:string):void{
    let count:number=0;
   const actualString: string[] = str.split(' ');
  const map: Map<string, number> = new Map<string, number>();
  
  for (const word of actualString) {
    // Shorter, safe logic using nullish coalescing
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  
  // Example logic for finding duplicates
  map.forEach((count, word) => {
    if (count > 1){
        if(word=="Java" || word=="java"){
         console.log(`${word}: ${count}`);

        }
    } 
  });
}
let str:string ="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
findDuplicateOccurances(str);
export{};