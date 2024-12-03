import { auth, database } from './firebase.js';

async function checkCredentials(email, password) {
    try {
        // Get the 'users' node from the database
        const usersSnapshot = await database.ref('users').once('value');
        const users = usersSnapshot.val();
        
        // Check each user to see if email and password match
        for (const userKey in users) {
            const user = users[userKey];
            if (user.email === email && user.password === password) {
                return userKey;
            }
        }

        return null;
    } catch (error) {
        console.error("Error checking credentials:", error);
        return null;
    }
}

async function displayFlag() {
    try {
        // Get the flag from the database
        const flagSnapshot = await database.ref('flag').once('value');
        const flag = flagSnapshot.val();
        return flag;
    } catch (error) {
        console.error("Error fetching flag:", error);
        return null;
    }
}

document.getElementById('loginButton').addEventListener('click', async (event) => {
    event.preventDefault();

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!email || !password) {
        document.getElementById('errorMessage').textContent = 'Please enter both email and password.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Check if the email and password match any user in the database
    const userKey = await checkCredentials(email, password);

    // Log in the user if the email and password match a user in the database
    if (userKey) {
        try {
            // Use Firebase Email Auth to log in the user
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
    
            // Check to see who the logged in user is
            const adminSnapshot = await database.ref('users/admin/email').once('value');
            const adminEmail = adminSnapshot.val();
    
            const heading = document.querySelector('h1');
            const errorMessage = document.getElementById('errorMessage');
            const statusMessage = document.getElementById('statusMessage');
            const introText = document.querySelector('p');
            const loginForm = document.querySelector('form');
            const img = document.querySelector('img');
    
            introText.style.display = 'none';
            loginForm.style.display = 'none';
            errorMessage.style.display = 'none';
    
            if (user.email === adminEmail) {
                // Admin message
                const flag = await displayFlag();
                heading.textContent = `Welcome Admin Sloth!`;
                statusMessage.innerHTML = `Login successful! Here's your secret message: <b>${flag}</b>`;
                img.src = `./happy-sloth.jpg`;
            } else {
                // Normal message
                heading.textContent = `Welcome Employee Sloth!`;
                statusMessage.textContent = `Login successful! But no secret message for you lowly employee.`;
                img.src = `./sad-sloth.jpg`;
            }
    
            statusMessage.style.display = 'block';
        } catch (error) {
            document.getElementById('errorMessage').textContent = 'Invalid email or password';
            document.getElementById('errorMessage').style.display = 'block';
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid email or password';
        document.getElementById('errorMessage').style.display = 'block';
    }
});
