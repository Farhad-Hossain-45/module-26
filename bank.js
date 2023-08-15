document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositeInput = document.getElementById('deposit-input');
    const depositValueSring = depositeInput.value;
    const depositValue = parseFloat(depositValueSring);

    const depositAmount = document.getElementById('total-deposit');
    const previosDepousitString = depositAmount.innerText;
    const previousDeposit = parseFloat(previosDepousitString);

    const currentAmount = previousDeposit + depositValue;
    depositAmount.innerText = currentAmount;

    const totalBanalce = document.getElementById('total-balanec');
    const totalBanalceString = totalBanalce.innerText;
    const previousBanalceTotal = parseFloat(totalBanalceString);
    const currentBanalceTotal = previousBanalceTotal + depositValue;

    totalBanalce.innerText = currentBanalceTotal;


    

    depositeInput.value = '';
    
});