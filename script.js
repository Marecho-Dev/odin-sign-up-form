let stringPass = "";
let stringPass2 = "";
let passwordMatch = 0;
// function stringBuilder(string,char){
//     if (char.length == 1){
//         return string+char;
//     }else{
//         return stringPass;
//     }
   
// }
function passMatch(){
    if(pass.value == pass2.value){
        passwordMatch = 1;
    }
    else{
        passwordMatch = 0;
    }

    if(passwordMatch == 0){
        pass.classList.add('error');
        pass2.classList.add('error');
    }
    else{
        pass.classList.remove('error');
        pass2.classList.remove('error');
    }
}
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#confirm_password');

    pass.addEventListener('keyup',(e)=>{

        console.log(pass.value);
        // stringPass = stringBuilder(stringPass,e.key);
        passMatch()
    });

    pass2.addEventListener('keyup',(e)=>{
        console.log(e);
        passMatch();
    });
