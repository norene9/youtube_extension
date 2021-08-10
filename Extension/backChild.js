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
  document.getElementById("signOut").addEventListener("submit",signedOut);
  function signedOut(evt){
   evt.preventDefault();
   firebase.auth().signOut().then(() => {
   console.log("signed out !!");
   chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {
        if (response.message === 'success') {
            window.location.replace('./login.html');
        }
    });
}).catch((error) => {
  // An error happened.
  console.log("oups !!")
});
  }