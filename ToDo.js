
$(document).ready(function(){    
    $("#submit").click(function(){
    if($(".txtBox").val() != "") {
        var todo =  $("<div class='todo'></div>").text($(".txtBox").val())          
        var delButton = $("<i class='far fa-trash-alt'></i>").click(function(){
            var j = $(this).parent();
            j.hide(function(){
                j.remove();  
            });                      
          });    
             
          var check = $("<i class='far fa-check-circle'></i>").click(function() {
              j = $(this).parent();
              j.show(function(){
                  $("#completed").append(j);
                  j.slideDown();
              });
          }) ;

        
        todo.append(delButton, check);
        $(".pending").append(todo);     
        $(".txtBox").val("");
        $(".txtBox").focus();
    }
    });
});