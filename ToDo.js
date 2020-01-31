$(document).ready(function(){    
    $(document).bind('keypress', function(e){
        if(e.keyCode==13){
            $("#submit").trigger('click'); 
        }
    });               
    $("#submit").click(function submitBtn(){
    if($(".txtBox").val() != "") {
        var todo =  $("<div class='todo'></div>").text($(".txtBox").val())         
            var delButton = $("<i class='far fa-trash-alt'></i>").click(function(){
                var j = $(this).parent();
                j.hide(function(){
                    j.remove();  
                });                      
              });    
                 
              var check = $("<i class='far fa-check-circle'></i>").click(function(){
                  j = $(this).parent();
                  j.show(function(){
                      $("#completed").append(j);
                      j.slideDown();
                  });
              });
    
              var edit = $("<i class='fas fa-pencil-alt'></li>").click(function(){
                $(this).parent().attr('contenteditable','true');
                todo.focus();
              });
    
              var uncheck = $("<i class='fas fa-angle-up'></i>").click(function(){
                j = $(this).parent();
                j.show(function(){
                    $(".pending").append(j);
                    j.slideDown();
                });
              });                                      
    
            
            todo.append(delButton, check, edit, uncheck);
            $(".pending").append(todo);     
            $(".txtBox").val("");
            $(".txtBox").focus();                                      
        
        };
    });
});
    
    
        
         

         
       

 
