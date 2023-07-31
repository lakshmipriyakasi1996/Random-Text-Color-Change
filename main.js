$(document).ready(function () {
    $("#btn").click(function () { 
     $("h1").each(function (indexInArray, valueOfElement) { 
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
      $(valueOfElement).css('color','#' + randomColor );   

     });
    });
 });