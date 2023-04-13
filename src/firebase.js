
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBcScTqyg37FtcupowWNS2iT47XQAkRAQs",
	authDomain: "linkedin-clone-ab1c2.firebaseapp.com",
	projectId: "linkedin-clone-ab1c2",
	storageBucket: "linkedin-clone-ab1c2.appspot.com",
	messagingSenderId: "467526877702",
	appId: "1:467526877702:web:efa53873750436ba7f7987",
	measurementId: "G-KYJ2J6R407"
};

// const firebaseConfig = {
// 	apiKey: "AIzaSyCLkEHHKAGZsqBscG17JHMLse1xodiV8qU",
// 	authDomain: "linkedin-clone-main-46c40.firebaseapp.com",
// 	projectId: "linkedin-clone-main-46c40",
// 	storageBucket: "linkedin-clone-main-46c40.appspot.com",
// 	messagingSenderId: "850428377591",
// 	appId: "1:850428377591:web:8d84b0aa1303f8f43696f2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = initializeFirestore(app, {
// 	cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// 	synchronizeTabs: true,
// 	ignoreUndefinedProperties: true
// })

export const auth = getAuth(app);

export const db = getFirestore(app);

