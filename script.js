let stringPass = "";
let stringPass2 = "";

function stringBuilder(string,char){
    if (char.length == 1){
        return string+char;
    }else{
        return stringPass;
    }
   
}

const pass = document.querySelector('#password');
const pass2 = document.querySelector('#confirm_password');

    pass.addEventListener('keyup',(e)=>{
        // console.log(e);
        // console.log(e.key);
        console.log(pass.value);
        stringPass = stringBuilder(stringPass,e.key);
        console.log("stringPass is "+ stringPass);
    });

    pass2.addEventListener('keyup',(e)=>{
        console.log(e);
    });
