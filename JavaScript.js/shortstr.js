var x = ["one", "two","three","eighteen",];

function shortstr(str)
{

var output = str[0];

for (var i=0; i < str.length; i++)
{
	if (str[i].length < output.length)
	  output = str[i];
}

return output
}
console.log("The shortest string is " +shortstr(x));