// document.getElementById('hider').onclick = function () {
//     document.getElementById('text').hidden = true;
// }



function handler() {
    console.log(1);
}

button.addEventListener("click", () => console.log("1"));

button.removeEventListener("click", () => console.log("1"));

button.onclick = () => console.log(2);