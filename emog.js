//const changeFace = document.getElementById('face');
const emoges = ["😊","😂","🤣","❤","😍","😒",
"👌","😁","😉","😎","😜","😃","🤞",
"😉","😆","🤔","😋","😘","🥱","😫","😪","😯",
"🤐","😴","😌","😛","🤨","😮"];

const face = document.querySelector("#face");
const changeButton = document.getElementById("button") ;

//hangeFace.innerHTML = "hello";
//buto.innerHTML = "hello";
changeButton.addEventListener("click", () => {
    let round = Math.floor(Math.random() * emoges.length);
    let result = emoges[round];
    face.innerHTML = result;
});

