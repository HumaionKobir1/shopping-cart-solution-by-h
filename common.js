function getTextEelemntvalueById(elementId){
    const phoneTotalElement = document.getElementById(elementId).innerText;
    const currentPhoneTotal = parseInt(phoneTotalElement);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculteSubTotal(){
    const currentPhoneTotal = getTextEelemntvalueById('phone-total');
    const currentCaseTotal = getTextEelemntvalueById('case-total');

    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmount = currentSubTotal * 0.1;
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById("final-total", finalAmount);

}
// Set phone plus and inus btn working