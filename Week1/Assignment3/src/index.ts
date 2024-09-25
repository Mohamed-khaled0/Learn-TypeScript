function printInfo(valueOne:(number | string |boolean | number[]), valueTwo:(number | string |boolean | number[])) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
  }
  
  console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
  console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
  console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work