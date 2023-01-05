function checkForm() {
    // Get the form fields
    const vornameField = document.getElementById("vorname");
    const nachnameField = document.getElementById("nachname");
    const mailField = document.getElementById("mail");
    const amountField = document.getElementById("amount");
    const linkField = document.getElementById("link_to_file");
    const colorField = document.getElementById("termin");
    const terminField = document.getElementById("termin");
  
    // Get the form field values
    const vorname = vornameField.value;
    const nachname = nachnameField.value;
    const mail = mailField.value;
    const amount = amountField.value;
    const link = linkField.value;
    const color = colorField.value;
    const termin = terminField.value;
  
    // Regular expression to check for plain text (alphabetic characters only)
    const plainTextRegex = /^[a-zA-Z]+$/;
  
    // Regular expression to check for blocked domain endings
    const blockedEndingsRegex = /(magspam\.net|10minmail\.de|10minutenmail\.xyz|existiert\.net|fliegender\.fish|jaga\.email|mdz\.email|muellmail\.com|muellemail\.com|muell\.monster|muell\.icu|nezid\.com|dewareff\.com|tmmwj\.net|moontrack\.net)$/;

    // Regular expression to check for blocked website endings
    const blockedEndingsUrl = /(porhub\.com|xnxx\.com)$/;

    // Regular expression to check for positive number (zero not included)
    const numberRegex = /^[1-9]+$/;

  
    // Check if vorname field is empty
    if (vorname === "") {
        console.log("Vorname field is empty");
        vornameField.style.borderColor = "red";
    } else {
        vornameField.style.borderColor = "";
    }
  
    // Check if nachname field is empty
    if (nachname === "") {
        console.log("Nachname field is empty");
        nachnameField.style.borderColor = "red";
    } else {
        nachnameField.style.borderColor = "";
    }
  
    // Check if mail field is empty
    if (mail === "") {
        console.log("Mail field is empty");
        mailField.style.borderColor = "red";
    } else {
        mailField.style.borderColor = "";
    }

    // Check if number field is empty or not a positive number (zero not included)
    if (!numberRegex.test(amount)) {
        console.log("Number field is not correctly filled in");
        amountField.style.borderColor = "red";
    } else {
        amountField.style.borderColor = "";
    }

    // Checking if color field is empty
    if (color.value === 'nochoice') {
        console.log("Color field is choice is not valid");
        colorField.style.borderColor = "red !important";
    } else {
        colorField.style.borderColor = "";
    }

    // Check if date field is empty and if not check if date is at least two weekdates in the futur
    if (termin === "") {
        // The input field is empty
        console.log("Termin field is empty");
        terminField.style.borderColor = "red";
    } else {
        const terminDate = new Date(termin);
        const terminTimestamp = terminDate.getTime();
    
        const twoWeekdays = 2 * 24 * 60 * 60 * 1000;
        const futureTimestamp = Date.now() + twoWeekdays;
    
        if (terminTimestamp >= futureTimestamp) {
            // The selected date is at least two weekdays in the future
            console.log("The selected date is at least two weekdays in the future");
            terminField.style.borderColor = "";
        } else {
            // The selected date is not at least two weekdays in the future
            console.log("The selected date is not at least two weekdays in the future");
            terminField.style.borderColor = "red";
        }
    }


    // Check if vorname field contains only plain text
    if (!plainTextRegex.test(vorname)) {
        console.log("Vorname field is not correctly filled in");
        vornameField.style.borderColor = "red";
    } else {
        vornameField.style.borderColor = "";
    }

    // Check if nachname field contains only plain text
    if (!plainTextRegex.test(nachname)) {
        console.log("Nachname field is not correctly filled in");
        nachnameField.style.borderColor = "red";
    } else {
        nachnameField.style.borderColor = "";
    }

    // Check if mail field ends with a blocked domain ending
    if (blockedEndingsRegex.test(mail)) {
        console.log("Entered email is blocked");
        mailField.style.borderColor = "red";
    } else {
        mailField.style.borderColor = "";
    }

    // Check if link field ends with a blocked website ending
    if (blockedEndingsUrl.test(link)) {
        console.log("Entered link is blocked");
        linkField.style.borderColor = "red";
    } else {
        linkField.style.borderColor = "";
    }
}
