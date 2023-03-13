  var firebaseConfig = {
    apiKey: "AIzaSyB5gBoIMUbaDn2Glw-s5SRuTFoZ3zhz8AQ",
    authDomain: "form-91821.firebaseapp.com",
    databaseURL: "https://form-91821-default-rtdb.firebaseio.com",
    projectId: "form-91821",
    storageBucket: "form-91821.appspot.com",
    messagingSenderId: "908992252495",
    appId: "1:908992252495:web:b331a9f3f4f0dc1f14f83a",
    measurementId: "G-LSYVY3HSKV"
  };
firebase.initializeApp(firebaseConfig);
var database = firebase.database();



	var form = document.getElementById('my-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var name = form.elements['name'].value;
  var phone = form.elements['phone'].value;
  var email = form.elements['email'].value;
  var adhar = form.elements['adhar'].value;


  // Store the form data in Firebase
  database.ref('users').push({
    name: name,
    phone : phone,
    email: email,
    adhar : adhar

  });
});