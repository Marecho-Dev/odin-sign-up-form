
const errorDiv = document.createElement('div');
errorDiv.classList.add('error-text');
errorDiv.innerText = '*Passwords do not match';
const passwordRow = document.querySelector('.password');
function passMatch(){
    if(pass.value == pass2.value){
        pass.classList.remove('error');
        pass2.classList.remove('error');
    }
    else{
        pass.classList.add('error');
        pass2.classList.add('error');
        passwordRow.appendChild(errorDiv);
    }
}
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#confirm_password');

    pass.addEventListener('keyup',(e)=>{
        passMatch()
    });

    pass2.addEventListener('keyup',(e)=>{
        passMatch();
    });
