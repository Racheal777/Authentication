// const form = document.getElementById('form-input')
// const emailError = document.getElementById('email-el');
// const passwordError = document.getElementById('password-el');

// //adding an event listener

// form.addEventListener('submit', async (e) =>{
//     e.preventDefault()

//     //grabbing the values of the input
    
//     const email     = form.email.value
//     const password  = form.password.value

//     console.log( email, password)

//     try {
       
//         //fetching the saved data, body contains input of the user 
//         const response = await fetch('/login', {
//             method: "POST",
//             body: JSON.stringify({ email, password}),
//             headers: {"Content-Type": "application/json"}
//         })
        
//         const data = await response.json()
//         console.log(data)

        

//     } catch (error) {
//         console.log(error)
        
//     }
// })

const form = document.querySelector('form')
// const form = document.getElementById('form-field')
const emailError = document.querySelector('#email-el');
const passwordError = document.querySelector('#password-el');

//adding an event listener

form.addEventListener('submit', async (e) =>{
    e.preventDefault()

    //grabbing the values of the input
    // const fullName = form.fullName.value
    const email     = form.email.value
    const password  = form.password.value

    emailError.textContent = ""
    passwordError.textContent = ""

    console.log( email, password)

        try {
          const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({email, password }),
            headers: { "Content-Type": "application/json" },
          });
          
          console.log(response);

          const data = await response.json();
          console.log(data)

          

        //   error handling on the client side 

        if (data.error) {
          
          if (data.error.split(" ").includes("Email")) {
            emailError.textContent = data.error;
          } else {
            passwordError.textContent = data.error;
          }
        }


          if (data.user) {
            location.assign("/about");
          }
        //   if (data.user) {
        //     location.assign("/");
        //   }
        } catch (error) {
          console.log(error);
        }


      });