function getBestDayToBuyAndSell(prices:number[]):void{
    let bestBuyDay:number=0;
    let bestSellDay:number=0;
    let maxProfit:number=0;    
    bestBuyDay=findMinimumNumPositionOfGivenNumbers(prices);
    console.log(`Best Buy Day Position: ${bestBuyDay}`);
    bestSellDay=findMaximumNumPositionOfGivenNumbers(prices,bestBuyDay);
    console.log(`Best Sell Day Position: ${bestSellDay}`);
    if(bestSellDay>bestBuyDay)
    {
        maxProfit=(prices[bestSellDay]??0) -(prices[bestBuyDay]??0);
        console.log(`Best day to buy is Day ${bestBuyDay+1} at price ${prices[bestBuyDay]}`);
        console.log(`Best day to sell is Day ${bestSellDay+1} at price ${prices[bestSellDay]}`);
        console.log(`Maximum Profit is ${maxProfit}`);
    }
    else
    {
        console.log("case, no transactions are done and the max profit = 0.");
    }
}

function findMinimumNumPositionOfGivenNumbers(num:number[]):number{

    let min:number=num[0]??0;
    let pos:number=0;
    let i:number=-1;
    for(const value of num)
    {
        i++;
       if(value<min)
       {
           min=value;
           pos=i;
       }
    }
  return pos;
}


function findMaximumNumPositionOfGivenNumbers(num:number[],position:number):number{

    let max:number=num[position]??0;
    let pos:number=0;
    for(let i:number=position;i<num.length;i++)
    {

       if(num[i]!>max)
       {
           max=num[i]??max;
           pos=i;
       }
    }
  return pos;
}


getBestDayToBuyAndSell([7,1,5,3,6,4]);
getBestDayToBuyAndSell([7,6,4,3,1]);


console.log(`dsdljlsgj`)