function greeting(){
  let adjective1 = document.getElementById("adjective1").value;
  let noun1 = document.getElementById("noun1").value;
  let pNoun1 = document.getElementById("pNoun1").value;
  let person1 = document.getElementById("person1").value;
  let adjective2 = document.getElementById("adjective2").value;
  let noun2 = document.getElementById("noun2").value;
  let madlibText = 
  `<p>
There are many ${adjective1} ways to choose a/n ${noun1} to read. First, you could ask for recommendations from you friends and ${pNoun1}. Just don't ask Aunt ${person1} -- she only reads ${adjective2} books with ${noun2}-ripping goddeses on the cover.
  </p>`;
  document.querySelector(".text").innerHTML = madlibText;

}