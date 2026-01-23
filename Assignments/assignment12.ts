function findDuplicateOccurances(str:string):void{
    let actualString:string[]=str.split(' ');
    let map:Map<string,number>=new Map<string,number>();
    let count:number=0;
    let indexes:number[]=[];
    for(let i:number=0;i<actualString.length;i++)
    {
        if(map.has(actualString[i]!))
        {
            map.set(actualString[i]!,count+1);
            indexes.push(i);
            console.log(actualString[i]+"occurs at :"+i)
        }
        else{
            map.set(actualString[i]!,1)
        }
    }

    console.log("Total occurances of ")
}