
//immutable array.js
const names = ["Messi", "Thiago", "Bernand","Immanuel"];

// const n2 = names; //dosen't create a new object. Only a reference
//old school immutable
//const n2 = names.concat("ee");//clones names and adds ee to the list
//spread way
const n2 = [...names, "newName"]
//insert in middle of array 
const n3 = [...names.slice(0,2), "newName",...names.slice(2)]

console.log(n3)
console.log(names)