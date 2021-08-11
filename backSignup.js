var firebaseConfig = {
    apiKey: "AIzaSyBByeBydAHTrrqjYuEABTx_0PDUYlFJI-4",
    authDomain: "kids-7b59b.firebaseapp.com",
    databaseURL: "https://kids-7b59b-default-rtdb.firebaseio.com",
    projectId: "kids-7b59b",
    storageBucket: "kids-7b59b.appspot.com",
    messagingSenderId: "560545977153",
    appId: "1:560545977153:web:f95122c054ded1d8b107c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  document.getElementById("formSignup").addEventListener("submit",validateSignup);
  function validateSignup(evt){
    evt.preventDefault();
    var email=document.forms["formSignup"]["email"].value;
    var psw=document.forms["formSignup"]["psw"].value;
    var confirmPsw=document.forms["formSignup"]["confirmPsw"].value;
    var username=document.forms["formSignup"]["username"].value;
    if (psw != confirmPsw){
      alert("password doesn't match");
      return false;
    }else if (email == "" || psw == "" || confirmPsw == "" || username == "") {
    alert("all fields must be filled out");
    return false;
    }else{
      firebase.auth().createUserWithEmailAndPassword(email, psw)
      .then((userCredential) => {
         chrome.runtime.sendMessage({ message: 'sign_in' }, function (response) {
                if (response.message === 'success') {
                    window.location.replace('./child.html');
                }
            });
            return false;
      })
      .catch((error) =>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("oups!");
        console.log(errorCode,errorMessage);
      });
    }
  }