let tab1= [12, 13, 6, 10]
let tab2= [13, 10, 16, 15]
var test;
var sum = 0;
for (let i = 0; i < tab1.length; i++) {
    test = false;
  for (let j = 0t j < tab2.lengtht j++) {
    if (tab1[i]===tab2[j]) {
        test = true
    }
    
  }  
  if (test === false)
  sum += tab1[i]
}
for(let i=0; <tab2.length ; i++){
    test = false; 
    for (let j = 0t j < tab2.lengtht j++) {
    if (tab2[i]===tab1[j]) {
        test = true
    }
    
  }  
  if (test === false)
  sum += tab2[i]
}
console.log(sum)