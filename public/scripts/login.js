import { getAuth, signInWithPopup, GoogleAuthProvider , getRedirectResult , signOut  } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
const provider = new GoogleAuthProvider();
const auth = getAuth();

const hedderLogin = document.getElementById("login");
const hedderLogout = document.getElementById("logout");
const hedderUserPhoto = document.getElementById("userPhoto");
const hedderUserName = document.getElementById("userName");

// ログアウト処理
function logout(){
    signOut(auth).then(() => {
        // authStateObserverで処理する
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('logout failed:' + errorCode + ':' + errorMessage);
        });
}

// ログイン処理
function login(){
    signInWithPopup(auth, provider)
    .then(() => {
        // authStateObserverで処理する
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('login failed:' + errorCode + ':' + errorMessage);
    // ヘッダーのログインボタンの処理
    displayLogout();
    });
}

/**
 * 認証状態変更のリスナー登録
 */
function initFirebaseAuth() {
    // Listen to auth state changes.
    auth.onAuthStateChanged(authStateObserver,authStateObserverError);
}
/**
 * 認証状態が変更された時の処理
 * @param {*} user 
 */
function authStateObserver(user){
    console.log('AuthStateChanged');
    if (user != null){
        displayLogin(user);
    }
    else{
        displayLogout();
    }
}
function authStateObserverError(error){
    console.error('authStateObserverError happned');
    console.error('authStateObserverError:' + error.code + ':' + error.message);
}


/**
 * ヘッダーをログイン状態に変更する。
 * @param {user} user firebaseの認証ユーザー
 */
function displayLogin(user){
    hedderLogin.style.display='none';
    hedderLogout.style.display='flex';
    hedderUserPhoto.src=user.photoURL;
    hedderUserName.innerText=user.displayName;
}
/**
 * ヘッダーをログアウト状態に変更する。
 */
function displayLogout(){
    hedderLogin.style.display='inline';
    hedderLogout.style.display='none';
}

// 初期処理
initFirebaseAuth();

// 関数を呼び出せるようにする
window.login = login;
window.logout = logout;
export{login,logout};

