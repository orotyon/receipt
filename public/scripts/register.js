// import { getFirestore,collection,doc,getDoc,addDoc,connectFirestoreEmulator,Timestamp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { getFirestore,collection, addDoc,connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
const registerName = document.getElementById("name");
const registerAmount = document.getElementById("amount");

const db = getFirestore();
// エミュレーター向けの設定
connectFirestoreEmulator(db, 'localhost', 8080);

async function btnAdd(){
// Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "amounts"), {
        name: registerName.value,
        amount: registerAmount.value
    });
    console.log("Document written with ID: ", docRef.id);

}

// 関数を呼び出せるようにする
window.btnAdd = btnAdd;
export{btnAdd};

