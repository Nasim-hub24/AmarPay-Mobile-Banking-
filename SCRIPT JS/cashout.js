//console.log('connection successful')
/*  
// CODE WITH ONE COMMON MACHINE
document.getElementById('cashOut-btn').addEventListener('click',function(){

    //1-- GET THE AGENT NUMBER AND VALIDATE
    const cahoutNumber = getValueFromInput('phoneNumber');
    //2-- GET THE AMOUNT
    const cashOutAmount = getValueFromInput('amount');

    //3-- get THE CURRENT BALANCE
    const currentBalance = getBalance();

    //4-- CALCULATE BALANCE
    const newBalance = currentBalance - Number(amount);
    console.log(newBalance);
    if(newBalance < 0)
    {
        alert("invalid balance");
    }

    const pin = cashOutPinInput.value;

    if(pin === '1234')
    {
        alert('correct pin');
        console.log('new balance', newBalance);
        document.getElementById('balance') = newBalance;
    }
    else
    {
        alert('invalid pin');
        return;
    }


    //5-- Verify Pin
    const cashOutPinInput = document.getElementById('cashOut-pin');
    const pin = cashOutPinInput.value;

    if(pin === '1234')
    {
        alert('correct pin');
        console.log('new balance', newBalance);
        document.getElementById('cashOut-pin') = newBalance;
    }
    else
    {
        alert('invalid pin');
        return;
    }
})
*/

 
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
