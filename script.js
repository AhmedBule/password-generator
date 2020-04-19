var characterAmountNumber = document.getElementById("characterAmountNumber")
var includeUppercase = document.getElementById("includeUppercase")
var includeNumbers = document.getElementById("includeNumbers")
var includelowercase = document.getElementById("includelowercase")
var includeSymbols = document.getElementById("includeSymbols")
var includebuttons = document.getElementById("includebuttons")
var passworddisplay = document.querySelector(".password-display")
var validUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var validLower = "abcdefghijklmnopqrstuvwxyz"
var validNumber = "0123456789"
var validSymbols = "!@#$%^&*"
var acceptcharacter = []

console.log("JS file loaded")
// start with addEventListener, so that you can hear the click and then have a function. 
includebuttons.addEventListener("click", function (f) {
    f.preventDefault()
 // By having the preventDefault, we can prevent the browser default behavior.    
    passworddisplay.innerHTML = ""
    acceptcharacter = []
    generatePassword = ""
    if (parseInt(characterAmountNumber.value) > 8 && parseInt(characterAmountNumber.value) < 128) {
        if (includeUppercase.checked) {
            acceptcharacter += validUpper
        }
        if (includelowercase.checked) {
            acceptcharacter += validLower
        }
        if (includeSymbols.checked) {
            acceptcharacter += validSymbols
        }
        if (includeNumbers.checked) {
            acceptcharacter += validNumber
        }
        console.log(acceptcharacter)
        
        if (acceptcharacter.length > 0) {
            var generatePassword = ""
            for (var i = 0; i < parseInt(characterAmountNumber.value); i++) { // I use the for loop because it looks through a block of code a number of times and it is the simplest one. 
                var index = Math.floor(Math.random() * acceptcharacter.length)
                generatePassword += acceptcharacter[index]
            // The math.random returns a random interger and Math.floor rounds a number, variable, or result down.    
            }
            // By having a console.log, it helps to view if you generated a password or not. 
            console.log(generatePassword)
            passworddisplay.innerHTML = generatePassword
        }
        else {      // Here, we are alerting the user to choose some of the option. Unfortunately, we will not be able to generate a password without choosing at least one option. 
            alert("Please choose any of the options")
        }
    }else {
        alert ("invalid character length")
    }

    })




