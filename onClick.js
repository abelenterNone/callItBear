$(document).ready(function(){
  $(".quiz").mouseenter(function(){
    $(".bgr").css("width", "200px");
    $(".bgr").text(" testing your knowledge ");
  });
  $(".quiz").mouseleave(function(){
    $(".bgr").css("width", "0px");
    $(".bgr").text("quiz");
  });
  $(".flc").mouseenter(function(){
    $(".bgr1").css("width", "200px");
    $(".bgr1").text(" Fun fact about bear you dont know");
  });
  $(".flc").mouseleave(function(){
    $(".bgr1").css("width", "0px");
    $(".bgr1").text("flash card");
  });
  $(".lbr").mouseenter(function(){
    $(".bgr2").css("width", "200px");
    $(".bgr2").text("a bit of competition");
  });
  $(".lbr").mouseleave(function(){
    $(".bgr2").css("width", "0px");
    $(".bgr2").text("rank");
  });
  $(".arg").mouseenter(function(){
    $(".bgr3").css("width", "200px");
    $(".bgr3").text("high quality graphic picture");
  });
  $(".arg").mouseleave(function(){
    $(".bgr3").css("width", "0px");
    $(".bgr3").text("photo collection");
  });
});
 