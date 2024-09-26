function showTypes<T1 = "Nothing", T2 = "Nothing", T3 = "Nothing">(param1?: T1, param2?: T2, param3?: T3): string {
    return `${param1} - ${param2} - ${param3}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
