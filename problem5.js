// radian to degree

function radianToDegree(radian){
    let radianResult =  radian * 57.296;
    return radianResult;
}

// chck js file
let degree = radianToDegree(2);
console.log(degree); 

 let checkjs = 'hello.js';
console.log(checkjs.endsWith('.js'));
 *//* 
function checkJS(fileName){
    let check = fileName.endsWith('.js');
    return check;
}
let checkResult = checkJS('hello.s');
console.log(checkResult); 

// oil price
 
function oilPrice(disel,petrol,octen){
    const perDisel = 140;
    const perPetrol = 120;
    const perOcten = 170;

    const totalDisel = perDisel * disel;
    const totalPetrol = perPetrol * petrol;
    const totalOcten = perOcten * octen;

    let allCost = totalDisel + totalPetrol + totalOcten;
    return allCost;
}
let totalBazar = oilPrice(1,1,1);
console.log('My all oil cost ' + totalBazar + ' taka'); 

//  bus cost

function publicBusFaire(allPublic){
    if(allPublic <= 65){
        console.log('Your Public is Lower than 65');
    } else
   {
    const eachTicketPrice = 250;

    const reservedBus = allPublic - 50;
    const microBus = reservedBus - 11;
    publicBus = microBus ;

    pbCost = publicBus * eachTicketPrice;
    console.log(pbCost);
   } 
//    return publicBus,pbCost;

}
let totalPublic = publicBusFaire(200);
// console.log(totalPublic); 

// check best Friend

function bestFriend(friend1, friend2){

    if(friend1.name === friend2.friendName && friend2.name === friend1.friendName){
        console.log(true);
    } else{
        console.log(false);
    }

}

let friend1 = {
    name : 'tom', friendName : 'rock'
    };
  let friend2 = {
        name : 'rock', friendName : 'tom'
        };
bestFriend(friend1,friend2);