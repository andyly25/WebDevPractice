
// Using modulo to check if number is divisible by 2
function isEven(num){
    return num % 2 === 0;
}

// finding factorial of a number
function factorial(num){
    // var we return with
    total = 1;
    // checks if 0 then we return a 1
    if(num === 0){
        return 1;
    // if less than 0 we give a warning
    }else if(num < 0){
        return "please input a positive integer"
    }
    // now the meat of the factorial
    for(i = num; i >0; i--){
        total *= i;
    }
    // return results
    return total;
}

// replace '-' with '_'
function kebabToSnake(str){
    // this uses regular expression with g flag to replace all instances
    newStr = str.replace(/-/g, "_");
    return newStr;
}