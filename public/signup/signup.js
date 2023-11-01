function emailvalid(){
    let email=document.getElementById('email').value;
    let che=/^([a-z0-9/.]+)@([a-z0-9]{2,16})\.([a-z]{2,6})$/i
    console.log(che.test(email));
    if(che.test(email)){
        return true;
    }else{
        document.getElementById('emailvalid').innerHTML="*not valid*"
        document.getElementById('emailvalid').style.color="red";
        document.getElementById('email').style.outline="1px solid red";
        return true;
    }
}
function namevalid(){
    let name=document.getElementById('name').value;
    let che=/^[a-z .]+$/i
    console.log(che.test(name));
    if(che.test(name)){
        document.getElementById('name').style.textTransform="uppercase"
        return true;
    }else{
        document.getElementById('namevalid').innerHTML="*not valid*"
        document.getElementById('namevalid').style.color="red";
        document.getElementById('name').style.outline="1px solid red";
        return false;
    }
}
function passwordvalid(){
    document.getElementById('passvalid').innerHTML="";
    let pass=document.getElementById('password').value;
    let che=/^([a-z0-9]){8}$/i;
    if(che.test(pass)){
        console.log("pass true");
        document.getElementById('passvalid').innerText="";
        console.log(pass);
        return true
    }else{
        document.getElementById('passvalid').innerText="*maximum length 8*";
        document.getElementById('passvalid').style.color="red";
        return false;
    }
}

document.getElementById("password").addEventListener("focus",inform)
function inform(){
    document.getElementById('passvalid').innerHTML="alphanumeric characters";
    document.getElementById('passvalid').style.color="white"
}
document.getElementById("password").addEventListener("focusout",passwordvalid)

function submit(){
    emailvalid()
    namevalid()
    passwordvalid()
    if(emailvalid() && namevalid() && passwordvalid()){
    let form={}
    form.name=document.getElementById('name').value;
    form.email=document.getElementById('email').value;
    form.password=document.getElementById('password').value;
    console.log(form);
    }else{
        console.log("fool");
    }
}