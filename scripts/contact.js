// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let SubmitButton = document.getElementById("submit-button");
let Contact= document.getElementById("contact-page");

    SubmitButton.addEventListener("click", function (event) {
        event.preventDefault();

        let message = document.createElement("p");
        message.textContent = "Thank you for your message !";
        message.style.textAlign = "center"
        message.style.marginTop = "20px"
        message.style.fontSize = "24px";

        Contact.innerHTML = ""; // Clear the contact page content
        Contact.appendChild(message); // Append the thank you message
});
