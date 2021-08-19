document.getElementById("time").addEventListener("submit",timeSubmission);
function timeSubmission(evt){
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
    
});


 
}