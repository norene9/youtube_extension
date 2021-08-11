  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBByeBydAHTrrqjYuEABTx_0PDUYlFJI-4",
    authDomain: "kids-7b59b.firebaseapp.com",
    projectId: "kids-7b59b",
    storageBucket: "kids-7b59b.appspot.com",
    messagingSenderId: "560545977153",
    appId: "1:560545977153:web:f95122c054ded1d8b107c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
 var database = firebase.database();
 var books = database.ref('books');
function validateForm() {
  var name = document.forms["myForm"]["fname"].value;
  var url = document.forms["myForm"]["furl"].value;
  if (name == "" || url == "") {
    alert("Name must be filled out");
    return false;
  } else {
     var data = {
  name: name,
  url : url,
  num : 0,

}
books.push(data);
  }
}
