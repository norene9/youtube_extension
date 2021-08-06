chrome.runtime.onInstalled.addListener(function(){
 alert("Merci d'avoir mis à jour ou installé l'extonsion youtube !"); 
});
chrome.webNavigation.onCompleted.addListener(function(){
 alert("l'extention est actif");
},{url :[{urlMatches:"youtube.com"}]});