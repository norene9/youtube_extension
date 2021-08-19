$(function() {

  'use strict';

  $('.js-menu-toggle').click(function(e) {

  	var $this = $(this);

  	

  	if ( $('body').hasClass('show-sidebar') ) {
  		$('body').removeClass('show-sidebar');
  		$this.removeClass('active');
  	} else {
  		$('body').addClass('show-sidebar');	
  		$this.addClass('active');
  	}

  	e.preventDefault();

  });

  // click outisde offcanvas
	$(document).mouseup(function(e) {
    var container = $(".sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-sidebar') ) {
				$('body').removeClass('show-sidebar');
				$('body').find('.js-menu-toggle').removeClass('active');
			}
    }
	}); 

    

});

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

document.getElementById("signOut").addEventListener("submit",signedOut);
  function signedOut(evt){
   evt.preventDefault();
   firebase.auth().signOut().then(() => {
   console.log("signed out !!");
   chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {
        if (response.message === 'success') {
            window.close("index.html");
												Storage.clear();
        }
    });
}).catch((error) => {
  // An error happened.
  console.log("oups !!")
});
  }
