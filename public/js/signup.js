
const form = document.getElementById('form-input')
const emailError = document.querySelector('#email-el');
const passwordError = document.querySelector('#password-el');
const ConfirmPasswordError = document.querySelector('#Confirmpassword-el');

//adding an event listener

form.addEventListener('submit', async (e) =>{
    e.preventDefault()

    //grabbing the values of the input
    const fullName = form.fullName.value
    const email     = form.email.value
    const password  = form.password.value

    emailError.textContent = ""
    passwordError.textContent = ""

    console.log(fullName, email, password)



try {
    const response = await fetch("/signUp", {
      method: "POST",
      body: JSON.stringify({fullName, email, password }),
      headers: { "Content-Type": "application/json"}
    });

    const data = await response.json();

    const passwordd = document.getElementById('password').value
    const confirm = document.getElementById('confirmPass').value
    console.log(passwordd, confirm)
    if(passwordd != confirm){
      console.log('password do not match')
      ConfirmPasswordError.textContent = "password do not match"
      
    }else{
      data.User
      console.log("Password matched")

      if(data.User){
        location.assign('/')
      }
     
    }
    
    
    console.log(data);

    // if (data.User) {
    //   location.assign("/");
    // }

    if(data.errors) {
      emailError.textContent = data.errors.email;
      passwordError.textContent = data.errors.password;
  }
    
    
  } catch (error) {
    console.log(error)
  }
})





