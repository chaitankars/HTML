//3. Write a function that returns boolean flag if a number is between 5000 and 9999.



const num1=parseInt(prompt("Enter the number"), "");

function retBool(num1)
{
if (num1 >= 5000 && num1<=9999)
{
return true;
}
else
{
return false;
}
}

console.log(retBool(num1));
