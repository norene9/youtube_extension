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
  console.log("bg running");
var condition=false
var t=9000000000000000;
var currentUrl='';
getTime();
function getTime(){
  
  chrome.storage.local.get(/* String or Array */["time"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    if(chrome.runtime.lastError)
    {
      chrome.storage.local.set({ "time": 6000 }, function(){
        //  Data's been saved boys and girls, go on home
        console.log('Value is set to ' + t);
        
    });

        return;
    }
    console.log(items.time)
    t=items.time;
      
    call();  
     
  });
}
	
document.getElementById("time").addEventListener("submit",validateSignup);
function validateSignup(evt){
  evt.preventDefault();
  var hours=document.forms["time"]["h"].value;
  var minutes=document.forms["time"]["m"].value;
  var seconds=document.forms["time"]["s"].value;
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  hours=hours*3600000
	minutes=minutes*60000
	seconds=seconds*1000
	let userinput=hours+minutes+seconds ;
 
  t=userinput;
  console.log('ubiput')
  console.log(t)
  chrome.storage.local.set({ "time": t }, function(){
    //  Data's been saved boys and girls, go on home
    console.log('Value is set to ' + t);
    getTime();
});


 
}
window.setInterval(function(){
  chrome.tabs.getSelected(null, function(tab1){
    if(tab1.url.indexOf('youtube.com')>-1){
      currentUrl=tab1.url; 
      //chrome.tabs.remove(id)
    }
  });

},1000)



	function call(){
    window.setInterval(function(){
      console.log(t*60000)

if(condition==false){
condition=true
}else{
condition=false
}
},t)
  }
			
	

	
	


window.setInterval(function(){

	console.log('hi im the blocking function'+' '+condition)

if(condition){
	
	chrome.tabs.getSelected(null, function(tab1){
//DO WHATEVER YOU WANT BETWEEN HERE,
var blockUrl = chrome.runtime.getURL("pdfviewer/index.html") ;

let id=tab1.id

if(tab1.url.includes('youtube')){
  chrome.tabs.update(id, { url: blockUrl }); 
  //chrome.tabs.remove(id)
}

  
  });
}
else{
  chrome.tabs.getSelected(null, function(tab1){
    if(tab1.url.includes('chrome-extension')){
      console.log(currentUrl)
      
      chrome.tabs.update(tab1.id, { url: currentUrl });
     
      //chrome.tabs.remove(id)
    }
   
   
   
     
       
       });
  
}

},1000)
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