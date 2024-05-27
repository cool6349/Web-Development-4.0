let day = 0; // declare a variable

switch (day) {
  case 1:
    console.log("Today is Monday");
    break; // break wont allow to the next
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednsday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;

  // default: // if none of the above cases match
  default:
    console.log("Invalid day");
    break;
}