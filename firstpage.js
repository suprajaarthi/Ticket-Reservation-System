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


document.getElementById('from-select').addEventListener('change', (event) => {
  const selectedOption = event.target.value;
	// const database = firebase.database();
	const selectedOptionRef = database.ref('selectedOption');

selectedOptionRef.set(selectedOption)
  .then(() => console.log('Selected option stored in Firebase'))
  .catch((error) => console.error(error));
});
const selectedOptionRef = database.ref('selectedOption');


document.getElementById('to-select').addEventListener('change', (event) => {
  const selectedOption1 = event.target.value;
  // const database = firebase.database();
  const selectedOptionRef = database.ref('selectedOption');

selectedOptionRef.set(selectedOption1)
  .then(() => console.log('Selected option stored in Firebase'))
  .catch((error) => console.error(error));
});
const selectedOptionRef = database.ref('selectedOption1');


document.getElementById('time-select').addEventListener('change', (event) => {
  const selectedOption2 = event.target.value;
  // const database = firebase.database();
  const selectedOptionRef = database.ref('selectedOption');

selectedOptionRef.set(selectedOption2)
  .then(() => console.log('Selected option stored in Firebase'))
  .catch((error) => console.error(error));
});
const selectedOptionRef = database.ref('selectedOption2');




selectedOptionRef.on('value', (snapshot) => {
  const selectedOption = snapshot.val();
  const selectedOption1 = snapshot.val();const selectedOption3 = snapshot.val();
  const selectedOptionParagraph = document.getElementById('selected-option');
  selectedOptionParagraph.textContent = selectedOption;
});

