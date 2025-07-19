


// show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName= prompt("Please enter your name:");
    if (userName != "") {
        document.getElementById("Welcome-user").innerText = userName;
    }
}

function validateForm() {
   const name = document.getElementById("name");


   if (name.value === "") {
       alert("Name is required");
       return;
   }

   const email = document.getElementById("email");


    if (email.value === "") {
         alert("Email is required");
         return;
    }

   const message = document.getElementById("message");


    if (message.value === "") {
         alert("Message is required");
         return;
    } 
    
    else {
        document.getElementById("message-response").innerText = "Thank you for your message, " + name.value + "! We will get back to you soon.";
    }
}
