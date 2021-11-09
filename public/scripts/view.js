// import { getFirestore,collection,doc,getDoc,addDoc,connectFirestoreEmulator,Timestamp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { collection, getDocs,getFirestore,connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
// const registerName = document.getElementById("name");
// const registerAmount = document.getElementById("amount");
const table = document.getElementById( 'output' );

const db = getFirestore();
// エミュレーター向けの設定
// connectFirestoreEmulator(db, 'localhost', 8080);


async function reference(){
  const querySnapshot = await getDocs(collection(db, "amounts"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    const row = document.createElement("tr");
    const celName = document.createElement("td");
    const celAmount = document.createElement("td");
    const celNameText = document.createTextNode(doc.data().name);
    const celAmountText = document.createTextNode(doc.data().amount);
    celName.appendChild(celNameText);
    celAmount.appendChild(celAmountText);
    row.appendChild(celName);
    row.appendChild(celAmount);
    table.appendChild(row);
  });
}

reference();

// 関数を呼び出せるようにする
// window.btnAdd = btnAdd;
// export{btnAdd};

