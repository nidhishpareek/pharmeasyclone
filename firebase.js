const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCwYt2o7ksVdrtrio6rPG-t78wcAWozhhc",
  authDomain: "pharmeasyclone-b6b6a.firebaseapp.com",
  projectId: "pharmeasyclone-b6b6a",
  storageBucket: "pharmeasyclone-b6b6a.appspot.com",
  messagingSenderId: "85053673489",
  appId: "1:85053673489:web:602bf9c1352835aac421b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// exporting firebase app
module.exports = app;
module.exports = { auth };

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("abcdefghijklmnopqrstuvwxy-1234567890abcd"),
  isTokenAutoRefreshEnabled: true,
});
