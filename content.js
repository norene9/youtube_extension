


console.log("chrome extension ready to go")


chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,senResponse){
	console.log(typeof(message.tx))
	
	 let t=message.tx
	
	let msg1={
		time:message.tx
	
	}
	console.log(t)
	chrome.runtime.sendMessage({msg1});
		
	}
  
  	  
    	
    	 //window .location.reload();
    	
       
       

    