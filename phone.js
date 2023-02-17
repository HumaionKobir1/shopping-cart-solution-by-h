
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
    
}

function updatePhoneTotalPrice(newPhoneNumber){
    const PhoneTotalPrice = newPhoneNumber * 1219;
    const PhoneTotalElement = document.getElementById('phone-total');
    PhoneTotalElement.innerText = PhoneTotalPrice;
}



function btnPhonePlus(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    // calculate total
    calculteSubTotal();
}

function btnPhoneMinus(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculteSubTotal();
}