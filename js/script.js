let myform=document.getElementById('myform');
let fname=document.getElementById('first_name');
let lname=document.getElementById('last_name');
let email=document.getElementById('mail');
let password=document.getElementById('password');
let error1=document.getElementById('error1');
let error2=document.getElementById('error2');
let error3=document.getElementById('error3');
let error4=document.getElementById('error4');

myform.addEventListener('submit',(event)=>{
    event.preventDefault();
    let validfname=RegExp('^[A-Z]{1}[a-z]{2,15}$')
    let validlname=RegExp('^[A-Z]{1}[a-z]{2,15}$')
    let validpass=RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$^&*]).{8,15}$')
    let validmail=RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')


    if(fname.value==="")
    {
        error1.innerHTML="please fillup empty field"
    }
    else if(!validfname.test(fname.value))
    {
        error1.innerHTML="This is not a name"
    }
    else{
        error1.innerHTML=""
    }

    if(lname.value==="")
    {
        error2.innerHTML="please fillup empty field"
    }
    else if(!validlname.test(lname.value))
    {
        error2.innerHTML="This is not a lastname"
    }
    else{
        error2.innerHTML=""
    }

    if(email.value==="")
    {
        error3.innerHTML="please fillup empty field"
    }
    else if(!validmail.test(email.value))
    {
        error3.innerHTML="This is not a email id"
    }
    else{
        error3.innerHTML=""
    }

    
    if(password.value==="")
    {
        error4.innerHTML="please fillup empty field"
    }
    else if(!validpass.test(password.value))
    {
        error4.innerHTML="please give strong password"
    }
    else{
        error4.innerHTML=""
    }
})


