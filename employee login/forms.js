const form=document.getElementById('LoginForm');

const nameError=document.getElementById('nameError');
const emailError=document.getElementById('emailError');
const passwordError=document.getElementById('passwordError');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value.trim();
    let error=false;

    nameError.textContent='';
    emailError.textContent='';
    passwordError.textContent='';

    const regex = /^[a-zA-Z]+ ?[a-zA-Z]*$/;
    const spaceCount=(name.match(/\s/g) || []).length;
        if( !regex.test(name) || spaceCount>1)
            {
           console.error('name must contain only alphabets and a single space');
           nameError.textContent="Name must contain only alphabets and a single space";
           error=true;
            }
        else if(name === '')
     {
        console.error('Name is required');
        nameError.textContent="Name is required";
        error=true;
     }
    else if(name.length<3)
    {
        console.error('Name must contain atleast 3 characters');
        nameError.textContent="Name must contain atleast 3 characters";
        error=true;
    }

    const emailregex=/^[a-zA-Z0-9+/]+@[a-zA-Z]+.[a-zA-Z]+$/;
        if( !emailregex.test(email))
            {
           console.error('invalid email');
           emailError.textContent="invalid email";
           error=true;
            }
     if(email === '')
        {
           console.error('Email is required');
           emailError.textContent="email is required";
           error=true;
        }
        

        if(password === '')
        {
            console.error('Password is required');
            passwordError.textContent="password is required.";
            error=true;
        }
        else if(password.length<8 || password.length>10)
        {
            console.error('Password must contain atleast 8 characters and atmost 10 characters');
            passwordError.textContent="password must contaion atleast 8 characters and atmost 10 characters"
            error=true;
        }

        if(!error)
        {
            console.log('form Submitted Successfully!');
            window.location.href='employee.html';
        }
});

