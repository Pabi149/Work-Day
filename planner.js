var dateToday = moment();

$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
       $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    });
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
   
    
    function timeChange(){
        var currentHour = moment().hour();

        $('.time-block').each(function(){
            var idTime = parseInt($(this).attr("id"));
            if (idTime < currentHour){
                $(this).addClass("past");
            } else if (idTime === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
  timeChange();
  var timeInterval = setInterval (timeChange, 3000);
});