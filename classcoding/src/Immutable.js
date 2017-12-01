let a = {street: "Lyngbyvej 45"}

let person = {fName: "Kurt", lName:"Wonnegut", address:a};

console.log(person);


function changePerson(p){ //no new objects are created. Only reference to the existing object
p.lName = "Hansen"
p.address.street ="Vejporten 14"
return p;

}

function changePersonImmutable(p){//Spread 
  //dosent do a deep clone
    return {...p,lName:"Hansen", address:{street:"Vejporten 14"}};
    
    }


let p2 = changePerson(person);

console.log(p2);

console.log(person)
