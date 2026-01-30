let array1:number[]= [0,9,8,4,6,2,7,1,5];
		
		
		for(let i:number=0;i<array1.length;i++)
		{
			for(let j:number=i+1;j<array1.length;j++)
			{
				let tmp:number=0;
				if(array1[i]!>array1[j]!)
				{
					tmp=array1[i]!;
					array1[i]=array1[j]!;
					array1[j]=tmp;
				}
			}
			
			
		}
		
		
		console.log("Elements of Array after sorting by using Custom-Method");
		
		for( let i:number=0;i<array1.length;i++)
		{
			console.log(array1[i]);
		}
	console.log("2nd largest number: "+array1[array1.length-2]);
    console.log("3rd largest number: "+array1[array1.length-3])