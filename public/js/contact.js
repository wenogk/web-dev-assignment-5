var contactFormErrorMsg = ""

function validateContactForm() {
    contactFormErrorMsg = ""
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const msg = document.getElementById('msg').value

    let result = true

    if((name == null) || (name == "")) {
        result = false;
        contactFormErrorMsg += "Name is empty. "
    }

    if((email == null) || (email == "")) {
        result = false;
        contactFormErrorMsg += "Email is empty. "
    }

    if((msg == null) || (msg == "")) {
        result = false;
        contactFormErrorMsg += "Msg is empty. "
    }
}