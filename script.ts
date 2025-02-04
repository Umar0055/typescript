let userinput:number=110;
let unit:number=40;
if(userinput<= 200){
    let bill:number=unit*userinput;
    let tax:number=userinput*1.5/100;
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}else if(userinput<= 500&&userinput>= 201){
    let bill:number=unit*userinput;
    let tax:number=userinput*5.5/100;
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}else {
    let bill:number=unit*userinput;
    let tax:number=userinput*7.5/100;
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}
