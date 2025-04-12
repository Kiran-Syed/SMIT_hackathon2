
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBT7wdiPm6rZ12Sbj3OqcTUKdjvLUuTR6g",
    authDomain: "hackathon-43e86.firebaseapp.com",
    projectId: "hackathon-43e86",
    storageBucket: "hackathon-43e86.firebasestorage.app",
    messagingSenderId: "603840353808",
    appId: "1:603840353808:web:986ef30ff6bdc5cf679c95"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service

const button = document.getElementById('button')

button.addEventListener("click", function(event){
    event.preventDefault()
const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

const auth = getAuth(app);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Successfully Signup");
    console.log("success", user);
    
    window.location.href="../login/index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    console.log("error",errorMessage)
    // ..
  });
})

