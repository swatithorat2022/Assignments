let bankTransactions: Map<number, number> = new Map<number, number>();
bankTransactions.set(1, 50000);
bankTransactions.set(2, -2000);
bankTransactions.set(3,3000 );
bankTransactions.set(4,-15000);
bankTransactions.set(5,-200);
bankTransactions.set(6,-300);
bankTransactions.set(7,4000);
bankTransactions.set(8,-3000);

Function calculateNumberOfDebits&CreditTransactions(transactions: Map<number, number>): {debitCount: number, creditCount: number} {
    let debitCount: number = 0;
    let creditCount: number = 0;
    