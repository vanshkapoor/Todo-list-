//check off the selected ones
//since li is fixed in start so we add listner to entire ul
//and li inside means that li inside ul is selected
$("ul").on("click","li", function(){
	
	$(this).toggleClass("completed");
     });


//delete through x


$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});


//input

$("input[type='text']").keypress(function(event){
if(event.which === 13)
{
	//getting the value enterd in the input 
  var todotext = $(this).val();
  $(this).val("");
   //create new li
   $("ul").append("<li><span><i class='fas fa-trash-alt'> </i> </span>" + todotext + "</li>")
}

})

$(".fa-angle-double-down").click(function(){
        $("input[type='text']").fadeToggle();	
})