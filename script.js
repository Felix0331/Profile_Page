function changeName(id){
    document.getElementById(id).innerText="Jane Doe";
}

//adding and removing people from requests

var pendingRequestNum = 2;
var currentConnections = 450;
document.getElementById("connect-number").innerText = currentConnections;
document.getElementById("req-number").innerText=pendingRequestNum;

function increaseFriends(request){
    pendingRequestNum--;
    currentConnections++;
    document.getElementById("connect-number").innerText = currentConnections;
    document.getElementById("req-number").innerText=pendingRequestNum;  
    document.getElementById(request).remove();
}

function keepFriendsSame(request){
    document.getElementById(request).remove();
    pendingRequestNum--;
    document.getElementById("req-number").innerText=pendingRequestNum;  

}


