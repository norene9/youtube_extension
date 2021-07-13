console.log("bg running");

var condition=false
var t=''
chrome.runtime.onMessage.addListener(function(msg,sender) {

	//get content scripts tab id
//alert(msg.time)
 t=msg.msg1.time
console.log(msg.msg1.time)
call()
 
})

function call(){
	
				window.setInterval(function(){
					console.log(t*60000)
		console.log('hi im the condition function'+' '+condition)
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

let id=tab1.id
console.log(tab1.url)
if(tab1.url.includes('youtube')){
    
     chrome.tabs.remove(id)

}

  
  });
}

},1000)
	
/*chrome.tabs.onUpdated.addListener(
function ( tabId, changeInfo, tab )
{
    if ( changeInfo.status === "complete" )
    {
chrome.tabs.getSelected(null, function(tab1){
//DO WHATEVER YOU WANT BETWEEN HERE,
var id=tab1.id
//alert(tab1)

	
	if(tab1.url.toString().includes('https://www.youtube.com/')){
		chrome.tabs.remove(tab1.id)
	}
//AND HERE.
})
        
        //chrome.tabs.remove(tabId)
    }
}
);*/