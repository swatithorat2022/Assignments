let bankTransactions: Map<number, number> = new Map<number, number>();
bankTransactions.set(1, 50000);
bankTransactions.set(2, -2000);
bankTransactions.set(3,3000 );
bankTransactions.set(4,-15000);
bankTransactions.set(5,-200);
bankTransactions.set(6,-300);
bankTransactions.set(7,4000);
bankTransactions.set(8,-3000);

function calculateNumberOfTransactions(bankTransactions: Map<number, number>): void {
    let debitCount: number = 0;
    let creditCount: number = 0;
    for (let key of bankTransactions.keys()) {

        let amount = bankTransactions.get(key);
        if(amount !== undefined)
        {
        if(amount >0)
            creditCount++;
        else
            debitCount++;
    }
}
    console.log("Number of Debit Transactions: " + debitCount);
    console.log("Number of Credit Transactions: " + creditCount);
}

calculateNumberOfTransactions(bankTransactions);
function calculateTotalAmounts(bankTransactions: Map<number, number>): Map<string,number>{
    let totalDebit: number = 0;
    let totalCredit: number = 0;
   let result: Map<string, number> = new Map<string, number>();
    for (let key of bankTransactions.keys()) {
        let amount = bankTransactions.get(key);
        if(amount !== undefined)
        {
            if(amount >0)
                totalCredit += amount;
            else
                totalDebit += amount;
        }
    }
    console.log("Total Debit Amount: " + totalDebit);
    console.log("Total Credit Amount: " + totalCredit);
    result.set("Total debit amount",totalDebit);
    result.set("Total Credit amount",totalCredit)


    return result
}

calculateTotalAmounts(bankTransactions);

function findBalanceInBankAccount(bankTransactions: Map<number, number>): number {
    let balance: number = 0;
    let totalAmounts: Map<string, number> = calculateTotalAmounts(bankTransactions);
    let totalCredit = totalAmounts.get("Total Credit amount");
    let totalDebit = totalAmounts.get("Total debit amount");
    if(totalCredit !== undefined && totalDebit !== undefined)
    {
        balance = totalCredit + totalDebit;
    }
    console.log("Balance in Bank Account: " + balance);
    return balance;
}

findBalanceInBankAccount(bankTransactions);

function findSuspeciousTransactions(bankTransactions: Map<number, number>): void{
    for(let key of bankTransactions.keys()){
        let amount = bankTransactions.get(key);
        if(amount !== undefined && (amount < -10000 || amount > 10000)){
            {
                console.log("Suspicious transaction found: " + key + " with amount: " + amount);
            }
        }
    }
}

findSuspeciousTransactions(bankTransactions);