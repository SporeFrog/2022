function greeting(){
  let adjective1 = document.getElementById("adjective1").value;
  let noun1 = document.getElementById("noun1").value;
  let pNoun1 = document.getElementById("pNoun1").value;
  let person1 = document.getElementById("person1").value;
  let adjective2 = document.getElementById("adjective2").value;
  let noun2 = document.getElementById("noun2").value;
  let madlibText = 
  `<p>
There are many <span class = "userInput">${adjective1}</span> ways to choose a/n <span class = "userInput">${noun1}</span> to read. First, you could ask for recommendations from your friends and <span class = "userInput">${pNoun1}</span>. Just don't ask Aunt <span class = "userInput">${person1}</span> -- she only reads <span class = "userInput">${adjective2}</span> books with <span class = "userInput">${noun2}</span>-ripping goddeses on the cover.
  </p>`;
  document.querySelector(".text").innerHTML = madlibText;

}