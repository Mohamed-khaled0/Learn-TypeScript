type custom = "Yes" | "No";
function isHeOld(age: number | string[] |string)   {
    if (typeof age !== "number") {
        throw new Error("Invalid input: The value must be a number");
      }
  }
  
  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"

  