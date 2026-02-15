import{add,subtract,pi} from "./1_named_exports.ts"
import{add as sum,subtract as sub,pi as PI} from "./2_export_all.ts"
console.log("addition is: "+add(1,2));
console.log("subtraction is: "+subtract(5,3));
console.log("value of pi is: "+pi);