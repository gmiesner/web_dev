let firstName = prompt("Hello, What is your first name?")
let lastName = prompt("Hello, What is your last name?")
let age = prompt("How old are you?")
let height = prompt("How tall are you (in centimeters)?")
let petName = prompt("What is your pet's name?")

if (firstName[0] == lastName[0] && age > 20 && age < 30 && height > 169 && petName[petName.length -1] == "y"){
  console.log("Hello comrad, you passed the spy test")
} else {
  console.log(`What's up ${firstName}?`)
}
