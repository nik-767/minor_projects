let pass = document.getElementById('password');
let out = document.getElementById('output');

console.log( pass, out);

pass.addEventListener('input' , function(){
    console.log(pass.value);
    let password = pass.value;
    if(password.length < 10){
     out.innerText = 'password is to short';
     out.style.color = 'red';
    }else{
    
    if(password.search(/[a-z]/)== -1){
         out.innerText = 'password is missing a lower letter';
     out.style.color = 'red';
    }else if(password.search(/[A-Z]/)== -1){
         out.innerText = 'password is missing a upper letter';
     out.style.color = 'red';
    }else if(password.search(/[1-9]/)== -1){
        out.innerText = 'password is missing a number';
        out.style.color = 'red';
    }else if(password.search(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\:\>\.\<\,\`\~]/)== -1){
        out.innerText = 'password is missing a SPECIAL character';
        out.style.color = 'red';
    }else{
     out.innerText = 'password is strong';
     out.style.color = 'green';
}
    }
});
