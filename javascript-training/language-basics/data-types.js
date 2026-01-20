 /* Data types are two differemt categories
 Primitive Data types and non-primitive data types*/

    // Primitive data types
    //1. number=> Number represents decimals and without decimals
    let num=123  //number without decimals
    let floatNum=12.34  // number with decilmal
    console.log(typeof num);  // output : number
    console.log(typeof floatNum) // output: number

    //2. string=> String represnts text/ sequence of characters wrapped in single quote or double quote
    let str1='Hello world'  // String with single quote
    let str2="Javascript is fun" // String with double quote
    console.log(typeof str1)  // output:string
    console.log(typeof str2)  // output:string

    //3. boolean => Boolean represents result of condition true or false 
    let isJavascriptFun=true ;   // boolean true
    let isSkyGreen=false;       // boolean false
    console.log(typeof isJavascriptFun); //output: boolean
    console.log(typeof isSkyGreen);   // output: boolean 
   // 4. undefined=> undefined represents a variable that has been declared but not yet assigned value
   let undefVar; //variable declared but not assigned
   console.log(typeof undefVar);  // output: undefined

   // 5. null => null reprsents intentional absence of any object value
   let nullVar=null;  //
   console.log(typeof nullVar);

   //6. Symbole => Symbole represents a unique identifier 


   // Non-Primitive data types


   //1. Object ==> object represents a collection of key-vale pair 
   let empDetails={
    empId:101,
    empName:"John Doe",
    havingVisa:true,
    address:{
        city:"New York",
        zipCode:10001,
        state:"NY",
        country:"USA"

    }
   }
// print employee name 
console.log(empDetails.empName)   // output : John Doe
//print employee zipCode
console.log(empDetails.address.zipCode) // output : 10001
// print entire employee details 
console.log(empDetails);
//2. Array => Array represents an ordered collection of items 
let fruits=["Apple","Banana","Mango","Orange"];
let fruitsAndPrices=["Apple",120,"Banana",60,"Manago",150,"Orange",80];
let fruitsPricesAndAvailability=["Apple",120,true,"Banana",60,true,"Mango",150,false,"Orange",80,true];
// print banana from  fruits array 
console.log("Fruite name is: " +fruits[1]);
//print price of Manago from fruitsAndPrices array 
console.log("Price of Mango is : "+fruitsAndPrices[5]);
//print availability of orange from  fruitsPricesAndAvailability array
console.log("Avaialablity of orange is: "+fruitsPricesAndAvailability[11]);


// 3. Function => Function represents a block of code designed to perform a particular task
function greetUser(userName){
    return "Hello "+userName +", Welcome to Javascript training!";
}