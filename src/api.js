
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

/*
export async function loginUser(creds) {
    console.log('hello loginuser, api')
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}*/

export async function loginUser(creds) {
    try {
        //console.log('loginUser function is running with credentials:', creds);

        const q = query(collection(db, "user"), where("email", "==", creds.email), where("password", "==", creds.password));
        const snapshot = await getDocs(q);

        //console.log('Query executed, snapshot received:', snapshot);
        /*
        if (snapshot.empty) {
            console.log('No user found with the provided credentials');
            //return new Response(401, {}, { message: "No user with those credentials found!" })

            throw {
                message: "No user with those credentials found!",
                statusText: "Unauthorized",
                status: 401
            };
        }
        */
        const userDoc = snapshot.docs[0];
        //console.log('User found:', userDoc.data());
        /*
        return {
            ...userDoc.data(),
            id: userDoc.id
        };*/
        return {
            user: {
                email: userDoc.data().email,
                name: userDoc.data().name,
                id: userDoc.id
            },
            token: "Enjoy your pizza, here's your tokens."
        }
    } catch (error) {
        //console.error('Error during login:', error.message);
        throw {
            message: "No user with those credentials found!",
            statusText: "Unauthorized",
            status: 401
        };
    }
}

/*
export async function loginUser(creds) {
    try {
        console.log('loginUser function is running with credentials:', creds);

        const q = query(collection(db, "users"), where("email", "==", creds.email), where("password", "==", creds.password));
        const snapshot = await getDocs(q);

        console.log('Query executed, snapshot received:', snapshot);

        if (snapshot.empty) {
            console.log('No user found with the provided credentials');

            // Simulating the 401 response like in your MirageJS server
            return new Response(401, {}, { message: "No user with those credentials found!" });
        }

        const userDoc = snapshot.docs[0];
        const userData = userDoc.data();

        // Mimic behavior: remove password before returning the user object
        console.log('User found:', userData);
        userData.password = undefined; // Remove password before returning

        // Return user info and token, similar to how MirageJS did
        return {
            user: {
                ...userData,
                id: userDoc.id
            },
            token: "Enjoy your pizza, here's your tokens."
        };
    } catch (error) {
        console.error('Error during login:', error.message);

        // Throw an error similar to how it was handled in MirageJS
        throw {
            message: error.message || "Failed to log in",
            statusText: error.statusText || "Error",
            status: error.status || 500
        };
    }
}
*/