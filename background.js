chrome.runtime.onInstalled.addListener(function(){
 alert("Merci d'avoir mis à jour ou installé l'extonsion youtube !"); 
 
});
chrome.webNavigation.onCompleted.addListener(function(){
 alert("l'extention est actif");
 
},{url :[{urlMatches:"youtube.com"}]});


let user_signed_in = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'is_user_signed_in') {
        sendResponse({
            message: 'success',
            payload: user_signed_in
        });
    } else if (request.message === 'sign_out') {
        user_signed_in = false;
        sendResponse({ message: 'success' });
    } else if (request.message === 'sign_in') {
        user_signed_in = true;
        sendResponse({ message: 'success' });
    }

    return true;
});
