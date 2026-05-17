//console.log('connection successful')

document.getElementById('cashOut-btn').addEventListener('click', function(){

    //1-- get the agent number
    const cashOutNumberInput = document.getElementById('cashOut-number');
    const phoneNumber = cashOutNumberInput.value;
    console.log(phoneNumber);
    if(phoneNumber.length != 11){
        alert('wrong phone number');
        return;
    }

    //2-- get the current amount
    const cashOutAmount = document.getElementById('cashout-amount');
    const amount = cashOutAmount.value;
    console.log(amount);

    //3-- get the current balance
    const balanceElement = document.getElementById('balance');
    const currentBalance = balanceElement.innerText;
    console.log(currentBalance);

    //4-- calculate new balance
    const newBalance = Number(currentBalance)- Number(amount);
    if(newBalance < 0)
    {
        alert('invelid amount');
        return;
    }
    

    //5-- Verify Pin
    const cashOutPinInput = document.getElementById('cashOut-pin');
    const pin = cashOutPinInput.value;

    if(pin === '1234')
    {
        alert('correct pin');
        console.log('new balance', newBalance);
        balanceElement.innerText = newBalance;
    }
    else
    {
        alert('invalid pin');
        return;
    }
})