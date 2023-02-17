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
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById("final-total", finalAmount);

}
