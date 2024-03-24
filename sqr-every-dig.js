function squareDigits(num){
    // Convert the number to a string
     let numStr = num.toString();
     let result = '';
 
     // Iterate over each digit of the number
     for (let i = 0; i < numStr.length; i++) {
         // Square the digit and concatenate to the result string
         result += Math.pow(parseInt(numStr[i]), 2);
     }
 
     // Parse the concatenated string back to an integer
     return parseInt(result, 10);
 
 // Example usage:
 
   return 0;
 }

 
 //console.log(squareDigits(9119)); // Output: 811181
 //console.log(squareDigits(765));  // Output: 493625