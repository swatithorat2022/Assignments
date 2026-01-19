let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;


function checkEligibilityOfLoan(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void {
    if (creditScore > 750 )
    {
        console.log(customerName+ "'s loan application is Approved");
    }
    else if (creditScore >=650 && creditScore<=750){
        if(income==50000.0) 
        {
            if(isEmployed) { 
            if(debtToIncomeRatio<40)
            console.log(customerName+ "'s loan application is approved");
            else if (debtToIncomeRatio>=40)
            console.log(customerName+ "'s loan application is Denied");
            }
        else 
            console.log(customerName+ "'s loan application is Denied");
        }
    } else if(creditScore<650){
        console.log( customerName+ "'s loan application is Denied");
    }
}

console.log(checkEligibilityOfLoan("John Doe", 720,  55000.0, true, 35.0));