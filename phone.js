function btnPhonePlus(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);
    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
}

function btnPhoneMinus(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);
    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;
}