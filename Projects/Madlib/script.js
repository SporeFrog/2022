let btn = document.querySelector(".sb-btn");
let form = document.querySelector("#myForm");

function cancelSubmit(e){
e.preventDefault();
alert("yay")
}
btn.addEventListener("click", cancelSubmit);
form.addEventListener("click", cancelSubmit);