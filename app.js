import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebaseConf.js";
const inputAndDrop = document.getElementById('inputAndDrop');
const homeSignUp = document.getElementById('homeSignUp');
const dropDownSignUp = document.getElementById('dropDownSignUp');
window.signUpHandler = async () => {
  console.log('chl rha hn');
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      if (user) {
        swal("Great job!", "Sign Up successfull!", "success");

      let text =  `
          <button class="btn btn-secondary btn-sm dropdown-toggle" id='signUpDropdownBtn' type="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${email.slice(0,1).toUpperCase()}${email.slice(1, 5).toLowerCase()}
          </button>
          <ul class="dropdown-menu" id='dropdownlist'>
            <li>Profile</li>
            <li>LogOut</li>
          </ul>
        `;
        dropDownSignUp.innerHTML = text
        homeSignUp.style.display = 'none'
      }
      // ...
      console.log(user, "===>> user");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
      // ..
    });
}

// LogIn Handler

window.logInHandler = async () => {
  const email = document.getElementById('email2').value;
  const password = document.getElementById('password2').value;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        swal("Great job!", "Log In successfull!", "success");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
const places = document.querySelectorAll('.places');
console.log(places);
places.forEach((place) => {
  console.log(place);
  place.addEventListener('click', function (e) {
    console.log(e.currentTarget.innerText);
    if (e.currentTarget.innerText == 'Islamabad') {
      window.location.href = '../Loader/index.html'
    }
    else if (e.currentTarget.innerText == 'Karachi') {
      window.location.href = '../Karachi/index.html'
    }
  })
})

