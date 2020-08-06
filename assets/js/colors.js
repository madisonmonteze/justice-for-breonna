$(document).ready(function() {
    var listOfClasses = ["purple","brown","black"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length); 
    $("html").addClass(listOfClasses[randomNum]);
});