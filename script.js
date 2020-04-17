var characterAmountNumber = document.getElementById
("characterAmountNumber")

var form = document.getElementById("passwordGenerator")
characterAmountNumber.addEventListener("input", synchCharacterAmount)

form.addEventListener("submit", f => {
    f.preventDefault()
    var characterAmountNumber = characterAmountNumber.value
    var password = generatePassword(characterAmountNumber, IncludeNumbers, IncludeUppercase, IncludeSymbols)
})


function synchCharacterAmount(){
    var value = target.value 
    characterAmountNumber.value = value 
}