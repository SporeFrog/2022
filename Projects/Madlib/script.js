function greeting(){
  let username = document.getElementById("nameField").value;
  let greeting = `Hello ${username}`;
  let greetingText = `<p>${greeting}</p>`;
  document.querySelector(".greeting").innerHTML = greetingText;

}