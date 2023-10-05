import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

import {
  doc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  // apiKey: "AIzaSyCcYRfJBHpKg9mG3EJp6urawO5OlhPHoIs",
  // authDomain: "soo-test-15c67.firebaseapp.com",
  // projectId: "soo-test-15c67",
  // storageBucket: "soo-test-15c67.appspot.com",
  // messagingSenderId: "239246841609",
  // appId: "1:239246841609:web:0ade4f7652e36060eba5d8",
  // measurementId: "G-7BLCRSRLW5",
  apiKey: "AIzaSyBv1pzj-eVAsCap6_XVd3WpTydkWuEsZOY",
  authDomain: "ejoo-a1fd7.firebaseapp.com",
  projectId: "ejoo-a1fd7",
  storageBucket: "ejoo-a1fd7.appspot.com",
  messagingSenderId: "982632789909",
  appId: "1:982632789909:web:40149b8fa66ce19b1c289c"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#writeFrm").submit(async function (e) {
  e.preventDefault();
  //저장한 시간 가져오기.
  let now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let when = `${year}.${month}.${date}  ${hours}:${minutes}`;
  console.log(when);

  let writeTitle = $("#writeTitle").val();
  let writeText = $("#writeText").val();
  let writeName = $("#writeName").val();

  console.log(writeTitle, writeName, writeText);
  let docs = {
    writeTitle: writeTitle,
    writeText: writeText,
    writeName: writeName,
    when: when,
  };
  console.log(docs)
  let add = addDoc(collection(db, "board"), docs);
  // add.setData({
  //   'id': add.id
  // }).then(()=> console.log('set완료'))
  // // .catch(error=> console.log('에러'))
  await add;
  alert("저장 완료!");

  window.location.href = 'board_view.html';

});
