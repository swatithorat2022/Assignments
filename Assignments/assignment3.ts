//let customerName: string = "John Doe";
//let creditScore: number = 720;
//let income: number = 55000.0;
//let isEmployed: boolean = true;
//let debtToIncomeRatio: number = 35.0;


function checkEligibilityOfLoan(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void {
    if (creditScore > 750 )
    {
        console.log(customerName+ "'s loan application is Approved");
    }
    else if (creditScore >=650){
        if(income>=50000.0) 
        {
            if(isEmployed) { 
            if(debtToIncomeRatio<40){
            console.log(customerName+ "'s loan application is approved as customer is employed="+isEmployed+" and Credit score="+creditScore+" with income "+income+" and debt to income ratio "+debtToIncomeRatio );
            }
            else {
            console.log(customerName+ "'s loan application is Denied: as debt to income ratio is high "+debtToIncomeRatio);
            }
            }
            else{
            console.log( customerName+ "'s loan application is Denied as customer is not employed");
            }
        }
        else{
            console.log(customerName+ "'s loan application is Denied as total income is less than required: "+ income);
        }        
        
    } else {
        console.log( customerName+ "'s loan application is Denied as credit score is less than 650 which is : "+ creditScore);
    }
}
checkEligibilityOfLoan("John Doe", 720,  55000.0, true, 35.0);