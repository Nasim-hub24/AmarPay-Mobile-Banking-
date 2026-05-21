
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

// MACHINE ID > HIDE ALL > SHOW ID
function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");

    // SOKOL KA HIDE KORA DAW
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    // ID WALA ELEMENT TAKAY SHOW KORO
    const selected = document.getElementById('id');
    selected.classList.remove('hidden');
}