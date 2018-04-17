// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6m5m7OygVVfE5hsmXzZOF5IzXKkn13k0",
    authDomain: "walking-dead-8b192.firebaseapp.com",
    databaseURL: "https://walking-dead-8b192.firebaseio.com",
    projectId: "walking-dead-8b192",
    storageBucket: "walking-dead-8b192.appspot.com",
    messagingSenderId: "960435348122"
};

firebase.initializeApp(config);

// Initialize Database
let db = firebase.database();
let personnages = db.ref('perso');

console.log(personnages);

personnages.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData);
        document.getElementById('listPerso').innerHTML += '<li>' + childData.name +'</li>';
    });
});

function writeUserData(Name) {
    db.ref('perso/' + name).push({
        name: Name,
    });
}

function addOnFirebase() {
    let name = document.getElementById("namePerso").value;
    writeUserData(name);
    window.location.reload();
}