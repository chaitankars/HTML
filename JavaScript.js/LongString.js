//10. Write a function that returns the longest string if two strings are given as input parameters

function Str(W1,W2){
   var str1 = W1.length;
  var str2 = W2.length;
  
  if (str1>str2){
  return "Longest String is" + W1;
  }
  else {

  return "Longest String is" +W2
  }}
  console.log (Str("Hello","Good Morning"));