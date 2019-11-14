$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$("#button").click(function(){
    let inputText = $("input").val();
    
     let finalResult= "";
     let anything= $(".input").val();
     let arr = anything.split(" ")
     arr.forEach(function(word){
        var first= word.charAt(0);
        var result= word.substr(1);
        result= result + first + "ay"
        finalResult = finalResult + " " + result; 
     });


    $(".output").text(finalResult);
});
    




});
