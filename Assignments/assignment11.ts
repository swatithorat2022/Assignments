function countNumberOfWordsInGivenString(str:string):void{
    let actualString:string[]=str.split(' ');
    console.log("number of words in given string are :"+actualString.length)
}

function revserseSentenceByWords(str:string):void{
    let actualString:string[]=str.split(' ');
    let reversedSentence:string="";
    for(let i:number=actualString.length-1;i>=0;i--)
    {
        reversedSentence=reversedSentence+actualString[i]+" "

    }
    reversedSentence=reversedSentence.trim();
    console.log("reversed sentence is :"+reversedSentence)
}

function makeCameCasingForWordsInString(str:string):void{
    let actualString:string[]=str.split(' ');
    let expctedString:string="";
    for(let i:number=0;i<actualString.length;i++){
        let word:string="";
          word=actualString[i]!.substring(0,1).toUpperCase();
          word=word+actualString[i]!.substring(1);
          expctedString=expctedString+word+" ";
    }  
        expctedString=expctedString.trim();
        console.log("Actual string is :"+str)
        console.log("Sentence in camel case is like :"+expctedString);
    }

let sentence:string = "Java programming is fun and challenging";
countNumberOfWordsInGivenString(sentence);
revserseSentenceByWords(sentence);
makeCameCasingForWordsInString(sentence);