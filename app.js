document.getElementById('phone-minus').addEventListener('click', function(){
  math(1219, 'phone-price', 'phone',false);

})
document.getElementById('phone-plus').addEventListener('click', function(){
    math(1219, 'phone-price', 'phone',true);

})
document.getElementById('cover-minus').addEventListener('click', function(){
    math(59, 'cover-price', 'cover',false);
})
document.getElementById('cover-plus').addEventListener('click', function(){
    math(59, 'cover-price', 'cover',true);
})



function calculateTotal(){

}


function math(specficProductPrice, allPrice, productName, boolean){
    const inputPhone = document.getElementById('input-' + productName);
     inputPhoneNumber = Number(inputPhone.value);
    if(boolean){
        inputPhone.value = inputPhoneNumber + 1;
    }
    else if(0 < inputPhone.value){
        inputPhone.value = inputPhoneNumber - 1;
    }
    const totalPrice = document.getElementById('input-' + allPrice);
    const total = parseFloat(document.getElementById('input-' + productName).value) * specficProductPrice;
    totalPrice.innerText = total;

    const subTotal = document.getElementById('subtotal');
    const inputPhones = document.getElementById('input-phone').value;
    const inputCovers = document.getElementById('input-cover').value;
    subTotal.innerText = (inputPhones * 1219) + (inputCovers * 59);

    const tax = document.getElementById('tax');
    tax.innerText = parseFloat(subTotal.innerText) / 10;
   
    const allTotal  = document.getElementById('alltotal');
    allTotal.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
 }

