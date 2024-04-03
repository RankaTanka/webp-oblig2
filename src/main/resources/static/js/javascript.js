// JS for all functions used in index.html

// Function that retrieves information, then writes it into the Registered purchases table
function registerPurchase() {
    // A bunch of boolean validation checks, if one is true it is invalid and if one is false it is valid
    let ticketValidation = document.getElementById("tickets").validity.rangeUnderflow;
    let firstNameValidation = document.getElementById("first-name").validity.patternMismatch;
    let lastNameValidation = document.getElementById("last-name").validity.patternMismatch;
    let phoneNumberValidation = document.getElementById("phone-number").validity.patternMismatch;
    // I wanted to just use typeMismatch to validate the Mail input, but it accepted values like "bob@gmail"
    let mailValidation = document.getElementById("mail").validity.patternMismatch;


    // Checking if the Tickets input value is valid,
    // if not ticketValidation is set to true and a message is shown
    if (document.getElementById("tickets").value === "" ||
        Math.round(Number(document.getElementById("tickets").value)) !==
        Number(document.getElementById("tickets").value) ||
        ticketValidation === true) {

        ticketValidation = true;

        document.getElementById("tickets").value = "1";
        document.getElementById("invalid-ticket").innerHTML = "Please enter a valid number";
    }
    // Every time the input is valid the message gets removed
    else {
        document.getElementById("invalid-ticket").innerHTML = "";
    }

    // Checking if the First name input value is valid,
    // if not firstNameValidation is forcefully set to true and a message is shown
    if (document.getElementById("first-name").value === "" ||
        firstNameValidation === true) {

        firstNameValidation = true;

        document.getElementById("first-name").value = "";
        document.getElementById("invalid-first-name").innerHTML = "Please enter a valid first name";
    }
    else {
        document.getElementById("invalid-first-name").innerHTML = "";
    }

    // Checking if the Last name input value is valid,
    // if not lastNameValidation is forcefully set to true and a message is shown
    if (document.getElementById("last-name").value === "" ||
        lastNameValidation === true) {

        lastNameValidation = true;

        document.getElementById("last-name").value = "";
        document.getElementById("invalid-last-name").innerHTML = "Please enter a valid last name";
    }
    else {
        document.getElementById("invalid-last-name").innerHTML = "";
    }

    // Checking if the Phone number input value is valid,
    // if not phoneNumberValidation is forcefully set to true and a message is shown
    if (document.getElementById("phone-number").value === "" ||
        phoneNumberValidation === true) {

        phoneNumberValidation = true;

        document.getElementById("phone-number").value = "";
        document.getElementById("invalid-phone-number").innerHTML = "Please enter a valid phone number";
    }
    else {
        document.getElementById("invalid-phone-number").innerHTML = "";
    }

    // Checking if the Mail input value is valid,
    // if not mailValidation is forcefully set to true and a message is shown
    if (document.getElementById("mail").value === "" ||
        mailValidation === true) {

        mailValidation = true;

        document.getElementById("mail").value = "";
        document.getElementById("invalid-mail").innerHTML = "Please enter a valid email";
    }
    else {
        document.getElementById("invalid-mail").innerHTML = "";
    }


    // if all the validations are false the Purchase registration goes through
    if (!ticketValidation && !firstNameValidation && !lastNameValidation && !phoneNumberValidation && !mailValidation) {
        // This is an array containing all the selector and input elements, the elements in the array index.html is
        // set up in a way so that they are put in the same order the table headers are (Movie, Tickets, etc.)
        const purchaseInformation = document.getElementsByName("input");

        // Code generating the next row in the Registered purchases table
        // All values from the array are added to purchaseRow
        let purchaseRow = "<tr>";
        for (let input of purchaseInformation) {
            purchaseRow += "<td>" + input.value + "</td>";
        }
        purchaseRow += "</tr>";

        // Adds purchaseRow to the Registered purchases inner HTML
        document.getElementById("registered-purchases").innerHTML += purchaseRow;
    }
}


// Function that restarts the Registered purchases table
function removePurchases() {
    document.getElementById("registered-purchases").innerHTML = "";
}