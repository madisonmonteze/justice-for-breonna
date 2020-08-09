$(document).ready(function() {
    var listOfClasses = ["lavender","coffee","black"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length); 
    $("html").addClass(listOfClasses[randomNum]);
});