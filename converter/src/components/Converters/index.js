import React from "react";
import ConverterList from '../ConverterList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Converters({ currentCategory }) {
  const { name, description } = currentCategory;

  if (name == "base") {
    return (
      <section class="binaryToDecimalToBinaryConverterSection converterSection" id="decimalToBinaryToDecimal">
        <div class="sectionHeader">
          <h1 class="converterH1" data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
          <p>{description}</p>
        </div>
        <div class="converters">
          <div class="converterCard-3">
            <div class="converterCardHeader">
              <h3 class="converterH3">Binary to Decimal to Hexadecimal</h3>
            </div>
            <form>
              <label for="bInput">Enter your binary number: </label>
              <input type="text" id="bInput" />
              <button type="click" id="bButton">Convert</button>
              <p id="bToDAnswer">Your Binary Number as a Decimal Number: </p>
              <p id="bToHAnswer">Your Binary Number as a Hexadecimal Number: </p>
            </form>
          </div>
          <div class="converterCard-3">
            <div class="converterCardHeader">
              <h3 class="converterH3">Decimal to Hexadecimal to Binary</h3>
            </div>
            <form>
              <label for="dInput">Enter your decimal number: </label>
              <input type="text" id="dInput" />
              <button type="click" id="dButton">Convert</button>
              <p id="dToBAnswer">Your Decimal Number as a Binary Number: </p>
              <p id="dToHAnswer">Your Decimal Number as a Hexadecimal Number: </p>
            </form>
          </div>
          <div class="converterCard-3">
            <div class="converterCardHeader">
              <h3 class="converterH3">Hexadecimal to Decimal to Binary</h3>
            </div>
            <form>
              <label for="hInput">Enter your hexadecimal number: </label>
              <input type="text" id="hInput" />
              <button type="click" id="hButton">Convert</button>
              <p id="hToDAnswer">Your Hexadecimal Number as a Decimal Number: </p>
              <p id="hToBAnswer">Your Hexadecimal Number as a Binary Number: </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
  else if (name == "color") {
    return (
      <section class="colorConverter converterSection" id="colorConverter">
        <div class="sectionHeader">
          <h1 class="converterH1" data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
          <p>{description}</p>
        </div>
        <div class="converters">
          <div class="converterCard-4">
            <div class="converterCardHeader">
              <h3 class="converterH3">Hex to RGB, HSL, and HSV</h3>
              <div class="color-square" id="hexSquare"></div>
            </div>
            <form>
              <label for="hexInput">Enter your hex value: #</label>
              <input type="text" id="hexInput" maxlength="6" />
              <button type="click" id="hexButton">Convert</button>
              <p id="hexToRGBAnswer">Your hex value as a RGB code: </p>
              <p id="hexToHSLAnswer">Your hex value as a HSL code: </p>
              <p id="hexToHSVAnswer">Your hex value as a HSV code: </p>
            </form>
          </div>
          <div class="converterCard-4">
            <div class="converterCardHeader">
              <h3 class="converterH3">RGB to HSL, HSV, and Hex</h3>
              <div class="color-square" id="RGBSquare"></div>
            </div>
            <form>
              <div>
                <label for="RInput">R: </label>
                <input type="text" class="shortInput" id="RInput" size="3" />
                <label for="GInput">G: </label>
                <input type="text" class="shortInput" id="GInput" size="3" />
                <label for="BInput">B: </label>
                <input type="text" class="shortInput" id="BInput" size="3" />
                <button type="click" id="RGBButton">Convert</button>
              </div>
              <p id="RGBToHSLAnswer">Your RGB code as a HSL code: </p>
              <p id="RGBToHSVAnswer">Your RGB code as a HSV code: </p>
              <p id="RGBToHexAnswer">Your RGB code as a Hex value: </p>
            </form>
          </div>
          <div class="converterCard-4">
            <div class="converterCardHeader">
              <h3 class="converterH3">HSL to HSV, Hex, and RGB</h3>
              <div class="color-square" id="HSLSquare"></div>
            </div>
            <form>
              <div>
                <label for="HSLHInput">H: </label>
                <input type="text" class="shortInput" id="HSLHInput" size="3" />
                <label for="HSLSInput">S: </label>
                <input type="text" class="shortInput" id="HSLSInput" size="3" />
                <label for="HSLLInput">L: </label>
                <input type="text" class="shortInput" id="HSLLInput" size="3" />
                <button type="click" id="HSLButton">Convert</button>
              </div>
              <p id="HSLToHSVAnswer">Your HSL code as a HSV code: </p>
              <p id="HSLToHexAnswer">Your HSL code as a Hex value: </p>
              <p id="HSLToRGBAnswer">Your HSL code as a RGB code: </p>
            </form>
          </div>
          <div class="converterCard-4">
            <div class="converterCardHeader">
              <h3 class="converterH3">HSV to Hex, RGB, and HSL</h3>
              <div class="color-square" id="HSVSquare"></div>
            </div>
            <form>
              <div>
                <label for="HSVHInput">H: </label>
                <input type="text" class="shortInput" id="HSVHInput" size="3" />
                <label for="HSVSInput">S: </label>
                <input type="text" class="shortInput" id="HSVSInput" size="3" />
                <label for="HSVVInput">V: </label>
                <input type="text" class="shortInput" id="HSVVInput" size="3" />
                <button type="click" id="HSVButton">Convert</button>
              </div>
              <p id="HSVToHexAnswer">Your HSV code as a Hex value: </p>
              <p id="HSVToRGBAnswer">Your HSV code as a RGB code: </p>
              <p id="HSVToHSLAnswer">Your HSV code as a HSL code: </p>
            </form>
          </div>
        </div>
        <div class="disclaimer">
          <p class="disclaimer-paragraph">DISCLAIMER: Keep in mind that RGB to Hex and Hex to RGB are direct numerical conversions, and as such
                they should be accurate every time.</p>
          <p class="disclaimer-paragraph">Alternatively, HSL and HSV to RGB or Hex are projections of a cube onto a chromaticity plane, and as such
                minor discrepancies will arise.</p>
        </div>
      </section>
    )
  }
  else {
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <ConverterList category={currentCategory.name} />
      </section>
    );
  }
}

const binaryButton = document.getElementById('bButton');
const decimalButton = document.getElementById('dButton');
const hexadecimalButton = document.getElementById('hButton');

const hexButton = document.getElementById('hexButton');
const RGBButton = document.getElementById('RGBButton');
const HSLButton = document.getElementById('HSLButton');
const HSVButton = document.getElementById('HSVButton');

let binaryInput = document.getElementById('bInput');
let decimalInput = document.getElementById('dInput');
let hexadecimalInput = document.getElementById('hInput');

let binaryToDecimalAnswer = document.getElementById('bToDAnswer');
let binaryToHexadecimalAnswer = document.getElementById('bToHAnswer');
let decimalToHexadecimalAnswer = document.getElementById('dToHAnswer');
let decimalToBinaryAnswer = document.getElementById('dToBAnswer');
let hexadecimalToBinaryAnswer = document.getElementById('hToBAnswer');
let hexadecimalToDecimalAnswer = document.getElementById('hToDAnswer');

let hexInput = document.getElementById('hexInput')
let RInput = document.getElementById('RInput');
let GInput = document.getElementById('GInput');
let BInput = document.getElementById('BInput');
let HSLHInput = document.getElementById('HSLHInput');
let HSLSInput = document.getElementById('HSLSInput');
let HSLLInput = document.getElementById('HSLLInput');
let HSVHInput = document.getElementById('HSVHInput');
let HSVSInput = document.getElementById('HSVSInput');
let HSVVInput = document.getElementById('HSVVInput');

let hexToRGBAnswer = document.getElementById('hexToRGBAnswer');
let hexToHSLAnswer = document.getElementById('hexToHSLAnswer');
let hexToHSVAnswer = document.getElementById('hexToHSVAnswer');
let RGBToHSLAnswer = document.getElementById('RGBToHSLAnswer');
let RGBToHexAnswer = document.getElementById('RGBToHexAnswer');
let RGBToHSVAnswer = document.getElementById('RGBToHSVAnswer');
let HSLToHexAnswer = document.getElementById('HSLToHexAnswer');
let HSLToRGBAnswer = document.getElementById('HSLToRGBAnswer');
let HSLToHSVAnswer = document.getElementById('HSLToHSVAnswer');
let HSVToHexAnswer = document.getElementById('HSVToHexAnswer');
let HSVToRGBAnswer = document.getElementById('HSVToRGBAnswer');
let HSVToHSLAnswer = document.getElementById('HSVToHSLAnswer');

let hexSquare = document.getElementById("hexSquare")
let RGBSquare = document.getElementById("RGBSquare")
let HSLSquare = document.getElementById("HSLSquare")
let HSVSquare = document.getElementById("HSVSquare")

//BINARY INPUT START
function binaryInputController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let binaryNum = binaryInput.value;
  let decimalNum = 0;
  let hexadecimalNum = "";

  //regex to check and ensure the number is a binary number
  let binaryRegex = /^[0-1]+$/;

  //checks that there is user input before proceeding
  if (binaryNum) {

    //checks that this input is a binary number
    if (binaryNum.match(binaryRegex)) {

      decimalNum = binaryToDecimalConverter(binaryNum);
      hexadecimalNum = decimalToHexadecimalConverter(decimalNum);

      console.log("decimalNum: ", decimalNum);
      console.log("hexadecimalNum: ", hexadecimalNum);

      //populates the answers on the page
      binaryToDecimalAnswer.innerHTML = "Your Binary Number as a Decimal Number: " + decimalNum;
      binaryToHexadecimalAnswer.innerHTML = "Your Binary Number as a Hexadecimal Number: " + hexadecimalNum;
    }
    //if the input is not a binary number
    else {
      binaryToDecimalAnswer.innerHTML = "Input must be a binary number (1s and 0s)";
      binaryToHexadecimalAnswer.innerHTML = "Input must be a binary number (1s and 0s)";
    }

  }

}
//BINARY INPUT END

//DECIMAL INPUT START
function decimalInputController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let decimalNum = decimalInput.value;
  let hexadecimalNum = "";
  let binaryNum = "";

  //regex to check and ensure the number is a decimal number
  let decimalRegex = /^[0-9]+$/;

  //checks that there is user input before proceeding
  if (decimalNum) {

    //checks that this input is a decimal number
    if (decimalNum.match(decimalRegex)) {

      hexadecimalNum = decimalToHexadecimalConverter(decimalNum);
      binaryNum = decimalToBinaryConverter(decimalNum);

      //updates the answer on the page
      decimalToHexadecimalAnswer.innerHTML = "Your Decimal Number as a Hexadecimal Number: " + hexadecimalNum;
      decimalToBinaryAnswer.innerHTML = "Your Decimal Number as a Binary Number: " + binaryNum;


    }
    //catch for if user input is not a decimal number
    else {
      decimalToHexadecimalAnswer.innerHTML = "Input must be a decimal number";
      decimalToBinaryAnswer.innerHTML = "Input must be a decimal number";
    }
  }


}
//DECIMAL INPUT END

//HEXADECIMAL INPUT START
function hexadecimalInputController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let hexadecimalNum = hexadecimalInput.value;
  let binaryNum = "";
  let decimalNum = 0;

  //regex to check and ensure the value is a hex value
  let hexRegex = /^[a-f0-9]+$/;

  //checks that there is user input before proceeding
  if (hexadecimalNum) {

    //checks that this input is a decimal number
    if (hexadecimalNum.match(hexRegex)) {

      decimalNum = hexadecimalToDecimalConverter(hexadecimalNum);
      binaryNum = decimalToBinaryConverter(decimalNum);

      //updates the answer on the page
      hexadecimalToBinaryAnswer.innerHTML = "Your Hexadecimal Number as a Binary Number: " + binaryNum;
      hexadecimalToDecimalAnswer.innerHTML = "Your Hexadecimal Number as a Decimal Number: " + decimalNum;

    }
    //catch for if user input is not a decimal number
    else {
      hexadecimalToBinaryAnswer.innerHTML = "Input must be a hexadecimal number";
      hexadecimalToDecimalAnswer.innerHTML = "Input must be a hexadecimal number";
    }
  }





}
//HEXADECIMAL INPUT END


//BINARY TO DECIMAL START
function binaryToDecimalConverter(binaryNum) {

  let decimalNum = 0;

  //reverses the binary number to make it easier to use
  binaryNum = binaryNum.split("").reverse().join("");

  for (let i = 0; i < binaryNum.length; i++) {

    //populates the decimal number by adding each binary digit's value to it
    decimalNum += binaryNum[i] * Math.pow(2, i);

  }

  return decimalNum;

};
//BINARY TO DECIMAL END

//DECIMAL TO BINARY START
function decimalToBinaryConverter(decimalNum) {

  //This algorithm works by checking increasingly large exponents of 2 against the number. 
  //When the exponent of 2 exceeds the user number, the previous exponent of 2 is subtracted from the decimal number.
  //The algorithm whittles down the decimal number to 0. At 0 the binary number is ready and the while loop ends

  //empty array that will store the digits of the binary number
  let binaryNum = [];

  //number that will determine how many digits there are in the binaryNum
  let position = 0;

  //currentNum is the current exponent of 2 being checked against the user number
  let currentNum = 0;

  //bool that details if this is the first exponent of 2 being subtracted from the user number or not
  let first = true;

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
        if (first && decimalNum == 0) {
          binaryNum[binaryNum.length - 1] = "0";
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

  return binaryNumStr;

};
//DECIMAL TO BINARY END

const hexToDecimalDictionary = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15 };
const decimalToHexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

//DECIMAL TO HEXADECIMAL START
function decimalToHexadecimalConverter(decimalNum) {

  let hexadecimalNum = "";
  let quotient = 0;
  let remainder = 0;

  while (decimalNum > 0) {
    remainder = decimalNum % 16;
    quotient = (decimalNum - remainder) / 16;

    hexadecimalNum += decimalToHexArray[remainder];
    decimalNum = quotient;
  }

  hexadecimalNum = hexadecimalNum.split("").reverse().join("");

  return hexadecimalNum;

}
//DECIMAL TO HEXADECIMAL END

//HEXADECIMAL TO DECIMAL START
function hexadecimalToDecimalConverter(hexadecimalNum) {

  let decimalNum = 0;

  hexadecimalNum = hexadecimalNum.split("").reverse().join("");

  for (let i = 0; i < hexadecimalNum.length; i++) {
    decimalNum += (Math.pow(16, i) * hexToDecimalDictionary[hexadecimalNum[i]]);
  }

  return decimalNum;

}
//HEXADECIMAL TO DECIMAL END

//HEX TO RGB START
function hexToRGBConversion(hexValue) {

  if (hexValue.length == 3) {
    let tempHex = "";
    tempHex = hexValue[0] + hexValue[0] + hexValue[1] + hexValue[1] + hexValue[2] + hexValue[2];
    hexValue = tempHex;
  }

  let subA = hexValue.slice(0, 2);
  let subB = hexValue.slice(2, 4);
  let subC = hexValue.slice(4);
  let subSections = [subA, subB, subC];

  for (let i = 0; i < subSections.length; i++) {
    subSections[i] = hexadecimalToDecimalConverter(subSections[i]);
  }

  return subSections;

}
//HEX TO RGB END

//RGB TO HEX START
function RGBToHexConversion(RGB) {

  let hexValue = "";

  for (let i = 0; i < RGB.length; i++) {
    hexValue += decimalToHexArray[(RGB[i] - (RGB[i] % 16)) / 16]
    hexValue += decimalToHexArray[(RGB[i] % 16)]
  }

  return hexValue;

}
//RGB TO HEX END

//HSL TO RGB START
function HSLToRGBConversion(HSL) {

  //Initializing HSL elements
  let hue = Number(HSL[0]);
  let saturation = Number(HSL[1]);
  let lightness = Number(HSL[2]);

  console.log("hue: ", hue);
  console.log("saturation: ", saturation);
  console.log("lightness: ", lightness);

  if (hue == 360) {
    hue = 0;
  }

  //Initializing RGB element
  let RGB = [0, 0, 0];

  //Initializing conversion elements
  let chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  let x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1))
  let lightnessMatch = lightness - chroma / 2

  //Setting RGB elements to conversion Elements
  switch (true) {
    case /* hue >= 0 && */ hue < 60:
      RGB = [chroma, x, 0];
      break;
    case /* hue >= 60 && */ hue < 120:
      RGB = [x, chroma, 0];
      break;
    case /* hue >= 120 && */ hue < 180:
      RGB = [0, chroma, x];
      break;
    case /* hue >= 180 && */ hue < 240:
      RGB = [0, x, chroma];
      break;
    case /* hue >= 240 && */ hue < 300:
      RGB = [x, 0, chroma];
      break;
    case /* hue >= 300 && */ hue < 360:
      RGB = [chroma, 0, x];
      break;
    default:
      console.log("something went wrong at the hsl to rgb hue switch");
  }

  //Finishing HSL to RGB conversion
  for (let i = 0; i < RGB.length; i++) {
    RGB[i] = Math.round((RGB[i] + lightnessMatch) * 255);
  }

  return RGB;

}
//HSL TO RGB END

//RGB TO HSL START
function RGBToHSLConversion(RGB) {

  //Initializing RGB elements
  let red = RGB[0] / 255;
  let green = RGB[1] / 255;
  let blue = RGB[2] / 255;
  RGB = [red, green, blue];

  //Initializing HSL elements
  let hue = 0;
  let saturation = 0;
  let lightness = 0;
  let HSL = ["", "", ""];

  //Determining the largest and smallest RGB elements
  let max = 0;
  let min = 1;

  for (let i = 0; i < RGB.length; i++) {

    if (max < RGB[i]) {
      max = RGB[i];
    }

    if (min > RGB[i]) {
      min = RGB[i];
    }

  }

  //Determining the difference between the largest and smallest RGB elements
  let chroma = max - min;

  //Setting the HSL Hue
  switch (true) {
    case chroma == 0:
      hue = 0;
      break;
    case max == red:
      hue = (((green - blue) / chroma) % 6) * 60;
      break;
    case max == green:
      hue = (((blue - red) / chroma) + 2) * 60;
      break;
    case max == blue:
      hue = (((red - green) / chroma) + 4) * 60;
      break;
    default:
      console.log("something went wrong at RGB to HSL hue switch");
  }

  if (hue < 0) {
    hue += 360;
  }

  //Setting the HSL Lightness
  lightness = (max + min) / 2;

  //Setting the HSL Saturation
  if (lightness == 0 || lightness == 1) {
    saturation = 0;
  } else {
    saturation = chroma / (1 - Math.abs(2 * lightness - 1))
  }

  //Assembled HSL
  HSL = [hue, saturation, lightness]

  return HSL

}
//RGB TO HSL END


//HSV TO HSL START
function HSVToHSLConversion(HSV) {

  //Initiate HSV elements
  let hue = HSV[0];
  let saturation = HSV[1];
  let value = HSV[2];

  //Initiate HSL elements
  let HSLhue = 0;
  let HSLsaturation = 0;
  let lightness = 0;
  let HSL = ["", "", ""];

  //HSL Hue element set
  HSLhue = hue;

  //HSL Lightness element set
  lightness = value * (1 - (saturation / 2));

  //Determine the smaller of HSL lightness and 1 - HSL lightness
  let min = lightness;

  if (min >= 1 - lightness) {
    min = 1 - lightness;
  }

  //HSL Saturation element set
  if (lightness == 0 || lightness == 1) {
    HSLsaturation = 0;
  }
  else {
    HSLsaturation = (value - lightness) / min;
  }

  //Assembled HSL
  HSL = [HSLhue, HSLsaturation, lightness];

  return HSL;

}
//HSV TO HSL END

//HSL TO HSV START
function HSLToHSVConversion(HSL) {

  //Initiate HSL Elements
  let hue = HSL[0];
  let saturation = HSL[1];
  let lightness = HSL[2];

  //Initiate HSV elements
  let HSVhue = 0;
  let HSVsaturation = 0;
  let value = 0;
  let HSV = ["", "", ""];

  //Determine the smaller of HSL lightness and 1 - HSL lightness
  let min = lightness;

  if (min >= 1 - lightness) {
    min = 1 - lightness;
  }

  //HSV Hue element set
  HSVhue = hue;

  //HSV Value element set
  value = lightness + saturation * min;

  //HSV Saturation element set
  if (value == 0) {
    HSVsaturation = 0;
  }
  else {
    HSVsaturation = (2 * (1 - lightness / value));
  }

  //Assembled HSV
  HSV = [HSVhue, HSVsaturation, value];

  return HSV;

}
//HSL TO HSV END

//ROUNDING START
function rounding(codeArray) {

  codeArray[0] = Math.round(codeArray[0]);

  for (let i = 1; i < codeArray.length; i++) {
    codeArray[i] = Math.round(codeArray[i] * 100);
  }

  return codeArray;

}
//ROUNDING END

//PERCENTAGE TO DECIMAL START
function decimalize(codeArray) {

  for (let i = 1; i < codeArray.length; i++) {

    if (codeArray[i] > 1 && codeArray[i] <= 100) {
      codeArray[i] = codeArray[i] / 100;
    }

  }

  return codeArray;

}
//PERCENTAGE TO DECIMAL END

//HEX INPUT START
function hexController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let hexValue = hexInput.value;

  //Initialize all answers
  let RGB = ["", "", ""];
  let HSL = ["", "", ""];
  let HSV = ["", "", ""];

  //regex to check and ensure the value is a hex value
  let hexRegex = /^([a-f0-9]{6}|[a-f0-9]{3})$/;

  //Won't execute without user input
  if (hexValue) {

    //Won't execute unless the input is a hex value
    if (hexValue.match(hexRegex)) {

      //Using Conversions
      RGB = hexToRGBConversion(hexValue);
      HSL = RGBToHSLConversion(RGB);
      HSV = HSLToHSVConversion(HSL);

      //Rounding HSL and HSV values for presentation
      HSL = rounding(HSL);
      HSV = rounding(HSV);

      //Updating Answer Elements
      hexToRGBAnswer.innerHTML = "Your hex value as a RGB code - R:" + RGB[0] + " G:" + RGB[1] + " B:" + RGB[2];
      hexToHSLAnswer.innerHTML = "Your hex value as a HSL code - H:" + HSL[0] + " S:" + HSL[1] + "% L:" + HSL[2] + "%";
      hexToHSVAnswer.innerHTML = "Your hex value as a HSV code - H:" + HSV[0] + " S:" + HSV[1] + "% V:" + HSV[2] + "%";

      hexSquare.style.backgroundColor = "#" + hexValue;

    }
    //non hex values return this message
    else {
      hexToRGBAnswer.innerHTML = "Input must be a hex value (3 or 6 hexadecimal values)";
      hexToHSLAnswer.innerHTML = "Input must be a hex value (3 or 6 hexadecimal values)";
      hexToHSVAnswer.innerHTML = "Input must be a hex value (3 or 6 hexadecimal values)";
    }

  }
}
//HEX INPUT END

//RGB INPUT START
function RGBController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let rValue = RInput.value;
  let gValue = GInput.value;
  let bValue = BInput.value;
  let RGB = [rValue, gValue, bValue];

  //Initializing Answer Elements
  let HSL = ["", "", ""];
  let HSV = ["", "", ""];
  let hexValue = "";

  //Won't execute without user input
  if (rValue && gValue && bValue) {

    //check against decimal input
    for (let i = 0; i < RGB.length; i++) {
      RGB[i] = Math.round(RGB[i]);
    }

    //check RGB values to ensure they fall within 0 and 255
    if ((RGB[0] >= 0 && RGB[0] <= 255) && (RGB[1] >= 0 && RGB[1] <= 255) && (RGB[2] >= 0 && RGB[2] <= 255)) {

      //Run all conversions
      HSL = RGBToHSLConversion(RGB);
      HSV = HSLToHSVConversion(HSL);
      hexValue = RGBToHexConversion(RGB);

      //Rounding HSL and HSV values for presentation
      HSL = rounding(HSL);
      HSV = rounding(HSV);

      //Updating Answer Elements
      RGBToHexAnswer.innerHTML = "Your RGB code as a Hex value: " + hexValue;
      RGBToHSLAnswer.innerHTML = "Your RGB code as a HSL code - H:" + HSL[0] + " S:" + HSL[1] + "% L:" + HSL[2] + "%";
      RGBToHSVAnswer.innerHTML = "Your RGB code as a HSV code - H:" + HSV[0] + " S:" + HSV[1] + "% V:" + HSV[2] + "%";

      RGBSquare.style.backgroundColor = "#" + hexValue;

    }
    //non RGB values return this message
    else {
      RGBToHSLAnswer.innerHTML = "All inputs must be an RGB value (0-255)";
      RGBToHSVAnswer.innerHTML = "All inputs must be an RGB value (0-255)";
      RGBToHexAnswer.innerHTML = "All inputs must be an RGB value (0-255)";
    }

  }

}
//RGB INPUT END

//HSL INPUT START
function HSLController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let hValue = HSLHInput.value;
  let sValue = HSLSInput.value;
  let lValue = HSLLInput.value;
  let HSL = [hValue, sValue, lValue];

  //Initializing Answer Elements
  let HSV = ["", "", ""];
  let RGB = ["", "", ""];
  let hexValue = "";

  //Won't execute without user input
  if (hValue && sValue && lValue) {

    //Converts Percentage saturation and lightness to 0-1 decimal
    HSL = decimalize(HSL);

    //check HSL values to ensure they match the proper ranges of values
    if ((HSL[0] >= 0 && HSL[0] <= 360) && (HSL[1] >= 0 && HSL[1] <= 1) && (HSL[2] >= 0 && HSL[2] <= 1)) {

      //Run all conversions
      RGB = HSLToRGBConversion(HSL);
      HSV = HSLToHSVConversion(HSL);
      hexValue = RGBToHexConversion(RGB);

      //Rounding HSV values for presentation
      HSV = rounding(HSV);

      //Updating Answer Elements
      HSLToRGBAnswer.innerHTML = "Your HSL code as a RGB code - R:" + RGB[0] + " G:" + RGB[1] + " B:" + RGB[2];
      HSLToHSVAnswer.innerHTML = "Your HSL code as a HSV code - H:" + HSV[0] + " S:" + HSV[1] + "% V:" + HSV[2] + "%";
      HSLToHexAnswer.innerHTML = "Your HSL code as a Hex value: " + hexValue;

      HSLSquare.style.backgroundColor = "#" + hexValue;

    }
    //non HSL values return this message
    else {
      HSLToRGBAnswer.innerHTML = "All inputs must be in the correct range - Hue(0-360), Saturation 0-1, Lightness 0-1";
      HSLToHSVAnswer.innerHTML = "All inputs must be in the correct range - Hue(0-360), Saturation 0-1, Lightness 0-1";
      HSLToHexAnswer.innerHTML = "All inputs must be in the correct range - Hue(0-360), Saturation 0-1, Lightness 0-1";
    }

  }

}
//HSL INPUT END

//HSV INPUT START
function HSVController(event) {

  //prevents the page from refreshing when clicking the submit button
  event.preventDefault();

  //grabs the user input value
  let hValue = HSVHInput.value;
  let sValue = HSVSInput.value;
  let vValue = HSVVInput.value;
  let HSV = [hValue, sValue, vValue];

  //Initializing Answer Elements
  let HSL = ["", "", ""];
  let RGB = ["", "", ""];
  let hexValue = "";

  //Won't execute without user input
  if (hValue && sValue && vValue) {

    //Converts Percentage saturation and value to 0-1 decimal
    HSV = decimalize(HSV);

    //check HSV values to ensure they match the proper ranges of values
    if ((HSV[0] >= 0 && HSV[0] <= 360) && (HSV[1] >= 0 && HSV[1] <= 1) && (HSV[2] >= 0 && HSV[2] <= 1)) {

      //Run all conversions
      HSL = HSVToHSLConversion(HSV);
      RGB = HSLToRGBConversion(HSL);
      hexValue = RGBToHexConversion(RGB);

      //Rounding HSL percentage values for presentation
      HSL = rounding(HSL);

      //Updating Answer Elements
      HSVToRGBAnswer.innerHTML = "Your HSV code as a RGB code - R:" + RGB[0] + " G:" + RGB[1] + " B:" + RGB[2];
      HSVToHexAnswer.innerHTML = "Your HSV code as a Hex value: " + hexValue;
      HSVToHSLAnswer.innerHTML = "Your HSV code as a HSL code - H:" + HSL[0] + " S:" + HSL[1] + "% L:" + HSL[2] + "% :";

      HSVSquare.style.backgroundColor = "#" + hexValue;

    }
    else {
      HSVToRGBAnswer.innerHTML = "All inputs must be in the correct range - Hue(0-360), Saturation 0-1, Value 0-1";
      HSVToHSLAnswer.innerHTML = "All inputs must be in the correct range - Hue(0-360), Saturation 0-1, Value 0-1";
      HSVToHexAnswer.innerHTML = "All inputs must be in the correct range - Hue(0-360), Saturation 0-1, Value 0-1";
    }

  }

}
//HSV INPUT END

//binaryButton.addEventListener("click", binaryInputController);
//decimalButton.addEventListener("click", decimalInputController);
//hexadecimalButton.addEventListener("click", hexadecimalInputController);
//hexButton.addEventListener("click", hexController);
//RGBButton.addEventListener("click", RGBController);
//HSLButton.addEventListener("click", HSLController);
//HSVButton.addEventListener("click", HSVController);

export default Converters;