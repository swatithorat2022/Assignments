function isStringPalindrom( str:string):void{
    let reversedString:string="";
    let actualString:string=str.toLowerCase();
    actualString=actualString.replace(/[^a-zA-Z0-9 ]/g, '');
    actualString=actualString.replace(/ /g, '');
    console.log("Actual string is :"+actualString)
    for(let i:number=actualString.length-1;i>=0;i--){
        reversedString=reversedString+actualString.charAt(i);
    }
    console.log("reversed string is :"+reversedString)
     if(actualString==reversedString)
     {
        console.log("Given String is Pallindrom")
      
     }
     else{
        console.log("Given String is not Pallindrom")
    }
}
let input:string="A man, a plan, a canal: Panama";
isStringPalindrom(input)
let input1:string ="race a car"
isStringPalindrom(input1);