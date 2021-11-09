import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyADfucU_Y0fYfwvuMwP2RqsXcbMk3hzgzU",
    authDomain: "receipt-ad625.firebaseapp.com",
    databaseURL: "https://receipt-ad625-default-rtdb.firebaseio.com",
    projectId: "receipt-ad625",
    storageBucket: "receipt-ad625.appspot.com",
    messagingSenderId: "253771694183",
    appId: "1:253771694183:web:c17453c4eb7cbd08e6d4c2",
    measurementId: "G-GR8WJJ46YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
