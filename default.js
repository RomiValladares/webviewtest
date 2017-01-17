var globalVar= "papas";
$( document ).ready(function() {
    alert("JS loaded");
});

function callMe(){
	alert("callMe called");
}

function displayVar(){
	alert("globalVar="+globalVar);
}