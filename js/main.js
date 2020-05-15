$(document).ready(function() { 
    $("A.trigger").toggle(function() { 
      $("DIV.box").fadeIn();
      return false;
    },  
    function() { 
      $("DIV.box").fadeOut();
      return false;
    });
  });

  $(function(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $(".tooltip").html($data_tooltip)
            .css({ 
              "top" : eventObject.pageY + 5,
              "left" : eventObject.pageX + 5
            })
            .show();
        }).mouseout(function () {
          $(".tooltip").hide()
            .html("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
});