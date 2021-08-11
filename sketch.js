function setup(){
	noCanvas();
	
	let bt=document.getElementById('button').addEventListener('click',changeText)
   
   /*let userinput=select('#time');*/


/*userinput.input(changeText);*/

function changeText(){
	var hours=select('#h')
var minutes=select('#m')
var seconds=select('#s')
 console.log(hours.value())
 console.log(minutes.value())
console.log(seconds.value())
console.log('sketchhhhhhh')

	/*let unit=select('#unit')*/
	hours=hours.value()*3600000
	minutes=minutes.value()*60000
	seconds=seconds.value()*1000
	let userinput=hours+minutes+seconds
	let params={
		active:true,
		currentWindow:true
	}
	chrome.tabs.query(params,gotTab);
	function gotTab(tabs){

	//let message=userinput.value();

	
	let msg={
		tx:userinput
		
	}
	chrome.tabs.sendMessage(tabs[0].id,msg);
	

	}

}



}
