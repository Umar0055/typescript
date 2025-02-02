let userinput:number=324;
let unit:number=40;
if(userinput<= 200){
    let bill:number=unit*userinput;
    let tax:number=userinput*1.5
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}else if(userinput<= 400&&userinput>= 201){
    let bill:number=unit*userinput;
    let tax:number=userinput*2.5;
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}else if(userinput<= 600 &&userinput>= 401){
    let bill:number=unit*userinput;
    let tax:number=userinput*3.5
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}else if(userinput<= 800 &&userinput>= 601){
    let bill:number=unit*userinput;
    let tax:number=userinput*4.5
    let totalbill:number=bill+tax
    console.log(`your bill is ${bill} and unit rate is ${unit} so your tax is ${tax} to calculate all this your total bill is ${totalbill}`);
}