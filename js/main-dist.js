$(document).ready((function(){$("A.trigger").toggle((function(){return $("DIV.box").fadeIn(),!1}),(function(){return $("DIV.box").fadeOut(),!1}))})),$((function(){$("[data-tooltip]").mousemove((function(t){$data_tooltip=$(this).attr("data-tooltip"),$(".tooltip").html($data_tooltip).css({top:t.pageY+5,left:t.pageX+5}).show()})).mouseout((function(){$(".tooltip").hide().html("").css({top:0,left:0})}))}));