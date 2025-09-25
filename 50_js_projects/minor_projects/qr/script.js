let inp = document.getElementById('qr-input');
let btn = document.getElementById('qr-btn');
let img = document.getElementById('qr-img');

console.log(inp, btn , img);

btn.addEventListener('click',()=>{
    const inputvalue = inp.value;
    console.log(inputvalue)

    if(!inputvalue){
        alert('please enter valid url');
        return;
    }else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        img.alt=`QR code for ${inputvalue}`;
    }
})
