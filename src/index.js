import validator from 'validator';

document.querySelector('#email').addEventListener('change', (e)=>{
    const emailID = e.target.value;
    // console.log(emailID);
    const status = document.createElement('h3');
    if(validator.isEmail(emailID)){
        status.textContent = 'Email ID is Valid';
    }else{
        status.textContent = 'Email ID is not Valid';
    }
    
    document.querySelector('body').appendChild(status);
});

