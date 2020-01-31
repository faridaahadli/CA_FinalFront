$(document).ready(function(){
    // $('.preloader').fadeOut('slow');
    checkScreen()
    $(".brg_com").click(function () {
        $("#nav_menuRes").toggleClass("afterClick");

    })
    checkPosition()
    $(window).scroll(function(){
     
        checkPosition()
      })
      $(".inputIcon input").focus(function(){
          $(this).parent().next().children().css({
              "width":"100%",
              "background":"linear-gradient(to right, #e55d87, #5fc3e4)",
              "transition":"all 0.5s linear" 
          })
          $(this).parent().children('i').css({
            "color":"#9733EE",
        })
        $(this).parent().children('i').removeClass("fas fa-lock")
            $(this).parent().children('i').addClass("fas fa-lock-open ")

      })
      $(".inputIcon input").blur(function(){
          if(!$(this).val()){
            $(this).parent().next().children().css({
                "width":"0%",
                "transition":"all 0.5s linear" 
            })
            $(this).parent().children('i').css({
                "color":"#adadad",
            })
            $(this).parent().children('i').removeClass("fas fa-lock-open")
            $(this).parent().children('i').addClass("fas fa-lock")
          }
        
    })
      
    // Password char check
    $(".btn_regfrm").click(function(){
        checkChar($("input[type=password]"))
        checkEmail($("#email"))
    })
})
$(window).on('resize', function () {
    checkScreen()
   
})

// For Nav Layout
function checkScreen() {
    if (window.innerWidth >= 768) {
        
        $("#nav_menu").addClass("d-flex justify-content-around");
        $("#nav_menu").removeClass("d-none");
        $(".srchNorm").removeClass("d-none");
        $("#nav_menuRes").removeClass("d-block");
        $("#nav_menuRes").addClass("d-none");
        $("#burger_menu").html(" ")
    }
    else {
        $("#nav_menu").removeClass("d-flex justify-content-around");
        $("#nav_menu").addClass("d-none");
        $(".srchNorm").addClass("d-none");
        $("#nav_menuRes").removeClass("d-none");
        $("#burger_menu").html("<i class='fas fa-mountain'></i>")
    }
}

function checkPosition(){
    if($(window).scrollTop()>80){
        $("#navigation").addClass("p_fix")
    }
    else{
        $("#navigation").removeClass("p_fix")
    }
}

// Password char check
 function checkChar(input){
     let regEx=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
if(regEx.test(input.val()))
    alert("Okay")
else
  alert("Error")
 }

//  Function Cehck Email
 function checkEmail(input){
    var reg = RegExp(/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/)
    if (!reg.test(input.val())) {
        alert("You must enter valid email address")
    
      }
 }