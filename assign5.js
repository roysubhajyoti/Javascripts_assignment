let packages="overnight";

switch(packages)
{
    case "standard":
        console.log("standard will take 3-5 days to delivery");
        break;
    case "express":
        console.log("express will take 1-2 days to delivery");
        break;
    case "overnight":
        console.log("next day delivery");
        break;  
     default:
        console.log("Invalid packages ");
        break;

}