
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"


const firebaseConfig = {
    apiKey: "AIzaSyB-2GLUO8XrNnsi3sxW3LQGqL3dvrbuv1M",
    authDomain: "hobbylife-7170e.firebaseapp.com",
    projectId: "hobbylife-7170e",
    storageBucket: "hobbylife-7170e.appspot.com",
    messagingSenderId: "497025191196",
    appId: "1:497025191196:web:7fffad375a1dc1e8057ed9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const hobbiesCollectionRef = collection(db, "hobbies")



export async function getHobbies() {
    try {
        //throw new Error("Simulated error fetching data");
        const snapshot = await getDocs(hobbiesCollectionRef)
        const hobbies = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        return hobbies

    } catch (error) {
        // Create a new Error object and attach additional properties
        const customError = new Error("Failed to fetch hobbies")
        customError.statusText = error.message
        customError.status = error.code || error.name || "Unknown Error"

        throw customError // Throwing an Error object complies with ESLint
    }
}


export async function getHobby(id) {
    try {
        const docRef = doc(db, "hobbies", id);
        const snapshot = await getDoc(docRef);

        return {
            ...snapshot.data(),
            id: snapshot.id
        };
    } catch (error) {
        // Create a new Error object and attach additional properties
        const customError = new Error("Failed to fetch hobby");
        customError.statusText = error.message;
        customError.status = error.code || error.name || "Unknown Error";

        throw customError; // Throwing an Error object complies with ESLint
    }
}

/*
export async function getHobby(id) {
    const docRef = doc(db, "hobbies", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}
*/
export async function getTeacherHobbies() {
    try {
        const q = query(hobbiesCollectionRef, where("hostId", "==", "123"));
        const snapshot = await getDocs(q);
        const hobbies = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        return hobbies;
    } catch (error) {
        // Create a new Error object and attach additional properties
        const customError = new Error("Failed to fetch hobbies");
        customError.statusText = error.message;
        customError.status = error.code || error.name || "Unknown Error";

        throw customError; // Throwing an Error object complies with ESLint
    }
}

/*
export async function getTeacherHobbies() {
    const q = query(hobbiesCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const hobbies = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return hobbies
}
*/
/*
export async function getTeacherHobbies(id) {
    const url = id ? `/api/teacher/hobbies/${id}` : "/api/teacher/hobbies"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch hobbies",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.hobbies
}
*/

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data
}