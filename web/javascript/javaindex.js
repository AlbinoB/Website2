firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
		// User is signed in.
		window.location.href="..\index.html";
	  } else {
		// No user is signed in.
		window.alert("not signed in yet!!");
	  }
	});
	

function login(){
	var email=document.getElementById("email").value;
	var pass=document.getElementById("password").value;
	
	var email=document.getElementById("email").value;
	var pass=document.getElementById("password").value;
	
	
	firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(errorMessage);
  // ...
});
}