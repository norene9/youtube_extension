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
  document.getElementById('dashboard').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('index.html'));
    }
});
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

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      //console.log(user);
    }else{
      console.log('cheppi');
    }
  });

  var kids = document.getElementById("kids");

function renderkid(data){
  let div = document.createElement('div');
  div.setAttribute("class","item");

  var img = document.createElement("img");
  if (data.sexe == "girl"){
    img.src = "images/kid1.png";
  }else{
    img.src = "images/kid2.png";
  }
  img.setAttribute("class","image")

  var p = document.createElement('p');
  p.textContent =data.name;
  p.setAttribute("class","kidsName");

  div.appendChild(img); 
  div.appendChild(p);

 kids.appendChild(div);
}

var database = firebase.database().ref('kids');
database.on('value', (snapshot) => {
  const data = snapshot.val();
  for (var key in data){
    //console.log(data[key].id);
    renderkid(data[key]);
  }
});


