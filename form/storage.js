
//store data in local storage
//Get All Value
let sendBtn = document.getElementById('submit');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let fname = document.getElementById('fname');
    let uname = document.getElementById('uname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let confirmpass = document.getElementById('confirmpass');
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let other = document.getElementById('other');

    //Set Value
    fname.value = '';
    uname.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    confirmpass.value = '';
    male.value = '';
    female.value = '';
    other.value = '';

});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let fname = document.getElementById('fname');
    let uname = document.getElementById('uname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let confirmpass = document.getElementById('confirmpass');
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let other = document.getElementById('other');

    //Set Value And LocalStorage
    
    fname = fname.value;
    localStorage.setItem('fname', fname);

    uname = uname.value;
    localStorage.setItem('uname', uname);

    email = email.value;
    localStorage.setItem('email', email);

    phone = phone.value;
    localStorage.setItem('phone', phone);

    password = password.value;
    localStorage.setItem('password', password);

    confirmpass = confirmpass.value;
    localStorage.setItem('confirmpass', confirmpass);

    male = male.value;
    localStorage.setItem('male', male);

    female = female.value;
    localStorage.setItem('female', female);

    other = other.value;
    localStorage.setItem('other', other);

});
