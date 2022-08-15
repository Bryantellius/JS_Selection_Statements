
console.log("exercise #1:\n==========\n");
  fnum=7;
  let min= 1;
  let max= 10;
    let answer= prompt(`Guesse a number from ${min}-${max} `);
    parseInt(answer);
    if (isNaN(answer)|| answer> max||answer<min){
   console.log("out of range guess");
       }

 else if(answer <fnum){
console.log("You have guessed Too low");
}
else if (answer>fnum)
{
  console.log("You have guessed too high ");
}
else{
  console.log("congratulation you have guessed the right number");
}

console.log("exercise #2:\n==========\n");


birthMonth=prompt("And what is your birth month 1-12");
birthMonth=parseInt(birthMonth);
switch(birthMonth){
  case 12:
  case 1:
  case 2:
        console.log("You are born in Winter"); 
        break;

  case 3:
  case 4:
  case 5:
        console.log("You are born in Springs"); 
        break;

  case 6:
  case 7:
  case 8:
        console.log("You are born in Summer"); 
        break;

  case 9:
  case 10:
  case 11:
        console.log("You are born in Autumm"); 
        break;
 default: 
 console.log("Opps you have choosed the wrong number");
}


console.log("exercise #3:\n==========\n");


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }
switch(typeId)
{
  case "01":
            type="Tank top";
        break;    
    
  case "02":
              type = "T-Shirt";
         break;     
   case "03": 
              type = "Long Sleeve";
              break;  
    case "04":
             type == "Sweat Shirt";
             break;  
    default:
              type = "Other";            
}

// if (colorId == "BL") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }
switch(colorId){
  case "BL": 
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD": 
    color = "Red";
    break;
  case"PU":
    color = "Purple";
    break;
   default:
    color = "White";
  
}


// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

switch(sizeId){
  case "S":
  size = "Small";
  break;
case "M":
  size = "Medium";
  break;

case "L":
  size = "Large";
 break;
case "XL":
  size = "Extra Large";
break;
default:
  size = "One Size Fits All";
}





console.log(`Product: ${size} ${color} ${type}`);