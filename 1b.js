const string = "koda";
let reverseString = "";

for (let i = 0; i < string.length; i++) {
  reverseString += string[string.length - 1 - i];
}

if (string !== reverseString) {
  console.log("String is not palindrome");
} else {
  console.log("String is palindrome");
}
