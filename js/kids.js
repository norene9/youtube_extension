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
  var uid = localStorage.getItem("uid");
 var database = firebase.database();
 var kids = database.ref('kids');
function validateForm() {
  var name = document.forms["myForm"]["fname"].value;
  var age = document.forms["myForm"]["fage"].value;
  if (name == "" || age == "") {
    alert("Name must be filled out");
    return false;
  } else {
     var data = {
  name: name,
  age : age,
  uid : uid,
}
kids.push(data);
  }
}


var ref = database.ref("kids");
ref.on("value", gotData);
function gotData(data) {
  var kids = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(kids);
    var keykid1 = keys[0];
    // Look at each fruit object!
    var kid1 = kids[keykid1];
    var keykid2 = keys[1];
    // Look at each fruit object!
    var kid2 = kids[keykid2];
    var keykid3 = keys[2];
    // Look at each fruit object!
    var kid3 = kids[keykid3];
    /////////////
      var keykid4 = keys[3];
    // Look at each fruit object!
    var kid4 = kids[keykid4];
    var keykid5 = keys[4];
    // Look at each fruit object!
    var kid5 = kids[keykid5];
    document.getElementById("kid1id").innerHTML = keykid1;
      document.getElementById("kid2id").innerHTML = keykid2;
        document.getElementById("kid3id").innerHTML = keykid3;
             document.getElementById("kid4id").innerHTML = keykid4;
        document.getElementById("kid5id").innerHTML = keykid5;
   if (kid1) { document.getElementById("btnkid1").innerHTML = '<form action="kid1.html"> <button >Books</button> </form>';}
    if ( kid2) { document.getElementById("btnkid2").innerHTML = '<form action="kid2.html"> <button >Books</button> </form>';}
   if ( kid3) {document.getElementById("btnkid3").innerHTML = '<form action="kid3.html"> <button >Books</button> </form>';}
   if ( kid4) {document.getElementById("btnkid4").innerHTML = '<form action="kid4.html"> <button >Books</button> </form>';}
   if ( kid5) {document.getElementById("btnkid5").innerHTML = '<form action="kid5.html"> <button >Books</button> </form>';}
    document.getElementById("kid1").innerHTML = kid1.name;
   document.getElementById("kid2").innerHTML = kid2.name;
    document.getElementById("kid3").innerHTML = kid3.name;
       document.getElementById("kid4").innerHTML = kid4.name;
    document.getElementById("kid5").innerHTML = kid5.name;


};
