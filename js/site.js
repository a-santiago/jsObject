let contacts = []

//Add Contact to Form
function addContact() {

    // Retrieve Items or Values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;

    //Create an Object with the values from the form
    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    // Set Items
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;

    //Push Values to Array
    contacts.push(contact);

    //call display contacts
    displayContacts(contacts);

    //clear the form
    document.getElementById("contactForm").reset();
}


function displayContacts(contacts) {
    document.getElementById("results").innerHTML = "";
    for (let i = 0; i < contacts.length; i++) {

        let TemplateRow = `<tr><td>${contacts[i].firstName}</td><td>${contacts[i].lastName}</td><td>${contacts[i].email}</td></tr>`
        document.getElementById("results").innerHTML += TemplateRow;
    }

}