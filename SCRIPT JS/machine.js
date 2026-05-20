
// MACHINE ID -> INPUT VALUE
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id , value);
    return value;
}

// BUILD A COMMON FUNCTION WHICH ONLY RETURN BALANCE
function getBalance()
{
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}