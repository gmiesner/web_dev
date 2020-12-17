// responsive header 
function waffleNav(){
  var navBar = document.getElementById("navbar");
  if (navBar.className === "navbar") { 
     navBar.className += " responsive";
  } else { 
     navBar.className = "navbar";
  }
}

// hardcoded form
var nameBox = $(".name");
var emailBox = $(".email");
var messageBox = $(".message");
var submitButton = $(".submit");

var names = []
var emails = []
var messages = []

submitButton.on("click", submitMessage);

function submitMessage() {
  var name = nameBox.val();
  var email = emailBox.val();
  var message = messageBox.val();

  names.push(name);
  emails.push(email);
  messages.push(message);
};