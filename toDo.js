//First Version

// $("li").click(function(){
//   console.log($(this).css("color"));
//   if($(this).css("color") === "rgb(128, 128, 128)"){
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   } else {
//   $(this).css({
//     color: "grey",
//     textDecoration: "line-through"
//     });
//   };
// });


//=Reformat

 $("ul").on("click", "li", (function(){
   $(this).toggleClass("completed");
 }));


$("ul").on("click", "span", (function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
}));

$("input[type='text']").keypress(function(){
  if(event.which === 13){
    //get info from input element
    var todoText = $(this).val();
    $(this).val("");
    console.log(todoText);
    //add todo to ul
    $("ul").append("<li>" + "<span id='liSpan'>" + " <i class='fas fa-trash-alt'></i> " + "</span>" + todoText + "</li>");
    $("ul").clear
  }
});

$(".toggle").on("click", (function(){
  $("input[type='text']").fadeToggle();
}));

//font awesome doesn't work with the newer versions.  The on hover breaks and needs to be replaced with another tag wraped around the i tag. This messed up the normal span tags from working though
