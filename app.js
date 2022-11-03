let myArray=[16,true,"8",4,9,"6",36,false,49,9,"HiCoders","false",1,4,"true"];
//Create a new array with items of type number in this array.And print it to the console.[16,4,9,36,49,9,1,4]
let newArray=[];
for (let index = 0; index < myArray.length; index++) {
    if(typeof myArray[index] == "number")    {
        newArray.push(myArray[index]);    }  }
console.log("newArray: ",newArray);
//Print the square of each item of the new array to the console.
let squarenewArray=[];
for(j=0;j<newArray.length;j++){
    squarenewArray.push(newArray[j]*newArray[j]);}
console.log("squarenewArray ",squarenewArray);
//Print the square root of each item of the new array to the console
let squarerootnewArray=[];
for(a=0;a<newArray.length;a++){
    squarerootnewArray.push(Math.sqrt(newArray[a]));}
console.log("squarerootnewArray",squarerootnewArray);
//Print the smallest item of the new array to the console.
console.log("smallest item:",Math.min(...newArray));//why 3 dots?!!!//anladim
//Print the largest item of the new array to the console.
console.log("largest item:",Math.max(...newArray));
//Print the sum of the items of the new array to the console.
let sum = 0;
for(b=0;b<newArray.length;b++){
    sum=sum+newArray[b];}
console.log("sum:",sum);
//Print the average of the items of the new array to the console.
console.log("average:",(sum/newArray.length));