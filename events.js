var articleEl = document.getElementsByClassName("article-section");
var outputText = document.getElementById("output-target");
function clickEvent (event) {
	var elementText = event.target.innerHTML;
 	outputText.innerHTML = "You clicked on the " + elementText + " section";
 	if(elementText === "Introduction") {
 		var boldSection = document.getElementById("bold-section")
	 boldSection.addEventListener("click", function() {
 	boldSection.innweHTML.classList.toggle("bold-section");
 })
 		elementText.classList.toggle("bold-section")
 	}

 	console.log("elementText", elementText );
 }

 for (var i = 0; i < articleEl.length; i++) {
 	articleEl.item(i).addEventListener("click", clickEvent);
 	
 }
 var pageTitle = document.getElementById("page-title");

 function mouseOverEvent(){
 	outputText.innerHTML = "You moved your mouse over the header";
 }

 function mouseOutEvent(){
 	outputText.innerHTML = "You left me";
 }

 pageTitle.addEventListener("mouseover", mouseOverEvent)
 pageTitle.addEventListener("mouseout", mouseOutEvent)

 var inputFieldEl = document.getElementById("keypress-input");
  inputFieldEl.addEventListener("keypress", function(event) {
  	console.log("event", event );
  	outputText.innerHTML = event.target.value
  });

 var gpig = document.getElementById("guinea-pig");
 document.getElementById("add-color").addEventListener("click", function(){
 	 gpig.classList.toggle("blue");
 })

document.getElementById("make-large").addEventListener("click", function() {
	gpig.classList.toggle("larger");
})

document.getElementById("add-border").addEventListener("click", function() {
	gpig.classList.toggle("border-add");
})

document.getElementById("add-rounding").addEventListener("click", function() {
	gpig.classList.toggle("border-rounded");
})

// var boldSection = document.getElementById("bold-section")
// boldSection.addEventListener("click", function() {
// 	boldSection.innweHTML.classList.toggle("bold-section");
// })