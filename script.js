let passwordMatch = 0; //


const div = document.createElement('div');
div.classList.add('error-text');
div.innerText = '*Passwords do not match';

function passMatch(){
    if(pass.value == pass2.value){
        pass.classList.remove('error');
        pass2.classList.remove('error');
    }
    else{
        pass.classList.add('error');
        pass2.classList.add('error');
    }

    // if(passwordMatch == 0){
    //     pass.classList.add('error');
    //     pass2.classList.add('error');
    // }
    // else{
    //     pass.classList.remove('error');
    //     pass2.classList.remove('error');
    // }
}
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#confirm_password');

    pass.addEventListener('keyup',(e)=>{
        passMatch()
    });

    pass2.addEventListener('keyup',(e)=>{
        passMatch();
    });
