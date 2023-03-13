  var config = {
    apiKey: "AIzaSyB5gBoIMUbaDn2Glw-s5SRuTFoZ3zhz8AQ",
    authDomain: "form-91821.firebaseapp.com",
    databaseURL: "https://form-91821-default-rtdb.firebaseio.com",
    projectId: "form-91821",
    storageBucket: "form-91821.appspot.com",
    messagingSenderId: "908992252495",
    appId: "1:908992252495:web:b331a9f3f4f0dc1f14f83a",
    measurementId: "G-LSYVY3HSKV"
  };
firebase.initializeApp(config);
var database = firebase.database();


const paragraph = document.querySelector('p');

firebase.database().ref('users').on('child_added', (snapshot) => {
  const values = snapshot.val();

  // paragraph.textContent += `${values.dropdown1} - ${values.dropdown2} - ${values.dropdown3}\n`;
});


var form = document.getElementById('my-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var name  = form.elements['name'].value;
  var phone = form.elements['phone'].value;
  var email = form.elements['email'].value;
  var adhar = form.elements['adhar'].value;

  const dropdown1 = document.querySelector('#dropdown1');
  const dropdown2 = document.querySelector('#dropdown2');
  const dropdown3 = document.querySelector('#dropdown3');

  var passenger = document.getElementById("passenger").value;
  var price     = document.getElementById("price").value;
  
 
 console.log(passenger);
  location.href = "availabletrain.html";
  // Store the form data in Firebase
  database.ref('users').push({
    name: name,
    phone : phone,
    email: email,
    adhar : adhar,
    price : price,
    passenger : passenger,
    dropdown1: dropdown1.value,
    dropdown2: dropdown2.value,
    dropdown3: dropdown3.value


  });
});
