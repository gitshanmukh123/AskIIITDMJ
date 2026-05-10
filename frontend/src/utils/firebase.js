import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'crop-38fc3.firebaseapp.com',
  projectId: 'crop-38fc3',
  storageBucket: 'crop-38fc3.firebasestorage.app',
  messagingSenderId: '416242623276',
  appId: '1:416242623276:web:fa8f397e807e7d7c798289',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { app, auth, provider }

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyClhkb475vQHPtv2gOCqaah3bIKp60ImDk",
//   authDomain: "camper-1dcb1.firebaseapp.com",
//   projectId: "camper-1dcb1",
//   storageBucket: "camper-1dcb1.firebasestorage.app",
//   messagingSenderId: "1021736922118",
//   appId: "1:1021736922118:web:8d1e51a5943a8512b3e787",
//   measurementId: "G-2JF5T7Z92M"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);