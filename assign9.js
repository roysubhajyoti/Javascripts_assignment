const arr= [1 , 2,99,56,"Subhajyoti",1234,"Google/remotehp"];

for(let index=0; index<arr.length; index++)
{
    if(typeof arr[index] === "string")
        {console.log("Found The First String : "+arr[index]);
        break;
    }
}