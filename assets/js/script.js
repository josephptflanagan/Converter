const binaryToDecimalButton = document.getElementById('bToDButton');
const decimalToBinaryButton = document.getElementById('dToBButton');

const hexToRGBToHSLButton = document.getElementById('hexToRGBToHSLButton');
const RGBToHSLToHexButton = document.getElementById('RGBToHSLToHexButton');
const HSLToHexToRGBButton = document.getElementById('HSLToHexToRGBButton');

let binaryToDecimalInput = document.getElementById('bToDInput');
let decimalToBinaryInput = document.getElementById('dToBInput');
let binaryToDecimalAnswer = document.getElementById('bToDAnswer');
let decimalToBinaryAnswer = document.getElementById('dToBAnswer');

let hexToRGBToHSLInput = document.getElementById('hexToRGBToHSLInput')
let RToHSLToHexInput = document.getElementById('RToHSLToHexInput');
let GToHSLToHexInput = document.getElementById('GToHSLToHexInput');
let BToHSLToHexInput = document.getElementById('BToHSLToHexInput');
let HToHexToRGBInput = document.getElementById('HToHexToRGBInput');
let SToHexToRGBInput = document.getElementById('SToHexToRGBInput');
let LToHexToRGBInput = document.getElementById('LToHexToRGBInput');
let hexToRGBAnswer = document.getElementById('hexToRGBAnswer');
let hexToHSLAnswer = document.getElementById('hexToHSLAnswer');
let RGBToHSLAnswer = document.getElementById('RGBToHSLAnswer');
let RGBToHexAnswer = document.getElementById('RGBToHexAnswer');
let HSLToHexAnswer = document.getElementById('HSLToHexAnswer');
let HSLToRGBAnswer = document.getElementById('HSLToRGBAnswer');

//BINARY TO DECIMAL START
function binaryToDecimal(event) {
    
    //prevents the page from refreshing when clicking the submit button
    event.preventDefault();

    //grabs the user input value
    let binaryNum = binaryToDecimalInput.value;

    let decimalNum = 0;

    //regex to check and ensure the number is a binary number
    let binaryRegex = /^[0-1]+$/;

    //checks that there is user input before proceeding
    if (binaryNum) {

        //checks that this input is a binary number
        if (binaryNum.match(binaryRegex)) {

            //reverses the binary number to make it easier to use
            binaryNum = binaryNum.split("").reverse().join("");

            for (let i = 0; i < binaryNum.length; i++) {

                //populates the decimal number by adding each binary digit's value to it
                decimalNum += binaryNum[i] * Math.pow(2, i);

            }

            //populates the answer on the page
            binaryToDecimalAnswer.innerHTML = "Your Binary Number as a Decimal Number: " + decimalNum;
        }
        //if the input is not a binary number
        else{            
            binaryToDecimalAnswer.innerHTML = "Input must be a binary number (1s and 0s)";
        }

    }

};
//BINARY TO DECIMAL END

//DECIMAL TO BINARY CONVERTOR START
function decimalToBinary(event) {

     //prevents the page from refreshing when clicking the submit button
    event.preventDefault();

    //This algorithm works by checking increasingly large exponents of 2 against the number. 
    //When the exponent of 2 exceeds the user number, the previous exponent of 2 is subtracted from the decimal number.
    //The algorithm whittles down the decimal number to 0. At 0 the binary number is ready and the while loop ends

    //grabs the user input value
    let decimalNum = decimalToBinaryInput.value;

    //empty array that will store the digits of the binary number
    let binaryNum = [];

    //number that will determine how many digits there are in the binaryNum
    let position = 0;

    //currentNum is the current exponent of 2 being checked against the user number
    let currentNum = 0;

    //bool that details if this is the first exponent of 2 being subtracted from the user number or not
    let first = true;

    //regex to check and ensure the number is a decimal number
    let decimalRegex = /^[0-9]+$/;

    //for use in testing results
    let checker = decimalNum;

    //checks that there is user input before proceeding
    if (decimalNum) {

         //checks that this input is a decimal number
        if (decimalNum.match(decimalRegex)) {

            //immediately ejects 0
            if (decimalNum == 0) {
                binaryNum.push(decimalNum);
            }
            else {

                //Main Loop
                while (decimalNum > 0) {

                    //As the loop starts the previous exponent of 2 is set to the current exponent of 2
                    let lastNum = currentNum;
                    //The current exponent of 2 is updated to the next highest
                    currentNum = Math.pow(2, position);

                    //if the user number is greater than the current exponent of 2, position increases
                    if (decimalNum > currentNum) {
                        position += 1;
                    }
                    else {

                        //if this is the first time the binaryNum array is being interacted with
                        if (binaryNum.length == 0) {

                            //this for loop fills every spot with 0's except the last, which gets a 1
                            for (let i = 0; i < position + 1; i++) {

                                if (i == position) {
                                    binaryNum[binaryNum.length - 1] = "1";
                                }
                                else {
                                    binaryNum.push("0");
                                }
                            }

                        }
                        //as the decimal number decreases, the position will decrease, and lower positions in the array will be replaced with 1's as is warranted. 
                        else {
                            if (decimalNum == currentNum) {
                                binaryNum[position] = "1"
                            }
                            else {
                                binaryNum[position - 1] = "1"
                            }
                        }

                        //if the decimal number and exponent of 2 are equal, the exponent of 2 is subtracted from the decimalnumber to make 0
                        if (decimalNum == currentNum) {
                            decimalNum = 0;
                        }
                        //otherwise the last exponent of 2 is subtracted from 2
                        else {
                            decimalNum -= lastNum;
                        }

                        //a catch for exponents of 2 that cause a mistake in the algorithm otherwise. I will endeavor to figure out why, but without this 2,4,8,16, etc... come out one digit short
                        if(first && decimalNum == 0){
                            binaryNum[binaryNum.length-1]= "0";
                            binaryNum.push("1");
                        }

                        //sets first to false, resets counting and comparing variables
                        first = false;
                        position = 0;
                        currentNum = 0;

                    }

                }
            }

            //reverses the binaryNum array and turns it into a string
            let binaryNumStr = binaryNum.reverse().join("");

            //updates the answer on the page
            decimalToBinaryAnswer.innerHTML = "Your Decimal Number as a Binary Number: " + binaryNumStr;

            //Testing my algorithm against the built in convertor
            console.log(Number(checker).toString(2));
            console.log(binaryNumStr);
            console.log('--------------------');

        }
        //catch for if user input is not a decimal number
        else {
            decimalToBinaryAnswer.innerHTML = "Input must be a decimal number";
        }
    }

};


binaryToDecimalButton.addEventListener("click", binaryToDecimal);
decimalToBinaryButton.addEventListener("click", decimalToBinary);
hexToRGBToHSLButton.addEventListener("click", hexToRGBToHSL);
RGBToHSLToHexButton.addEventListener("click", RGBToHSLToHex);
HSLToHexToRGBButton.addEventListener("click", HSLTohexToRGB);