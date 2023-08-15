document.getElementById('btn-witdraw').addEventListener('click', function(){
    const withdrawFiled = document.getElementById('withdraw-filed');
    const withdrawFiledValue = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(withdrawFiledValue);
    // console.log(newWithdrawAmount)
    
    const withdrawTotal = document.getElementById('withdrow-total');
    const previosWithdrawString = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previosWithdrawString);

    const currentWithdrawTotal = newWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;

    const totalBanalce = document.getElementById('total-balanec');
    const previousBanalceSring = totalBanalce.innerText;
    const currentBanalceTotal = parseFloat(previousBanalceSring);
    
    const newBanalceTotal = currentBanalceTotal - newWithdrawAmount;
    totalBanalce.innerText = newBanalceTotal;

    withdrawFiled.value = '';
})