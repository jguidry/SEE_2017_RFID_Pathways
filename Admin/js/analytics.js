function drop1(){
  // document.getElementById("drop1").classList.toggle("show");
  if( $(".analytics-link1").css('visibility') == 'hidden') {
  $('.analytics-link1').css('visibility', 'visible');
}
else {
    $('.analytics-link1').css('visibility', 'hidden');
}


}

function drop2(){

  if( $(".analytics-link2").css('visibility') == 'hidden') {
  $('.analytics-link2').css('visibility', 'visible');
  }
  else {
    $('.analytics-link2').css('visibility', 'hidden');
  }
}


$(document).ready(()=>{

  $(".analytics-link1").click((e)=>{
    var id = e.target.id;
    var texts = document.getElementById(id).innerHTML
    $("#dropbtn1").text(texts);
      $('.analytics-link1').css('visibility', 'hidden');
      $("#info1").hide();
      $("#info2").hide();
      $("#info1").slideDown();
      $("#info2").slideDown();

  });

  $(".analytics-link2").click((e)=>{
      var id = e.target.id;
    var texts = document.getElementById(id).innerHTML
    $("#dropbtn2").text(texts);
      $('.analytics-link2').css('visibility', 'hidden');
      $("#info3").hide();
      $("#info4").hide();
      $("#info3").slideDown();
      $("#info4").slideDown();

  });
});
