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
 var reading = database.ref('reading4');
 var kids = database.ref('kids');

kids.on("value", gotDatakid);
function gotDatakid(data) {

  var kids = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(kids);
    var keykid1 = keys[3];
    // Look at each fruit object!
    var kid1 = kids[keykid1];
    document.getElementById("kid1id").innerHTML = keykid1;



  
}

books.on("value", gotData);
function gotData(data) {
  var books = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(books);
    var keybook1 = keys[0];
    var book1 = books[keybook1];
    var keybook2 = keys[1];
    var book2 = books[keybook2];
    var keybook3 = keys[2];
    var book3 = books[keybook3];
    /////
     var keybook4 = keys[3];
    var book4 = books[keybook4];
    var keybook5 = keys[4];
    var book5 = books[keybook5];
    var keybook6 = keys[5];
    var book6 = books[keybook6];
    var keybook7 = keys[6];
    var book7 = books[keybook7];
    var keybook8 = keys[7];
    var book8 = books[keybook8];
    var keybook9 = keys[8];
    var book9 = books[keybook9];
     document.getElementById("book1id").innerHTML = keybook1;
       document.getElementById("book2id").innerHTML = keybook2;
         document.getElementById("book3id").innerHTML = keybook3;
           document.getElementById("book4id").innerHTML = keybook4;
       document.getElementById("book5id").innerHTML = keybook5;
         document.getElementById("book6id").innerHTML = keybook6;
           document.getElementById("book7id").innerHTML = keybook7;
       document.getElementById("book8id").innerHTML = keybook8;
         document.getElementById("book7id").innerHTML = keybook9;
            if (book1) {   document.getElementById("btnbook1").innerHTML= '<button onclick="addbook1()">add book</button>' ;}
          if (book2) {   document.getElementById("btnbook2").innerHTML= '<button onclick="addbook2()">add book</button>' ;}
          if (book3) {  document.getElementById("btnbook3").innerHTML= '<button onclick="addbook3()">add book</button>' ;}
             if (book4) {   document.getElementById("btnbook4").innerHTML= '<button onclick="addbook4()">add book</button>' ;}
        if (book5) {     document.getElementById("btnbook5").innerHTML= '<button onclick="addbook5()">add book</button>' ;}
        if (book6) {   document.getElementById("btnbook6").innerHTML= '<button onclick="addbook6()">add book</button>' ;}
            if (book7) {    document.getElementById("btnbook7").innerHTML= '<button onclick="addbook7()">add book</button>' ;}
          if (book8) {   document.getElementById("btnbook8").innerHTML= '<button onclick="addbook8()">add book</button>' ;}
       if (book9) {    document.getElementById("btnbook9").innerHTML= '<button onclick="addbook9()">add book</button>' ;}
    document.getElementById("book1").innerHTML = book1.name;
   document.getElementById("book2").innerHTML = book2.name;
    document.getElementById("book3").innerHTML = book3.name;
        document.getElementById("book4").innerHTML = book4.name;
   document.getElementById("book5").innerHTML = book5.name;
    document.getElementById("book6").innerHTML = book6.name;
        document.getElementById("book7").innerHTML = book7.name;
   document.getElementById("book8").innerHTML = book8.name;
    document.getElementById("book9").innerHTML = book9.name;


}

function addbook1() {
   var kid1id = document.getElementById("kid1id"); 
   var book1id = document.getElementById("book1id"); 
   var book1name = document.getElementById("book1");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book1id.innerHTML,
  namebook : book1name.innerHTML,

}
reading.push(data);
    
   
}
function addbook2() {
   var kid1id = document.getElementById("kid1id"); 
   var book2id = document.getElementById("book2id"); 
   var book2name = document.getElementById("book2");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book2id.innerHTML,
  namebook : book2name.innerHTML,

}
reading.push(data);
    
   
}
function addbook3() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book3id"); 
   var book3name = document.getElementById("book3");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}
function addbook4() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book4id"); 
   var book3name = document.getElementById("book4");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}
function addbook5() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book5id"); 
   var book3name = document.getElementById("book5");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}
function addbook6() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book6id"); 
   var book3name = document.getElementById("book6");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}
function addbook7() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book7id"); 
   var book3name = document.getElementById("book7");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}
function addbook8() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book8id"); 
   var book3name = document.getElementById("book8");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}
function addbook9() {
   var kid1id = document.getElementById("kid1id"); 
   var book3id = document.getElementById("book9id"); 
   var book3name = document.getElementById("book9");  
    // Look at each fruit object!
      var data = {
  idkid: kid1id.innerHTML,
  idbook : book3id.innerHTML,
  namebook : book3name.innerHTML,

}
reading.push(data);
    
   
}








var ref = database.ref("reading4");
ref.on("value", gotDatareading);
function gotDatareading(data) {
  var kid1id = document.getElementById("kid1id"); 
  var reading = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(reading);
    var key = keys[0];
    var readingg1 = reading[key];
    var key = keys[1];
    var readingg2 = reading[key];
    var key = keys[2];
    var readingg3 = reading[key];
       var key = keys[3];
    var readingg4 = reading[key];
       var key = keys[4];
    var readingg5 = reading[key];
       var key = keys[5];
    var readingg6 = reading[key];
       var key = keys[6];
    var readingg7 = reading[key];
       var key = keys[7];
    var readingg8 = reading[key];
       var key = keys[8];
    var readingg9 = reading[key];
       var key = keys[9];
    var readingg10 = reading[key];


if (readingg1) {    if (readingg1.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading1").innerHTML = readingg1.namebook;


    } else {
       document.getElementById("bookreading1").innerHTML = 'Add book';
    }}
if (readingg2) {    if (readingg2.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading2").innerHTML = readingg2.namebook;


    } else {
       document.getElementById("bookreading2").innerHTML = 'Add book';
    }}
    if (readingg3) {    if (readingg3.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading3").innerHTML = readingg3.namebook;


    } else {
       document.getElementById("bookreading3").innerHTML = 'Add book';
    }}

    if (readingg4) {    if (readingg4.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading4").innerHTML = readingg4.namebook;


    } else {
       document.getElementById("bookreading4").innerHTML = 'Add book';
    }}
  if (readingg5) {    if (readingg5.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading5").innerHTML = readingg5.namebook;


    } else {
       document.getElementById("bookreading5").innerHTML = 'Add book';
    }}
      if (readingg6) {    if (readingg6.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading6").innerHTML = readingg6.namebook;


    } else {
       document.getElementById("bookreading6").innerHTML = 'Add book';
    }}
      if (readingg7) {    if (readingg7.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading7").innerHTML = readingg7.namebook;


    } else {
       document.getElementById("bookreading7").innerHTML = 'Add book';
    }}
  if (readingg8) {    if (readingg8.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading8").innerHTML = readingg8.namebook;


    } else {
       document.getElementById("bookreading8").innerHTML = 'Add book';
    }}
      if (readingg9) {    if (readingg9.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading9").innerHTML = readingg9.namebook;


    } else {
       document.getElementById("bookreading9").innerHTML = 'Add book';
    }}
      if (readingg10) {    if (readingg10.idkid == kid1id.innerHTML) {
   document.getElementById("bookreading10").innerHTML = readingg10.namebook;


    } else {
       document.getElementById("bookreading10").innerHTML = 'Add book';
    }}

}