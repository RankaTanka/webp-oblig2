// JS for all functions used in index.html

// Function that retrieves information, then writes it into the Registered purchases table
function inputValidation() {

    // JQuery document objects
    const ticketInput = $("#tickets");
    const firstNameInput = $("#first-name");
    const lastNameInput = $("#last-name");
    const phoneNumberInput = $("#phone-number");
    const mailInput = $("#mail");

    // A bunch of boolean validation checks, if one is true it is invalid and if one is false it is valid
    let ticketValidation = document.getElementById("tickets").validity.rangeUnderflow;
    let firstNameValidation = document.getElementById("first-name").validity.patternMismatch;
    let lastNameValidation = document.getElementById("last-name").validity.patternMismatch;
    let phoneNumberValidation = document.getElementById("phone-number").validity.patternMismatch;
    // I wanted to just use typeMismatch to validate the Mail input, but it accepted values like "bob@gmail"
    let mailValidation = document.getElementById("mail").validity.patternMismatch;


    // Checking if the Tickets input value is valid,
    // if not ticketValidation is set to true and a message is shown
    if (ticketInput.val() === "" || Math.round(Number(ticketInput.val())) !== Number(ticketInput.val()) ||
        ticketValidation === true) {

        ticketValidation = true;

        ticketInput.val(1);
        $("#invalid-ticket").show();
    }
    // Every time the input is valid the message gets removed
    else {
        $("#invalid-ticket").hide();
    }

    // Checking if the First name input value is valid,
    // if not firstNameValidation is forcefully set to true and a message is shown
    if (firstNameInput.val() === "" || firstNameValidation === true) {

        firstNameValidation = true;

        firstNameInput.val(null);
        $("#invalid-first-name").show();

    }
    else {
        $("#invalid-first-name").hide();
    }

    // Checking if the Last name input value is valid,
    // if not lastNameValidation is forcefully set to true and a message is shown
    if (lastNameInput.val() === "" || lastNameValidation === true) {

        lastNameValidation = true;

        lastNameInput.val(null);
        $("#invalid-last-name").show();

    }
    else {
        $("#invalid-last-name").hide();
    }

    // Checking if the Phone number input value is valid,
    // if not phoneNumberValidation is forcefully set to true and a message is shown
    if (phoneNumberInput.val() === "" || phoneNumberValidation === true) {

        phoneNumberValidation = true;

        phoneNumberInput.val(null);
        $("#invalid-phone-number").show();

    }
    else {
        $("#invalid-phone-number").hide();
    }

    // Checking if the Mail input value is valid,
    // if not mailValidation is forcefully set to true and a message is shown
    if (mailInput.val() === "" || mailValidation === true) {

        mailValidation = true;

        mailInput.val(null);
        $("#invalid-mail").show();
    }
    else {
        $("#invalid-mail").hide();
    }


    // if all the validations are false the saveInfo-function is activated
    if (!ticketValidation && !firstNameValidation && !lastNameValidation && !phoneNumberValidation && !mailValidation) {

        saveInfo(ticketInput, firstNameInput, lastNameInput, phoneNumberInput, mailInput);

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


// A function that saves purchase info on the client
function saveInfo(ticketInput, firstNameInput, lastNameInput, phoneNumberInput, mailInput) {

    const purchase = {
        ticketAmount : ticketInput.val(),
        firstName : firstNameInput.val(),
        lastName : lastNameInput.val(),
        phoneNumber : phoneNumberInput.val(),
        mail : mailInput.val()
    };





    ticketInput.val(1);
    firstNameInput.val(null);
    lastNameInput.val(null);
    phoneNumberInput.val(null);
    mailInput.val(null);

}


// Function that restarts the Registered purchases table
function removePurchases() {
    document.getElementById("registered-purchases").innerHTML = "";
}