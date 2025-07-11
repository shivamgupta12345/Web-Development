let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function(){
// console.log("button was clicked");
// }

// btn.onclick = function(){
//     alert("button was clicked");
// }

function sayhello(){
    alert("button was clicked");
}
btn.onclick = sayhello;
