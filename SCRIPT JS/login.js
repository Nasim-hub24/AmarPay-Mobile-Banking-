
//console.log('connection');

document.getElementById('login-btn').addEventListener('click', function(){

    // STEP 1-- INPUT MOBILE NUMBER
    const numberInput = document.getElementById('input-number');
    const newNumber = numberInput.value;
    console.log(newNumber);

    // STEP 2 -- GET THE PIN
    const pinInput = document.getElementById('input-pin');
    const newPin = pinInput.value;
    console.log(newPin);

    // STEP 3 -- MATCH PIN AND MOBILE NUMBER
    if(newNumber == '01818808523' && newPin == '1234')
    {
        // ALERT SUCCESSFUL
        alert('log in successful');


        window.location.assign('../homePage.html');
    }
    else
    {
        // IF LOG IN FAILED
        alert('log in failed');
        return;
    }
})