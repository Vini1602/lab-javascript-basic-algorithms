let hacker1= "aaa";

 let hacker2= "bruno";


// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".


console.log(` The driver´s name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".


console.log(`The navigator name is ${hacker2}`); 

//2.1 Longest name

if(hacker1.length > hacker2.length) {  
  
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  
}

else if (hacker1.length < hacker2.length) {

  console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  
}

else 
  console.log(`- Wow, you both have equally long names, ${hacker1.length} characters!.`);




//3.1 


let str3= ""
let str4= ""

for (let i=0; i<= hacker1.length-1; i++) {

  str3+= hacker1[i].toUpperCase() + " ";  
}

console.log(str3);

// 3.2
for (let i= hacker2.length-1; i>=0; i--) {

  str4+= hacker2[i].toUpperCase() + " ";  
}

console.log(str4);




// 3.3 

let compareString= hacker1> hacker2;

if (compareString=== true) {
  
  console.log("The driver's name goes first.");

}
  
else  {  console.log("Yo, the navigator goes first definitely");
  
}
  
 if ( hacker1 === hacker2) {
  
  console.log("What?! You both have the same name?");

}