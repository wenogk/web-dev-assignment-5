var contactFormErrorMsg = ""

function contactFormButtonClicked() {
    if(validateContactForm()){
        return true
    } else {
        alert(contactFormErrorMsg)
        return false
    }
}

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
    } else if (/\S+@\S+\.\S+/.test(email) == false) { // got regex test for email validation from https://stackoverflow.com/a/9204568
        result = false;
        contactFormErrorMsg += "Email is not valid. "
    }

    if((msg == null) || (msg == "")) {
        result = false;
        contactFormErrorMsg += "Msg is empty. "
    }
    contactFormErrorMsg = "Errors in contact form. " + contactFormErrorMsg
    return result
}