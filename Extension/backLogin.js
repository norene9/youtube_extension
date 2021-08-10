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
  document.getElementById("formLogin").addEventListener("submit",validateLogin);
  function validateLogin(evt) {
    evt.preventDefault();
    var user=document.forms["formLogin"]["user"].value;
    var password=document.forms["formLogin"]["password"].value;
    if (user == "" || password == "") {
    alert("user and password must be filled out");
    return false;
    }else{
      firebase.auth().signInWithEmailAndPassword(user, password)
  .then((userCredential) => {
    // Signed in
    chrome.runtime.sendMessage({ message: 'sign_in' }, function (response) {
                if (response.message === 'success') {
                    window.location.replace('./child.html');
                }
            });
            return false;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("oups!");
    console.log(errorCode,errorMessage);
  });

    };
  }


