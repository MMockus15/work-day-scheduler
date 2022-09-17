var saveBtnEl = $(".saveBtn");


// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// add save button and when clicked on the text for that event is saved in local storage
saveBtnEl.on("click", function() {

	var time = $(this).siblings(".hour").text();
	var plan = $(this).siblings(".plan").val();	
	
	// save to local storage 
	localStorage.setItem(time, plan);
});


// color code timeblocks / past present and future
function timeBlockColors() {
	
	$(".time-block").each(function () {
		var timeBlock = $(this).attr("id");
	
	var currentHour = moment().hour();
	if(timeBlock > currentHour) {
		$(this).addClass("future");
	} else if (currentHour == timeBlock) {
		$(this).addClass("present");
	}else {
		$(this).addClass("past");
	}
})};


$('#9 textarea').val(localStorage.getItem('9AM'));
$('#10 textarea').val(localStorage.getItem('10AM'));
$('#11 textarea').val(localStorage.getItem('11AM'));
$('#12 textarea').val(localStorage.getItem('12PM'));
$('#13 textarea').val(localStorage.getItem('1PM'));
$('#14 textarea').val(localStorage.getItem('2PM'));
$('#15 textarea').val(localStorage.getItem('3PM'));
$('#16 textarea').val(localStorage.getItem('4PM'));
$('#17 textarea').val(localStorage.getItem('5PM'));


timeBlockColors();
