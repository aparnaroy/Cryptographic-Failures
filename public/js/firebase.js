// Check if Firebase app is already initialized
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBX-_wi1E2Tixv_rgSnW8NvcGUkmNpaD9U",
        authDomain: "sleuthy-sloth.firebaseapp.com",
        databaseURL: "https://sleuthy-sloth-default-rtdb.firebaseio.com",
        projectId: "sleuthy-sloth",
        storageBucket: "sleuthy-sloth.firebasestorage.app",
        messagingSenderId: "840453497728",
        appId: "1:840453497728:web:920b663a9a346840f71765",
        measurementId: "G-SG8S13W5RK"
    };

    // Initialize Firebase only if it's not already initialized
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
