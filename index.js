document.getElementById('btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const emailValue = userEmail.value;
    
    const userPassword = document.getElementById('user-password');
    const passwordValue = userPassword.value;
    

    if(emailValue === 'bapsontan@gmail.com' && passwordValue === "bapsontan"){
        window.location.href = 'bank.html'
    }else{
        alert('toi password vhule gesos, tore ami tejjho sontan kore dilam.')
    }
})